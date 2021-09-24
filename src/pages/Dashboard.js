import React, { useState, useEffect, useRef } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { Span } from "../components/Span";
import { Toast } from "../components/Toast";

import {
  CardContent,
  CardHorizontal,
  CardHorizontalTransparent,
} from "../components/Card";
import { Search } from "../components/Search";
import * as Constants from "../utils/Constants";
import * as ObjectGenerator from "../utils/ObjectGenerator";
import { Chart } from "../components/Chart";
import { Input } from "../components/Input";
import { AccordionTab } from "primereact/accordion";
import { Accordion } from "../components/Accordion";

const Dashboard = (props) => {
  const [searchedStocks, setSearchedStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockChartData, setStockChartData] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [portfolioDraftList, setPortfolioDraftList] = useState([]);
  const [walletBalance, setWalletBalance] = useState(1000.0);
  const [selectedStockInfo, setSelectedStockInfo] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [showTodaysPortfolio, setShowTodaysPortfolio] = useState(false);
  const [
    selectedStockCalculatedTotal,
    setSelectedStockCalculatedTotal,
  ] = useState(0);

  const toast = useRef(null);

  useEffect(() => {
    setSearchedStocks(Constants.STOCKS_RESPONSE.response.result);
  }, []);

  let content = [
    { title: "", content: "Apple(AAPL)" },
    { title: "Bought At", content: "150.00 INR" },
    { title: "Units", content: "10.0" },
    { title: "Total", content: "1500.00 INR" },
  ];

  let accordionData = [];

  const AccordionData = () => {
    accordionData = [];
    content.forEach((lineItem) => {
      accordionData.push(
        <P>
          <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
            {lineItem.title}
          </Span>{" "}
          {lineItem.content}
        </P>
      );
    });

    const accordionHeader = (
      <CardHorizontalTransparent>{accordionData}</CardHorizontalTransparent>
    );
    const accordionContent = (
      <CardHorizontal m={2}>{accordionData}</CardHorizontal>
    );

    return (
      <Container pb={3}>
        <Accordion activeIndex={0}>
          <AccordionTab header="Header I" headerTemplate={accordionHeader}>
            {accordionContent}
            {accordionContent}
            {accordionContent}
            {accordionContent}
            {accordionContent}
            {accordionContent}
          </AccordionTab>
        </Accordion>
      </Container>
    );
  };

  const handleSearchStock = (event) => {
    setTimeout(() => {
      let _filteredStocks;
      if (!event.query.trim().length) {
        _filteredStocks = [...searchedStocks];
      } else {
        _filteredStocks = searchedStocks.filter((stock) => {
          return stock.description
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredStocks(_filteredStocks);
    }, 250);
  };

  const handleSelectStock = (event) => {
    const selectedStockObj = event.value;
    setSelectedStock(selectedStockObj);
    if (selectedStockObj.displaySymbol !== undefined) {
      // Chart API comes here
      setStockChartData(
        ObjectGenerator.GenerateStockGraphDataObj(
          selectedStockObj.displaySymbol,
          Constants.STOCK_CHART_RESPONSE.response.c
        )
      );
      setShowChart(true);
      // Get Current chart info API comes here
      setSelectedStockInfo(Constants.CURRENT_STOCK_INFO_RESPONSE);
    }
  };

  const handleNumberOfStocksInput = (event) => {
    const quantity = event.target.value.replace(/\D/, "");
    setSelectedQuantity(quantity);
    setSelectedStockCalculatedTotal(
      parseFloat(quantity * selectedStockInfo.response.c).toFixed(2)
    );
  };

  const handleAddStocksToPortfolioDraft = (event) => {
    if (walletBalance - selectedStockCalculatedTotal < 0) {
      toast.current.show({
        severity: "error",
        summary: "Balance Insufficient",
        detail: "Purchase exceeds wallet balance",
        life: 3000,
      });
      return;
    }

    const portfolioDraftObj = {};
    portfolioDraftObj.stockName =
      selectedStock.description + " (" + selectedStock.displaySymbol + ")";
    portfolioDraftObj.symbol = selectedStock.symbol;
    portfolioDraftObj.description = selectedStock.description;
    portfolioDraftObj.boughtAt = selectedStockInfo.response.c;
    portfolioDraftObj.units = selectedQuantity;
    portfolioDraftObj.total = selectedStockCalculatedTotal;

    const currentBalance = walletBalance - selectedStockCalculatedTotal;
    setWalletBalance(parseFloat(currentBalance).toFixed(2));
    const currentPortfolioDraftList = portfolioDraftList;
    currentPortfolioDraftList.push(portfolioDraftObj);
    setPortfolioDraftList(currentPortfolioDraftList);
    // resetDashboard();
  };

  const resetDashboard = () => {
    setShowChart(false);
    setSelectedStock(null);
    setStockChartData(null);
    setSelectedStockInfo(null);
    setSelectedQuantity(0);
  };

  const handleSubmitPortfolio = (event) => {
    let requestObj = {};
    let payload = [];
    for (let i = 0; i < portfolioDraftList.length; i++) {
      let data = {};
      let portfolioDraftObj = portfolioDraftList[i];
      data.stock_name = portfolioDraftObj.description;
      data.stock_symbol = portfolioDraftObj.symbol;
      data.quantity = portfolioDraftObj.units;
      data.order_price = portfolioDraftObj.boughtAt;
      data.investment = portfolioDraftObj.total;
      payload.push(data);
    }
    requestObj.data = payload;
    console.log("req => ", requestObj);
    // Create portfolio API call here

    // If success, show success toaster, reset page & show today's portfolio
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Your Portfolio has been created",
      life: 3000,
    });

    setShowTodaysPortfolio(true);
    setPortfolioDraftList([]);
  };

  return (
    <Container flexRow minHeight={"80vh"}>
      <Div width={[1, 2 / 3, 3 / 4, 4 / 5]} p={3}>
        <Search
          autoFocus={true}
          value={selectedStock}
          suggestions={filteredStocks}
          completeMethod={handleSearchStock}
          field="description"
          placeholder="Search Stocks"
          onChange={(e) => handleSelectStock(e)}
        />
        <CardContent mt={4}>
          {showChart ? (
            <Chart options={stockChartData} />
          ) : (
            <P>Find stocks in the search bar and add them to your portfolio</P>
          )}
        </CardContent>
        {showChart ? (
          <CardContent mt={4}>
            <CardHorizontalTransparent>
              <P>
                {selectedStock.description} ({selectedStock.displaySymbol})
              </P>
              <P>
                <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                  Current Price
                </Span>{" "}
                {selectedStockInfo.response.c}
              </P>
              <P>
                <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                  Wallet Balance
                </Span>{" "}
                {walletBalance}
              </P>
              <P>
                <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                  Total
                </Span>{" "}
                {selectedStockCalculatedTotal}
              </P>
            </CardHorizontalTransparent>
            <CardHorizontalTransparent>
              <Input
                width={"200px"}
                placeholder={"Enter Quantity"}
                value={selectedQuantity}
                onChange={(e) => handleNumberOfStocksInput(e)}
              />
              <ButtonSecondary
                width={"200px"}
                label="Add Stocks"
                disabled={selectedStockCalculatedTotal <= 0}
                onClick={(e) => handleAddStocksToPortfolioDraft(e)}
              />
            </CardHorizontalTransparent>
          </CardContent>
        ) : null}
        {showTodaysPortfolio ? (
          <CardContent mt={4}>
            <P>Today's Portfolio</P>
            <AccordionData />
          </CardContent>
        ) : null}
      </Div>

      <Div width={[1, 1 / 3, 1 / 4, 1 / 5]} p={3}>
        <CardHorizontal flexCenter p={2}>
          <Span color="title" fontSize={"var(--fs-h3)"}>
            Portfolio Draft
          </Span>
        </CardHorizontal>
        {portfolioDraftList.reverse().map((portfolioDraftObj, index) => {
          return (
            <CardContent mt={3} key={index}>
              <P>{portfolioDraftObj.stockName}</P>
              <P>
                <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                  Bought At
                </Span>{" "}
                {portfolioDraftObj.boughtAt}
              </P>
              <P>
                <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                  Units
                </Span>{" "}
                {portfolioDraftObj.units}
              </P>
              <P>
                <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                  Total
                </Span>{" "}
                {portfolioDraftObj.total}
              </P>
            </CardContent>
          );
        })}
        {portfolioDraftList.length > 0 ? (
          <ButtonSecondary
            onClick={(e) => handleSubmitPortfolio(e)}
            width={"100%"}
            p={3}
            mt={3}
            mb={3}
            label="ADD TO PORTFOLIO"
          />
        ) : null}
      </Div>
      <Toast ref={toast} />
    </Container>
  );
};

export default Dashboard;

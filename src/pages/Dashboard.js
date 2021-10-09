import React, { useState, useEffect, useRef } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { Span } from "../components/Span";
import { Toast } from "../components/Toast";
import { Column, Table } from "../components/Table";
import request from "../utils/Interceptor";
import { CardContent, CardHorizontal } from "../components/Card";
import { Search } from "../components/Search";
import * as ObjectGenerator from "../utils/ObjectGenerator";
import * as CommonUtils from "../utils/CommonUtils";
import { Chart } from "../components/Chart";
import { Input } from "../components/Input";
import Icon from "../components/Icon";
import { close } from "../components/IconFonts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyDashoardDetails,
  updateMyportfolio,
  fetchLiveStockPrice,
  fetchWalletUpdate,
} from "../store/actions/dashboardAction";
import moment from "moment";
import { LogError } from "../utils/SentryUtils";

const Dashboard = () => {
  const [filteredStocks, setFilteredStocks] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockChartData, setStockChartData] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [showStockData, setStockData] = useState(false);
  const [portfolioDraftList, setPortfolioDraftList] = useState([]);
  const [walletBalance, setWalletBalance] = useState(1000.0);
  const [selectedStockInfo, setSelectedStockInfo] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [showTodaysPortfolio, setShowTodaysPortfolio] = useState(true);
  const [isMarketOpen, setMarketOpen] = useState(true);
  const { wallet_balance } = useSelector((state) => state.auth.user);
  const [
    selectedStockCalculatedTotal,
    setSelectedStockCalculatedTotal,
  ] = useState(0);
  const todaysPortfolioList =
    useSelector((state) => state.dashboard.myCurrentPortfolio) || [];
  const { user } = useSelector((state) => state.auth);

  const toast = useRef(null);
  const dispatch = useDispatch();

  /**
   * @description - callback is triggered whenever wallet balance changes
   * @returns {void}
   */
  useEffect(() => {
    setWalletBalance(wallet_balance);
  }, [wallet_balance]);

  /**
   * @description - callback is triggered whenever component DidMount or will Unmount
   *                to check if market is open, if yes trigger liveStocks Data polling
   *                and to fetch dashboard data
   * @returns {void}
   */
  useEffect(() => {
    let pollingTimer = {};
    const currentTime = moment().format("H");
    const day = moment().format("d");
    if (currentTime >= 13 && currentTime < 20 && day > 0 && day < 6) {
      // or trues Added to enable demo cuz market will be close
      setMarketOpen(true);
      pollingTimer = setInterval(() => {
        dispatch(fetchLiveStockPrice());
      }, 1000 * 10 * 2);
      dispatch(fetchLiveStockPrice());
    }
    // else {
    //   setMarketOpen(false);
    // }
    dispatch(fetchWalletUpdate());
    dispatch(fetchMyDashoardDetails());
    return () => {
      clearInterval(pollingTimer);
    };
  }, [dispatch]);

  const stocksBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Stock</Span>
        <P m={0}>{rowData.stock_name}</P>
        <Span color="yellow">{rowData.stock_symbol}</Span>
      </>
    );
  };

  const boughtAtBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Bought At</Span>
        {rowData.order_price ? rowData.order_price : "-"}
      </>
    );
  };

  const currentPriceBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Current Price</Span>
        {rowData.current_price ? rowData.current_price.toFixed(2) : "-"}
      </>
    );
  };

  const changeBodyTemplate = (rowData) => {
    const { order_price, current_price } = rowData;
    const decideColor = current_price > order_price ? "green" : "red";
    const sign = order_price > current_price ? "" : "+";
    return (
      <>
        <Span className="p-column-title">Change</Span>
        <Span color={decideColor}>
          {rowData.change ? sign + (rowData.change * 100).toFixed(2) : "-"}
        </Span>
      </>
    );
  };

  const mySharesBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">My Shares</Span>
        {rowData.quantity}
      </>
    );
  };

  const earningsBodyTemplate = (rowData) => {
    const { order_price, current_price } = rowData;
    const decideColor = current_price > order_price ? "green" : "red";
    const sign = order_price > current_price ? "" : "+";
    return (
      <>
        <Span className="p-column-title">Earnings</Span>
        <Span color={decideColor}>
          {rowData.earnings ? sign + rowData.earnings.toFixed(2) : "-"}
        </Span>
      </>
    );
  };

  const investmentBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Total Investment</Span>
        {rowData.investment}
      </>
    );
  };

  /**
   * @param {any} e
   * @description - callback is triggered whenever user searches for stock
   * @returns {any}
   */
  const handleStockSearch = (e) => {
    setShowChart(false);
    setShowTodaysPortfolio(false);
    setStockData(false);
    request
      .get(`/api/stocks/search?name=${e.query}`)
      .then((res) => {
        setFilteredStocks(res.data.response.result);
      })
      .catch((err) => LogError(err));
  };

  /**
   * @param {any} event
   * @returns {any} void
   * @description - callback is triggered on stock selection from autocomplete dropdown
   */
  const handleStockSelection = (event) => {
    const selectedStockObj = event.value;
    setSelectedStock(selectedStockObj);
    if (selectedStockObj.displaySymbol !== undefined) {
      request
        .get(
          `/api/stocks/getLiveStockInfo?name=${selectedStockObj.displaySymbol}`
        )
        .then((res) => {
          setSelectedStockInfo(res.data);
          setStockData(true);
        })
        .catch((err) => {
          toast.current.show({
            severity: "error",
            summary: "Stock Unlisted from Market",
            detail: "Please choose another stock",
            life: 3000,
          });
          setStockData(false);
          LogError(err);
        });

      request
        .get(
          `/api/stocks/getStockDetails?name=${selectedStockObj.displaySymbol}`
        )
        .then((res) => {
          if (!res.data.response.error && res.data.response.s === "ok")
            setStockChartData(
              ObjectGenerator.GenerateStockGraphDataObj(
                selectedStockObj.displaySymbol,
                CommonUtils.ConvertChartData(res.data.response)
              )
            );
          setShowChart(true);
        })
        .catch(() => {
          toast.current.show({
            severity: "error",
            summary: "Chart not available",
            detail: "Stock data unavailable",
            life: 3000,
          });
          setShowChart(false);
        });
    }
  };

  /**
   * @param {any} event
   * @description - callback is triggered to do total calculations when quanity is input
   * @returns {any}
   */
  const handleOfStocksInput = (event) => {
    const quantity = event.target.value.replace(/\D/, "");
    setSelectedQuantity(quantity);
    setSelectedStockCalculatedTotal(
      parseFloat(quantity * selectedStockInfo.response.c).toFixed(2)
    );
  };

  /**
   * @description - callback is triggered to check if user have sufficient wallet balance to add for portfolio
   * @returns {any}
   */
  const handleAddStocksToPortfolioDraft = () => {
    if (selectedStockCalculatedTotal <= 0) {
      toast.current.show({
        severity: "error",
        summary: "Quantity missing",
        detail: "Please enter the quantity of Stock",
        life: 3000,
      });
      return;
    } else if (walletBalance - selectedStockCalculatedTotal < 0) {
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
    portfolioDraftObj.open = selectedStockInfo.response.o;
    portfolioDraftObj.units = selectedQuantity;
    portfolioDraftObj.total = selectedStockCalculatedTotal;

    const currentBalance = walletBalance - selectedStockCalculatedTotal;
    setWalletBalance(parseFloat(currentBalance).toFixed(2));
    const currentPortfolioDraftList = portfolioDraftList;
    currentPortfolioDraftList.push(portfolioDraftObj);
    setPortfolioDraftList(currentPortfolioDraftList);
    setSelectedQuantity(0);
    setSelectedStockCalculatedTotal(0);
  };

  const handleRemoveStocksFromPortfolioDraft = (index) => {
    const modifiedPortfolioDraftList = portfolioDraftList.filter(
      (el, i) => i !== index
    );
    setPortfolioDraftList(modifiedPortfolioDraftList);
  };

  /**
   * 描述
   * @date 2021-10-09
   * @description - callback is triggered to dispatch the portfoio draft to backend so that
   *                it can be added to your portfolio list
   * @returns {any}
   */
  const handleSubmitPortfolio = () => {
    let requestObj = {};
    let payload = [];
    for (let i = 0; i < portfolioDraftList.length; i++) {
      let data = {};
      let portfolioDraftObj = portfolioDraftList[i];
      data.stock_name = portfolioDraftObj.description;
      data.stock_symbol = portfolioDraftObj.symbol;
      data.quantity = portfolioDraftObj.units;
      data.order_price = portfolioDraftObj.boughtAt;
      data.current_price = portfolioDraftObj.boughtAt;
      data.open = portfolioDraftObj.open;
      data.investment = portfolioDraftObj.total;
      payload.push(data);
    }
    requestObj.data = payload;
    // Create portfolio API call here
    dispatch(updateMyportfolio(requestObj));
    // If success, show success toaster, reset page & show today's portfolio
    toast.current.show({
      severity: "success",
      summary: "success",
      detail: "The selected Stocks have been added to your Portfolio",
      life: 3000,
    });

    setTimeout(() => {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "For Demo purposes we will close your trade in 1min.",
        life: 3000,
      });
    }, 4000);
    setPortfolioDraftList([]);
    setShowTodaysPortfolio(true);
  };
  return (
    <Container flexRow minHeight={"80vh"}>
      <Div width={["100%", "100%", "100%", "75%"]} p={3}>
        <Search
          autoFocus={true}
          value={selectedStock}
          suggestions={filteredStocks}
          completeMethod={handleStockSearch}
          field="description"
          placeholder="Search Stocks"
          onChange={(e) => handleStockSelection(e)}
        />
        {showChart && (
          <CardContent mt={4} flexCenter>
            <Chart options={stockChartData} />
          </CardContent>
        )}
        {!showChart && !showStockData && (
          <CardContent mt={4} flexCenter>
            <P>
              Welcome to DreamStock,{" "}
              {user && user.first_name ? user.first_name : "User"}
              {". "}Find stocks in the search bar and add them to your
              Portfolio.
            </P>
          </CardContent>
        )}
        {showStockData ? (
          <CardContent mt={4}>
            <Div flexRow>
              <Div width={[1, 1, 1 / 2]}>
                <Div flexRow width={[1, 1, 1 / 2]}>
                  <P ml={2}>
                    {selectedStock?.description} ({selectedStock?.displaySymbol}
                    )
                  </P>
                  <P ml={2}>
                    <Span fontWeight={"light"}>Current Price</Span>{" "}
                    {selectedStockInfo?.response?.c}
                  </P>
                </Div>
                <Div flexRow width={[1, 1, 1 / 2]}>
                  <P ml={2}>
                    <Span fontWeight={"light"}>Wallet Balance</Span>{" "}
                    {walletBalance}
                  </P>
                  <P ml={2}>
                    <Span fontWeight={"light"}>Total</Span>{" "}
                    {selectedStockCalculatedTotal}
                  </P>
                </Div>
              </Div>
              <Div flexCenter width={[1, 1, 1 / 2]}>
                <Input
                  width={"200px"}
                  placeholder={"Enter Quantity"}
                  value={selectedQuantity}
                  onChange={(e) => handleOfStocksInput(e)}
                />
                <ButtonSecondary
                  mt={3}
                  // disabled={isMarketOpen}
                  width={"200px"}
                  label="Add Stocks"
                  {...(!isMarketOpen
                    ? { tooltip: "You can add stocks when market opens" }
                    : {})}
                  // disabled={selectedStockCalculatedTotal <= 0}
                  onClick={(e) => handleAddStocksToPortfolioDraft(e)}
                />
              </Div>
            </Div>
          </CardContent>
        ) : null}
        {showTodaysPortfolio ? (
          <CardContent mt={4}>
            <P>
              {moment().format("H") < 16
                ? "TODAY'S PORTFOLIO"
                : "PORTFOLIO FOR NEXT MARKET SESSION"}
            </P>
            <Div>
              <Table value={todaysPortfolioList}>
                <Column
                  field="stockName"
                  header="Stock"
                  body={stocksBodyTemplate}
                />
                <Column
                  field="boughtAt"
                  header="Bought At"
                  body={boughtAtBodyTemplate}
                />
                <Column
                  field="currentPrice"
                  header="Current Price"
                  body={currentPriceBodyTemplate}
                />
                <Column
                  field="investmentChangePercentage"
                  header="Change"
                  body={changeBodyTemplate}
                />
                <Column
                  field="investment"
                  header="My Shares"
                  body={mySharesBodyTemplate}
                />
                <Column
                  field="totalInvestment"
                  header="Investment"
                  body={investmentBodyTemplate}
                />
                <Column
                  field="investmentChange"
                  header="Earnings"
                  body={earningsBodyTemplate}
                />
              </Table>
            </Div>
          </CardContent>
        ) : null}
      </Div>

      <Div width={["100%", "100%", "100%", "25%"]} p={3}>
        <CardHorizontal flexCenter p={2}>
          <Span color="title">PORTFOLIO DRAFT</Span>
        </CardHorizontal>
        <Div>
          {portfolioDraftList.map((portfolioDraftObj, index) => {
            const { stockName, boughtAt, units, total } = portfolioDraftObj;
            return (
              <CardContent mt={3} key={index}>
                <Icon
                  name={close}
                  topright
                  size="2x"
                  onClick={() => handleRemoveStocksFromPortfolioDraft(index)}
                />
                <Div>
                  <P>{stockName}</P>
                </Div>
                <P>
                  <Span fontWeight={"light"}>Bought At</Span> {boughtAt}
                </P>
                <P>
                  <Span fontWeight={"light"}>Units</Span> {units}
                </P>
                <P>
                  <Span fontWeight={"light"}>Total</Span> {total}
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
      </Div>
      <Toast ref={toast} />
    </Container>
  );
};

export default Dashboard;

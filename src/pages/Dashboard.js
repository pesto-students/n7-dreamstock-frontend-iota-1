import React, { useState, useEffect, useRef } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { Span } from "../components/Span";
import { Toast } from "../components/Toast";
import { Column, Table } from "../components/Table";
import axios from 'axios';
import {
  CardContent,
  CardHorizontal,
} from "../components/Card";
import { Search } from "../components/Search";
import * as Constants from "../utils/Constants";
import * as ObjectGenerator from "../utils/ObjectGenerator";
import * as CommonUtils from "../utils/CommonUtils";
import { Chart } from "../components/Chart";
import { Input } from "../components/Input";
import { Icon } from "../components/Icon";
import { close } from "../components/IconFonts";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyDashoardDetails,updateMyportfolio,fetchLiveStockPrice } from '../store/actions/dashboardAction'

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
  const [showTodaysPortfolio, setShowTodaysPortfolio] = useState(true);
  const {wallet_balance}= useSelector((state)=>state.auth.user)
  const [
    selectedStockCalculatedTotal,
    setSelectedStockCalculatedTotal,
  ] = useState(0);
  const todaysPortfolioList =  useSelector((state)=>state.dashboard.myCurrentPortfolio) || []
  const liveStockData = useSelector(state=>state.dashboard.liveStockData) || {}

  useEffect(()=>{
    setWalletBalance(wallet_balance)
  },[wallet_balance])
  const toast = useRef(null);
  let pollingTimer = {}
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLiveStockPrice())
    pollingTimer = setInterval(()=>{
      dispatch(fetchLiveStockPrice())
    },1000*60*2)
    dispatch(fetchMyDashoardDetails())
    return ()=>{
      clearInterval(pollingTimer)
    }
  }, []);

  const stocksBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Stock</Span>
        <P m={0}>{rowData.stock_name}</P>
        <Span color="yellow">{rowData.stock_symbol}</Span>
      </React.Fragment>
    );
  };

  const boughtAtBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Bought At</Span>
        {rowData.order_price ? rowData.order_price : "-"}
      </React.Fragment>
    );
  };

  const currentPriceBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Current Price</Span>
        {rowData.current_price ? rowData.current_price : "-"}
      </React.Fragment>
    );
  };

  const changeBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Change</Span>
        {rowData.change ? rowData.change : "-"}
      </React.Fragment>
    );
  };

  const mySharesBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">My Shares</Span>
        {rowData.quantity}
      </React.Fragment>
    );
  };

  const earningsBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Earnings</Span>
        {rowData.investmentChange ? rowData.investmentChange : "-"}
      </React.Fragment>
    );
  };

  const investmentBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Total Investment</Span>
        {rowData.investment}
      </React.Fragment>
    );
  };

  const handleStockSearch = (e) => {
    console.log("handleStockSearch", e.query)
    axios.get(Constants.BACKEND_URL + `/api/stocks/search?name=${e.query}`)
      .then((res) => {
        setFilteredStocks(res.data.response.result)
      })
      .catch((err) => console.log('search err', err))
  }

  const handleStockSelection = (event) => {
    const selectedStockObj = event.value;
    setSelectedStock(selectedStockObj);
    if (selectedStockObj.displaySymbol !== undefined) {
      axios.get(Constants.BACKEND_URL +`/api/stocks/getLiveStockInfo?name=${selectedStockObj.displaySymbol}`)
        .then((res) => {
          setSelectedStockInfo(res.data)
          setShowChart(true);

        })
        .catch((err) => console.log('getLiveStockInfo err', err))

      axios.get(Constants.BACKEND_URL +`/api/stocks/getStockInfo?name=${selectedStockObj.displaySymbol}`)
        .then((res) => {
          setStockChartData(
            ObjectGenerator.GenerateStockGraphDataObj(
              selectedStockObj.displaySymbol,
              CommonUtils.ConvertChartData(res.data.response)
            )
          );
          setShowChart(true);
        })
        .catch((err) => console.log('getLiveStockInfo err', err))
    }
  }

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
          CommonUtils.ConvertChartData(Constants.STOCK_CHART_RESPONSE.response)
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
    // resetDashboard();
  };

  // const resetDashboard = () => {
  //   setShowChart(false);
  //   setSelectedStock(null);
  //   setStockChartData(null);
  //   setSelectedStockInfo(null);
  //   setSelectedQuantity(0);
  // };

  const handleRemoveStocksFromPortfolioDraft = (index) => {
    console.log("index => ", index);
    let modifiedPortfolioDraftList = CommonUtils.RemoveElementFromArray(
      portfolioDraftList,
      index
    );
    console.log("after remove event => ", modifiedPortfolioDraftList);
    setPortfolioDraftList(modifiedPortfolioDraftList);
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
      data.current_price = portfolioDraftObj.boughtAt;
      data.open = portfolioDraftObj.open;
      data.investment = portfolioDraftObj.total;
      payload.push(data);
    }
    requestObj.data = payload;
    // Create portfolio API call here
    dispatch(updateMyportfolio(requestObj))
    // If success, show success toaster, reset page & show today's portfolio
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Your Portfolio has been created",
      life: 3000,
    });

    // for (let i = 0; i < portfolioDraftList.length; i++) {
    //   let todaysPortfolioObj = {};
    //   let portfolioDraftObj = portfolioDraftList[i];
    //   todaysPortfolioObj.stockName = portfolioDraftObj.description;
    //   todaysPortfolioObj.description = portfolioDraftObj.description;
    //   todaysPortfolioObj.symbol = portfolioDraftObj.symbol;
    //   todaysPortfolioObj.quantity = portfolioDraftObj.units;
    //   todaysPortfolioObj.boughtAt = portfolioDraftObj.boughtAt;
    //   todaysPortfolioObj.currentPrice = 5.0 + portfolioDraftObj.boughtAt;
    //   todaysPortfolioObj.investment = portfolioDraftObj.total;
    //   todaysPortfolioObj.investmentChange = 50.55;
    //   todaysPortfolioObj.date = "1632631554809";
    //   todaysPortfolioObj.stock_name = portfolioDraftObj.description;
    //   todaysPortfolioObj.stock_symbol =  portfolioDraftObj.symbol
    //   todaysPortfolioObj.order_price = portfolioDraftObj.boughtAt
    //   todaysPortfolioObj.investmentChangePercentage = "+11%";
    //   currentPortfolioList.push(todaysPortfolioObj);
    // }
    setPortfolioDraftList([]);
    setShowTodaysPortfolio(true);
  };

  console.log('todaysPortfolioList', todaysPortfolioList, showTodaysPortfolio)
  return (
    <Container flexRow minHeight={"80vh"}>
      <Div width={["100%", "100%", "60%", "70%"]} p={3}>
        <Search
          autoFocus={true}
          value={selectedStock}
          suggestions={filteredStocks}
          completeMethod={handleStockSearch}
          field="description"
          placeholder="Search Stocks"
          onChange={(e) => handleStockSelection(e)}
        />
        <CardContent mt={4} flexCenter>
          {showChart ? (
            <Chart options={stockChartData} />
          ) : (
            <P fontSize={"var(--fs-h3)"}>
              Find stocks in the search bar and add them to your portfolio
            </P>
          )}
        </CardContent>
        {showChart ? (
          <CardContent mt={4}>
            <Div flexRow>
              <Div width={[1, 1, 1 / 2]}>
                <Div flexRow width={[1, 1, 1 / 2]}>
                  <P ml={2}>
                    {selectedStock?.description} ({selectedStock?.displaySymbol})
                  </P>
                  <P ml={2}>
                    <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                      Current Price
                    </Span>{" "}
                    {selectedStockInfo?.response?.c}
                  </P>
                </Div>
                <Div flexRow width={[1, 1, 1 / 2]}>
                  <P ml={2}>
                    <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                      Wallet Balance
                    </Span>{" "}
                    {walletBalance}
                  </P>
                  <P ml={2}>
                    <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                      Total
                    </Span>{" "}
                    {selectedStockCalculatedTotal}
                  </P>
                </Div>
              </Div>
              <Div flexCenter width={[1, 1, 1 / 2]}>
                <Input
                  width={"200px"}
                  placeholder={"Enter Quantity"}
                  value={selectedQuantity}
                  onChange={(e) => handleNumberOfStocksInput(e)}
                />
                <ButtonSecondary
                  mt={3}
                  width={"200px"}
                  label="Add Stocks"
                  disabled={selectedStockCalculatedTotal <= 0}
                  onClick={(e) => handleAddStocksToPortfolioDraft(e)}
                />
              </Div>
            </Div>
          </CardContent>
        ) : null}
        {showTodaysPortfolio ? (
          <CardContent mt={4}>
            <P fontSize={"var(--fs-h3)"}>Today's Portfolio</P>
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

      <Div width={["100%", "100%", "40%", "30%"]} p={3}>
        <CardHorizontal flexCenter p={2}>
          <Span color="title" fontSize={"var(--fs-h3)"}>
            Portfolio Draft
          </Span>
        </CardHorizontal>
        <Div>
          {portfolioDraftList.map((portfolioDraftObj, index) => {
            return (
              <CardContent mt={3} key={index}>
                <Icon
                  name={close}
                  topright
                  size="2x"
                  onClick={() => handleRemoveStocksFromPortfolioDraft(index)}
                />
                <Div>
                  <P>{portfolioDraftObj.stockName}</P>
                </Div>
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
      </Div>
      <Toast ref={toast} />
    </Container>
  );
};

export default Dashboard;

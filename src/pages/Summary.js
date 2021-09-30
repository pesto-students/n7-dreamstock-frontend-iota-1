import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { CardHorizontalTransparent } from "../components/Card";
import { AccordionTab } from "primereact/accordion";
import { Accordion } from "../components/Accordion";
import * as Constants from "../utils/Constants";
import * as CommonUtils from "../utils/CommonUtils";
import { Column, Table } from "../components/Table";
import axios from "axios";
import { useSelector } from "react-redux";

const Summary = (props) => {
  const [summaryData, setSummaryData] = useState([]);
  const liveStockData = useSelector(state=>state.dashboard.liveStockData)
  useEffect(() => {
    // Call the Summary API here and set the response data
    setSummaryData(Constants.SUMMARY_REAL_DATA.data);
    axios.get('/api/dashboard/summary')
    .then((res)=>{
      console.log('summary',res.data.finalData);
      setSummaryData(res.data.finalData)
    })
    .catch((res)=>console.log('err'))
  }, []);

  const stocksBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Stock</Span>
        {rowData.stock_name} {rowData.stock_symbol}
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
    const {order_price} = rowData;

    const change = liveStockData[rowData.stock_symbol] - order_price
    return (
      <React.Fragment>
        <Span className="p-column-title">Earnings</Span>
        {change ? change : "-"}
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

  return (
    <Container minHeight={"80vh"}>
      <Div>
        <P fontSize={"var(--fs-h2)"}>
          SUMMARY
          <Span fontSize={"var(--fs-h6)"}>
            Today / Previous Portfolio Details
          </Span>
        </P>
        <Accordion activeIndex={0}>
          {summaryData.map((summaryOfCurrentRecord, index) => {
            const accordionHeader = (
              <CardHorizontalTransparent>
                <P>
                  <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                    DATE
                  </Span>{" "}
                  {(summaryOfCurrentRecord.date)
                  }
                </P>
                <P>
                  <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                    TOTAL COST
                  </Span>{" "}
                  {summaryOfCurrentRecord.total_cost}
                </P>
                <P>
                  <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                    PROFIT
                  </Span>{" "}
                  <Span
                    color={CommonUtils.ReturnColorBasedOnProfitLoss(
                      summaryOfCurrentRecord.profit_loss
                    )}
                  >
                    {summaryOfCurrentRecord.profit_loss}
                  </Span>{" "}
                </P>
              </CardHorizontalTransparent>
            );
            return (
              <AccordionTab headerTemplate={accordionHeader} key={index}>
                <Table value={summaryOfCurrentRecord.data}>
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
              </AccordionTab>
            );
          })}
        </Accordion>
      </Div>
    </Container>
  );
};

export default Summary;

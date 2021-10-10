import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { CardHorizontalTransparent } from "../components/Card";
import { AccordionTab } from "primereact/accordion";
import { Accordion } from "../components/Accordion";
import { Column, Table } from "../components/Table";
import { fetchWalletUpdate } from "../store/actions/dashboardAction";
import request from "../utils/interceptor";
import { useDispatch } from "react-redux";
import { CardContent } from "../components/Card";
import { LogError } from "../utils/SentryUtils";

const Summary = () => {
  const [summaryData, setSummaryData] = useState([]);
  const dispatch = useDispatch();

  /**
   * @description - callback is triggered to fetch summary  data from backend
   */
  useEffect(() => {
    // Call the Summary API here and set the response data
    dispatch(fetchWalletUpdate());
    request
      .get("/api/dashboard/summary")
      .then((res) => {
        const calculatedData = res.data.finalData.map((el) => {
          const { portfolioCurrentValue, total_cost } = el;
          el["profit_loss"] = (
            ((portfolioCurrentValue - total_cost) / total_cost) *
            100
          ).toFixed(2)+" %";
          el["status"] = portfolioCurrentValue > total_cost ? "green" : "red";
          el["sign"] = portfolioCurrentValue > total_cost ? "+" : "";
          return el;
        });
        setSummaryData(calculatedData);
      })
      .catch((err) => LogError(err));
  }, [dispatch]);

  const stocksBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Stock</Span>
        {rowData.stock_name} {rowData.stock_symbol}
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
        {rowData.current_price
          ? parseFloat(rowData.current_price).toFixed(2)
          : "-"}
      </>
    );
  };

  const changeBodyTemplate = (rowData) => {
    const { order_price, current_price } = rowData;
    const decideColor = current_price > order_price ? "green" : "red";
    const sign = current_price > order_price ? "+" : "";
    return (
      <>
        <Span className="p-column-title">Change</Span>
        <Span color={decideColor}>
          {sign}
          {rowData.change ? (rowData.change * 100).toFixed(2)+" %" : "-"}
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
    const sign = current_price > order_price ? "+" : "";
    return (
      <>
        <Span className="p-column-title">Earnings</Span>
        <Span color={decideColor}>
          {sign}
          {rowData.earnings ? rowData.earnings.toFixed(2)+" INR" : "-"}
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

  const renderSummaryTable = () => {
    return (
      <Accordion activeIndex={0}>
        {summaryData.map((summaryOfCurrentRecord, index) => {
          const accordionHeader = (
            <CardHorizontalTransparent>
              <P>
                <Span fontWeight={"light"}>DATE</Span>{" "}
                {summaryOfCurrentRecord.date}
              </P>
              <P>
                <Span fontWeight={"light"}>TOTAL COST</Span>{" "}
                {summaryOfCurrentRecord.total_cost.toFixed(2) +" INR"}
              </P>
              <P>
                <Span fontWeight={"light"}>PROFIT</Span>{" "}
                <Span color={summaryOfCurrentRecord.status}>
                  {summaryOfCurrentRecord.sign}
                  {summaryOfCurrentRecord.profit_loss}
                </Span>{" "}
              </P>
            </CardHorizontalTransparent>
          );
          return renderAccordioTab(
            summaryOfCurrentRecord,
            accordionHeader,
            index
          );
        })}
      </Accordion>
    );
  };

  const renderAccordioTab = (
    summaryOfCurrentRecord,
    accordionHeader,
    index
  ) => {
    return (
      <AccordionTab headerTemplate={accordionHeader} key={index}>
        <Table value={summaryOfCurrentRecord.data}>
          <Column field="stockName" header="Stock" body={stocksBodyTemplate} />
          <Column
            field="boughtAt"
            header="Bought At"
            body={boughtAtBodyTemplate}
          />
          <Column
            field="currentPrice"
            header="Closing Price"
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
  };

  const renderMessage = () => {
    return (
      <CardContent mt={4} flexCenter>
        <P>Please go to the Dashboard and create a Portfolio</P>
      </CardContent>
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
        {summaryData.length > 0 ? renderSummaryTable() : renderMessage()}
      </Div>
    </Container>
  );
};

export default Summary;

import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { CardHorizontalTransparent } from "../components/Card";
import { AccordionTab } from "primereact/accordion";
import { Accordion } from "../components/Accordion";
import * as CommonUtils from "../utils/CommonUtils";
import { Column, Table } from "../components/Table";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  CardContent,
} from "../components/Card";
const Summary = (props) => {
  const [summaryData, setSummaryData] = useState([]);
  const liveStockData = useSelector(state => state.dashboard.liveStockData)
  useEffect(() => {
    // Call the Summary API here and set the response data
    axios.get('/api/dashboard/summary')
      .then((res) => {
        const calculatedData = res.data.finalData.map((el)=>{
          const {portfolioCurrentValue,total_cost} = el
          el['profit_loss']=((portfolioCurrentValue-total_cost)/total_cost).toFixed(2)
          el['status'] = portfolioCurrentValue>total_cost?'green':'red'
          el['sign']= portfolioCurrentValue>total_cost?'+':''
          return el
        })
        setSummaryData(calculatedData)
      })
      .catch((res) => console.log('err'))
  }, []);

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
        {rowData.current_price ? Number(rowData.current_price).toFixed(2) : "-"}
      </>
    );
  };

  const changeBodyTemplate = (rowData) => {
    const currentPrice=Number(rowData.current_price) 
    const orderPrice=Number(rowData.order_price) 
    const decideColor = currentPrice > orderPrice ? 'green' : 'red';
    const sign = orderPrice > currentPrice ?'' :'+'
    return (
      <>
        <Span className="p-column-title">Change</Span>
        <Span color={decideColor} >{sign}{rowData.change ? Number(rowData.change).toFixed(2) : "-"}</Span>
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
    const { order_price } = rowData;
    const currentPrice=Number(rowData.current_price) 
    const orderPrice=Number(rowData.order_price) 
    const decideColor = currentPrice > orderPrice ? 'green' : 'red';
    const sign = orderPrice > currentPrice ?'' :'+'
    // const change = liveStockData[rowData.stock_symbol] - order_price
    return (
      <>
        <Span className="p-column-title">Earnings</Span>
        <Span color={decideColor} >{sign}{rowData.earnings ? Number(rowData.earnings).toFixed(2) : "-"}</Span>
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
                {Number(summaryOfCurrentRecord.total_cost).toFixed(2)}
              </P>
              <P>
                <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
                  PROFIT
          </Span>{" "}
                <Span color={summaryOfCurrentRecord.status}
                >
                 {summaryOfCurrentRecord.sign}{summaryOfCurrentRecord.profit_loss}
                </Span>{" "}
              </P>
            </CardHorizontalTransparent>
          );
          return (renderAccordioTab(summaryOfCurrentRecord, accordionHeader, index));
        })}
      </Accordion>
    )
  }

  const renderAccordioTab = (summaryOfCurrentRecord, accordionHeader, index) => {
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
    )
  }

  const renderMessage = () => {
    return (
      <CardContent mt={4} flexCenter>
        <P fontSize={"var(--fs-h3)"}>Please go on Dashboard and create a portfolio</P>
      </CardContent>
    )
  }
  return (
    <Container minHeight={"80vh"}>
      <Div>
        <P fontSize={"var(--fs-h2)"}>
          SUMMARY
          <Span fontSize={"var(--fs-h6)"}>
            Today / Previous Portfolio Details
          </Span>
        </P>
        {
          summaryData.length > 0 ? renderSummaryTable() : renderMessage()
        }

      </Div>
    </Container>
  );
};

export default Summary;

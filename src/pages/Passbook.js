import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { Column, Table } from "../components/Table";
import * as CommonUtils from "../utils/CommonUtils";
import axios from "axios";
import { color } from "highcharts";

const Passbook = (props) => {
  const [passbookData, setPassbookData] = useState([]);
  useEffect(() => {
    axios.get('/api/passbook/data')
    .then((res)=>{
      console.log('/api/passbook/data',res)
      const data = res.data.order.map((el) => {
        let date = el.date.split('T')[0]
        el.date = date
        return el
      })
      setPassbookData(data)
    })
    .catch((err)=>console.log('passbook err',err))
  }, []);

  const dateBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Date</Span>
        {(rowData.date)}
      </>
    );
  };

  const amountBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Amount</Span>
        {rowData.amount ? rowData.amount : "-"}
      </>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Action</Span>
        {rowData.action}
      </>
    );
  };

  const profitLossBodyTemplate = (rowData) => {
    let color = 'title'
    if(rowData.action.includes('PROFIT')){
      color = 'green'
    }
    else if(rowData.action.includes('LOSS')){
      color='red'
    }
    else{
      color='title'
    }
    return (
      <>
        <Span className="p-column-title">Profit/Loss</Span>
        {rowData.profit_loss ? (
          <Span
            color={color}
          >
            {color=='title'? rowData.profit_loss:Number(rowData.profit_loss).toFixed(2)}
          </Span>
        ) : (
          "-"
        )}
      </>
    );
  };

  const finalBalanceBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Final Balance</Span>
        {rowData.final_balance}
      </>
    );
  };

  return (
    <Container minHeight={"80vh"} mb={4}>
      <Div>
        <P fontSize={"var(--fs-h2)"}>PASSBOOK</P>
        <Table value={passbookData} paginator rows={5}>
          <Column field="date" header="DATE" body={dateBodyTemplate} />
          <Column field="amount" header="AMOUNT" body={amountBodyTemplate} />
          <Column field="action" header="ACTION" body={actionBodyTemplate} />
          <Column
            field="profit_loss"
            header="PROFIT / LOSS"
            body={profitLossBodyTemplate}
          />
          <Column
            field="final_balance"
            header="FINAL BALANCE"
            body={finalBalanceBodyTemplate}
          />
        </Table>
      </Div>
    </Container>
  );
};

export default Passbook;

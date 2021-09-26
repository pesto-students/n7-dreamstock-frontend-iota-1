import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Column, Table } from "../components/Table";
import * as Constants from "../utils/Constants";

const Passbook = (props) => {
  const [passbookData, setPassbookData] = useState([]);

  useEffect(() => {
    setPassbookData(Constants.PASSBOOK_REAL_DATA);
  }, []);

  const stocksBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Stock</span>
        {rowData.stockName} {rowData.symbol}
      </React.Fragment>
    );
  };

  const boughtAtBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Bought At</span>
        {rowData.boughtAt}
      </React.Fragment>
    );
  };
  
  const currentPriceBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Current Price</span>
        {rowData.currentPrice}
      </React.Fragment>
    );
  };

  const changeBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Change</span>
        {rowData.investmentChangePercentage}
      </React.Fragment>
    );
  };

  const mySharesBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">My Shares</span>
        {rowData.quantity}
      </React.Fragment>
    );
  };

  const earningsBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Earnings</span>
        {rowData.investmentChange}
      </React.Fragment>
    );
  };

  return (
    <Container minHeight={"80vh"} mb={4}>
      <Div>
        <P fontSize={"var(--fs-h2)"}>PASSBOOK</P>
        <Table value={passbookData} paginator rows={10}>
          <Column field="stockName" header="Stock" body={stocksBodyTemplate} />
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
            field="investmentChange"
            header="Earnings"
            body={earningsBodyTemplate}
          />
        </Table>
      </Div>
    </Container>
  );
};

export default Passbook;

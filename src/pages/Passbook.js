import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { Column, Table } from "../components/Table";
import * as Constants from "../utils/Constants";
import * as CommonUtils from "../utils/CommonUtils";

const Passbook = (props) => {
  const [passbookData, setPassbookData] = useState([]);

  useEffect(() => {
    // Call the PASSBOOK API here and set the response data
    setPassbookData(Constants.PASSBOOK_DATA.data);
  }, []);

  const dateBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Date</Span>
        {CommonUtils.ConvertMillisIntoDate(parseInt(rowData.date))}
      </React.Fragment>
    );
  };

  const amountBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Amount</Span>
        {rowData.amount ? rowData.amount : "-"}
      </React.Fragment>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Action</Span>
        {rowData.action}
      </React.Fragment>
    );
  };

  const profitLossBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Profit/Loss</Span>
        {rowData.profit_loss ? (
          <Span
            color={CommonUtils.ReturnColorBasedOnProfitLoss(
              rowData.profit_loss
            )}
          >
            {rowData.profit_loss}
          </Span>
        ) : (
          "-"
        )}
      </React.Fragment>
    );
  };

  const finalBalanceBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Span className="p-column-title">Final Balance</Span>
        {rowData.final_balance}
      </React.Fragment>
    );
  };

  return (
    <Container minHeight={"80vh"} mb={4}>
      <Div>
        <P fontSize={"var(--fs-h2)"}>PASSBOOK</P>
        <Table value={passbookData} paginator rows={10}>
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

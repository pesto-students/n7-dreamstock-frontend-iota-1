import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { Column, Table } from "../components/Table";
import request from "../utils/interceptor";
import { useDispatch } from "react-redux";
import { fetchWalletUpdate } from "../store/actions/dashboardAction";
import { LogError } from "../utils/SentryUtils";

const Passbook = () => {
  const [passbookData, setPassbookData] = useState([]);
  const dispatch = useDispatch();

  /**
   * 描述
   * @description - callback is used to fetch passbook data
   * @param {any} (
   * @returns {any}
   */
  useEffect(() => {
    dispatch(fetchWalletUpdate());
    request
      .get("/api/passbook/data")
      .then((res) => {
        const data = res.data.order.map((el) => {
          let date = el.date.split("T")[0];
          el.date = date;
          return el;
        });
        setPassbookData(data);
      })
      .catch((err) => LogError(err));
  }, [dispatch]);

  const dateBodyTemplate = (rowData) => {
    return (
      <>
        <Span className="p-column-title">Date</Span>
        {rowData.date}
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
    let color = "title";
    if (rowData.action.includes("PROFIT")) {
      color = "green";
    } else if (rowData.action.includes("LOSS")) {
      color = "red";
    } else {
      color = "title";
    }
    return (
      <>
        <Span className="p-column-title">Profit/Loss</Span>
        {rowData.profit_loss ? (
          <Span color={color}>
            {color === "title"
              ? rowData.profit_loss
              : Number(rowData.profit_loss).toFixed(2)}
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
    <Container minHeight={"80vh"}>
      <Div>
        <P fontSize={"var(--fs-h2)"}>PASSBOOK</P>
        <Table value={passbookData} paginator rows={5}>
          <Column field="date" header="Date" body={dateBodyTemplate} />
          <Column field="amount" header="Amount" body={amountBodyTemplate} />
          <Column field="action" header="Action" body={actionBodyTemplate} />
          <Column
            field="profit_loss"
            header="Profit / Loss"
            body={profitLossBodyTemplate}
          />
          <Column
            field="final_balance"
            header="Final Balance"
            body={finalBalanceBodyTemplate}
          />
        </Table>
      </Div>
    </Container>
  );
};

export default Passbook;

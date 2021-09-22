import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { Table, Td, Th, Tr } from "../components/Table";

const Passbook = (props) => {
  //   const content = [
  //     [
  //       { title: "Date", content: "08-Aug-2021" },
  //       { title: "Amount", content: "150.00 INR" },
  //       { title: "Action", content: "Wallet Top Up" },
  //       { title: "Profit / Loss", content: "N/A" },
  //       { title: "Final Balance", content: "20000.00 INR" },
  //     ],
  //     [
  //       { title: "Date", content: "09-Aug-2021" },
  //       { title: "Amount", content: "2000.00 INR" },
  //       { title: "Action", content: "Win" },
  //       { title: "Profit / Loss", content: "+100.00 INR" },
  //       { title: "Final Balance", content: "20100.00 INR" },
  //     ],
  //     [
  //       { title: "Date", content: "10-Aug-2021" },
  //       { title: "Amount", content: "2000.00 INR" },
  //       { title: "Action", content: "Loss" },
  //       { title: "Profit / Loss", content: "-100.00 INR" },
  //       { title: "Final Balance", content: "20000.00 INR" },
  //     ],
  //   ];

  const lineItemContent = [
    {
      date: "07-Aug-2021",
      amount: "150.00 INR",
      action: "Wallet Top Up",
      pl: "N/A",
      finalBalance: "20000.00 INR",
    },
    {
      date: "08-Aug-2021",
      amount: "1500.00 INR",
      action: "Wallet Top Up",
      pl: "+100.00 INR",
      isProfit: true,
      finalBalance: "20000.00 INR",
    },
    {
      date: "09-Aug-2021",
      amount: "150.00 INR",
      action: "Loss",
      isLoss: true,
      pl: "-150.00 INR",
      finalBalance: "20000.00 INR",
    },
  ];

  let passBookDataBody = [];
  let passBookDataHeader = [];

  lineItemContent.forEach((lineItem) => {
    let fontColor = lineItem.isProfit ? "green" : lineItem.isLoss ? "red" : "";
    passBookDataBody.push(
      <Tr>
        <Td>
          <Span>{lineItem.date}</Span>
        </Td>
        <Td>
          <Span>{lineItem.amount}</Span>
        </Td>
        <Td>
          <Span>{lineItem.action}</Span>
        </Td>
        <Td>
          <Span color={fontColor}>{lineItem.pl}</Span>
        </Td>
        <Td>
          <Span>{lineItem.finalBalance}</Span>
        </Td>
      </Tr>
    );
  });

  passBookDataHeader.push(
    <Tr>
      <Th style={{ textAlign: "left" }}>
        <Span>Date</Span>
      </Th>
      <Th style={{ textAlign: "left" }}>
        <Span>Amount</Span>
      </Th>
      <Th style={{ textAlign: "left" }}>
        <Span>Action</Span>
      </Th>
      <Th style={{ textAlign: "left" }}>
        <Span>Profit / Loss</Span>
      </Th>
      <Th style={{ textAlign: "left" }}>
        <Span>Final Balance</Span>
      </Th>
    </Tr>
  );

  console.log(passBookDataBody);

  return (
    <Container pb={3}>
      <Div>
        <P fontSize={"var(--fs-h2)"}>PASSBOOK</P>
        <Table width={"100%"}>
          {passBookDataHeader}
          {passBookDataBody}
          {passBookDataBody}
          {passBookDataBody}
        </Table>
      </Div>
    </Container>
  );
};

export default Passbook;

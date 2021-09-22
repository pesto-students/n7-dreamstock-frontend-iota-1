import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { Span } from "../components/Span";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

const Dashboard = (props) => {
  const cardContent = [
    { title: "", content: "Apple(AAPL)" },
    { title: "Bought At", content: "150.00 INR" },
    { title: "Units", content: "10.0" },
    { title: "Total", content: "1500.00 INR" },
  ];

  let cardData = [];

  cardContent.forEach((lineItem) => {
    cardData.push(
      <P>
        <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
          {lineItem.title}
        </Span>{" "}
        {lineItem.content}
      </P>
    );
  });

  return (
    <Container flexRow>
      <Div width={[1, 2 / 3, 3 / 4, 4 / 5]} >
        <Input
          placeholder="Search Stocks..."
          type="text"
          mt={3}
          p={3}
          style={{ width: "100%" }}
        />
        <Card mt={6}>{cardData}</Card>
      </Div>
      <Div width={[1, 1 / 3, 1 / 4, 1 / 5]}>
        <Card p={0} mt={3}>
          Portfolio Draft
        </Card>
        <Card mt={3}>{cardData}</Card>
        <Card mt={3}>{cardData}</Card>
        <Card mt={3}>{cardData}</Card>
        <Card mt={3}>{cardData}</Card>
        <Card mt={3}>{cardData}</Card>
        <Card mt={3}>{cardData}</Card>
        <ButtonSecondary
          style={{ width: "100%" }}
          p={3}
          mt={3}
          mb={3}
          label="ADD TO PORTFOLIO"
        />
      </Div>
    </Container>
  );
};

export default Dashboard;

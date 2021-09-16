import React from "react";
import { CardPrimary } from "../components/Card";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";

export default {
  title: "Component/Card",
};

const props = {
  content: [
    { title: "", content: "Apple(AAPL)" },
    { title: "Bought At", content: "150.00 INR" },
    { title: "Units", content: "10.0" },
    { title: "Total", content: "1500.00 INR" },
  ],
};

export const PrimaryCard = () => {
  let cardData = [];
  props?.content?.forEach((lineItem) => {
    cardData.push(
      <P>
        <Span fontSize={"var(--fs-milli)"} fontWeight={"var(--light-weight)"}>
          {lineItem.title}
        </Span>{" "}
        {lineItem.content}
      </P>
    );
  });

  return (
    <Div>
      <CardPrimary>{cardData}</CardPrimary>
    </Div>
  );
};

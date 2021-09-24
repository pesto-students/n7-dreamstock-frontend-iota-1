import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";
import { CardHorizontal, CardHorizontalTransparent } from "../components/Card";
import { AccordionTab } from "primereact/accordion";
import { Accordion } from "../components/Accordion";

const Summary = (props) => {
  let content = [
    { title: "", content: "Apple(AAPL)" },
    { title: "Bought At", content: "150.00 INR" },
    { title: "Units", content: "10.0" },
    { title: "Total", content: "1500.00 INR" },
  ];

  let accordionData = [];

  const AccordionData = () => {
    accordionData = [];
    content.forEach((lineItem) => {
      accordionData.push(
        <P>
          <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
            {lineItem.title}
          </Span>{" "}
          {lineItem.content}
        </P>
      );
    });

    const accordionHeader = (
      <CardHorizontalTransparent>{accordionData}</CardHorizontalTransparent>
    );
    const accordionContent = (
      <CardHorizontal m={2}>{accordionData}</CardHorizontal>
    );

    return (
      <Container pb={3}>
        <Accordion>
          <AccordionTab header="Header I" headerTemplate={accordionHeader}>
            {accordionContent}
            {accordionContent}
            {accordionContent}
            {accordionContent}
            {accordionContent}
            {accordionContent}
          </AccordionTab>
          <AccordionTab header="Header II" headerTemplate={accordionHeader}>
            {accordionContent} {accordionContent} {accordionContent}
          </AccordionTab>
          <AccordionTab header="Header III" headerTemplate={accordionHeader}>
            {accordionContent} {accordionContent}
          </AccordionTab>
        </Accordion>
      </Container>
    );
  };

  return (
    <Container>
      <Div>
        <P fontSize={"var(--fs-h2)"}>
          SUMMARY
          <Span fontSize={"var(--fs-h6)"}>
            Today / Previous Portfolio Details
          </Span>
        </P>
        <AccordionData />
      </Div>
    </Container>
  );
};

export default Summary;

import { AccordionTab } from "primereact/accordion";
import React from "react";
import { Accordion as PrimeAccordion } from "../components/Accordion";
import { CardHorizontal, CardHorizontalTransparent } from "../components/Card";
import { Container } from "../components/Container";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";

export default {
  title: "Component/Accordion",
};

const content = [
  { title: "", content: "Apple(AAPL)" },
  { title: "Bought At", content: "150.00 INR" },
  { title: "Units", content: "10.0" },
  { title: "Total", content: "1500.00 INR" },
];

let accordionData = [];

const AccordionStories = () => {
  accordionData = [];
  content?.forEach((lineItem) => {
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
    <Container>
      <PrimeAccordion>
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
      </PrimeAccordion>
    </Container>
  );
};

export const Accordion = () => <AccordionStories />;

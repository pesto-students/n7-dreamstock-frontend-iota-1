import { AccordionTab } from "primereact/accordion";
import React from "react";
import { Accordion as PrimeAccordion } from "../components/Accordion";
import { CardHorizontal, CardHorizontalTransparent } from "../components/Card";
import { P } from "../components/Paragraph";
import { Span } from "../components/Span";

export default {
  title: "Component/Accordion",
};

const props = {
  content: [
    { title: "", content: "Apple(AAPL)" },
    { title: "Bought At", content: "150.00 INR" },
    { title: "Units", content: "10.0" },
    { title: "Total", content: "1500.00 INR" },
  ],
};

let accordionData = [];

export const Accordion = () => {
  props?.content?.forEach((lineItem) => {
    accordionData.push(
      <P>
        <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
          {lineItem.title}
        </Span>{" "}
        {lineItem.content}
      </P>
    );
  });

  let accordionHeader = (
    <CardHorizontalTransparent>{accordionData}</CardHorizontalTransparent>
  );
  let accordionContent = <CardHorizontal m={2}>{accordionData}</CardHorizontal>;

  return (
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
  );
};

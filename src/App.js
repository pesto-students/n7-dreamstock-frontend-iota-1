import { AccordionTab } from "primereact/accordion";
import "./App.css";
import { AccordionPrimary } from "./components/Accordion";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from "./components/Button";
import {
  CardHorizontal,
  CardHorizontalTransparent,
  CardPrimary,
} from "./components/Card";
import { Container } from "./components/Container";
import { InputPrimary } from "./components/Input";
import { P } from "./components/Paragraph";
import { Span } from "./components/Span";
import { DialogDemo } from "./demo/DialogDemo";
import { FooterDemo } from "./demo/FooterDemo";
import { HeaderDemo } from "./demo/HeaderDemo";
import { SideBarDemo } from "./demo/SideBarDemo";

function App() {
  const props = {
    content: [
      { title: "", content: "Apple(AAPL)" },
      { title: "Bought At", content: "150.00 INR" },
      { title: "Units", content: "10.0" },
      { title: "Total", content: "1500.00 INR" },
    ],
  };

  let accordionData = [];
  props?.content?.forEach((lineItem) => {
    accordionData.push(
      <P>
        <Span fontSize={"var(--fs-milli)"} fontWeight={"var(--light-weight)"}>
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
    <div className="App">
      <Container>
        <h2>DreamStock Components</h2>

        <P>Button</P>
        <ButtonPrimary label="Start Trading" mr={2} p={3} width={200} />
        <ButtonSecondary label="Start Trading" mr={2} p={3} width={200} />
        <ButtonTertiary label="Start Trading" p={3} width={200} />

        <hr />
        <P>Input</P>
        <InputPrimary
          placeholder="Enter Details"
          type="text"
          p={3}
          width={300}
        />

        <hr />
        <P>Card</P>
        <CardPrimary>{accordionData}</CardPrimary>

        <hr />
        <P>Accordion</P>
        <CardPrimary>
          <AccordionPrimary>
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
          </AccordionPrimary>
        </CardPrimary>
        <hr />
        <P>Dialog / Modal</P>
        <DialogDemo />

        <hr />
        <HeaderDemo />

        <hr />
        <FooterDemo />

        <hr />
        <SideBarDemo />
      </Container>
    </div>
  );
}

export default App;

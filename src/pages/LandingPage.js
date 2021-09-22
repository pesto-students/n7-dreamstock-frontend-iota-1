import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";

const LandingPage = () => {
  return (
    <Container>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>Welcome to DreamStock</P>
      </Div>
    </Container>
  );
};

export default LandingPage;

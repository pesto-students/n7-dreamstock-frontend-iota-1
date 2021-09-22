import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { Span } from "../components/Span";
import { Input } from "../components/Input";

const Transactions = (props) => {
  let walletBalance = 100;
  return (
    <Container pb={3}>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>TRANSACTIONS</P>
        <P>
          <Span>WALLET BALANCE</Span> {walletBalance} INR
        </P>
        <Input
          placeholder="Enter the amount you want to recharge"
          type="text"
          mt={2}
          p={3}
        />
        <ButtonSecondary label="PROCEED TO RECHARGE" mt={3} />

        <hr style={{ width: "100%" }} />

        <P>WITHDRAWAL ELIGIBILITY</P>
        <P>
          <Span>WALLET BALANCE</Span>
        </P>
        <ProgressBar value={30} />
        <ButtonSecondary label="PROCEED TO RECHARGE" mt={3} />
      </Div>
    </Container>
  );
};

export default Transactions;

import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { ButtonSecondary, ButtonTransparent } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { P } from "../components/Paragraph";
import { A } from "../components/Link";

const Signup = (props) => {
  return (
    <Container flexCenter>
      <Card width={[1, 2 / 3, 3 / 5, 1 / 3]}>
        <Div>
          <P fontSize={"var(--fs-h1)"} textAlign={"center"}>
            Log In
          </P>
        </Div>
        <Div>
          <P>Email</P>
          <Input placeholder="Enter Your Email" type="text" p={3} />
        </Div>
        <Div>
          <P>Password</P>
          <Input placeholder="Enter Your Password" type="text" p={3} />
          <P>
            <A>Forgot Password?</A>
          </P>
        </Div>
        <Div mt={4}>
          <ButtonSecondary label="Log In" width={"100%"} />
          <P textAlign={"center"}>OR</P>
          <ButtonTransparent label="Google" width={"100%"} />
          <P textAlign={"center"}>
            Don't Have an account? <A>Sign Up</A>
          </P>
        </Div>
      </Card>
    </Container>
  );
};

export default Signup;

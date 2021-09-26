import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { ButtonSecondary, ButtonTransparent } from "../components/Button";
import { CardContent } from "../components/Card";
import { Input } from "../components/Input";
import { P } from "../components/Paragraph";
import { A } from "../components/Link";

const Signup = (props) => {
  return (
    <Container flexCenter>
      <CardContent width={[1, 2 / 3, 3 / 5, 1 / 3]}>
        <Div>
          <P fontSize={"var(--fs-h1)"} textAlign={"center"}>
            Sign Up
          </P>
        </Div>
        <Div>
          <P>Email</P>
          <Input placeholder="Enter Your Email" type="text" p={3} />
        </Div>
        <Div>
          <P>Password</P>
          <Input placeholder="Enter Your Password" type="text" p={3} />
        </Div>
        <Div>
          <P>Re-enter Password</P>
          <Input placeholder="Re-enter Your Password" type="text" p={3} />
        </Div>
        <Div mt={4}>
          <ButtonSecondary label="Sign Up" width={"100%"} />
          <P textAlign={"center"}>OR</P>
          <ButtonTransparent label="Google" width={"100%"} />
          <P textAlign={"center"}>
            Already have an account? <A>Log In</A>
          </P>
        </Div>
      </CardContent>
    </Container>
  );
};

export default Signup;
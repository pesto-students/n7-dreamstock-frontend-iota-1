import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { ButtonSecondary } from "../components/Button";
import { CardContent } from "../components/Card";
import { Input } from "../components/Input";
import { P } from "../components/Paragraph";
import { A } from "../components/Link";
import GLogin from "./google/Login";

const Signup = () => {
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
          <Input placeholder="Enter Your Email" disabled type="text" p={3} />
        </Div>
        <Div>
          <P>Password</P>
          <Input placeholder="Enter Your Password" disabled type="text" p={3} />
        </Div>
        <Div>
          <P>Re-enter Password</P>
          <Input
            placeholder="Re-enter Your Password"
            disabled
            type="text"
            p={3}
          />
        </Div>
        <Div mt={4}>
          <ButtonSecondary
            label="Sign Up"
            width={"100%"}
            tooltip={"Please use Google Login"}
          />
          <P textAlign={"center"}>OR</P>
          <GLogin />
          <P textAlign={"center"}>
            Already have an account?{" "}
            <A onClick={() => (window.location.href = "/login")}>Log In</A>
          </P>
        </Div>
      </CardContent>
    </Container>
  );
};

export default Signup;

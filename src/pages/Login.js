import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { ButtonSecondary } from "../components/Button";
import { CardContent } from "../components/Card";
import { Input } from "../components/Input";
import { P } from "../components/Paragraph";
import { A } from "../components/Link";
import Login from "./google/Login";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const {isAuthenticated} = useSelector((state)=>state.auth)
  const history = useHistory()
  if(isAuthenticated){
    history.push('/dashboard')
  }
  return (
    <Container flexCenter>
      <CardContent width={[1, 2 / 3, 3 / 5, 1 / 3]}>
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
          <Login />
          <P textAlign={"center"}>
            Don't Have an account?{" "}
            <A onClick={(e) => (window.location.href = "/signup")}>Sign Up</A>
          </P>
        </Div>
      </CardContent>
    </Container>
  );
};

export default Signup;

import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { ButtonSecondary } from "../components/Button";
import { CardContent } from "../components/Card";
import { Input } from "../components/Input";
import { P } from "../components/Paragraph";
import { A } from "../components/Link";
import GLogin from "./google/Login";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { initiateUserLogin } from "../store/actions/authAction";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const manualLogin = () => {
    const payload = {
      "imageUrl": "https://i.imgur.com/x0X6HFt.png?1",
      "email": "partners@pesto.tech",
      "name": "Pesto Partners",
      "givenName": "Partners",
      "familyName": "Pesto"
    }
    dispatch(initiateUserLogin(payload));
  }
  if (isAuthenticated) {
    history.push("/dashboard");
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
          <Input disabled placeholder="partners@pesto.tech" type="text" p={3} />
        </Div>
        <Div>
          <P>Password</P>
          <Input disabled placeholder="********" type="password" p={3} />
          <P>
            <A>Forgot Password?</A>
          </P>
        </Div>
        <Div mt={4}>
          <ButtonSecondary
            label="Log In"
            width={"100%"}
            onClick={manualLogin}
            tooltip={"Login as Pesto Partner / Guest"}
          />
          <P textAlign={"center"}>OR</P>
          <GLogin />
          <P textAlign={"center"}>
            Do not have an account?{" "}
            <A onClick={() => (window.location.href = "/signup")}>Sign Up</A>
          </P>
        </Div>
      </CardContent>
    </Container>
  );
};

export default Login;

import React from "react";
import { GoogleLogin } from "react-google-login";
import { ButtonTransparent } from "../../components/Button";

const clientId =
  "610233614673-jvsmjb0uhvppt0pqapelspsdibpvrd3c.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (response) => {
    console.log("Login Success! CurrentUser: ", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("Login Failed! response: ", response);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <ButtonTransparent label="Google" width={"100%"} {...renderProps} />
      )}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default Login;

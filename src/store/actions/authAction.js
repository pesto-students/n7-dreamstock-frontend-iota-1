import * as actionTypes from "../actionTypes/authActionTypes";
import request from "../../utils/interceptor";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { LogError } from "../../utils/SentryUtils";

export const initiateUserLogin = (payload) => (dispatch) => {
  request
    .post("/api/users/login", payload)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(
      (err) => LogError(err)
      // dispatch({
      //     type: actionTypes.GET_ERRORS,
      //     payload: err.response.data
      // })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: actionTypes.SET_USER_DATA,
    payload: decoded.user,
  };
};

export const logOutCurrentUser = () => {
  return {
    type: actionTypes.LOG_OUT_USER,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(logOutCurrentUser());
};

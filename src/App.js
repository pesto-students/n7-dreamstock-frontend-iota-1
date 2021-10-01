import React from "react";
import DreamStock from "./DreamStock";
import "./App.css";
import { Provider } from 'react-redux';
import store from './store/store';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {setCurrentUser} from './store/actions/authAction'
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // // Check for expired token
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   // Logout user
  //   store.dispatch(logoutUser());
  //   // Clear current Profile
  //   store.dispatch(clearUserMeal());
  //   // Redirect to login
  //   window.location.href = '/login';
  // }
}
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DreamStock />
      </div>
    </Provider>
  );
}

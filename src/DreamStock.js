import React, { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Div } from "./components/Div";
import Transactions from "./pages/Transactions";
import Passbook from "./pages/Passbook";
import Summary from "./pages/Summary";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideNavBar from "./components/Sidebar/Sidebar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { useSelector } from "react-redux";
import ErrorBoundary from './components/ErrorBoundary'
import moment from 'moment-timezone';

export default function DreamStock() {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [visibleLeft, setVisibleLeft] = useState(true);

  useEffect(() => {
    moment.tz.setDefault('UTC');
  }, [])


  const handleSideBarToggle = () => {
    setVisibleLeft(!visibleLeft);
  };

  const SideNavigationMenu = () => (
    <Div
      width={[
        visibleLeft ? "100%" : "0%",
        visibleLeft ? "100%" : "0%",
        "250px",
      ]}
      display={visibleLeft ? "block" : "none"}
    >
      <SideNavBar
        handleSideBarToggle={handleSideBarToggle}
        visibleLeft={visibleLeft}
      />
    </Div>
  );
  return (
    <Router>
      <Router>
        <ErrorBoundary>
          <Div>
            <Div flexRow minHeight={"100vh"}>
            {isAuthenticated && <PrivateRoute path="/"  component={SideNavigationMenu} />}
              <Div
                width={
                  isAuthenticated
                    ? [
                      visibleLeft ? "0%" : "100%",
                      visibleLeft ? "0%" : "100%",
                      visibleLeft ? "calc(100% - 250px)" : "100%",
                    ]
                    : "100%"
                }
                display={
                  isAuthenticated
                    ? [
                      visibleLeft ? "none" : "block",
                      visibleLeft ? "none" : "block",
                      "block",
                    ]
                    : "block"
                }
              >
                <Div minHeight={"100%"} flexColumn>
                  <Header handleSideBarToggle={handleSideBarToggle} visibleLeft={visibleLeft} />
                  <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <PrivateRoute path="/dashboard" exact component={Dashboard} />
                    <PrivateRoute path="/summary" exact component={Summary} />
                    <PrivateRoute path="/passbook" exact component={Passbook} />
                    <PrivateRoute path="/transactions" exact component={Transactions} />
                    <PrivateRoute path="/profile" exact component={Profile} />
                    <Route path="/*" exact component={Error} />
                  </Switch>
                  <Footer />
                </Div>
              </Div>
            </Div>
          </Div>
        </ErrorBoundary>
      </Router>
    </Router>

  );
}

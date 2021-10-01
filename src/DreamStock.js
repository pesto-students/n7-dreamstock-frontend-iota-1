import React, { useState } from "react";
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

export default function DreamStock() {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const SideNavigationMenu = () => (
    <Div
      width={[
        visibleLeft ? "100%" : "0%",
        visibleLeft ? "100%" : "0%",
        "25%",
        "20%",
      ]}
    >
      <SideNavBar />
    </Div>
  )
  return (
    <Router>
      <Div>
        <Div flexRow>
          <PrivateRoute path="/" component={SideNavigationMenu} />
          <Div
            width={[
              visibleLeft ? "0%" : "100%",
              visibleLeft ? "0%" : "100%",
              "75%",
              "80%",
            ]}
            display={[
              visibleLeft ? "none" : "block",
              visibleLeft ? "none" : "block",
              "block",
              "block",
            ]}
          >
            <Div minHeight={"100%"} flexColumn>
              <Header />
              <Router>
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
              </Router>
              <Footer />
            </Div>
          </Div>
        </Div>
      </Div>
    </Router>

  );
}

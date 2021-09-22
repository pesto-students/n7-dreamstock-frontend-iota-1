import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { P } from "./components/Paragraph";
import { Span } from "./components/Span";
import { Div } from "./components/Div";
import { NavMenu } from "./components/NavMenu";
import { Card, CardFooter, CardHorizontalTransparent } from "./components/Card";
import { Image } from "./components/Image";
import { Icon } from "./components/Icon";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
} from "./components/Button";
import HamburgerMenu from "react-hamburger-menu";
import FullLogo from "./assets/images/FullLogo.png";
import { userCircle, wallet } from "./components/IconFonts";
import { Menubar } from "./components/Header";
import { ALL_RIGHTS_RESERVED, COPYRIGHT_TEXT } from "./utils/Constants";
import { SideBar as SideNav } from "./components/SideBar";
import Transactions from "./pages/Transactions";
import Passbook from "./pages/Passbook";
import Summary from "./pages/Summary";
import Profile from "./pages/Profile";

export default function DreamStock() {
  const [visibleLeft, setVisibleLeft] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const cardContent = [
    { title: "", content: "Apple(AAPL)" },
    { title: "Bought At", content: "150.00 INR" },
    { title: "Units", content: "10.0" },
    { title: "Total", content: "1500.00 INR" },
  ];

  let cardData = [];

  const handleSideBarToggle = () => {
    setVisibleLeft(!visibleLeft);
  };

  cardContent.forEach((lineItem) => {
    cardData.push(
      <P>
        <Span fontSize={"var(--fs-milli)"} fontWeight={"light"}>
          {lineItem.title}
        </Span>{" "}
        {lineItem.content}
      </P>
    );
  });

  const NavMenuDemo = () => {
    const items = [
      {
        label: "",
        items: [
          {
            label: "Dashboard",
            command: (e) => {
              window.location.href = "/dashboard";
            },
          },
          {
            label: "Summary",
            command: (e) => {
              window.location.href = "/summary";
            },
          },
          {
            label: "Passbook",
            command: (e) => {
              window.location.href = "/passbook";
            },
          },
          {
            label: "Transactions",
            command: (e) => {
              window.location.href = "/transactions";
            },
          },
          {
            label: "Profile",
            command: (e) => {
              window.location.href = "/profile";
            },
          },
        ],
      },
    ];

    return (
      <Div>
        <NavMenu model={items} />
      </Div>
    );
  };

  const SideBar = () => {
    return (
      <SideNav
        modal={false}
        appendTo={"self"}
        visible={visibleLeft}
        onHide={() => setVisibleLeft(false)}
        style={{ width: "inherit" }}
      >
        <CardHorizontalTransparent pt={3}>
          <Image src={FullLogo} height="40" />
        </CardHorizontalTransparent>
        <hr />
        <Card m={3}>
          <Div flexCenter>
            <Icon name={userCircle} size="5x" />
          </Div>
        </Card>
        <hr />
        <NavMenuDemo />
      </SideNav>
    );
  };

  const Header = () => {
    const itemsBefore = [
      {
        label: "Home",
      },
      {
        label: "About Us",
      },
      {
        label: "How To Play",
      },
      {
        label: "FAQ",
      },
      {
        label: "Contact Us",
      },
    ];
    const itemsAfter = [];

    const startBefore = <Image src={FullLogo} height="40" />;
    const startAfter = (
      <Span>
        <HamburgerMenu
          isOpen={visibleLeft}
          menuClicked={() => handleSideBarToggle()}
          color="white"
          borderRadius={4}
          animationDuration={1}
        />
        {/* <Image src={FullLogo} height="40" /> */}
      </Span>
    );

    const endBefore = (
      <Div>
        <ButtonPrimary
          label="Log In"
          mr={3}
          p={3}
          onClick={() => {
            setUserLoggedIn(true);
          }}
        />
        <ButtonSecondary label="Sign Up" p={3} />
      </Div>
    );
    const endAfter = (
      <Div>
        <ButtonTransparent
          label="100.00 INR"
          mr={3}
          p={3}
          onClick={() => {
            setUserLoggedIn(false);
          }}
        />
        <ButtonTransparent
          label={<Icon name={wallet} size="2x" />}
          mr={3}
          p={2}
        />
        <Div display={"inline-block"}>
          <Icon name={userCircle} size="3x" />
          <Span display={"inline-block"} ml={2} color={"title"}>
            User Name
          </Span>
        </Div>
      </Div>
    );

    return (
      <Div>
        <Div className="card">
          <Menubar
            model={userLoggedIn ? itemsAfter : itemsBefore}
            start={userLoggedIn ? startAfter : startBefore}
            end={userLoggedIn ? endAfter : endBefore}
          />
        </Div>
      </Div>
    );
  };

  const Footer = () => {
    const items = [
      {
        label: "Contact US",
      },
      {
        label: "Terms Of Use",
      },
      {
        label: "Privacy Policy",
      },
    ];

    return (
      <Div>
        <Div className="card">
          <Menubar model={items} />
        </Div>
        <CardFooter pl={4} pr={4}>
          <Div>{COPYRIGHT_TEXT}</Div>
          <Div>{ALL_RIGHTS_RESERVED}</Div>
        </CardFooter>
      </Div>
    );
  };

  return (
    <Div className="dreamStock" flexRow>
      <Div className="sideBar" style={visibleLeft ? { width: "20%" } : {}}>
        <SideBar style={{ width: "inherit" }} />
      </Div>
      <Div
        className="body_content"
        style={visibleLeft ? { width: "80%" } : { width: "100%" }}
      >
        <Div style={{ minHeight: "inherit" }} flexColumn>
          <Header />
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/summary">
                <Summary />
              </Route>
              <Route path="/passbook">
                <Passbook />
              </Route>
              <Route path="/transactions">
                <Transactions />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/error"></Route>
              <Route path="/"></Route>
            </Switch>
          </Router>
          <Footer />
        </Div>
      </Div>
    </Div>
  );
}

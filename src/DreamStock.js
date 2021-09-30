import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Span } from "./components/Span";
import { Div } from "./components/Div";
import { NavMenu } from "./components/NavMenu";
import {
  CardContent,
  CardFooter,
  CardHorizontalTransparent,
} from "./components/Card";
import { Image } from "./components/Image";
import { Icon } from "./components/Icon";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
} from "./components/Button";
import { Squash as Hamburger } from "hamburger-react";
import FullLogo from "./assets/images/FullLogo.png";
import { wallet } from "./components/IconFonts";
import { Menubar } from "./components/Header";
import {
  ALL_RIGHTS_RESERVED,
  COPYRIGHT_TEXT,
  USER_INFO,
} from "./utils/Constants";
import { SideBar as SideNav } from "./components/SideBar";
import Transactions from "./pages/Transactions";
import Passbook from "./pages/Passbook";
import Summary from "./pages/Summary";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import { P } from "./components/Paragraph";
import Logout from "./pages/google/Logout";

export default function DreamStock() {
  const [visibleLeft, setVisibleLeft] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleSideBarToggle = () => {
    setVisibleLeft(!visibleLeft);
  };

  const items = [
    {
      label: "",
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-briefcase",
          command: (e) => {
            window.location.href = "/dashboard";
          },
        },
        {
          label: "Summary",
          icon: "pi pi-fw pi-th-large",
          command: (e) => {
            window.location.href = "/summary";
          },
        },
        {
          label: "Passbook",
          icon: "pi pi-fw pi-book",
          command: (e) => {
            window.location.href = "/passbook";
          },
        },
        {
          label: "Transactions",
          icon: "pi pi-fw pi-money-bill",
          command: (e) => {
            window.location.href = "/transactions";
          },
        },
        {
          label: "Profile",
          icon: "pi pi-fw pi-user-edit",
          command: (e) => {
            window.location.href = "/profile";
          },
        },
      ],
    },
  ];

  const SideBar = (props) => {
    return (
      <SideNav
        modal={false}
        appendTo={"self"}
        visible={visibleLeft}
        onHide={() => setVisibleLeft(false)}
        icons={
          <CardHorizontalTransparent pt={3}>
            <Image src={FullLogo} height="42" />
          </CardHorizontalTransparent>
        }
        showCloseIcon={true}
        {...props}
      >
        <hr />
        <CardContent m={3}>
          <Div flexCenter>
            <Image src={USER_INFO.imageUrl} height="80" />
            <P>{USER_INFO.name}</P>
          </Div>
        </CardContent>
        <hr />
        <NavMenu model={items} />
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
        <Hamburger
          duration={0.8}
          toggled={visibleLeft}
          toggle={() => handleSideBarToggle()}
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
          label="1000.00 INR"
          mr={3}
          onClick={() => {
            setUserLoggedIn(false);
          }}
        />
        <ButtonTransparent
          label={<Icon name={wallet} size="2x" />}
          mr={3}
          p={2}
        />
        <Logout />
        <Div display={"inline-block"}>
          {/* <Image src={USER_INFO.imageUrl} height="42" />
          <Span display={"inline-block"} ml={2} color={"title"}>
            {USER_INFO.name} */}
          {/* </Span> */}
        </Div>
      </Div>
    );

    return (
      <Div>
        <Menubar
          className="header-menubar-test"
          minHeight={"8vh"}
          model={userLoggedIn ? itemsAfter : itemsBefore}
          start={userLoggedIn ? startAfter : startBefore}
          end={userLoggedIn ? endAfter : endBefore}
        />
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
        <Div>
          <Menubar minHeight={"8vh"} model={items} />
        </Div>
        <CardFooter minHeight={"4vh"} pl={4} pr={4}>
          <Div>{COPYRIGHT_TEXT}</Div>
          <Div>{ALL_RIGHTS_RESERVED}</Div>
        </CardFooter>
      </Div>
    );
  };

  const RouterComponent = () => {
    return (
      <Div minHeight={"100vh"} flexColumn>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/summary" component={Summary} />
            <Route path="/passbook" component={Passbook} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/profile" component={Profile} />
            <Route component={Error} />
          </Switch>
        </Router>
        <Footer />
      </Div>
    );
  };

  return (
    <Div>
      <Div
        // backgroundImage={"url(" + banner + ")"}
        // backgroundRepeat="no-repeat"
        // backgroundSize="auto 100%"
        // backgroundPosition="left top"
        flexRow
      >
        {userLoggedIn ? (
          <Div
            width={[
              visibleLeft ? "100%" : "0%",
              visibleLeft ? "100%" : "0%",
              "25%",
              "20%",
            ]}
            zIndex={"999"}
          >
            <SideBar />
          </Div>
        ) : null}

        <Div
          width={
            userLoggedIn
              ? [
                  visibleLeft ? "0%" : "100%",
                  visibleLeft ? "0%" : "100%",
                  visibleLeft ? "75%" : "100%",
                  visibleLeft ? "80%" : "100%",
                ]
              : "100%"
          }
          display={
            userLoggedIn
              ? [
                  visibleLeft ? "none" : "block",
                  visibleLeft ? "none" : "block",
                  "block",
                  "block",
                ]
              : "block"
          }
        >
          <RouterComponent />
        </Div>
      </Div>
    </Div>
  );
}

import React, { useState } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Menubar } from "../components/Header";
import { ButtonSecondary, ButtonTransparent } from "../components/Button";
import FullLogo from "../assets/images/FullLogo.png";
import { Span } from "../components/Span";
import { Image } from "../components/Image";
import { userCircle, wallet } from "../components/IconFonts";
import { Icon } from "../components/Icon";
import {
  Card,
  CardFooter,
  CardHorizontalTransparent,
} from "../components/Card";
import { ALL_RIGHTS_RESERVED, COPYRIGHT_TEXT } from "../utils/Constants";
import { SideBar as SideNav } from "../components/SideBar";
import { NavMenu } from "../components/NavMenu";
import { Input } from "../components/Input";

const Dashboard = (props) => {
  const cardContent = [
    { title: "", content: "Apple(AAPL)" },
    { title: "Bought At", content: "150.00 INR" },
    { title: "Units", content: "10.0" },
    { title: "Total", content: "1500.00 INR" },
  ];

  let cardData = [];
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
        label: "Options",
        items: [
          {
            label: "Update",
            command: () => {},
          },
          {
            label: "Delete",
            command: () => {},
          },
        ],
      },
      {
        label: "Navigate",
        items: [
          {
            label: "React Website",
          },
          {
            label: "Router",
            command: (e) => {
              window.location.hash = "/dashboard";
            },
          },
        ],
      },
    ];

    return (
      <Div>
        <Div className="card">
          <NavMenu model={items} />
        </Div>
      </Div>
    );
  };

  const SideBar = () => {
    const [visibleLeft, setVisibleLeft] = useState(true);

    return (
      <Div>
        <Div className="card">
          <SideNav visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
            <CardHorizontalTransparent pt={3}>
              <Image src={FullLogo} height="40" />
            </CardHorizontalTransparent>
            <hr />
            <Card m={3}>
              <Div center>
                <Icon name={userCircle} size="5x" />
              </Div>
            </Card>
            <hr />
            <NavMenuDemo />
          </SideNav>
          <ButtonSecondary
            onClick={() => setVisibleLeft(true)}
            label="Open SideBar"
          />
        </Div>
      </Div>
    );
  };

  const Header = () => {
    const itemsAfter = [];
    const start = <Image src={FullLogo} height="40" />;
    const endAfter = (
      <Div>
        <ButtonTransparent label="100.00 INR" mr={3} p={3} />
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
          <Menubar model={itemsAfter} start={start} end={endAfter} />
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
    <Div>
      <Header />
      <Container>
        <Div className="p-grid">
          <Div className="p-col-3">
            <SideBar />
          </Div>
          <Div className="p-col-6">
            <Input
              placeholder="Search Stocks..."
              type="text"
              mt={3}
              p={3}
              style={{ width: "100%" }}
            />
            <Card mt={6}>{cardData}</Card>
          </Div>
          <Div className="p-col-3">
            <Card p={0} mt={3}>
              Portfolio Draft
            </Card>
            <Card mt={3}>{cardData}</Card>
            <Card mt={3}>{cardData}</Card>
            <Card mt={3}>{cardData}</Card>
            <ButtonSecondary
              style={{ width: "100%" }}
              p={3}
              mt={3}
              mb={3}
              label="ADD TO PORTFOLIO"
            />
          </Div>
        </Div>
      </Container>
      <Div className="p-grid">
        <Div className="p-col-2"></Div>
        <Div className="p-col-10">
          <Footer />
        </Div>
      </Div>
    </Div>
  );
};

export default Dashboard;

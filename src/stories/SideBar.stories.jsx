import React, { useState } from "react";
import { SideBar as SideNav } from "../components/SideBar";
import FullLogo from "../assets/images/FullLogo.png";
import { CardHorizontal, Card } from "../components/Card";
import { ButtonSecondary } from "../components/Button";
import { Image } from "../components/Image";
import { NavMenu } from "../components/NavMenu";
import { Div } from "../components/Div";
import { Icon } from "../components/Icon";
import { userCircle } from "../components/IconFonts";

export default {
  title: "Component/SideBar",
};

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

const SideBarStories = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);

  return (
    <Div>
      <Div className="card">
        <SideNav visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
          <CardHorizontal>
            <Image src={FullLogo} height="40"/>
          </CardHorizontal>
          <hr />
          <Card m={3}>
            <Div flexCenter>
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

export const SideBar = () => <SideBarStories />;

import React, { useState } from "react";
import { SideBar as SideNav } from "../components/SideBar";
import FullLogo from "../assets/images/FullLogo.png";
import { CardHorizontal, CardContent } from "../components/Card";
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
      label: "",
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-briefcase",
          command: (e) => {
          },
        },
        {
          label: "Summary",
          icon: "pi pi-fw pi-th-large",
          command: (e) => {
          },
        },
        {
          label: "Passbook",
          icon: "pi pi-fw pi-book",
          command: (e) => {
          },
        },
        {
          label: "Transactions",
          icon: "pi pi-fw pi-money-bill",
          command: (e) => {
          },
        },
        {
          label: "Profile",
          icon: "pi pi-fw pi-user-edit",
          command: (e) => {
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
            <Image src={FullLogo} height="40" />
          </CardHorizontal>
          <hr />
          <CardContent m={3}>
            <Div flexCenter>
              <Icon name={userCircle} size="5x" />
            </Div>
          </CardContent>
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

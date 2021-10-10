import React, { useState } from "react";
import { SideBar as SideNav } from "../components/Sidebar/style";
import FullLogo from "../assets/images/FullLogo.png";
import { CardHorizontal, CardContent } from "../components/Card";
import { ButtonSecondary } from "../components/Button";
import { Image } from "../components/Image";
import { NavMenu } from "../components/NavMenu";
import { Div } from "../components/Div";
import Icon from "../components/Icon";
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
          command: () => {},
        },
        {
          label: "Summary",
          icon: "pi pi-fw pi-th-large",
          command: () => {},
        },
        {
          label: "Passbook",
          icon: "pi pi-fw pi-book",
          command: () => {},
        },
        {
          label: "Transactions",
          icon: "pi pi-fw pi-money-bill",
          command: () => {},
        },
        {
          label: "Profile",
          icon: "pi pi-fw pi-user-edit",
          command: () => {},
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

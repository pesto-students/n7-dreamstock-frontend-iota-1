import React from "react";
import { Div } from "../Div";
import { NavMenu } from "../NavMenu";
import { CardContent, CardHorizontalTransparent } from "../Card";
import { Image } from "../Image";
import { Icon } from "../Icon";

import FullLogo from "../../assets/images/FullLogo.png";
import { userCircle } from "../IconFonts";
import { SideBar as SideNav } from "./style";
import { useSelector } from "react-redux";
import { P } from "../Paragraph";

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

const SideNavBar = (props) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <SideNav
      modal={false}
      appendTo={"self"}
      visible={props.visibleLeft}
      onHide={() => props.handleSideBarToggle()}
      icons={
        <CardHorizontalTransparent pt={3}>
          <Image src={FullLogo} height="35" />
        </CardHorizontalTransparent>
      }
      showCloseIcon={true}
      {...props}
    >
      <hr />
      <CardContent m={3}>
        <Div flexCenter>
          {user && user.imageUrl ? (
            <Image rounded src={user.imageUrl} />
          ) : (
            <Icon name={userCircle} size="5x" />
          )}
          <P>
            {user && user.first_name ? user.first_name : "DreamStock User"}{" "}
            {user && user.last_name ? user.last_name : ""}
          </P>
        </Div>
      </CardContent>
      <hr />
      <NavMenu model={items} />
    </SideNav>
  );
};

export default SideNavBar;
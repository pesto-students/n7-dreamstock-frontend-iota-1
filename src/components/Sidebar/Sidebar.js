import React from "react";
import PropTypes from "prop-types";
import { Div } from "../Div";
import { NavMenu } from "../NavMenu";
import { CardContent, CardHorizontalTransparent } from "../Card";
import { Image } from "../Image";
import Icon from "../Icon";
import FullLogo from "../../assets/images/FullLogo.png";
import { userCircle } from "../IconFonts";
import { SideBar as SideNav } from "./style";
import { useSelector } from "react-redux";
import { P } from "../Paragraph";
import { useHistory } from "react-router";

const SideNavBar = (props) => {
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
  const sidNaveClick = (link) => {
    history.push(link);
  };

  const items = [
    {
      label: "",
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-briefcase",
          command: () => {
            sidNaveClick("/dashboard");
            if(window.screen.width < 576){
              props.handleSideBarToggle();
            }
          },
        },
        {
          label: "Summary",
          icon: "pi pi-fw pi-th-large",
          command: () => {
            sidNaveClick("/summary");
            if(window.screen.width < 576){
              props.handleSideBarToggle();
            }
          },
        },
        {
          label: "Passbook",
          icon: "pi pi-fw pi-book",
          command: () => {
            sidNaveClick("/passbook");
            if(window.screen.width < 576){
              props.handleSideBarToggle();
            }
          },
        },
        {
          label: "Transactions",
          icon: "pi pi-fw pi-money-bill",
          command: () => {
            sidNaveClick("/transactions");
            if(window.screen.width < 576){
              props.handleSideBarToggle();
            }
          },
        },
        {
          label: "Profile",
          icon: "pi pi-fw pi-user-edit",
          command: () => {
            sidNaveClick("/profile");
            if(window.screen.width < 576){
              props.handleSideBarToggle();
            }
          },
        },
      ],
    },
  ];
  return (
    <SideNav
      modal={false}
      appendTo={"self"}
      visible={props.visibleLeft}
      onHide={() => props.handleSideBarToggle()}
      icons={
        <CardHorizontalTransparent>
          <Image src={FullLogo} height="35" alt="User Image" />
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

SideNavBar.propTypes = {
  handleSideBarToggle: PropTypes.any,
  visibleLeft: PropTypes.any,
};

export default SideNavBar;

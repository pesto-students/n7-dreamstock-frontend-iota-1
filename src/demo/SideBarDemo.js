import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import FullLogo from "../assets/images/FullLogo.png";
import { CardHorizontal, CardPrimary } from "../components/Card";
import { ButtonSecondary } from "../components/Button";
import { P } from "../components/Paragraph";
import { NavMenuDemo } from "./NavMenuDemo";

export const SideBarDemo = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);

  return (
    <div>
      <P>SideBar</P>
      <div className="card">
        <SideBar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
          <CardHorizontal>
            <img alt="logo" src={FullLogo} height="40"></img>
          </CardHorizontal>
          <hr />
          <CardPrimary>User Profile Info</CardPrimary>
          <hr />
          <NavMenuDemo />
        </SideBar>
        <ButtonSecondary
          onClick={() => setVisibleLeft(true)}
          label="Open SideBar"
        />
      </div>
    </div>
  );
};

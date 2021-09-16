import React from "react";
import { UserIcon, WalletIcon } from "../components/IconFonts";
import Logo from "../assets/images/Logo.png";
import FullLogo from "../assets/images/FullLogo.png";
import { CardHorizontal } from "../components/Card";

export default {
  title: "Component/Icons",
};

export const AppLogo = () => <img alt="logo" src={Logo} height="40"></img>;

export const AppFullLogo = () => (
  <CardHorizontal>
    <img alt="logo" src={FullLogo} height="40"></img>
  </CardHorizontal>
);

export const Wallet = () => <WalletIcon size="2x" />;

export const User = () => <UserIcon size="2x" />;

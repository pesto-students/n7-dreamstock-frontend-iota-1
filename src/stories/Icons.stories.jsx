import React from "react";
import Logo from "../assets/images/Logo.png";
import FullLogo from "../assets/images/FullLogo.png";
import { CardHorizontal } from "../components/Card";
import { Image } from "../components/Image";
import { Icon } from "../components/Icon";
import { user, userCircle, wallet } from "../components/IconFonts";

export default {
  title: "Component/Icons",
};

export const AppLogo = () => <Image src={Logo} />;

export const AppFullLogo = () => (
  <CardHorizontal>
    <Image src={FullLogo} />
  </CardHorizontal>
);

export const Wallet = () => <Icon name={wallet} size="5x" />;

export const User = () => <Icon name={user} size="5x" />;

export const UserCircle = () => <Icon name={userCircle} size="5x" />;

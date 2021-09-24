import React from "react";
import AppLogo from "../assets/images/Logo.png";
import FullAppLogo from "../assets/images/FullLogo.png";
import { CardHorizontal } from "../components/Card";
import { Image } from "../components/Image";

export default {
  title: "Component/Logo",
};

export const Logo = () => <Image src={AppLogo} height="40" />;

export const FullLogo = () => (
  <CardHorizontal p={2}>
    <Image src={FullAppLogo} height="40" />
  </CardHorizontal>
);

import React from "react";
import { Icon } from "../components/Icon";
import { close, user, userCircle, wallet } from "../components/IconFonts";

export default {
  title: "Component/Icons",
};

export const Wallet = () => <Icon name={wallet} size="6x" />;

export const User = () => <Icon name={user} size="6x" />;

export const UserCircle = () => <Icon name={userCircle} size="6x" />;

export const Close = () => <Icon name={close} size="6x" />;


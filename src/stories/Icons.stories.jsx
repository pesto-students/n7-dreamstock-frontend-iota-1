import React from "react";
import { Icon } from "../components/Icon";
import { close, user, userCircle, wallet } from "../components/IconFonts";

export default {
  title: "Component/Icons",
};

export const Wallet = () => <Icon name={wallet} size="5x" />;

export const User = () => <Icon name={user} size="5x" />;

export const UserCircle = () => <Icon name={userCircle} size="5x" />;

export const Close = () => <Icon name={close} size="5x" />;


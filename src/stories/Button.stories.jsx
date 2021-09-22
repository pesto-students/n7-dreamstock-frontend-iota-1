import React from "react";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from "../components/Button";

export default {
  title: "Component/Button",
};

export const PrimaryButton = () => <ButtonPrimary label="Testing" p={3} />;

export const SecondaryButton = () => <ButtonSecondary label="Testing" p={3} />;

export const TertiaryButton = () => <ButtonTertiary label="Testing" p={3} />;

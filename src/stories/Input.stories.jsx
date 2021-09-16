import React from "react";
import { InputPrimary } from "../components/Input";

export default {
  title: "Component/Input",
};

export const PrimaryInput = () => (
  <InputPrimary placeholder="Search Stocks..." type="text" p={3} width={300} />
);

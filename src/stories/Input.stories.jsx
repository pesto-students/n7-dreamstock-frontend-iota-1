import React from "react";
import { Input } from "../components/Input";

export default {
  title: "Component/Input",
};

export const PrimaryInput = () => (
  <Input placeholder="Search Stocks..." type="text" p={3} width={300} />
);
import React from "react";
import { CardFooter } from "../components/Card";
import { Div } from "../components/Div";
import { Menubar } from "../components/Header/style";
import { P } from "../components/Paragraph";
import { ALL_RIGHTS_RESERVED, COPYRIGHT_TEXT } from "../utils/Constants";

export default {
  title: "Component/Footer",
};

const FooterStories = () => {
  const items = [
    {
      label: "Contact US",
    },
    {
      label: "Terms Of Use",
    },
    {
      label: "Privacy Policy",
    },
  ];

  return (
    <Div>
      <P>Footer</P>
      <Div className="card">
        <Menubar model={items} />
      </Div>
      <CardFooter pl={4} pr={4}>
        <Div>{COPYRIGHT_TEXT}</Div>
        <Div>{ALL_RIGHTS_RESERVED}</Div>
      </CardFooter>
    </Div>
  );
};

export const Footer = () => <FooterStories />;

import React from "react";
import { Menubar } from "../components/Header";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
} from "../components/Button";
import FullLogo from "../assets/images/FullLogo.png";
import { P } from "../components/Paragraph";
import { Div } from "../components/Div";
import { Span } from "../components/Span";
import { Image } from "../components/Image";
import { userCircle, wallet } from "../components/IconFonts";
import { Icon } from "../components/Icon";

export default {
  title: "Component/Header",
};

const HeaderStories = () => {
  const items = [
    {
      label: "Home",
    },
    {
      label: "About Us",
    },
    {
      label: "How To Play",
    },
    {
      label: "FAQ",
    },
    {
      label: "Contact Us",
    },
  ];

  const itemsAfter = [];

  const start = <Image src={FullLogo} />;

  const endBefore = (
    <Div>
      <ButtonPrimary label="Log In" mr={3} p={3} />
      <ButtonSecondary label="Sign Up" p={3} />
    </Div>
  );

  const endAfter = (
    <Div>
      <ButtonTransparent label="100.00 INR" mr={3} p={3} />
      <ButtonTransparent
        label={<Icon name={wallet} size="2x" />}
        mr={3}
        p={2}
      />
      <Div display={"inline-block"}>
        <Icon name={userCircle} size="3x" />
        <Span display={"inline-block"} ml={2} color={"title"}>
          User Name
        </Span>
      </Div>
    </Div>
  );

  return (
    <Div>
      <P>Header Before Log In</P>
      <Div className="card">
        <Menubar model={items} start={start} end={endBefore} />
      </Div>

      <P>Header After Log In</P>
      <Div className="card">
        <Menubar model={itemsAfter} start={start} end={endAfter} />
      </Div>
    </Div>
  );
};

export const Header = () => <HeaderStories />;

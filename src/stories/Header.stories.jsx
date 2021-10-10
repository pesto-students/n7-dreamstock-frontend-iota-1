import React from "react";
import { Menubar } from "../components/Header/style";
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
import { wallet } from "../components/IconFonts";
import Icon from "../components/Icon";

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

  const start = <Image src={FullLogo} height="40" />;

  const endBefore = (
    <Div>
      <ButtonPrimary label="Log In" mr={3} p={3} />
      <ButtonSecondary label="Sign Up" p={3} />
    </Div>
  );

  const endAfter = (
    <Div>
      <ButtonTransparent
        label={
          <Span>
            <Icon name={wallet} /> <Span color={"title"}>10000 INR</Span>
          </Span>
        }
        mr={3}
        p={[2, 3]}
      />
      <ButtonSecondary label="Log Out" p={[2, 3]} />
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

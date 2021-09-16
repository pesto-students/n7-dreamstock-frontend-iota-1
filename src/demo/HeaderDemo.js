import React, { Component } from "react";
import { HeaderPrimary } from "../components/Header";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
} from "../components/Button";
import FullLogo from "../assets/images/FullLogo.png";
import { UserIcon, WalletIcon } from "../components/IconFonts";
import { P } from "../components/Paragraph";
import { Div } from "../components/Div";
import { Span } from "../components/Span";

export class HeaderDemo extends Component {
  constructor(props) {
    super(props);

    this.items = [
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

    this.itemsAfter = [];
  }

  render() {
    const start = (
      <img
        alt="logo"
        src={FullLogo}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        height="40"
        className="P-mr-2"
      ></img>
    );
    const endBefore = (
      <div>
        <ButtonPrimary label="Log In" mr={3} p={3} />
        <ButtonSecondary label="Sign Up" p={3} />
      </div>
    );

    const endAfter = (
      <div>
        <ButtonTransparent label="100.00 INR" mr={3} p={3} />
        <ButtonTransparent label={<WalletIcon size="2x" />} mr={3} p={2} />
        <ButtonTransparent
          label={
            <Div>
              <UserIcon size="2x" />
              <Span ml={2} color={"title"}>
                User Name
              </Span>
            </Div>
          }
          mr={3}
          p={2}
        />
      </div>
    );

    return (
      <div>
        <P>Header Before Log In</P>
        <div className="card">
          <HeaderPrimary model={this.items} start={start} end={endBefore} />
        </div>

        <P>Header After Log In</P>
        <div className="card">
          <HeaderPrimary model={this.itemsAfter} start={start} end={endAfter} />
        </div>
      </div>
    );
  }
}

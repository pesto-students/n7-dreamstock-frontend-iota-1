import React, { Component } from "react";
import { CardFooter } from "../components/Card";
import { HeaderPrimary } from "../components/Header";
import { P } from "../components/Paragraph";

export class FooterDemo extends Component {
  constructor(props) {
    super(props);

    this.items = [
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
  }

  render() {
    return (
      <div>
        <P>Footer</P>
        <div className="card">
          <HeaderPrimary model={this.items} />
        </div>
        <CardFooter pl={4} pr={4}>
          <div>Copyright © 2021. Made by Team Iota-1 </div>
          <div>All rights reserved</div>
        </CardFooter>
      </div>
    );
  }
}

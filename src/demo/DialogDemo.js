import React, { Component } from "react";
import "./DialogDemo.css";
import { DialogPrimary } from "../components/Dialog";
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from "../components/Button";
import { P } from "../components/Paragraph";

export class DialogDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBasic: false,
      displayBasic2: false,
      displayModal: false,
      displayMaximizable: false,
      displayPosition: false,
      displayResponsive: false,
      position: "center",
    };

    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClick(name, position) {
    let state = {
      [`${name}`]: true,
    };

    if (position) {
      state = {
        ...state,
        position,
      };
    }

    this.setState(state);
  }

  onHide(name) {
    this.setState({
      [`${name}`]: false,
    });
  }

  renderFooter(name) {
    return (
      <div>
        <ButtonPrimary label="Confirm" />
        <ButtonTertiary label="Cancel" />
      </div>
    );
  }

  render() {
    return (
      <div className="dialog-demo">
        <div className="card">
          <ButtonSecondary
            label="Show"
            onClick={() => this.onClick("displayResponsive")}
          />
          <DialogPrimary
            header="Confirm"
            visible={this.state.displayResponsive}
            onHide={() => this.onHide("displayResponsive")}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
            footer={this.renderFooter("displayResponsive")}
          >
            <P>
             Do you want to go ahead with this action?
            </P>
          </DialogPrimary>
        </div>
      </div>
    );
  }
}

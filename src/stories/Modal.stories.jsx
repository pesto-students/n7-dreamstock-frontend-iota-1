import React, { useState } from "react";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from "../components/Button";
import { Dialog } from "../components/Dialog";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { MODAL_ACTION_CONFIRMATION } from "../utils/Constants";

export default {
  title: "Component/Modal",
};

const DialogStories = () => {
  const [displayResponsive, setDisplayResponsive] = useState(false);

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <Div>
        <ButtonPrimary label="Cancel" onClick={() => onHide(name)} />
        <ButtonTertiary label="Confirm" onClick={() => onHide(name)} autoFocus />
      </Div>
    );
  };

  return (
    <Div>
      <Div className="card">
        <ButtonSecondary
          label="Show Modal"
          onClick={() => onClick("displayResponsive")}
        />
        <Dialog
          header="Confirm Action"
          visible={displayResponsive}
          onHide={() => onHide("displayResponsive")}
          breakpoints={{ "960px": "75vw" }}
          style={{ width: "50vw" }}
          footer={renderFooter("displayResponsive")}
        >
          <P>{MODAL_ACTION_CONFIRMATION}</P>
        </Dialog>
      </Div>
    </Div>
  );
};

export const Modal = () => <DialogStories />;

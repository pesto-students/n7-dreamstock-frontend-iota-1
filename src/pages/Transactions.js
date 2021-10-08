import React, { useEffect, useState, useRef } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { Span } from "../components/Span";
import { Input } from "../components/Input";
import axios from "axios";
import * as Constants from "../utils/Constants";
import { Dialog } from "../components/Dialog";
import { Toast } from "../components/Toast";

const Transactions = (props) => {
  let walletBalance = 100;
  const toast = useRef(null);
  const [amount ,setRechargeAmount]= useState("")
  const [showModal, setShowModal] = useState(false);
  useEffect(()=>{
    
  },[])

  const rechargeWallet = () => {
    axios
      .post(Constants.BACKEND_URL + "/api/wallet/recharge", {
        rechargeAmount: amount,
      })
      .then((res) => {
        console.log("recharge status", res.data);
        // show success toast
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Your Wallet has been recharged",
          life: 3000,
        });
      })
      .catch((err) => {
        console.log("err", err);
        toast.current.show({
          severity: "error",
          summary: "Recharge Failed",
          detail: "Wallet Recharge has failed. Please try again.",
          life: 3000,
        });
      });
    onHideModal();
  };

  const onShowModal = () => {
    setShowModal(true);
  };

  const onHideModal = () => {
    setShowModal(false);
  };

  const renderModalFooter = () => {
    return (
      <Div>
        <ButtonPrimary label="Cancel" onClick={() => onHideModal()} />
        <ButtonTertiary
          label="Confirm"
          onClick={() => rechargeWallet()}
          autoFocus
        />
      </Div>
    );
  };

  return (
    <Container minHeight={"80vh"}>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>TRANSACTIONS</P>
        <P>
          <Span>WALLET BALANCE</Span> {walletBalance} INR
        </P>
        <Input
          placeholder="Enter the amount you want to recharge"
          type="text"
          mt={2}
          p={3}
          onChange={(e) => setRechargeAmount(e.target.value)}
        />
        <ButtonSecondary
          onClick={() => onShowModal()}
          label="PROCEED TO RECHARGE"
          mt={3}
        />

        <hr style={{ width: "100%" }} />

        <P>WITHDRAWAL ELIGIBILITY</P>
        <P>
          <Span>WALLET BALANCE</Span>
        </P>
        <ProgressBar value={30} mt={3} />
        <Input
          placeholder="Enter the amount you want to withdraw"
          type="text"
          mt={3}
          p={3}
        />
        <ButtonSecondary label="PROCEED TO WITHDRAW" mt={3} />
      </Div>
      <Dialog
        header="Confirm Action"
        visible={showModal}
        onHide={() => onHideModal()}
        breakpoints={{ "960px": "75vw" }}
        width={"50vw"}
        footer={renderModalFooter("displayResponsive")}
      >
        <P>{Constants.MODAL_ACTION_CONFIRMATION}</P>
      </Dialog>
      <Toast ref={toast} />
    </Container>
  );
};

export default Transactions;

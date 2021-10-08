import React, { useState, useRef } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { Input } from "../components/Input";
import axios from "axios";
import * as Constants from "../utils/Constants";
import { Dialog } from "../components/Dialog";
import { Toast } from "../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { walletUpdate } from '../store/actions/dashboardAction';
import request from '../utils/interceptor'
const Transactions = (props) => {
  const toast = useRef(null);
  const [rechargeAmount, setRechargeAmount] = useState("")
  const [withDrawlAmount, setWithDrawlAmount] = useState("")
  const [actionType, setActionType] = useState("")
  const [showModal, setShowModal] = useState(false);
  const { wallet_balance } = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const makeTransaction = () => {
    const transactionAmount = actionType === 'recharge' ? rechargeAmount : withDrawlAmount
    request
      .post(`/api/wallet/${actionType}`, { transactionAmount })
      .then((res) => {
        console.log('recharge',res)
        dispatch(walletUpdate(res.data.wallet_balance))
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

  const onShowModal = (actionType) => {
    setActionType(actionType)
    if(actionType==='withdrawl' && withDrawlAmount===""){return}
    if(actionType==='recharge' && rechargeAmount===""){return}
    setShowModal(true);
  };

  const onHideModal = () => {
    setActionType('')
    setShowModal(false);
  };

  const renderModalFooter = () => {
    return (
      <Div>
        <ButtonPrimary label="Cancel" onClick={() => onHideModal()} />
        <ButtonTertiary
          label="Confirm"
          onClick={() => makeTransaction()}
          autoFocus
        />
      </Div>
    );
  };

  return (
    <Container minHeight={"80vh"}>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>TRANSACTIONS</P>
        <Input
          placeholder="Enter the amount you want to recharge"
          type="text"
          mt={2}
          p={3}
          onChange={(e) => setRechargeAmount(e.target.value)}
        />
        <ButtonSecondary
          onClick={() => onShowModal('recharge')}
          label="PROCEED TO RECHARGE"
          mt={3}
        />

        <hr style={{ width: "100%" }} />
        <p>{wallet_balance}</p>
        <P>WITHDRAWAL ELIGIBILITY</P>
        <ProgressBar value={(Number(wallet_balance) / 10000) * 100} mt={3} />
        <Input
          placeholder="Enter the amount you want to withdraw"
          type="text"
          mt={3}
          onChange={(e) => setWithDrawlAmount(e.target.value)}
          p={3}
        />
        <ButtonSecondary onClick={() => onShowModal('withdrawl')} label="PROCEED TO WITHDRAW" mt={3} />
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

import React, { useState, useRef, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { Input } from "../components/Input";
import * as Constants from "../utils/Constants";
import { Dialog } from "../components/Dialog";
import { Toast } from "../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import {
  walletUpdate,
  fetchWalletUpdate,
} from "../store/actions/dashboardAction";
import request from "../utils/interceptor";
const Transactions = () => {
  const toast = useRef(null);
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [withDrawlAmount, setWithDrawlAmount] = useState("");
  const [actionType, setActionType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { wallet_balance } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWalletUpdate());
  }, [dispatch]);

  /**
   * @description - callback is triggered for recharge/withdrawl of money into/from wallet
   * @returns {any}
   */
  const makeTransaction = () => {
    const transactionAmount =
      actionType === "recharge" ? rechargeAmount : withDrawlAmount;
    request
      .post(`/api/wallet/${actionType}`, { transactionAmount })
      .then((res) => {
        if (res.data.sucess) {
          dispatch(walletUpdate(res.data.wallet_balance));
          // show success toast
          toast.current.show({
            severity: "success",
            summary: "Transaction Success",
            detail: "Your Transaction is successful.",
            life: 3000,
          });
        }
        else{
          throw Error
        }
      })
      .catch(() => {
        toast.current.show({
          severity: "error",
          summary: "Transaction Failed",
          detail: "Wallet Transaction has failed. Please try again.",
          life: 3000,
        });
      });
    onHideModal();
  };

  /**
   * @description- callback is used to set actionType(recharge/withdrawl) when confirmation modal opens
   * @param {any} actionType
   * @returns {any}
   */
  const onShowModal = (actionType) => {
    setActionType(actionType);
    if (actionType === "withdrawl" && withDrawlAmount === "") {
      return;
    }
    if (actionType === "recharge" && rechargeAmount === "") {
      return;
    }
    setShowModal(true);
  };

  /**
   * @description - callback to close the modal
   * @returns {any}
   */
  const onHideModal = () => {
    setActionType("");
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
  const withdrawlPercentage = (Number(wallet_balance) / 10000).toFixed(4) * 100;
  const withDrawalLimit = ((withdrawlPercentage) - 100) * 100
  return (
    <Container minHeight={"80vh"}>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>TRANSACTIONS</P>
        <Input
          placeholder="Enter the amount you want to recharge"
          type="number"
          value={rechargeAmount}
          mt={2}
          p={3}
          onChange={(e) => setRechargeAmount(e.target.value)}
        />
        <ButtonSecondary
          onClick={() => onShowModal("recharge")}
          label="PROCEED TO RECHARGE"
          disabled={rechargeAmount == "" || rechargeAmount<=0}
          mt={3}
        />

        <hr style={{ width: "100%" }} />
        <P>WITHDRAWAL ELIGIBILITY</P>
        <ProgressBar
          value={withdrawlPercentage > 100 ? 100 : withdrawlPercentage}
          mt={3}
        />
        <Input
          placeholder="Enter the amount you want to withdraw"
          type="number"
          value={withDrawlAmount}
          mt={3}
          onChange={(e) => setWithDrawlAmount(e.target.value)}
          p={3}
        />
        <ButtonSecondary
          onClick={() => onShowModal("withdrawl")}
          label="PROCEED TO WITHDRAW"
          disabled={withDrawalLimit< withDrawlAmount || withDrawlAmount<1000}
          mt={3}
        />
      </Div>
      <Dialog
        header="Confirm Action"
        visible={showModal}
        onHide={() => onHideModal()}
        breakpoints={{ "960px": "75vw" }}
        width={"50vw"}
        footer={renderModalFooter("displayResponsive")}
      >
        <P>{actionType ==="recharge" ? `Recharging with ${rechargeAmount} will give you ${rechargeAmount*1000} credit points`:
        `${Number(withDrawlAmount/1000).toFixed(4)} INR will be credited to your account on withdrawal of ${withDrawlAmount} credit points` }</P>
        <P>{Constants.MODAL_ACTION_CONFIRMATION}</P>
      </Dialog>
      <Toast ref={toast} />
    </Container>
  );
};

export default Transactions;

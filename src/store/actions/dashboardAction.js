import * as actionTypes from "../actionTypes/dashboardActionTypes";
import request from "../../utils/interceptor";
import { LogError } from "../../utils/SentryUtils";

export const fetchMyDashoardDetails = () => (dispatch) => {
  request
    .get("/api/dashboard/myDashboard")
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_MY_DASHBOARD_DETAILS,
        payload: res.data.order,
      });
    })
    .catch((err) => LogError(err));
};

export const updateMyportfolio = (requestObj) => (dispatch) => {
  request
    .post("/api/dashboard/create_order", requestObj)
    .then((res) => {
      dispatch(walletUpdate(res.data.newBalance));
      dispatch({
        type: actionTypes.ADD_TO_MY_PORTFOLIO,
        payload: requestObj.data,
      });
    })
    .catch((err) => LogError(err));
};

export const fetchWalletUpdate = () => (dispatch) => {
  request
    .get("/api/wallet/info")
    .then((res) => {
      dispatch(walletUpdate(res.data.wallet_balance));
    })
    .catch((err) => LogError(err));
};

export const walletUpdate = (newBalance) => {
  return { type: actionTypes.UPDATE_WALLET, payload: newBalance };
};

export const fetchLiveStockPrice = () => (dispatch) => {
  request
    .get("/api/stocks/livePrices")
    .then((res) => {
      dispatch({
        type: actionTypes.UPDATE_LIVE_STOCK_DATA,
        payload: res.data.liveStocksData,
      });
      dispatch({
        type: actionTypes.UPDATE_MY_PORTFOLIO_CURRENT_PRICE,
        payload: res.data.liveStocksData,
      });
    })
    .catch((err) => LogError(err));
};

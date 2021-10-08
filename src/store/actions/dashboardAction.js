import * as actionTypes from '../actionTypes/dashboardActionTypes';
import axios from 'axios';

export const fetchMyDashoardDetails = () => dispatch => {
  axios.get('/api/dashboard/myDashboard')
    .then((res) => {
      dispatch({ type: actionTypes.FETCH_MY_DASHBOARD_DETAILS, payload: res.data.order })
    })
    .catch((err) => console.log('myDashboard err', err))
}

export const updateMyportfolio = (requestObj) => dispatch => {
  axios.post('/api/dashboard/create_order', requestObj)
    .then((res) => {
      console.log('response', res.data,requestObj)
      dispatch(walletUpdate(res.data.newBalance))
      dispatch({ type: actionTypes.ADD_TO_MY_PORTFOLIO, payload: requestObj.data })

    })
    .catch((err) => console.log('create_order err', err))
}

export const walletUpdate = (newBalance) => {
  return { type: actionTypes.UPDATE_WALLET, payload:newBalance }
}

export const fetchLiveStockPrice = () => dispatch => {
  axios.get('/api/stocks/livePrices')
    .then((res) => {
      console.log("fetchLiveStockPrice", res.data.liveStocksData)
      dispatch({ type: actionTypes.UPDATE_LIVE_STOCK_DATA, payload: res.data.liveStocksData })
    })
    .catch((err) => console.log('myDashboard err', err))
}
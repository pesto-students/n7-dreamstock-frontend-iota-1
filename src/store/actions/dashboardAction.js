import * as actionTypes from '../actionTypes/dashboardActionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/Constants';

export const fetchMyDashoardDetails = () => dispatch =>{
    axios.get(BACKEND_URL + '/api/dashboard/myDashboard')
    .then((res)=>{
      dispatch({type:actionTypes.FETCH_MY_DASHBOARD_DETAILS, payload:res.data})
    })
    .catch((err)=>console.log('myDashboard err',err))
}

export const updateMyportfolio = (requestObj) => dispatch =>{
    axios.post(BACKEND_URL + '/api/dashboard/create_order', requestObj)
      .then((res) => {
          dispatch({type:actionTypes.ADD_TO_MY_PORTFOLIO,payload:res.data.order})
        })
      .catch((err) => console.log('create_order err', err))
}

export const fetchLiveStockPrice = () =>dispatch =>{
  axios.get(BACKEND_URL + '/api/stocks/livePrices')
  .then((res)=>{
    console.log("fetchLiveStockPrice",res.data.liveStocksData)
    dispatch({type:actionTypes.UPDATE_LIVE_STOCK_DATA, payload:res.data.liveStocksData})
  })
  .catch((err)=>console.log('myDashboard err',err))
}
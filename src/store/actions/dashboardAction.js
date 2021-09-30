import * as actionTypes from '../actionTypes/dashboardActionTypes';
import axios from 'axios';

export const fetchMyDashoardDetails = () => dispatch =>{
    axios.get('/api/dashboard/myDashboard')
    .then((res)=>{
      console.log("myDashboard",res.data)
      dispatch({type:actionTypes.FETCH_MY_DASHBOARD_DETAILS, payload:res.data})
    })
    .catch((err)=>console.log('myDashboard err',err))
}

export const updateMyportfolio = (requestObj) => dispatch =>{
    axios.post('/api/dashboard/create_order', requestObj)
      .then((res) => {
          console.log("create_order", res.data.order)
          dispatch({type:actionTypes.ADD_TO_MY_PORTFOLIO,payload:res.data.order})
        })
      .catch((err) => console.log('create_order err', err))
}
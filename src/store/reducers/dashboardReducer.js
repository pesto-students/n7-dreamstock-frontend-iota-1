import * as actionTypes from '../actionTypes/dashboardActionTypes';

const initialState = {
    myCurrentPortfolio: [],
    selectedStockInfo: {}
};

export default function (state = initialState, action) {
    switch (action.types) {
        case actionTypes.FETCH_MY_DASHBOARD_DETAILS:
            return {
                ...state,
                myCurrentPortfolio: action.payload
            }
        case actionTypes.SELECTED_STOCK_DETAILS:
            return {
                ...state,
                selectedStockInfo: action.payload
            }
        default:
            return state;
    }
}
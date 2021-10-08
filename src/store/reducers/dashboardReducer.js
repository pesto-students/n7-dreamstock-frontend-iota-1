import * as actionTypes from '../actionTypes/dashboardActionTypes';

const initialState = {
    myCurrentPortfolio: [],
    selectedStockInfo: {},
    livestockData: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MY_DASHBOARD_DETAILS:
            return {
                ...state,
                myCurrentPortfolio: action.payload
            }
        case actionTypes.ADD_TO_MY_PORTFOLIO:
            return {
                ...state,
                myCurrentPortfolio: [...state.myCurrentPortfolio, ...action.payload]
            }
        case actionTypes.UPDATE_LIVE_STOCK_DATA:
            return {
                ...state,
                livestockData: action.payload
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
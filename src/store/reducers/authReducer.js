import * as actionTypes from "../actionTypes/authActionTypes";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case actionTypes.LOG_OUT_USER:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };
    case actionTypes.UPDATE_WALLET:
      return {
        ...state,
        user: {
          ...state.user,
          wallet_balance: Number(action.payload).toFixed(2),
        },
      };
    default:
      return state;
  }
}

import * as actionTypes from '../actionTypes/authActionTypes';

const initialState = {
    isAuthenticated: false,
    user: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOG_IN_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };

        case actionTypes.LOG_OUT_USER:
            return {
                ...state,
                user: {},
                isAuthenticated: false
            };

        default:
            return state;
    }
}

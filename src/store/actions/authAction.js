import * as actionTypes from '../actionTypes/authActionTypes';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const initiateUserLogin = (payload) => dispatch => {
    axios.post('/api/users/login', payload)
        .then((res) => {
            // Save to localStorage
            console.log('api respose', res)
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            console.log('initiateUserLogin', decoded)
            dispatch(setCurrentUser(decoded));
        }
        )
        .catch(err =>
            console.log('auth err', err)
            // dispatch({
            //     type: actionTypes.GET_ERRORS,
            //     payload: err.response.data
            // })
        );
}

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: actionTypes.SET_USER_DATA,
        payload: decoded.user
    };
};

export const logOutCurrentUser = () => {
    return {
        type: actionTypes.LOG_OUT_USER,
    };
}


// Log user out
export const logoutUser = () => dispatch => {
    console.log('logoutUser')
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(logOutCurrentUser());
};
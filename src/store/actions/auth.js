import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    console.log(email);
    console.log(password);
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: email,
            password: password,
        };
        console.log("object ", authData);
        const authData1 = JSON.stringify(authData)
        console.log("string ", authData1);
        let url = 'http://localhost:8080/api/auth/signin';
        // if (!isSignup) {
        //     url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
        // }
        axios.post(url,  authData1, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log("auth data", response);
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.id);
                console.log("auth login ", localStorage)


                dispatch(authSuccess(response.data.accessToken, response.data.id));
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        console.log ("auth actions authCheckState ", token )
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};

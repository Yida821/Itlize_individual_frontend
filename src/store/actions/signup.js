import axios from 'axios';
// import { act } from 'react-dom/test-utils';

import * as actionTypes from './actionTypes';

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    };
};

export const signupFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    };
};

export const signupSuccess = () =>{
    return {
        type : actionTypes.SIGNUP_SUCCESS, 
        success : true
    }
}

export const setSignUpRedirectPath = (path) =>{
    console.log("signup action setSignUpRedirectPath: path is ", path)
    return {
        type :actionTypes.SET_SIGNUP_REDIRECT_PATH,
        path : path

    }
}


export const signup = (username, email, password, role) => {
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(role);

    return dispatch => {
        dispatch(signupStart());
        const authData = {

            username: username,
            email : email,
            password: password,
            role : role,
        };
        console.log("object ", authData);
        const authData1 = JSON.stringify(authData)
        console.log("string ", authData1);
        let url = 'http://localhost:8080/api/auth/signup';

        axios.post(url,  authData1, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log("signup data", response);
                
                dispatch(signupSuccess());
                //dispatch(checkAuthTimeout(3600));
            })
            .catch(err => {
                dispatch(signupFail(err.response.data.error));
            });
    };


};
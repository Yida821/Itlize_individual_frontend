import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
   
    error: null,
    loading: false,
    success : false,
    fail : false,
    signupRedirectPath: '/'

};


const signupStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};


const setSignUpRedirectPath =( state, action) => {
    console.log("signup reducer setSignUpRedirectPath action: " , action);
    return updateObject(state, 
        {
            signupRedirectPath : action.path
        })
}


const signupSuccess = (state, action) => {
    console.log("signup reducer action: " , action);
    return updateObject( state, { 
        success : true,
        error: null,
        loading: false,
        fail : false,
     
     } );
};

const signupFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
        success : false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SIGNUP_START: return signupStart(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAIL: return signupFail(state, action);
        case actionTypes.SET_SIGNUP_REDIRECT_PATH: return  setSignUpRedirectPath(state, action)
    
        default:
            return state;
    }
};

export default reducer;
// import axios from 'axios';
// import { act } from 'react-dom/test-utils';

import * as actionTypes from './actionTypes';

export const setSelectedProduct = (product) => {
    return {
        type : actionTypes.PRODUCT_SETSELECTEDPRODUCT,
        product : product
    }
}

export const setProductRedirectPath = (path) => {
    return {
        type : actionTypes.SET_PRODUCT_REDIRECT_PATH,
        path : path
    }
}

export  const setComparedProduct = (product)=> {
    return {
        type : actionTypes.SET_COMPARED_PRODUCT,
        product : product
    }
}

export const setCompareClicked = () => {
    return {
        type : actionTypes.SET_COMPARE_CLICKED,
    }

}

export const setRedirectToCompare = (path) => {
    return {
        type : actionTypes.SET_REDIRECT_TO_COMPARE,
        path : path
    }

}
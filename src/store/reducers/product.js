import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    comparedProducts : [],
    selectedProduct : null,
    productRedirectPath: '/',
    redirectToCompare: '/',
    compareClicked : false

}

const setRedirectToCompare = (state, action) => {
    console.log("Product Reducer set redirect to compare : " , action);
    return updateObject(state, {
        redirectToCompare : action.path
    })
}

const setCompareClicked = (state, action ) => {
    console.log("Product Reducer set compare clicked: " , action);
    return updateObject(state, {
        compareClicked : true
    })

}
const setComparedProduct =(state, action ) => {
    console.log("Product Reducer set compared product: " , action);
    let setComparedProduct = [...state.comparedProducts]
    console.log("setComparedProduct", setComparedProduct)
    setComparedProduct.push(action.product)
    return updateObject (state, {
        comparedProducts : setComparedProduct
    })

    
}
const setSelectedProduct = (state, action) => {
    console.log("Product Reducer set selected product: " , action);
    return updateObject (state, {
        selectedProduct : action.product
    })
}

const setProductRedirectPath = (state, action) => {
    console.log("Product Reducer set  product redirect path: " , action); 
    return updateObject (state, {
        productRedirectPath : action.path
    })

}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PRODUCT_SETSELECTEDPRODUCT:  return setSelectedProduct(state, action);
        case actionTypes.SET_PRODUCT_REDIRECT_PATH: return setProductRedirectPath(state, action);
        case actionTypes.SET_COMPARED_PRODUCT: return setComparedProduct(state, action );
        case actionTypes.SET_COMPARE_CLICKED: return setCompareClicked(state, action);
        case actionTypes.SET_REDIRECT_TO_COMPARE: return setRedirectToCompare(state, action);
        default:
            return state;
    }
}

export default reducer;
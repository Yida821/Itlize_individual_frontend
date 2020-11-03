import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    category : [],
    currentCategory : "mechanical",
    subCategory : null,
    productList : [], 
    error: null,
    searchRedirectPath: '/',
    haveProductList : false
};

const haveProductList = (state, action) => {
    console.log("have product list" , action);
    return updateObject( state, {
        haveProductList : action.haveProductList
    } );
}

const setSearchRedirectPath = (state, action) => {
    console.log("set search the redirect path " , action);
    return updateObject( state, {
        searchRedirectPath : action.path
    } );
}

const getUniqueCategory = ( state, action ) => { 
    console.log("search get unique category action creation: " , action);
    return updateObject( state, {
        category : action.category
    } );

}

const getUniqueCategoryFail = (state, action) => {
    console.log("search get unique category action creation failter: " , action);
    return updateObject(state, {
        error : action.error
    })
}

const getSubCategory = (state, action) => {
    console.log("set sub category action creation : " , action);
    return updateObject (state,
        {
            subCategory : action.subCategory
        })
}


const setProductList = (state, action) => {
    console.log("set product list: " , action);
    return updateObject(state, 
        {
            productList : action.productList
        })
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEARCH_GET_UNIQUE_CATEGORY: return getUniqueCategory(state, action);
        case actionTypes.SEARCH_GET_UNIQUE_CATEGORY_FAIL: return getUniqueCategoryFail(state, action);
        case actionTypes.SEARCH_GET_SUB_CATEGORY: return getSubCategory(state, action);
        case actionTypes.SEARCH_GET_PRODUCTS_CATEGORY_SUBCATEGORY: return  setProductList(state, action)
        case actionTypes.SET_SEARCH_REDIRECT_PATH: return setSearchRedirectPath(state, action)
        case actionTypes.SEARCH_HAVE_PRODUCT_LIST: return  haveProductList(state, action)
        default:
            return state;
    }
}

export default reducer;
import axios from 'axios';

import * as actionTypes from './actionTypes';


export const haveProductList = () => {
    return {
        type : actionTypes.SEARCH_HAVE_PRODUCT_LIST,
        haveProductList : true
    }
}
export const setSearchRedirectPath = (path) => {
    return {
        type : actionTypes.SET_SEARCH_REDIRECT_PATH,
        path : path
    }

}

export const getUniqueCategory = (category) => {
    return  {
        type : actionTypes.SEARCH_GET_UNIQUE_CATEGORY,
        category : category
    }
}

export const getUniqueCategoryFail = (error) => {

    return {
        type: actionTypes.SEARCH_GET_UNIQUE_CATEGORY_FAIL,
        error : error
    }

}

export const getSubCategory = (subCategory) => {
    console.log(subCategory)

    return {
        type : actionTypes.SEARCH_GET_SUB_CATEGORY,
        subCategory : subCategory
    }

}

export const setProductList = (productList) => {

    return {
        type : actionTypes.SEARCH_GET_PRODUCTS_CATEGORY_SUBCATEGORY,
        productList : productList
    }

}

export const getProductLList = (category, subCategory) => {


    return dispatch => {
       
       
        let part1 = 'http://localhost:8080/product/findProductByCategoryNameAndSubCategoryName?categoryName=';
        let part2 = '&subCategoryName=';
        let url  = part1 + category + part2 + subCategory;
        axios.get(url)
            .then(response => {
                console.log("Search category and sub category data", response);
                //update state category
                console.log("Search category sub category data response ", response.data)
                dispatch(setProductList(response.data));
                dispatch(haveProductList())
                
                
            })
            .catch(err => {
                // dispatch(getUniqueCategoryFail(err.response.data.error));
            });
    };


}

export const searchUniqueCate = () => {
    return dispatch => {
       
       
        let url = 'http://localhost:8080/product/findDistinctByCategoryName';

        axios.get(url)
            .then(response => {
                console.log("Search category data", response);
                //update state category
                console.log("Search category data response ", response.data)
                dispatch(getUniqueCategory(response.data));
                
                
            })
            .catch(err => {
                dispatch(getUniqueCategoryFail(err.response.data.error));
            });
    };
}


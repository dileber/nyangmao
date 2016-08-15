/**
 * Created by jing on 2016/8/10.
 */
import * as types from './actionType';

export function  fetchCategories (){
    let URL = 'http://food.boohee.com/fb/v1/categories/list';
    return dispatch => {
        dispatch(fetchCategoryList());
        dispatch(URL);
    }
}

function  fetchCategoryList () {
    return {
        type: types.TEST_LIST,
    }
}

function  receiveCategoryList (categoryList) {
    return {
        type: types.TEST_LIST,
        categoryList: categoryList,
    }
}
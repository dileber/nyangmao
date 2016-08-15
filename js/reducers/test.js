/**
 * Created by jing on 2016/8/9.
 */
import * as types from '../actions/actionType';
//可以看到initialState是初始的状态，然后通过不同的type来更新state。这里state是全新的state，并不是在已有state的引用上改变数据
const initialState = {
    categoryList: [],
    isLoading: true,
}


let foodsReducer = (state = initialState, action)=>{

    switch (action.type) {
        case types.TEST_LIST:
            return Object.assign({}, state, {
                categoryList: action.categoryList,
                isLoading: false,
            })
        default:
            return state
    }
}

export default foodsReducer;
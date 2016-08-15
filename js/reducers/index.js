/**
 * Created by jing on 2016/8/9.
 */
import { combineReducers } from 'redux'

import test from './test'
import login from './login'

const reducers = combineReducers({
    test,
    login
})

export default reducers
/**
 * Created by jing on 2016/8/12.
 */
import * as types from './actionType';

import {get,apilogin} from '../utils/NetUtils';

export function  mlogin (username,password){
    return dispatch => {
        dispatch(login());
        dispatch(()=>{
            if( username&&password){
                get(apilogin+"?apptype=0&loginname="+username+"&userpass="+password,function(e){
                    if(e.state==1){
                        console.warn(e.data);
                        loginUserList(e.data);
                    }else{
                        console.warn(e.msg);
                        login();
                    }
                },function(e){
                    console.warn(e);
                    login();
                });
            }else{
                console.warn('数据不能为空');
            }
        });
    }
}

function  login () {
    return {
        type: types.LOGIN,
    }
}

function  loginUserList (userList) {
    return {
        type: types.LOGIN,
        userList: userList,
    }
}
/**
 * Created by jing on 2016/8/11.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import Button from '../components/MButton';

import {get,apilogin} from '../utils/NetUtils';

import *as loginAction from '../actions/loginAction';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onPress() {

        //if( this.state.username&&this.state.password){
        //    get(apilogin+"?apptype=0&loginname="+this.state.username+"&userpass="+this.state.password,function(e){
        //        if(e.state==1){
        //            console.warn(e.data);
        //        }else{
        //            console.warn(e.msg);
        //        }
        //    },function(e){
        //        console.warn(e);
        //    });
        //}else{
        //    console.warn('数据不能为空');
        //}

        const { mlogin } = this.props;
        mlogin(this.state.username,this.state.password);

    }
    render() {
        return (
            <View>
                <TextInput
                    style={[styles.h]}
                    placeholder="用户名"
                    onChangeText={(username) => this.setState({username})}
                />

                <TextInput
                    style={[styles.h]}
                    placeholder="密码"
                    onChangeText={(password) => this.setState({password})}
                />
                <Button
                    underlayColor='#4169e1'
                    style={styles.style_view_button}
                    onPress={() => this.onPress()}
                    text='登录'>
                </Button>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    h:{
        height: 40
    },
    style_view_button:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        borderColor:'#5bc0de',
        height:45,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default connect(state => ({
        isLoading:state.login.isLoading,
        userList:state.login.userList
    }),
    (dispatch) => ({
        ...bindActionCreators(loginAction, dispatch),
    })
)(Login);
/**
 * Created by jing on 2016/8/9.
 */
import React, { Component } from 'react';


import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCategories} from '../actions/testAction';
import {h,w,splash} from '../utils/ViewUtils';
import Login from './Login';

//const splash = require("../img/splash.png");
import {
    StyleSheet,
    Image,
    Text,
    Linking,
    View,
    Navigator,
    MySceneComponent
} from 'react-native';



export default class ShowTest extends Component {

    componentDidMount() {

        this.timer = setTimeout(() => {
            const { navigator } = this.props;
            console.warn('EEEEE'+navigator)

            navigator.resetTo({
                component: Login,
                name: 'Login'
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {


        return (
            <View

            >
                <Image
                    style={[styles.image]}
                    source={splash}
                />
            </View>
        );
    }
}


var styles = StyleSheet.create({
    image:{
        width:w,
        height:h,
    },
});
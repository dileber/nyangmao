/**
 * Created by jing on 2016/8/9.
 */
import React, { Component } from 'react';
import App from './app';
import store from './store/store';
import { Provider } from 'react-redux'


export default class Root extends Component {

    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}


//
//global.log = (...args) => {
//    console.log('------------------------------');
//    console.log(...args);
//    console.log('------------------------------');
//    return args[args.length - 1];
//};

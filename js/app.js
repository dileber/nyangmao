/**
 * Created by jing on 2016/8/9.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    Navigator} from 'react-native';
import ShowTest from './containers/ShowTest';
class HelloWorldApp extends Component {

    render() {
        return (
            <View
                style={{flex:1}}
            >

                <Navigator

                    configureScene={()=>{
                        return  Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    }}
                    initialRoute={{
                    component: ShowTest,
                    name: 'ShowTest'
                    }}
                />
            </View>
        );
    }
}

export default  HelloWorldApp;
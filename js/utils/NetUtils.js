/**
 * Created by jing on 2016/8/12.
 */
/*
 * fetch简单封装
 * url: 请求的URL
 * successCallback: 请求成功回调
 * failCallback: 请求失败回调
 *
 * */

export const apilogin = "api/mizi/login";

const HOST = 'http://114.112.159.230:8080/';

export const get = (url, successCallback, failCallback) => {
    fetch(HOST+url)
        .then((response) => response.text())
        .then((responseText) => {
            successCallback(JSON.parse(responseText));
        })
        .catch((err) => {
            failCallback(err);
        });
};
import axios from "axios";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { getToken } from "./tools";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    // timeout: 5000, // 超时时间
});

// 全局拦截，处理网络请求和相应的拦截，所有的项目中发起的请求都会经过这些拦截函数
// Add a request interceptor
// 全局请求拦截，网络请求发起之前进行，可以设置我们需要的自定义的请求数据
//  比如：请求头中加token
instance.interceptors.request.use(
    function(config) {
        NProgress.start(); // 开启进度条
        // Do something before request is sent
        // 不同的服务器接口中token的名字可能不同，需要根据文档来
        config.headers.authorization = "Bearer " + getToken(); // 设置token
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
// 全局响应拦截
//  处理请求结果和状态码
instance.interceptors.response.use(
    function(response) {
        NProgress.done(); // 结束进度条
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // console.log(response);
        return response.data;
    },
    function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // console.dir(error);
        // 拦截401，如果未授权直接跳转登录页
        NProgress.done();
        if (error.response && error.response.status == 401) {
            window.location.href = "/#/login";
        }
        return Promise.reject(error);
    }
);

/**
 * 发起get请求
 * @param {*} url
 * @param {*} params
 */
export const get = (url, params) =>
    instance.get(url, {
        params,
    });

/**
 * 发送post请求
 * @param {*} url
 * @param {*} data
 */
export const post = (url, data) => instance.post(url, data);

export default instance;
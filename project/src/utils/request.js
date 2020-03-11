/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import CryptoJS from 'crypto-js';
import { message } from 'antd';
import router from 'umi/router';
import { clearLocalData } from '../utils/utils';
// import { notification } from 'antd';
// import { message } from 'antd';
// import router from 'umi/router';
// import Cookie from 'js-cookie';
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（用户名、密码错误、登录已失效）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 配置request请求时的默认参数
 */

const request = extend({
  // errorHandler,
  prefix: '/',
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.response.use(async response => {
  if (response.status === 200) {
    const data = await response.clone().json();
    if (data.code === 200) {
      return response;
    } else if (data.code === 401) {
      message.error('用户登录失效，请重新登录');
      setTimeout(() => {
        clearLocalData();
        router.push('/login');
      }, 2000);
    } else {
      message.error(data.msg || '服务器发生未知错误');
    }
    throw new Error(data.msg);
  }
  clearLocalData();
  throw new Error(codeMessage[response.status] || '服务器发生未知错误');
});

request.interceptors.request.use((url, options) => {
  let headers = {};
  if (url !== '/exam/login') {
    headers = { Authorization: localStorage.getItem(CryptoJS.MD5('authorization').toString()) };
  }
  return {
    url: url,
    options: {
      ...options,
      headers,
    },
  };
});

export default request;

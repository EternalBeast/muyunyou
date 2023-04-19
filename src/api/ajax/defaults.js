// 常量
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from "./constants.js";

// 默认参数
const DEFAULTS = {
    method: HTTP_GET,
    // 请求头携带数据
    params: null,
    // 请求体携带数据
    data: null,
    
    contentType: CONTENT_TYPE_FORM_URLENCODED,

    responseType: '',
    // 超时时间，0为不设置
    timeoutTime: 0,
    // 是否携带cookie
    withCredentials: false,

    // 方法
    success() {},
    httpCodeError() {},
    error() {},
    abort() {},
    timeout() {}
}

export { DEFAULTS };
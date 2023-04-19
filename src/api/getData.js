import {
    getJSON
} from './ajax';

import {
    TIMEOUT,
    SUCC_CODE
} from './config';

// 获取数据
const getData = (url, options) => {
    // {
    //     code: 200,
    //     data: []
    // }
    const ajaxPromise = getJSON(url, {
        timeoutTime: TIMEOUT,
        ...options
    });
    const resultPromise = ajaxPromise.then(response => {
        if (response.code !== SUCC_CODE) throw new Error(`出错了：${response.code}`);

        return response.data;
    }).catch(err => {
        console.log(err);
    });

    resultPromise.xhr = ajaxPromise.xhr;

    
    return resultPromise;
}

// 延时
const delay = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

// 获取延时数据
const getDelayedData = (url, options) => {
    return delay(500).then(() => {
        return getData(url, options);
    });
};

export {
    getData,
    getDelayedData
};
// 工具函数

// 数据序列化成urlencoded格式的字符串
const serialize = param => {
    const results = [];

    // 对象不可直接遍历，需要使用Object.entries()
    for (const [key, value] of Object.entries(param)) {
        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }

    // ['username=alex', 'age=18']

    return results.join('&');

    // 'username=alex&age=18'
};

//  数据序列化成 JSON 格式的字符串
const serializeJSON = param => {
    return JSON.stringify(param);
}

// 给URL添加参数
const addURLData = (url, data) => {
    if (!data) return '';

    const mark = url.includes('?') ? '&' : '?';

    return `${mark}${data}`;
};

export { serialize, serializeJSON, addURLData };
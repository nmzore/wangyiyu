//设置token
export const setToken = (token) => {
    return localStorage.setItem("token", token);
};
export const setCookie = (cookie) => {
    return localStorage.setItem("cookie", cookie);
};
export const getCookie = (cookie) => {
    return localStorage.setItem("cookie", cookie);
};
export const cunShzu = (shuzu) => {
    return localStorage.setItem("cunshuzu", shuzu);
};

//获取token
export const getToken = (token) => {
    return localStorage.getItem("token", token);
};

//判断是否登录
export const isLogined = () => {
    if (isLogined) {
        return true;
    } else {
        return false;
    }
};
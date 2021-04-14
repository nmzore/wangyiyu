import { post,get } from "../utils/request";

export function login(data) {
    return post("/login/cellphone", data);
}
export function reg(data) {
    return get("/register/cellphone", data);
}
export function zhuce(data) {
    return get("/captcha/sent", data);
}
// 用户信息接口
export function yonghu(data) {
    return get("/user/account", data);
}
// 我喜欢的音乐接口
export function likelist(data) {
    return get("/likelist", data);
}
// 获取歌曲详情
export function songdetail(data) {
    return get("/song/detail",data)
}

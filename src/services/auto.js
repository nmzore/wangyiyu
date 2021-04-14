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
export function yonghu(data) {
    return get("/user/account", data);
}
export function gequ(data) {
    return get("/song/url", data);
}
export function xiangqing(data) {
    return get("/song/detail", data);
}

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
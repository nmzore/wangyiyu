import { post, get } from "../utils/request";

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
export function gequ(data) {
  return get("/song/url", data);
}
export function xiangqing(data) {
  return get("/song/detail", data);
}
// 我喜欢的音乐接口
export function likelist(data) {
  return get("/likelist", data);
}
// 获取歌曲详情
export function songdetail(data) {
  return get("/song/detail", data);
}
<<<<<<< HEAD
export function chaxun(data) {
    return get("/cloudsearch",data)
}
export function ree(data) {
    return get("/cloudsearch",data)
}
=======
// 获取歌曲详情
export function souso(data) {
  return get("/playlist/detail", data);
}
// 获取歌曲详情的音乐
export function musicUrl(data) {
  return get("/song/url", data);
}
//用户歌单
export function userplaylist(data) {
    return get("/user/playlist",data)
}
//收藏歌单
export function albumsublist(data) {
    return get("/album/sublist",data)
}
//热门歌单分类
export function toplist(data) {
    return get("/toplist",data)
}
//对歌单添加或删除歌曲
export function playlisttracks(data) {
    return get("/playlist/tracks",data)
}
//歌单详情
export function playlistdetail(data) {
    return get("/playlist/detail",data)
}
>>>>>>> 4b95d97e248f215788fb0cb0e6f47813ed7b9b04

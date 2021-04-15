import {
  get
} from "../../utils/request.js";

/**
 * 分页的形式获取数据
 * @param {*} page
 */

export function haoyouList(data) {
  return get('/recommend/songs', data)
}
// 每日推荐   /recommend/resource
export function tuijianList(data) {
  return get('/personalized/privatecontent/list', data)
}
//  去唱歌   猜你想唱
export function xiangchangList(data) {
  return get('/recommend/songs', data)
}
// 去唱歌   热门榜单   点歌榜
// /album/list/style     10个
// /user/playlist
// /search/hot/detail    20个
export function diangeList(data) {
  return get('user/playlist', data)
}
// 聊天室
// user/playlist?uid=32953014

export function liaotianList(data) {
  return get('user/playlist?uid=32953014', data)
}
// 欢乐K歌接口
export function huanleList(data) {
  return get('mv/all', data)
}
//推荐 /top/artists?offset=0&limit=30
export function tuijianerList(data) {
  return get('/top/artists?offset=0&limit=30', data)
}
// 获取   http://localhost:3000/event  threadId 参数
export function huoquList() {
  return get('/event')
}
// export function loadProducts(page = 1, product_category = "") {
//   return get("/api/v1/products", {
//     page,
//     product_category,
//   });
// }
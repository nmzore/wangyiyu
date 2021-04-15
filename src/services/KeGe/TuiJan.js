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
// export function loadProducts(page = 1, product_category = "") {
//   return get("/api/v1/products", {
//     page,
//     product_category,
//   });
// }
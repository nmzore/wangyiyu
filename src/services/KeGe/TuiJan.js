import {
  get
} from "../../utils/request.js";

/**
 * 分页的形式获取数据
 * @param {*} page
 */

export function loadList(page = 3, product_category = "") {
  return get("http://localhost:3000/related/playlist?id=1", {
    page,
    product_category
  });
}
// export function loadProducts(page = 1, product_category = "") {
//   return get("/api/v1/products", {
//     page,
//     product_category,
//   });
// }

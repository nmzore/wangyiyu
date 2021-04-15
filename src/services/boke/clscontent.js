// /dj/recommend/type
import {get} from "../../utils/request";

export function clscontent(data){
    return get('/dj/recommend',data)
}

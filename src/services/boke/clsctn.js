// /recommend/songs

import {get} from "../../utils/request";

export function clsctn(data){
    return get('/recommend/songs',data)
}
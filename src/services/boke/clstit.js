import {get} from "../../utils/request";

export function clsfen(data){
    return get('/dj/catelist',data)
}

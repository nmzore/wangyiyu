import {get} from "../../utils/request";

export function res(data){
    return get('/mv/all',data)
}


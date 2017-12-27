/**
 * Created by huang on 2017/12/27.
 */
import * as actionTypes from '../types/store';

export function update(data) {
    return{
        type:actionTypes.STORE_UPDATE,
        data:data
    }
}

export function add(iterm) {
    return{
        type:actionTypes.STROE_ADD,
        data:iterm
    }
}

export function rm(iterm) {
    return{
        type:actionTypes.STROE_RM,
        data:iterm
    }
}
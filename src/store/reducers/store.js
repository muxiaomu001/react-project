/**
 * Created by huang on 2017/12/27.
 */
import * as actionTypes from '../types/store';

const initialState = [];

export default function store(state=initialState, action) {
    switch (action.type){
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STROE_ADD:
            state.unshift(action.data);
            return state;
        case actionTypes.STROE_RM:
            return state.filter(iterm=>{
                if(iterm.id!==action.data.id){
                    return iterm;
                }
            });
        default:
            return state;
    }
}
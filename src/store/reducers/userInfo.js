import * as actionTypes from '../types/userInfo';

const initialState = {};

export default function userInfo(state=initialState, action) {
	switch (action.type){
		case actionTypes.USERINFO_LOGIN:
			return Object.assign({},state,action.data);;
		default:
			return state;
	}
}
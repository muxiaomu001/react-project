import * as actionTypes from '../types/userInfo';

export function login(data) {
	return {
		type:actionTypes.USERINFO_LOGIN,
		data
	}
}
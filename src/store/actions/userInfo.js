import * as actionTypes from '../types/userInfo';

export function update(data) {
	return {
		type:actionTypes.USERINFO_LOGIN,
		data
	}
}
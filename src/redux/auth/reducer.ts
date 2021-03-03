import * as ACTION_TYPES from './types'
import { User } from '@alstradocs/enterprise-auth/model';
import { EnterpriseAuthActions } from './types';


export type AuthState = {
	user?: User;
	isSignedIn: boolean
};

const initialState: AuthState = {
	isSignedIn: false
}


export const authReducer = (state: AuthState = initialState, action: EnterpriseAuthActions): AuthState => {
	switch(action.type){
		case ACTION_TYPES.SIGN_IN_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.SIGN_IN_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.SIGN_IN_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.SIGN_OUT_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.SIGN_OUT_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.SIGN_OUT_FAILURE: return {
			...state,
		}
		default: return state;
	}
}

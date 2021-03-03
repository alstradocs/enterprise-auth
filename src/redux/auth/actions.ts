import { User } from '@alstradocs/enterprise-auth/model'
import * as ACTION_TYPES from './types'

export const signInRequestAction = (payload: User): ACTION_TYPES.SignInRequestAction => {
	return ({
		type: ACTION_TYPES.SIGN_IN_REQUEST as typeof ACTION_TYPES.SIGN_IN_REQUEST,
		payload
	})
}

export const signInSuccessAction = (payload: User): ACTION_TYPES.SignInSuccessAction => {
	return ({
		type: ACTION_TYPES.SIGN_IN_SUCCESS as typeof ACTION_TYPES.SIGN_IN_SUCCESS,
		payload
	})
}

export const signInFailureAction = (payload: any): ACTION_TYPES.SignInFailureAction => {
	return ({
		type: ACTION_TYPES.SIGN_IN_FAILURE as typeof ACTION_TYPES.SIGN_IN_FAILURE,
		payload
	})
}

export const signOutRequestAction = (payload: User): ACTION_TYPES.SignOutRequestAction => {
	return ({
		type: ACTION_TYPES.SIGN_OUT_REQUEST as typeof ACTION_TYPES.SIGN_OUT_REQUEST,
		payload
	})
}

export const signOutSuccessAction = (payload: User): ACTION_TYPES.SignOutSuccessAction => {
	return ({
		type: ACTION_TYPES.SIGN_OUT_SUCCESS as typeof ACTION_TYPES.SIGN_OUT_SUCCESS,
		payload
	})
}

export const signOutFailureAction = (payload: any): ACTION_TYPES.SignOutFailureAction => {
	return ({
		type: ACTION_TYPES.SIGN_OUT_FAILURE as typeof ACTION_TYPES.SIGN_OUT_FAILURE,
		payload
	})
}

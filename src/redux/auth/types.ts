import { Action } from "@alstradocs/enterprise-core"

export const SIGN_IN_REQUEST = "auth/sign_in_request"
export const SIGN_IN_SUCCESS = "auth/sign_in_success"
export const SIGN_IN_FAILURE = "auth/sign_in_failure"
export const SIGN_OUT_REQUEST = "auth/sign_out_request"
export const SIGN_OUT_SUCCESS = "auth/sign_out_success"
export const SIGN_OUT_FAILURE = "auth/sign_out_failure"

export interface SignInRequestAction extends Action {
    type: typeof SIGN_IN_REQUEST
}
export interface SignInSuccessAction extends Action {
    type: typeof SIGN_IN_SUCCESS
}
export interface SignInFailureAction extends Action {
    type: typeof SIGN_IN_FAILURE
}
export interface SignOutRequestAction extends Action {
    type: typeof SIGN_OUT_REQUEST
}
export interface SignOutSuccessAction extends Action {
    type: typeof SIGN_OUT_SUCCESS
}
export interface SignOutFailureAction extends Action {
    type: typeof SIGN_OUT_FAILURE
}

export type EnterpriseAuthActions =  SignInRequestAction 
    | SignInSuccessAction
    | SignInFailureAction
    | SignOutRequestAction
    | SignOutSuccessAction
    | SignOutFailureAction;
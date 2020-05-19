import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../api/api';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null then captcha is not required
}

export type InitialStateType = typeof initialState;

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
        ({
            type: 'SN/auth/SET_USER_DATA', payload: { userId, email, login, isAuth }
        } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) =>
        ({
            type: 'SN/auth/GET_CAPCTHA_URL_SUCCESS', payload: { captchaUrl }
        } as const)
};

type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPCTHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
}

export const getAuthUserData = (): ThunkType => async (dispatch: any) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodeEnum.Success) {
        let { id, email, login } = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error';
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
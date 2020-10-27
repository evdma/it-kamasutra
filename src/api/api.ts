import axios from 'axios';
import { UserType } from '../types/types';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ff2d4b17-f862-4e6d-b0ef-104c9f3541ec"
    }
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}

import axios from 'axios';
import { ProfileType } from '../types/types';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "3bf7f882-c24f-4ac0-a51f-310107aa0c71"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data })
    },
    getProfile(userId: number) {
        profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put("profile", profile)
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodeEnum,
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    },
    resultCode: ResultCodeEnum | ResultCodeForCaptcha,
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>('auth/me').then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>('auth/login', { email, password, rememberMe, captcha }).then(response => response.data);
    },
    logout() {
        return instance.delete('auth/login');
    }
}

authAPI.me()

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url');
    }
}
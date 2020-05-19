import { profileAPI } from '../api/profile-api';
import { stopSubmit, FormAction } from 'redux-form';
import { ProfileType, PostType, PhotosType } from '../types/types';
import { InferActionsTypes, BaseThunkType } from './redux-store';

let initialState = {
    posts: [
        { id: 1, message: "How are you?", likesCount: 45 },
        { id: 2, message: "It is my first post", likesCount: 83 }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ""
};

export type InitialStateType = typeof initialState;

export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: "SN/PROFILE/ADD-POST", newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: "SN/PROFILE/SET_USER_PROFILE", profile }) as const,
    setStatus: (status: string) => ({ type: "SN/PROFILE/SET_STATUS", status } as const),
    deletePost: (postId: number) => ({ type: "SN/PROFILE/DELETE_POST", postId } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: "SN/PROFILE/SAVE_PHOTO_SUCCESS", photos } as const)
}

type ActionsType = InferActionsTypes<typeof actions>;

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST": {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case "SN/PROFILE/SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SN/PROFILE/SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SN/PROFILE/DELETE_POST": {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        }
        case "SN/PROFILE/SAVE_PHOTO_SUCCESS": {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        }
        default: return state;
    }
}

type ThunkType = BaseThunkType<ActionsType | FormAction>;

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0)
            dispatch(actions.setStatus(status));
    }
    catch (error) {

    }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0)
        dispatch(actions.savePhotoSuccess(data.data.photos))
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error('user id cant be null');
        }
    } else {
        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;
import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "758cb023-85d5-4d6f-b57c-b582ca51072a"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1,pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials:true}
        ).then(response => {return response.data})
    },
}

export const followAPI = {
    follow (userId) {
        return instance.post(`follow/${userId}`,
            {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "1fa83af9-7ad2-4fc9-a26b-5105ec579850"
                }
            }
        ).then(response => {return response.data})
    }
}

export const unfollowAPI = {
    unfollow (userId) {
        return instance.delete(`follow/${userId}`,{
            withCredentials: true,
            headers: {
                "API-KEY": "1fa83af9-7ad2-4fc9-a26b-5105ec579850"
            }
        }).then(response => {return response.data})
    }
}
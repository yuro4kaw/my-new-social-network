import axios from "axios";

let instance = axios.create(
     {
        withCredentials: true,
        headers: { "API-KEY": "55b25413-96d9-4c2c-8744-a301f778759f" },
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
     }
)

export const usersAPI = {
    requestUsers(page = 1, pageSize = 10) {
        return (instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data;
        }))
    },

    unfollow (userId) {
    return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        });
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

}

export const profileAPI = {
    setProfile (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data;
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
            .then(response => {
                return response.data;
            });
    },
}

export const authAPI = {
    authProfile() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    }

}
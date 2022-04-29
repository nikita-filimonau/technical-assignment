import fetch from "@/utils/fetch";
import API from "@/constants/api";

class UserService {
    loginUser(data){
        return fetch.fetch({
            urlPostfix: `${API.LOGIN}`,
            method: 'POST',
            body: data,
      })
    }
    loadUser(data) {
        return fetch.fetch({
            urlPostfix: `${API.USERS}${data}`,
        })
    }
    createUser(data) {
        return fetch.fetch({
            urlPostfix: API.USERS,
            method: 'POST',
            body: data,
        })
    }
    updateUser(data) {
        return fetch.fetch({
            urlPostfix: `${API.USERS}${data?.id}`,
            method: 'PUT',
            body: data,
        })
    }
    deleteUser(data) {
        return fetch.fetch({
            urlPostfix: `${API.USERS}${data.id}`,
            method: 'DELETE',
        })
    }
}

export default new UserService();

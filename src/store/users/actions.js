import fetch from "@/utils/fetch";
import API from "@/constants/api";
import {clearStorage, getItem} from '@/utils/localStorage';
import {TOKEN} from "@/constants/localStorage";

export default {
   loginUser(context, data) {
    context.commit('setStartLoad');
    context.commit('setError', null);
    fetch
      .fetch({
        urlPostfix: `${API.LOGIN}`,
        method: 'POST',
        body: data,
      })
      .then(response => {
          fetch.token = response?.token;
          context.commit('setUser', response);
      })
      .catch(error => context.commit('setError', error))
      .finally(() => {
        context.commit('setFetchTimestamp')
        context.commit('setFinishLoad')
      });
  },
  loadUser(context, data) {
    context.commit('setStartLoad');
    context.commit('setError', null);
    fetch
      .fetch({
        urlPostfix: `${API.USERS}${data}`,
      })
      .then(response => context.commit('setUser', response))
      .catch(error => context.commit('setError', error))
      .finally(() => {
        context.commit('setFetchTimestamp')
        context.commit('setFinishLoad')
      });
  },
  createUser(context, data) {
    context.commit('setStartLoad');
    context.commit('setError', null);
    fetch
      .fetch({
        urlPostfix: API.USERS,
        method: 'POST',
        body: data,
      })
      .then(response => {
        fetch.token = response?.auth_token;
        context.commit('setUser', response)
      })
      .catch(error => context.commit('setError', error))
      .finally(() => {
        context.commit('setFetchTimestamp')
        context.commit('setFinishLoad')
      });
  },
  updateUser(context, data) {
    context.commit('setStartLoad');
    context.commit('setError', null);
    fetch
      .fetch({
        urlPostfix: `${API.USERS}${data?.id}`,
        method: 'PUT',
        body: data,
      })
      .then(response => context.commit('setUser', response))
      .catch(error => context.commit('setError', error))
      .finally(() => {
        context.commit('setFetchTimestamp')
        context.commit('setFinishLoad')
      });
  },
  deleteUser(context, data) {
    context.commit('setStartLoad');
    context.commit('setError', null);
    fetch
      .fetch({
        urlPostfix: `${API.USERS}${data.id}`,
        method: 'DELETE',
      })
      .then(() => context.commit('setUser', null))
      .catch(error => context.commit('setError', error))
      .finally(() => {
        context.commit('setFetchTimestamp')
        context.commit('setFinishLoad')
      });
  },
  async checkUserToken(context) {
      const token = await getItem(TOKEN);
      if (token) {
          fetch.token = token;
          context.commit('setUser', { auth_token: token })
      }
  },
  async userLogOut(context) {
      console.log('test');
      context.commit('setUser', null)
      await clearStorage();
  },
  clearError(context){
      context.commit('setError', null);
  }
};

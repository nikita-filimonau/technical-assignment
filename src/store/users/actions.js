import fetch from "@/utils/fetch";
import UserService from './service';
import {clearStorage, getItem} from '@/utils/localStorage';
import {TOKEN} from "@/constants/localStorage";

const START_LOAD = 'setStartLoad';
const FINISH_LOAD = 'setFinishLoad';
const SET_ERROR = 'setError';
const SET_USER = 'setUser';
const FETCH_TIMESTAMP = 'setFetchTimestamp';

export default {
   loginUser(context, data) {
    context.commit(START_LOAD);
    context.commit(SET_ERROR, null);
    return UserService.loginUser(data)
      .then(response => {
          fetch.token = response?.token;
          context.commit(SET_USER, response);
          return response;
      })
      .catch(error => context.commit(SET_ERROR, error))
      .finally(() => {
        context.commit(FETCH_TIMESTAMP)
        context.commit(FINISH_LOAD)
      });
  },
  loadUser(context, data) {
    context.commit(START_LOAD);
    context.commit(SET_ERROR, null);
    UserService.loadUser(data)
      .then(response => context.commit(SET_USER, response))
      .catch(error => context.commit(SET_ERROR, error))
      .finally(() => {
        context.commit(FETCH_TIMESTAMP)
        context.commit(FINISH_LOAD)
      });
  },
  createUser(context, data) {
    context.commit(START_LOAD);
    context.commit(SET_ERROR, null);
    return UserService.createUser(data)
      .then(response => {
        fetch.token = response?.auth_token;
        context.commit(SET_USER, response);
        return response;
      })
      .catch(error => context.commit(SET_ERROR, error))
      .finally(() => {
        context.commit(FETCH_TIMESTAMP)
        context.commit(FINISH_LOAD)
      });
  },
  updateUser(context, data) {
    context.commit(START_LOAD);
    context.commit(SET_ERROR, null);
    UserService.updateUser(data)
      .then(response => context.commit(SET_USER, response))
      .catch(error => context.commit(SET_ERROR, error))
      .finally(() => {
        context.commit(FETCH_TIMESTAMP)
        context.commit(FINISH_LOAD)
      });
  },
  deleteUser(context, data) {
    context.commit(START_LOAD);
    context.commit(SET_ERROR, null);
    UserService.deleteUser(data)
      .then(() => context.commit(SET_USER, null))
      .catch(error => context.commit(SET_ERROR, error))
      .finally(() => {
        context.commit(FETCH_TIMESTAMP)
        context.commit(FINISH_LOAD)
      });
  },
  async checkUserToken(context) {
      const token = await getItem(TOKEN);
      if (token) {
          fetch.token = token;
          context.commit(SET_USER, { auth_token: token })
      }
  },
  async userLogOut(context) {
      context.commit(SET_USER, null)
      await clearStorage();
  },
  clearError(context){
      context.commit(SET_ERROR, null);
  }
};

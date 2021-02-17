const state = {};

const getters = {
  getLoginUser: () => {
    return {
      'username': localStorage.getItem('username'),
      'accessToken': localStorage.getItem('accessToken')
    }
  }
};

const actions = {
  setLoginUser({commit}, user) {
    commit('setLoginUser', user);
  }
};

const mutations = {
  setLoginUser(state, user) {
    localStorage.setItem('username', user.username)
    localStorage.setItem('accessToken', user.accessToken)
  }
};

export default {
  state, getters, actions, mutations
}
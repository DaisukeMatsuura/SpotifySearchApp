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
  },
  logout({commit}) {
    commit('logout')
  }
};

const mutations = {
  setLoginUser(state, user) {
    localStorage.setItem('username', user.username)
    localStorage.setItem('accessToken', user.accessToken)
  },
  logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('accessToken')
  }
};

export default {
  state, getters, actions, mutations
}
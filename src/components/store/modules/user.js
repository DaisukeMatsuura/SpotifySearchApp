const state = {};

const getters = {
  getLoginUser: () => {
    return {
      'userId': localStorage.getItem('userId'),
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
    localStorage.setItem('userId', user.userId)
    localStorage.setItem('username', user.username)
    localStorage.setItem('accessToken', user.accessToken)
  },
  logout() {
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    localStorage.removeItem('accessToken')
  }
};

export default {
  state, getters, actions, mutations
}
const state = {
  laravelApiToken: '',
};

const getters = {
  getLaravelApiToken: state => {
    return state.laravelApiToken;
  }
};

const actions = {
  setLaravelApiToken({commit}, laravelApiToken) {
    commit('setApiToken', laravelApiToken);
  }
};

const mutations = {
  setApiToken(state, laravelApiToken) {
    state.laravelApiToken = laravelApiToken;
  }
};

export default {
  state, getters, actions, mutations
}
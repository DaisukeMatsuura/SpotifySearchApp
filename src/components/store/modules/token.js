const state = {
  laravelApiToken: '',
};

const getters = {
  getLaravelApiToken: () => {
    return {
      laravelApiToken: localStorage.getItem('laravel_api_token')
    }
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
    localStorage.setItem('laravel_api_token', laravelApiToken)
  }
};

export default {
  state, getters, actions, mutations
}
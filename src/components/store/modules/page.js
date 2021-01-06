const state = {
  currentPage: '',
};

const getters = {
  getPage: state => {
    return state.currentPage;
  }
};

const actions = {
  setCurrentPage({commit}, currentPage) {
    commit('setPage', currentPage);
  }
};

const mutations = {
  setPage(state, currentPage) {
    state.currentPage = currentPage;
  }
};

export default {
  state, getters, actions, mutations
}
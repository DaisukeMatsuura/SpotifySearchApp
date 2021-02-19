const state = {
  searchedMusic: [],
};

const getters = {
  getSearchedMusic: state => {
    return state.searchedMusic;
  }
};

const actions = {
  setSearchedMusic({commit}, searchedMusic) {
    commit('setMusic', searchedMusic);
  },
  isFavorite({commit}, {favorite, favoriteId}) {
    commit('isFavorite', {favorite, favoriteId});
  },
};

const mutations = {
  setMusic(state, searchedMusic) {
    state.searchedMusic = searchedMusic;
  },
  isFavorite(state, {favorite, favoriteId}) {
    const temp = [];
    Object.keys(state.searchedMusic)
      .map(key => {
        temp.push({
          'favoriteId': favoriteId,
          'spotifyId': state.searchedMusic[key].spotifyId,
          'track': state.searchedMusic[key].track,
          'album': state.searchedMusic[key].album,
          'artist': state.searchedMusic[key].artist,
          'release': state.searchedMusic[key].release,
          'img': state.searchedMusic[key].img,
          'isFavorite': state.searchedMusic[key].spotifyId === favorite.spotifyId
            ? !state.searchedMusic[key].isFavorite
            : state.searchedMusic[key].isFavorite
        })
      })
    state.searchedMusic = temp;
  }
};

export default {
  state, getters, actions, mutations
}
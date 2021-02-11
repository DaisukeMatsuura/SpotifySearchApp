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
  isFavorite({commit}, {favorite, favorite_id}) {
    commit('isFavorite', {favorite, favorite_id});
  },
};

const mutations = {
  setMusic(state, searchedMusic) {
    state.searchedMusic = searchedMusic;
  },
  isFavorite(state, {favorite, favorite_id}) {
    const temp = [];
    Object.keys(state.searchedMusic)
      .map(key => {
        temp.push({
          'favorite_id': favorite_id,
          'spotify_id': state.searchedMusic[key].spotify_id,
          'track': state.searchedMusic[key].track,
          'album': state.searchedMusic[key].album,
          'artist': state.searchedMusic[key].artist,
          'release': state.searchedMusic[key].release,
          'img': state.searchedMusic[key].img,
          'isFavorite': state.searchedMusic[key].spotify_id === favorite.spotify_id
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
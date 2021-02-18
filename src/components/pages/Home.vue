<template>
<div class="mx-auto bg-black">
  <Header />
  <h1 class="md:mt-10 text-center text-white font-bold tracking-widest md:text-2xl">Spotify Music Search Application</h1>
  <div class='flex justify-between min-w-xs max-w-xl w-full p-2 my-8 bg-white shadow-sm rounded-full overflow-hidden mx-auto'>
    <InputField @update:field="searchWord = $event" :data="searchWord" />
    <div @click="getMusicInfo()"><Button label="Search" /></div>
  </div>

  <div v-show="firstView" class="text-white text-center tracking-widest">Search for Your Favorite Music.</div>
  <div v-show="isLoading">
    <Spinner />
  </div>
  <div v-show="!isLoading">
    <Result :firstView="firstView" />
  </div>

</div>
</template>

<script>
import SETTING from '../../../setting/setting'
import axios from 'axios'

import Header from '../organisms/Header'
import Result from '../organisms/Result'

import InputField from '../atoms/InputField'
import Button from '../atoms/Button'
import Spinner from '../atoms/Spinner'

export default {
  name: "Home",

  components: {
    Result,
    InputField,
    Button,
    Spinner,
    Header,
  },

  data () {
    return {
      firstView: true,
      accessToken: '',
      searchWord: '',
      isLoading: false,
    }
  },

  mounted () {
    this.getAccessToken()
    this.$store.dispatch('setCurrentPage', 1)
  },

  methods: {
    getAccessToken: function () {
      const self = this
      var params = new URLSearchParams()
      params.append('grant_type', 'client_credentials')

      const AUTH = 'Basic ' + btoa(`${SETTING.CLIENT_ID}:${SETTING.CLIENT_SECRET}`)

      axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
            'Authorization': AUTH,
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        .then(response => {
          self.accessToken = response.data.access_token
        })
        .catch(errors => {
          console.log(errors)
        })
    },
    getMusicInfo: function () {
      this.isLoading = true
      const TOKEN = 'Bearer ' + this.accessToken
      axios.get(`https://api.spotify.com/v1/search?q=name:${this.searchWord}&market=JP&type=track`, {
          headers: {
            'Authorization': TOKEN,
            'Accept-Language': 'ja;q=1',
          }
        })
        .then(response => {
          const responseData = []
          Object.keys(response.data.tracks.items)
            .map(key => {
              responseData.push({
                'favorite_id': '',
                'spotify_id': response.data.tracks.items[key].id,
                'track': response.data.tracks.items[key].name,
                'album': response.data.tracks.items[key].album.name,
                'artist': response.data.tracks.items[key].artists.map(e => e.name).join(', '),
                'release': response.data.tracks.items[key].album.release_date,
                'img': response.data.tracks.items[key].album.images[0].url,
                'isFavorite': false
              })
            })
          this.$store.dispatch('setSearchedMusic', responseData)
          this.$store.dispatch('setCurrentPage', 1)
          this.searchWord = ''
          this.firstView = false
          this.isLoading = false
        })
        .catch(errors => {
          this.isLoading = false
          console.log(errors)
        });
    },
  }
}
</script>

<style scoped>

</style>
<template>
<div class="container mx-auto h-full bg-black">
  <div class="w-1/2 md:w-1/4 p-10">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1 class="text-center text-white font-bold tracking-widest md:text-2xl">Spotify Music Search Application</h1>
  <div class='flex justify-between min-w-xs max-w-xl w-full p-2 my-8 bg-white shadow-sm rounded-full overflow-hidden mx-auto'>
    <InputField @update:field="searchWord = $event" :data="searchWord" />
    <div @click="getMusicInfo()"><Button label="Search" /></div>
  </div>

  <div v-show="isLoading">
    <Spinner />
  </div>
  <div v-show="!isLoading">
    <Result :results="results" :firstView="firstView" />
  </div>

</div>
</template>

<script>
import setting from '../../setting/setting'
import axios from 'axios'

import InputField from '../components/UI/InputField'
import Button from '../components/UI/Button'
import Spinner from '../components/UI/Spinner'

import Result from '../components/Result'

export default {
  name: "Home",

  components: {
    Result,
    InputField,
    Button,
    Spinner
  },

  data () {
    return {
      firstView: true,
      accessToken: '',
      searchWord: '',
      results: [],
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

      const AUTH = 'Basic ' + btoa(`${setting.CLIENT_ID}:${setting.CLIENT_SECRET}`)

      axios.post('/api/token', params, { headers: {'Authorization': AUTH} })
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
      axios.get(`https://api.spotify.com/v1/search?q=name:${this.searchWord}&market=JP&type=track`,
          { headers: { 'Authorization': TOKEN }})
        .then(response => {
          const responseData = []
          Object.keys(response.data.tracks.items)
            .map(key => {
                responseData.push({
                'track': response.data.tracks.items[key].name,
                'album': response.data.tracks.items[key].album.name,
                'artist': response.data.tracks.items[key].artists.map(e => e.name).join(', '),
                'release': response.data.tracks.items[key].album.release_date,
                'img': response.data.tracks.items[key].album.images[0].url,
              })
            })
          this.$store.dispatch('setCurrentPage', 1)
          this.results = responseData
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
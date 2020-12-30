<template>
<div class="container mx-auto h-full bg-black">
  <div class="w-1/2 md:w-1/4 p-10">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1 class="text-center text-white font-bold tracking-widest md:text-2xl">Spotify Music Search Application</h1>
  <div class='flex justify-between min-w-xs max-w-xl w-full p-2 my-10 bg-white shadow-sm rounded-full overflow-hidden mx-auto'>
    <InputField @update:field="searchWord = $event" :data="searchWord" />
    <div @click="getMusicInfo()"><Button label="Search" /></div>

  </div>
<!--  <div class="flex justify-center text-white">-->
<!--    <paginate-->
<!--        :page-count="4"-->
<!--        :container-class="pagination"-->
<!--        :prev-text="prev"-->
<!--        :next-text="next"-->
<!--        :click-handler="clickCallback">-->

<!--      <span slot="prevContent">Changed previous button</span>-->
<!--      <span slot="nextContent">Changed next button</span>-->
<!--      <span slot="breakViewContent">-->
<!--    <svg width="16" height="4" viewBox="0 0 16 4">-->
<!--      <circle fill="#999999" cx="2" cy="2" r="2" />-->
<!--      <circle fill="#999999" cx="8" cy="2" r="2" />-->
<!--      <circle fill="#999999" cx="14" cy="2" r="2" />-->
<!--    </svg>-->
<!--  </span>-->

<!--    </paginate>-->
<!--  </div>-->
  <div>
    <Result :results="results" :firstView="firstView"/>
  </div>

</div>
</template>

<script>
import Result from '../components/Result'
import InputField from '../components/UI/InputField'
import Button from '../components/UI/Button'
import axios from 'axios'
import setting from '../../setting/setting'

export default {
  name: "Home",

  components: {
    InputField,
    Button,
    Result
  },

  data () {
    return {
      firstView: true,
      accessToken: '',
      searchWord: '',
      results: {},
    }
  },

  mounted () {
    this.getAccessToken()
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
      const TOKEN = 'Bearer ' + this.accessToken
      axios.get(`https://api.spotify.com/v1/search?q=name:${this.searchWord}&market=JP&type=track`,
          { headers: { 'Authorization': TOKEN }})
        .then(response => {
          this.searchWord = ''
          Object.keys(response.data.tracks.items)
            .map(key => {
                this.results[key] = {
                'track': response.data.tracks.items[key].name,
                'album': response.data.tracks.items[key].album.name,
                'artist': response.data.tracks.items[key].artists.map(e => e.name).join(', '),
                'release': response.data.tracks.items[key].album.release_date,
                'img': response.data.tracks.items[key].album.images[0].url,
              }
            })
        })
        .catch(errors => {
          console.log(errors)
        });
    }
  }
}
</script>

<style scoped>

</style>
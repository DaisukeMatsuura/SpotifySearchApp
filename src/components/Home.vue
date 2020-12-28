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
  <div>
    <Result :result="result" :firstView="firstView"/>
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
      result: {},
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
          this.result = response.data
          console.log(response.data);
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
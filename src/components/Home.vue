<template>
<div>
  <h1>Spotify Music Search Application</h1>
  <div class="search-field">
    <InputField @update:field="searchWord = $event" :data="searchWord" />
    <button @click="getMusicInfo()">イベント発火用</button>
  </div>

</div>
</template>

<script>
import InputField from '../components/UI/InputField'
import axios from 'axios'
import setting from '../../setting/setting'

export default {
  name: "Home",

  components: {
    InputField,
  },

  data () {
    return {
      accessToken: '',
      searchWord: '',
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
        .then((response) => {
          self.accessToken = response.data.access_token
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    getMusicInfo: function () {
      const TOKEN = 'Bearer ' + this.accessToken
      axios.get(`https://api.spotify.com/v1/search?q=name:${this.searchWord}&market=JP&type=album,track`,
          { headers: { 'Authorization': TOKEN }})
        .then(function (response) {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response)
        });
    }
  }
}
</script>

<style scoped>
.search-field {
  display: flex;
  justify-content: center;
}
</style>
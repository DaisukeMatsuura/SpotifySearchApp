<template>
  <div class="bg-black">
    <router-link to="/">
      <div class="w-1/2 md:w-80 p-10">
        <img alt="Vue logo" src="../../assets/logo.png">
      </div>
    </router-link>

    <h1 class="uppercase text-center text-white text-5xl font-bold tracking-wide font-mono mb-12">Favorite List</h1>

    <div v-show="Object.keys(favorites).length === 0 && dataExists" class="text-white text-center text-xl tracking-widest">
      No Favorite... <br>
      Please return to the top page and register as a favorite.
    </div>
    <div v-show="Object.keys(favorites).length > 0" class="flex flex-wrap justify-around mx-10">
      <FavoriteCard v-for="(favorite, index) in favorites" :key="index" class="text-white"
                    :album="favorite.data.attributes.album"
                    :track="favorite.data.attributes.track"
                    :artist="favorite.data.attributes.artist"
                    :release="favorite.data.attributes.release_date"
                    :img="favorite.data.attributes.image_path"
                    :isFavorite="true"
                    :favoriteId="favorite.data.favorite_id" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import FavoriteCard from '../UI/ResultCardFavorite'

export default {
  name: "Favorite",

  components: {
    FavoriteCard,
  },

  data () {
    return {
      favorites: [],
      dataExists: false
    }
  },
  
  mounted() {
    this.getAllFavorites()
  },
  
  methods: {
    getAllFavorites: function () {
      const laravelAccessToken = this.$store.getters.getLaravelApiToken.laravelApiToken
      axios.get('https://spotify.brightful.biz/public/api/favorites',
          { headers: { 'Authorization': 'Bearer ' + laravelAccessToken } })
          .then(response => {
            this.favorites = response.data.data
            this.dataExists = true
          })
    }
  }
}
</script>

<style scoped>

</style>
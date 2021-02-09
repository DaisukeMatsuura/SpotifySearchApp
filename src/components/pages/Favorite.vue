<template>
  <div class="mx-auto h-full bg-black">
    <router-link to="/">
      <div class="w-1/2 md:w-1/4 p-10">
        <img alt="Vue logo" src="../../assets/logo.png">
      </div>
    </router-link>

  <div class="flex flex-wrap">
    <FavoriteCard v-for="(favorite, index) in favorites" :key="index" class="text-white"
                  :album="favorite.data.attributes.album"
                  :track="favorite.data.attributes.track"
                  :artist="favorite.data.attributes.artist"
                  :release="favorite.data.attributes.release_date"
                  :img="favorite.data.attributes.image_path"
                  :id="favorite.data.favorite_id"/>
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
    }
  },
  
  mounted() {
    this.getAllFavorites()
  },
  
  methods: {
    getAllFavorites: function () {
      const laravelAccessToken = this.$store.getters.getLaravelApiToken
      axios.get('http://localhost:8000/api/favorites',
          {headers: {'Authorization': 'Bearer ' + laravelAccessToken}})
          .then(response => {
            this.favorites = response.data.data
            console.log(response)
          })
    }
  }
}
</script>

<style scoped>

</style>
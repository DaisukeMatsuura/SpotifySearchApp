<template>
  <div class="bg-black">
    <Header />
    <h1 class="uppercase text-center text-white text-5xl font-bold tracking-wide font-mono mb-12">Public Favorite List</h1>
    <div v-show="Object.keys(favorites).length === 0 && !dataExists" class="text-white text-center text-xl tracking-widest">
      <div class="m-4">No Favorite...</div>
      <div class="mb-20">Please return to the top page and register as a favorite.</div>
      <router-link to="/" class="py-4 px-20 bg-green-800 hover:bg-green-400 hover:text-white rounded-full bg-white items-center font-semibold text-xl justify-center uppercase">
        Top
      </router-link>
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
import Header from "../organisms/Header";
import FavoriteCard from '../molecules/ResultCardFavorite'

export default {
  name: "Favorite",

  components: {
    Header,
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
      axios.get('https://spotify.brightful.biz/public/api/general/favorites')
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
<template>
  <div>
    <Header />
    <h1 v-show="isValidated" class="uppercase text-center text-white text-5xl font-bold tracking-wide font-mono mb-12">{{loginUser.username}}'s Favorite List</h1>
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
import axios from "axios";
import Header from '../organisms/Header';
import FavoriteCard from '../molecules/ResultCardFavorite'

export default {
  name: "UsersDashBoard",

  components: {
    Header,
    FavoriteCard
  },

  data () {
    return {
      favorites: [],
      dataExists: false,
      loginUser: {
        'username': '',
        'accessToken': ''
      },
      isValidated: false,
    }
  },

  mounted() {
    this.authCheck()
    this.getMyFavorite()
  },

  methods: {
    authCheck: function () {
      this.loginUser = this.$store.getters.getLoginUser
      if (this.loginUser.accessToken && this.loginUser.username) {
        this.isValidated = true
      } else {
        this.$router.push({ path: '/', force: true })
      }
    },
    getMyFavorite: function () {
      axios.get(`http://localhost:8000/api/users/1/favorites`,
          { headers: {'Authorization': 'Bearer ' + this.loginUser.accessToken} })
      .then((response) => {
        this.favorites = response.data.data
        this.dataExists = true
      })
    }
  }
}
</script>

<style scoped>

</style>
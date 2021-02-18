<template>
  <div class="flex my-10 text-white card-width">
    <div class="flex-none w-72 mr-10">
      <div class="relative group cursor-pointer" @click="createFavorite($props)">
        <img class="relative mx-auto w-60 rounded-lg group-hover:opacity-25 z-20" :src="$props.img" alt="album_image">
        <div v-show="!$props.isFavorite" class="absolute top-24 left-28 text-6xl text-pink-600 z-10"><font-awesome-icon icon="kiss-wink-heart" /></div>
        <div v-show="$props.isFavorite" class="w-32 h-12 absolute top-24 left-20 rounded-full bg-pink-800 text-pink-200 flex items-center font-semibold text-xl justify-center z-30">isFavorite</div>
      </div>
    </div>
    <div class="w-full pt-1 flex-grow ">
      <div class="flex-col">
        <div>
          <div class="text-xs uppercase">track</div>
          <div class="text-2xl pl-16 py-1 tracking-widest">{{$props.track}}</div>
        </div>
        <div>
          <div class="text-xs uppercase">album</div>
          <div class="pl-16 py-2">{{$props.album}}</div>
        </div>
        <div>
          <div class="text-xs uppercase">artist</div>
          <div class="text-xl pl-16 py-1">{{$props.artist}}</div>
        </div>
        <div class="text-sm pt-3">Release: <span class="pl-4">{{$props.release}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResultCard",

  data () {
    return {
      favoriteId: '',
    }
  },

  props: [
    'album',
    'track',
    'artist',
    'img',
    'release',
    'isFavorite',
    'spotify_id',
    'favorite_id'
  ],

  methods: {
    createFavorite: function ($props) {
      if ($props.isFavorite) {
        axios.delete(`https://spotify.brightful.biz/public/api/general/favorites/${$props.favorite_id}`)
        .then(() => {
          this.$store.dispatch('isFavorite', { 'favorite':$props, 'favorite_id' :this.favoriteId })
        })
      } else {
        axios.post('https://spotify.brightful.biz/public/api/general/favorites',
            {
              'track': $props.track,
              'album': $props.album,
              'artist': $props.artist,
              'release_date': $props.release,
              'image_path': $props.img
            })
            .then(response => {
              this.favoriteId = response.data.data.favorite_id
              this.$store.dispatch('isFavorite', { 'favorite':$props, 'favorite_id' :this.favoriteId })
            })
            .catch(error => {
              alert(error.response.data.errors.detail + '\nこの楽曲は既に登録されています！')
            })
      }
    },
  }
}
</script>

<style scoped>
.card-width {
  width: 1000px;
}
</style>
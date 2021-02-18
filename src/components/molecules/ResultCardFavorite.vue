<template>
  <div class="w-96 flex-col m-6 text-white border-4 border-light-blue-500 rounded-lg">
    <div class="relative group cursor-pointer" @click="createFavorite($props)">
      <img class="relative mx-auto w-48 rounded-lg group-hover:opacity-25 z-20 mt-6" :src="$props.img" alt="album_image">
      <div v-show="!this.isFavorite" class="absolute top-16 left-44 text-6xl text-pink-600 z-10"><font-awesome-icon icon="kiss-wink-heart" /></div>
      <div v-show="this.isFavorite" class="w-32 h-12 absolute top-20 left-32 rounded-full bg-pink-800 text-pink-200 flex items-center font-semibold text-xl justify-center z-30">isFavorite</div>
    </div>
    <div class="pt-2">
      <div class="flex-col">
        <div>
          <div class="text-xs uppercase text-gray-300 pl-6">track</div>
          <div class="pl-16 py-1 tracking-widest">{{$props.track}}</div>
        </div>
        <div>
          <div class="text-xs uppercase text-gray-300 pl-6">album</div>
          <div class="text-sm pl-16 py-1 pr-2">{{$props.album}}</div>
        </div>
        <div>
          <div class="text-xs uppercase text-gray-300 pl-6">artist</div>
          <div class="text-sm pl-16 py-1">{{$props.artist}}</div>
        </div>
        <div class="text-sm py-1 text-gray-300 pl-6 mb-6">Release: <span class="pl-2 text-white">{{$props.release}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResultCardFavorite",

  props: [
    'album',
    'track',
    'artist',
    'img',
    'release',
    'favoriteId'
  ],

  data: function () {
    return {
      isFavorite: true,
    }
  },

  methods: {
    createFavorite: function ($props) {
      if (this.isFavorite) {
        axios.delete(`https://spotify.brightful.biz/public/api/general/favorites/${$props.favoriteId}`)
          .then(() => { this.isFavorite = !this.isFavorite })
      } else {
        axios.post('https://spotify.brightful.biz/public/api/general/favorites', {
            'track': $props.track,
            'album': $props.album,
            'artist': $props.artist,
            'release_date': $props.release,
            'image_path': $props.img
          })
          .then(() => { this.isFavorite = !this.isFavorite })
      }
    },
  }
}
</script>

<style scoped>

</style>
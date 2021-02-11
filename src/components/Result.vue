<template>
  <div class="flex justify-center bg-black w-screen">
    <div v-show="this.$store.getters.getSearchedMusic.length > 0" class="mt-4 text-white mb-20">
      <ResultCard v-for="(result, index) in getResult" :key="index"
                  :album="result.album"
                  :track="result.track"
                  :artist="result.artist"
                  :release="result.release"
                  :img="result.img"
                  :isFavorite="result.isFavorite"
                  :favorite_id="result.favorite_id"
                  :spotify_id="result.spotify_id" />
      <Pagination
          :value="this.$store.getters.getPage"
          :page-count="getPageCount"
          :page-range="10"
          :click-handler="clickCallback"
          :prev-text="'＜'"
          :next-text="'＞'"
          :container-class="'rounded list-none flex justify-center'"
          :page-class="'font-semibold flex w-12 h-12 mx-2 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500'"
          :prev-class="'text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500'"
          :next-class="'text-xs font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500'"
          :active-class="'bg-gray-500'"
          >
      </Pagination>
    </div>

    <div v-show="this.$store.getters.getSearchedMusic.length === 0 && !$props.firstView"
         class="text-white tracking-widest leading-loose">
      <div class="p-2">楽曲がみつかりませんでした... <br /> 別のキーワードをお試し下さい</div>
    </div>

  </div>

</template>

<script>
import ResultCard from '../components/UI/ResultCard'

export default {
  name: "Result",

  components: {
    ResultCard,
  },

  props: ['firstView'],

  data: function () {
    return {
      perPage: 5,
    }
  },

  methods: {
    clickCallback: function (pageNum) {
      this.$store.dispatch('setCurrentPage', pageNum)
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  },

  computed: {
    getResult: function() {
      let start = (this.$store.getters.getPage - 1) * this.perPage
      let end = this.$store.getters.getPage * this.perPage
      return  this.$store.getters.getSearchedMusic.slice(start, end)
    },
    getPageCount: function() {
      return Math.ceil(this.$store.getters.getSearchedMusic.length / this.perPage)
    }
  },
}
</script>

<style scoped>

</style>
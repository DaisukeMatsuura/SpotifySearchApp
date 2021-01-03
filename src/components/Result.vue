<template>
  <div class="flex justify-center h-full">
    <div v-show="Object.keys(results).length == 0 && firstView" class="text-white">
      <div>ファーストビュー</div>
    </div>

    <div v-show="Object.keys(results).length > 0" class="mt-4 text-white">
      <ResultCard v-for="(result, index) in getResult" :key="index"
                  :album="result.album"
                  :track="result.track"
                  :artist="result.artist"
                  :release="result.release"
                  :img="result.img" />
      <paginate
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
      </paginate>
    </div>

    <div v-show="Object.keys(results).length == 0 && !firstView" class="text-white">
      <div>楽曲がみつかりませんでした.. <br /> 別のキーワードをお試し下さい</div>
    </div>

  </div>

</template>

<script>
import ResultCard from '../components/UI/ResultCard'

export default {
  name: "Result",
  components: {
    ResultCard
  },
  props: [ 'results', 'firstView' ],

  data: function () {
    return {
      perPage: 5,
      currentPage: 1,
    }
  },
  methods: {
    clickCallback: (pageNum) => {
      this.currentPage = Number(pageNum)
      console.log(this.currentPage)
    }
  },
  computed: {
    getResult: function() {
      console.log('getResult')
      let start = (this.currentPage - 1) * this.perPage
      let end = this.currentPage * this.perPage
      return  this.results.slice(start, end)
    },
    getPageCount: function() {
      return Math.ceil(this.results.length / this.perPage)
    }
  },
}
</script>

<style scoped>
.active {
  color: white !important;
  background-color: gray !important;
}
</style>
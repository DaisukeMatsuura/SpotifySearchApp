<template>
  <div class="flex justify-center h-full">
    <div v-show="Object.keys(results).length == 0 && firstView" class="text-white">
      <div>ファーストビュー</div>
    </div>

    <div v-show="Object.keys(results).length > 0" class="mt-6">
      <ResultCard v-for="(result, index) in results" :key="index"
                  :album="result.album"
                  :track="result.track"
                  :artist="result.artist"
                  :release="result.release"
                  :img="result.img" />
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
  components: { ResultCard },
  props: [ 'results', 'firstView' ],

}
</script>

<style scoped>

</style>
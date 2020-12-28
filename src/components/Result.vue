<template>
  <div class="flex justify-center h-full">

    <div v-if="Object.keys(result).length > 0" class="mt-10 bg-blue-500">
      hohohohooh
    </div>
    <div v-else-if="Object.keys(result).length == 0 && firstView" class="text-white">

      <ResultCard album="ALBUM"
                  track="愛のままにわがままに僕は君だけを傷つけない"
                  artist="B'z"
                  release-date="2020-12-25"
                  img="https://i.scdn.co/image/ab67616d0000b2738122597e7f8b0151a6005f21" />
      <ResultCard album="ALBUM"
                  track="愛のままにわがままに僕は君だけを傷つけない"
                  artist="B'z"
                  release-date="2020-12-25"
                  img="https://i.scdn.co/image/ab67616d0000b2738122597e7f8b0151a6005f21" />
      <ResultCard album="ALBUM"
                  track="愛のままにわがままに僕は君だけを傷つけない"
                  artist="B'z"
                  release-date="2020-12-25"
                  img="https://i.scdn.co/image/ab67616d0000b2738122597e7f8b0151a6005f21" />
      <ResultCard album="ALBUM"
                  track="愛のままにわがままに僕は君だけを傷つけない"
                  artist="B'z"
                  release-date="2020-12-25"
                  img="https://i.scdn.co/image/ab67616d0000b2738122597e7f8b0151a6005f21" />
      <ResultCard album="ALBUM"
                  track="愛のままにわがままに僕は君だけを傷つけない"
                  artist="B'z"
                  release-date="2020-12-25"
                  img="https://i.scdn.co/image/ab67616d0000b2738122597e7f8b0151a6005f21" />
    </div>
    <div v-else class="text-white">
      <div>楽曲がみつかりませんでした... <br /> 別のキーワードをお試し下さい</div>
    </div>

  </div>

</template>

<script>
import ResultCard from '../components/UI/ResultCard'

export default {
  name: "Result",
  components: { ResultCard },
  props: [ 'result', 'firstView' ],

}
</script>

<style scoped>

</style>
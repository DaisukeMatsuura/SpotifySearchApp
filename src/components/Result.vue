<template>
  <div class="flex justify-center h-full">

    <div v-if="Object.keys(result).length > 0" class="mt-10 bg-blue-500">
      hohohohooh
    </div>
    <div v-else-if="Object.keys(result).length == 0 && firstView" class="text-white">
      ファーストビュー
    </div>
    <div v-else class="text-white">
      <div>楽曲がみつかりませんでした... <br /> 別のキーワードをお試し下さい</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Result",
  props: [ 'result', 'firstView' ],

}
</script>

<style scoped>

</style>
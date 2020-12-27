<template>
  <div class="flex justify-center h-full">

    <div v-if="Object.keys(result).length > 0" class="mt-10 bg-blue-500">
      hohohohooh
    </div>
    <div v-else class="text-white">
      <div>楽曲がみつかりませんでした...</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Result",
  props: [ 'result' ],

}
</script>

<style scoped>

</style>
<template>
  <button class="focus:outline-none hover:bg-blue-800 bg-blue-700 text-white font-semibold text-xl px-8 py-2 outline-none rounded-full text-center uppercase">
    {{label}}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: [ 'label' ]
}
</script>

<style scoped>

</style>
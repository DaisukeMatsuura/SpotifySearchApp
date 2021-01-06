<template>
  <div class="bg-black app-height">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
.app-height {
  height: 1900px;
}
</style>

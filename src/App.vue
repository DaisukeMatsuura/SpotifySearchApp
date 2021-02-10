<template>
  <div class="bg-black app-height">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}
a {
  outline: none;
}
.app-height {
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

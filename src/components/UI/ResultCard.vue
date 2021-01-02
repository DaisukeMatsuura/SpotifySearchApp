<template>
  <div class="flex ml-20 my-10 text-white">
    <img class="w-1/5 mx-24 rounded-lg" :src="$props.img" alt="album_image">
    <div class="w-full pt-1 flex-col">
      <div>
        <div class="text-xs uppercase">track</div>
        <div class="text-2xl pl-16 py-1 tracking-widest">{{$props.track}}</div>
      </div>
      <div>
        <div class="text-xs uppercase">album</div>
        <div class="pl-16 py-2">{{$props.album}}</div>
      </div>
      <div>
        <div class="text-xs uppercase">artist</div>
        <div class="text-xl pl-16 py-1">{{$props.artist}}</div>
      </div>
      <div class="text-sm pt-3">Release: <span class="pl-4">{{$props.release}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: [ 'album', 'track', 'artist', 'img', 'release' ]
}
</script>

<style scoped>

</style>
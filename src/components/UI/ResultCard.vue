<template>
  <div class="flex ml-20 my-10">
    <img class="w-1/5 mx-10 rounded-lg" :src="$props.img" alt="album_image">
    <div class="w-full pt-1 flex-col">
      <div>
        <div class="text-xs uppercase">track</div>
        <div class="text-lg text-center py-1">{{$props.track}}</div>
      </div>
      <div>
        <div class="text-xs uppercase">album</div>
        <div class="text-lg text-center py-1">{{$props.album}}</div>
      </div>
      <div>
        <div class="text-xs uppercase">artist</div>
        <div class="text-lg text-center py-1">{{$props.artist}}</div>
      </div>

      <div class="text-sm pt-3">Release: {{$props.releaseDate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: [ 'album', 'track', 'artist', 'img', 'releaseDate' ]
}
</script>

<style scoped>

</style>
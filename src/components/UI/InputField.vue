<template>
      <input type="text" name="search_word" id="search_word" class="outline-none min-w-sm p-2 bg-white w-full"
             placeholder="アルバムまたは楽曲名を入力して下さい" v-model="value" @input="updateField()">
</template>

<script>
export default {
  name: "InputField",

  data: function () {
    return {
      value: this.data
    }
  },
  methods: {
    updateField: function () {
      this.$emit('update:field', this.value)
    },
  },
  watch: {
    data: function (val) {
      this.value = val;
    }
  }
}
</script>

<style scoped>

</style>
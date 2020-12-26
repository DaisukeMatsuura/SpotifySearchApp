<template>
  <div class="input-wrap">
    <input type="text" class="input" v-model="value" @input="updateField()">
  </div>
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
.input-wrap {

}
.input {

}
</style>
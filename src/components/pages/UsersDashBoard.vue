<template>
  <div>
    <Header />
    <div v-show="isValidated" class="text-center text-white text-5xl">MY PAGE</div>
  </div>
</template>

<script>
import Header from '../organisms/Header';
export default {
  name: "UsersDashBoard",

  components: {
    Header,
  },

  data () {
    return {
      loginUser: {
        'username': '',
        'accessToken': ''
      },
      isValidated: false,
    }
  },

  mounted() {
    this.authCheck()
  },

  methods: {
    authCheck: function () {
      this.loginUser = this.$store.getters.getLoginUser
      if (this.loginUser.accessToken && this.loginUser.username) {
        this.isValidated = true
      } else {
        this.$router.push({ path: '/', force: true })
      }
    }
  }
}
</script>

<style scoped>

</style>
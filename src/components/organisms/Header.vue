<template>
  <div class="flex justify-between">
    <router-link to="/">
      <div class="w-60 md:w-80 md:ml-10 p-10">
        <img alt="Vue logo" src="../../assets/logo.png">
      </div>
    </router-link>
    <div class="flex mt-12">
      <router-link to="/auth/register" v-show="!isValidated">
        <div class="mr-4 w-24 h-14 md:h-16 hover:bg-green-600 hover:text-white text-green-600 rounded-full flex items-center font-semibold text-xl justify-center">
          Register
        </div>
      </router-link>
      <router-link to="/auth/login" v-show="!isValidated">
        <div class="mr-4 w-44 h-14 md:h-16 hover:bg-green-500 hover:text-white rounded-full bg-white flex items-center font-semibold text-xl justify-center uppercase tracking-widest">
          Login
        </div>
      </router-link>
      <router-link to="user/my-page" v-show="isValidated">
        <div class="mr-4 w-44 h-14 md:h-16 hover:bg-green-500 hover:text-white rounded-full bg-white flex items-center font-semibold text-xl justify-center uppercase tracking-widest">
          MyPage
        </div>
      </router-link>
      <router-link to="/favorite">
        <div class="mr-8 w-44 h-14 md:h-16 hover:bg-green-500 hover:text-white rounded-full bg-white flex items-center font-semibold text-xl justify-center uppercase">
          Favorite List
        </div>
      </router-link>
    </div>


  </div>
</template>

<script>
export default {
  name: "Header",

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
    console.log('mounted')
    this.getLoginUser()
  },
  methods: {
    getLoginUser: function () {
      this.loginUser = this.$store.getters.getLoginUser
      if (this.loginUser.accessToken && this.loginUser.username) {
        this.isValidated = true
      }
    }
  },

  watch: {
    loginUser: function () {
      this.getLoginUser()
      console.log('watch')
    },
  }

}
</script>

<style scoped>

</style>
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
        <div @click="logout()" v-show="isValidated" class="mr-4 w-24 h-14 md:h-16 hover:bg-green-600 hover:text-white text-green-600 rounded-full flex items-center font-semibold text-xl justify-center">
          Logout
        </div>
      <router-link to="/favorite">
        <div class="mr-8 w-44 h-14 md:h-16 hover:bg-green-500 hover:text-white rounded-full bg-white flex items-center font-semibold text-xl justify-center uppercase">
          Public List
        </div>
      </router-link>
      <div v-show="isValidated" class="float-right flex bg-gray-800 rounded w-80 p-3 mr-8 h-16">
        <router-link to="/user/my-page" >
          <img alt="Avatar" src="../../assets/avatar.png" class="w-10 h-10 rounded-full bg-white my-auto">
        </router-link>
        <div class="ml-4 my-auto text-white text-2xl font-mono">{{loginUser.username}}</div>
      </div>
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
    this.getLoginUser()
  },
  methods: {
    getLoginUser: function () {
      this.loginUser = this.$store.getters.getLoginUser
      if (this.loginUser.accessToken && this.loginUser.username) {
        this.isValidated = true
      }
    },
    logout: function () {
      this.$store.dispatch('logout')
      this.$router.go({ path: this.$router.push('/'), force: true })
    }
  },

  watch: {
    loginUser: function () {
      this.getLoginUser()
    },
  }

}
</script>

<style scoped>

</style>
<template>
  <div class="mx-auto h-full flex justify-center items-center mt-20 mb-10">
    <div v-show="!isLoading" class="w-96 bg-green-500 rounded-lg shadow-xl p-6">
      <div class="flex justify-center pt-8">
        <img src="../../assets/spotify_logo.jpg" class="w-20 h-20 rounded-full">
      </div>
      <div class="pt-4">
        <div class="relative pt-8 px-4">
          <label for="name" class="uppercase text-gray-900 text-xs font-bold absolute pl-3 pt-3">Name</label>
          <div>
            <input id="name" type="text" class="pt-10 w-full rounded p-4 bg-gray-200 text-black outline-none focus:bg-white" name="name" v-model="form.name" placeholder="yourname">
            <span v-show="message.name" class="text-red-700 text-sm p-1" role="alert"><strong>{{ message.name }}</strong></span>
          </div>
        </div>
        <div class="relative pt-10 px-4">
          <label for="password" class="uppercase text-gray-900 text-xs font-bold absolute pl-3 pt-3">Password</label>
          <div class="col-md-6">
            <input id="password" type="password" class="pt-10 w-full rounded p-4 bg-gray-200 text-black outline-none focus:bg-white" name="password" v-model="form.password" placeholder="Password">
            <span v-show="message.password" class="text-red-700 text-sm p-1" role="alert"><strong>{{ message.password }}</strong></span>
          </div>
        </div>
        <div class="pt-10 mb-8 px-4" @click="register()">
          <div class="w-full py-4 px-3 text-center uppercase rounded text-white hover:text-green-900 font-bold tracking-widest hover:bg-white bg-green-900 cursor-pointer">
            Login
          </div>
        </div>
      </div>
    </div>
    <div v-show="isLoading"><Spinner /></div>
  </div>
</template>

<script>
import Spinner from '../atoms/Spinner'
import axios from "axios";

export default {
  name: "LoginCard",

  components: {
    Spinner,
  },

  data () {
    return {
      isLoading: false,
      loginUser: '',
      form: {
        name: '',
        password: '',
      },
      message: {
        name: '',
        password: '',
        errorCount: 0,
      },
    }
  },

  methods: {
    register: function () {
      this.checkRegisterForm()

      if (!this.message.errorCount) {
        this.isLoading = true
        axios.post('http://localhost:8000/api/login', {
          'username': this.form.name,
          'password': this.form.password,
        })
        .then(response => {
          console.log(response)
          this.$store.dispatch('setLoginUser', {
            'userId': response.data.auth.id,
            'username': response.data.auth.username,
            'accessToken': response.data.access_token
          })
          this.isLoading = false
          this.$router.go({ path: this.$router.push('/user/my-page'), force: true })
        })
        .catch(() => {
          this.isLoading = false
          this.message.name = 'ログインできませんでした'
          this.form.password = ''
        })
      }
    },
    checkRegisterForm: function () {
      this.resetErrorMessage()
      if (this.form.name.length < 5 || this.form.name.length > 20) {
        this.message.name = '名前は5文字以上20文字以内で入力してください'
        this.message.errorCount++
      }
      // if (this.form.password.length < 5 || this.form.password.length > 20) {
      //   this.message.password = 'パスワードは5文字以上20文字以内で入力してください'
      //   this.message.errorCount++
      // }
    },
    resetErrorMessage: function () {
      this.message.name = ''
      this.message.password = ''
      this.message.passwordConfirm = ''
      this.message.errorCount = 0
    },
  }
}
</script>

<style scoped>

</style>
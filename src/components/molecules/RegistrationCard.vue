<template>
  <div class="mx-auto h-full flex justify-center items-center mt-8 mb-10">
    <div v-show="!isLoading" class="w-96 bg-green-500 rounded-lg shadow-xl p-6">
      <div class="flex justify-center p-2">
        <img src="../../assets/spotify_logo.jpg" class="w-20 h-20 rounded-full">
      </div>
      <div class="pt-4">
        <div class="relative pt-2 px-4">
          <label for="name" class="uppercase text-gray-900 text-xs font-bold absolute pl-3 pt-3">Name</label>
          <div>
            <input id="name" type="text" class="pt-10 w-full rounded p-4 bg-gray-200 text-black outline-none focus:bg-white" name="name" v-model="form.name" placeholder="yourname">
            <span v-show="message.name" class="text-red-700 text-xs p-1" role="alert"><strong>{{ message.name }}</strong></span>
          </div>
        </div>
        <div class="relative pt-3 px-4">
          <label for="password" class="uppercase text-gray-900 text-xs font-bold absolute pl-3 pt-3">Password</label>
          <div class="col-md-6">
            <input id="password" type="password" class="pt-10 w-full rounded p-4 bg-gray-200 text-black outline-none focus:bg-white" name="password" v-model="form.password" placeholder="Password">
            <span v-show="message.password" class="text-red-700 text-xs p-1" role="alert"><strong>{{ message.password }}</strong></span>
          </div>
        </div>
        <div class="relative pt-3 px-4">
          <label for="password-confirm" class="uppercase text-gray-900 text-xs font-bold absolute pl-3 pt-3">Password Confirm</label>
          <div class="col-md-6">
            <input id="password-confirm" type="password" class="pt-10 w-full rounded p-4 bg-gray-200 text-black outline-none focus:bg-white" name="password_confirmation" v-model="form.passwordConfirm" required autocomplete="new-password" placeholder="Password Confirm">
            <span v-show="message.passwordConfirm" class="text-red-700 text-sm p-1" role="alert"><strong>{{ message.passwordConfirm }}</strong></span>
          </div>
        </div>
        <div class="py-4 px-4" @click="register()">
          <div class="w-full py-4 px-3 text-center uppercase rounded text-white hover:text-green-900 font-bold tracking-widest hover:bg-white bg-green-900 cursor-pointer">
            Register
          </div>
        </div>
      </div>
    </div>
    <div v-show="isLoading"><Spinner /></div>
  </div>
</template>

<script>
import Spinner from '../atoms/Spinner'
import axios from 'axios';

export default {
  name: "RegistrationCard",

  components: {
    Spinner,
  },

  data () {
    return {
      isLoading: false,
      form: {
        name: '',
        password: '',
        passwordConfirm: ''
      },
      message: {
        name: '',
        password: '',
        passwordConfirm: '',
        errorCount: 0,
      },
    }
  },

  methods: {
    register: function () {
      this.checkRegisterForm()

      if (!this.message.errorCount) {
        this.isLoading = true
        axios.post('https://spotify.brightful.biz/public/api/register', {
          'username': this.form.name,
          'password': this.form.password,
          'password_confirmation': this.form.passwordConfirm
        })
        .then(response => {
          this.$store.dispatch('setLoginUser', {
            'userId': response.data.auth.id,
            'username': response.data.auth.username,
            'accessToken': response.data.access_token
          })
          this.isLoading = false
          this.$router.go({ path: this.$router.push('/'), force: true })
        })
        .catch(() => {
          this.isLoading = false
          this.message.name = 'この名前はすでに使われています'
          this.form.password = ''
          this.form.passwordConfirm = ''
        })
      }
    },
    checkRegisterForm: function () {
      this.resetErrorMessage()
      if (this.form.name.length < 5 || this.form.name.length > 20) {
        this.message.name = '名前は5文字以上20文字以内で入力してください'
        this.message.errorCount++
      }
      if (this.form.password.length < 5 || this.form.password.length > 20) {
        this.message.password = 'パスワードは5文字以上20文字以内で入力してください'
        this.message.errorCount++
      }
    },
    resetErrorMessage: function () {
      this.message.name = ''
      this.message.password = ''
      this.message.errorCount = 0
    },
  }

}
</script>

<style scoped>

</style>
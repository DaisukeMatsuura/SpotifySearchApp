<template>
  <div>
    <Header />
    <LoginCard />
  </div>
</template>

<script>
import Header from '../organisms/Header'
import LoginCard from '../molecules/LoginCard'


export default {
  name: "Login",

  components: {
    Header,
    LoginCard,
  }
}
</script>

<style scoped>

</style>
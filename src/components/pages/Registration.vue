<template>
  <div>
    <Header />
    <RegisterCard />
  </div>
</template>

<script>
import Header from '../organisms/Header'
import RegisterCard from '../molecules/RegistrationCard';

export default {
  name: "Registration",

  components: {
    Header,
    RegisterCard,
  },
}
</script>

<style scoped>

</style>
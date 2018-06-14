<template>
  <div class="home">
    <img src="../assets/logo.png">
    <Home msg="Welcome to Your Vue.js App"/>
    <i class="ion-md-heart"></i>
    <p class="text-2xl text-red">HOLA</p>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/styles.css'
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>

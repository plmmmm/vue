<template>
  <div id="app">
    <Header-z></Header-z>
    <router-view></router-view>
    <Footer-z></Footer-z>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    'Header-z':header,
    'Footer-z':footer,
  }
}
</script>
<style>
  
</style>



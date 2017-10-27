<template>
  <div id="app">
    <img src="./assets/logo.png">
    <GifSearch />
    <GifFooter />
  </div>
</template>

<script>
import GifSearch from '@/components/GifSearch'
import GifFooter from '@/components/GifFooter'
export default {
  name: 'app',
  components: {
    GifSearch,
    GifFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

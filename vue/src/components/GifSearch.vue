<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <input v-model="term" type="text" name="term" placeholder="Search for GIFs"/>
    <button @click="grabData(); frontPage();">GIFs!</button>
    <div>
      <router-view/>
      <Gif v-if="results" v-for="(result, index) in results" :result="result"  :key="index"></Gif>
    </div>
  </div>

</template>

<script>
import Gif from '@/components/Gif'
export default {
  name: 'GifSearch',
  data () {
    return {
      results: '',
      term: '',
      msg: 'Welcome to the GifSearch Vue App',
      giphyKey: 'dc6zaTOxFJmzC' // public Giphy API key
    }
  },
  methods: {
    async grabData () {
      const request = `?api_key=${this.giphyKey}&q=${this.term}`
      const results = await this.$request(request)
      this.results = results.data
    },
    frontPage () {
      this.$router.push('/')
    }
  },
  components: {
    Gif
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

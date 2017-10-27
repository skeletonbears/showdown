<template>
  <img :src="src"/>
</template>

<script>
export default {
  props: ['index', 'result'],
  name: 'Gif',
  data () {
    return {
      test: ''
    }
  },
  computed: {
    src () {
      console.log(this.result)
      return this.result.images.preview_gif.url
    }
  }
  // methods: {
  // }
  // components: {

  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  img{
    display: inline-block;
    width: 20%;
    height: 200px;
    object-fit: cover;
  }
</style>

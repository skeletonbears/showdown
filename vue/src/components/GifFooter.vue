<template>
  <div id="giffooter">
    <h4>&copy; 2194 Echo&Co.</h4>
  </div>
</template>

<script>
export default {
  name: 'GifFooter',
  data () {
    return {
      test: ''
    }
  },
  computed: {
  }
  // methods: {
  // }
  // components: {

  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #giffooter{
    position: fixed;
    bottom: 0;
    left: calc(50% - 100px);
    width: 200px;
    text-align: center;
  }
</style>

<template>
  <div id="detail">
    <detail-nav-bar/>
  </div>
</template>

<script>
import DetailNavBar from './detail/DetailNavBar'
export default {
  data () {
    return {
      id: null
    }
  },
  components: {
    DetailNavBar
  },
  created () {
    this.id = this.$route.params.id
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>

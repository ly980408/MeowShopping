<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartListLength}})</div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  data () {
    return {
    }
  },
  components: {
    NavBar
  },
  computed: {
    cartListLength () {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-bar{
    background: #d4237a;
    font-size: 18px;
    color: #fff;
  }
</style>

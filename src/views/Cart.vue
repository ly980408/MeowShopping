<template>
  <div class="cart">
    <cart-nav-bar class="cart-nav-bar" />
    <cart-list :cartList="cartList" />
  </div>
</template>

<script>
import CartNavBar from './cart/CartNavBar'
import CartList from './cart/CartList'

export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  components: {
    CartNavBar,
    CartList
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
  .cart{
    width: 100%;
    height: 100vh;
    // .cart-nav-bar{
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    // }
  }
</style>

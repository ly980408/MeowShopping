<template>
  <div class="cart">
    <cart-nav-bar />
    <cart-list :cartList="cartList" />
  </div>
</template>

<script>
import CartNavBar from './cart/CartNavBar'
import CartList from './cart/CartList'

export default {
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
  }
</style>

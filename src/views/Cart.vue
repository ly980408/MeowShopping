<template>
  <div class="cart">
    <cart-nav-bar class="cart-nav-bar" />
    <div v-if="cartList.length===0" class="no-goods">购物车里空空如也~</div>
    <cart-list v-else :cartList="cartList" />
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
    position: relative;
    // .cart-nav-bar{
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    // }
    .no-goods {
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: #cdcdcd;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
    }
  }
</style>

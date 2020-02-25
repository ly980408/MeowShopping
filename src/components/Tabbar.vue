<template>
  <van-tabbar v-model="active" active-color="#d4237a" route>
    <van-tabbar-item to="/home">
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? home.active : home.inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/category">
      <span>分类</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? sort.active : sort.inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/cart">
      <span>购物车</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? cart.active : cart.inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/mine">
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? mine.active : mine.inactive"
      >
    </van-tabbar-item>
</van-tabbar>
</template>

<script>

export default {
  data () {
    return {
      active: 0,
      home: {
        active: require('@/assets/img/tabbar/shouye1.png'),
        inactive: require('@/assets/img/tabbar/shouye.png')
      },
      sort: {
        active: require('@/assets/img/tabbar/fenlei1.png'),
        inactive: require('@/assets/img/tabbar/fenlei.png')
      },
      cart: {
        active: require('@/assets/img/tabbar/gouwuche1.png'),
        inactive: require('@/assets/img/tabbar/gouwuche.png')
      },
      mine: {
        active: require('@/assets/img/tabbar/wode1.png'),
        inactive: require('@/assets/img/tabbar/wode.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-tabbar{
    background-color: #f6f6f6;
  }
</style>

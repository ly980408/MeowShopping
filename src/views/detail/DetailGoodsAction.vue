<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" @click="toChat" />
    <van-goods-action-icon icon="cart-o" text="购物车" :info="$store.state.cartList.length" @click="toCart" />
    <van-goods-action-icon :icon="isStar?'star':'star-o'" :text="isStar?'已收藏':'收藏'" :color="isStar?'#ff5000':''" @click="star" />
    <van-goods-action-button type="warning" text="加入购物车" @click="handleBtnClick" />
    <van-goods-action-button type="danger" text="立即购买" @click="handleBtnClick" />
  </van-goods-action>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  props: {
    goodsId: String
  },
  data () {
    return {
      isStar: false
    }
  },
  created () {
    if (localStorage.getItem(this.goodsId)) {
      this.isStar = true
    }
  },
  methods: {
    toChat () {
      console.log('toChat')
    },
    toCart () {
      this.$router.push('/cart')
    },
    star () { // 利用 localStorage 模拟收藏功能
      if (this.isStar) {
        localStorage.removeItem(this.goodsId)
        this.isStar = false
        Toast({
          message: '取消收藏',
          icon: 'star-o'
        })
      } else {
        localStorage.setItem(this.goodsId, 'star')
        this.isStar = true
        Toast({
          message: '收藏成功',
          icon: 'star'
        })
      }
    },
    handleBtnClick () {
      this.$bus.$emit('showSku')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

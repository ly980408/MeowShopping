<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" @click="toChat" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" />
    <van-goods-action-icon :icon="isStar?'star':'star-o'" :text="isStar?'已收藏':'收藏'" :color="isStar?'#ff5000':''" @click="star" />
    <van-goods-action-button type="warning" text="加入购物车" @click="handleBtnClick" />
    <van-goods-action-button type="danger" text="立即购买" @click="handleBtnClick" />
  </van-goods-action>
</template>

<script>
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
  },
  methods: {
    toChat () {
      console.log('toChat')
    },
    toCart () {
      console.log('toCart')
    },
    star () {
      if (this.isStar) {
      } else {
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

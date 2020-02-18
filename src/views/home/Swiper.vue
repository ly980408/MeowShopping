<template>
  <van-swipe :autoplay="3000" indicator-color="#d4237a">
    <van-swipe-item v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    bannerList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-swipe img{
    width: 100%;
  }
</style>

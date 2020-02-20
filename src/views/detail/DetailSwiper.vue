<template>
  <van-swipe indicator-color="#d4237a">
    <van-swipe-item v-for="(item, index) in imageList" :key="index">
      <img :src="item" @click="imagePreview"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'

Vue.use(ImagePreview)

export default {
  props: {
    imageList: Array
  },
  methods: {
    imagePreview () {
      ImagePreview(this.imageList)
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-swipe{
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
      position: absolute;
      top: -100px;
    }
  }
</style>

<template>
  <van-swipe indicator-color="#d4237a" :stop-propagation="false" @change="onChange" ref="swiper">
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
  data () {
    return {
      index: 0
    }
  },
  methods: {
    onChange (index) {
      this.index = index
    },
    imagePreview () {
      ImagePreview({
        images: this.imageList,
        startPosition: this.index,
        onChange: (index) => {
          this.index = index
        },
        onClose: () => {
          this.$refs.swiper.swipeTo(this.index, { immediate: true })
        }
      })
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

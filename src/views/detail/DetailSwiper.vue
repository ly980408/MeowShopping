<template>
  <van-swipe indicator-color="#d4237a">
    <van-swipe-item v-for="(item, index) in imageList" :key="index">
      <img :src="item"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    imageList: Array
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

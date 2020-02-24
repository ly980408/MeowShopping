<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
    <div class="info-desc">
      <van-divider class="divider">店家描述</van-divider>
      <div class="desc">{{ detailInfo.desc }}</div>
    </div>
    <div v-for="item in detailInfo.detailImage" :key="item.anchor" class="info-image">
      <div v-if="item.list">
        <van-divider class="divider">{{ item.key }}</van-divider>
        <div class="image-list">
          <img v-for="img in item.list" :key="img" :src="img" @load="imageLoad">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: Object
  },
  data () {
    return {
      counter: 0,
      imageNumber: 0
    }
  },
  methods: {
    imageLoad () {
      this.counter++
      if (this.counter % 5 === 0 || this.counter === this.imageNumber) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo () {
      let result = 0
      for (const item of this.detailInfo.detailImage) {
        if (item.list) {
          result += item.list.length
        }
      }
      this.imageNumber = result
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-info{
    padding: 15px;
    .divider{
      color: black;
      border-color: #cdcdcd;
    }
    .info-desc .desc{
      padding: 0 10px;
      font-size: 15px;
      color: darkgrey;
    }
    .info-image{
      .image-list{
        img{ width: 100%;}
      }
    }
  }
</style>

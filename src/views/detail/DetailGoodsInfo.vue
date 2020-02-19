<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="goods-info">
    <div class="info-title">{{ goodsInfo.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goodsInfo.newPrice }}</span>
      <span class="old-price">{{ goodsInfo.oldPrice }}</span>
      <span v-if="goodsInfo.discount" class="discount" :style="{ background:goodsInfo.discountBgColor }">{{ goodsInfo.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length-1].name }}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goodsInfo.services.length-1" :key="index" class="info-service-item">
        <img v-if="goodsInfo.services[index-1].icon" :src="goodsInfo.services[index-1].icon" alt="">
        <span>{{ goodsInfo.services[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .goods-info{
    padding: 10px;
    padding-bottom: 0;
    border-bottom: 4px solid #cdcdcd;
    .info-title{
      font-size: 18px;
      color: black;
    }
    .info-price{
      position: relative;
      padding: 15px 0;
      .new-price{
        font-size: 22px;
        color: #d4237a;
      }
      .old-price{
        font-size: 14px;
        text-decoration: line-through;
        padding: 0 5px;
      }
      .discount{
        color: #ffffff;
        font-size: 14px;
        padding: 2px 5px;
        border-radius: 5px;
        position: absolute;
      }
    }
    .info-other{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #c0c0c0;
      padding-bottom: 10px;
      // border-bottom: 1px solid #c0c0c0;
      box-shadow: 0 1px #c0c0c0;
    }
    .info-service{
      font-size: 14px;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      .info-service-item{
        img{
        width: 14px;
        }
        span{
          padding-left: 3px;
        }
      }
    }
  }
</style>

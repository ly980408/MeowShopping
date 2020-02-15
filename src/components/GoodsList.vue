<template>
  <div class="goods-list">
    <div v-for="(item, index) in goodsList" :key="index" class="goods-item">
      <img :src="item.show.img" alt="">
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <div>
          <span class="price">{{ item.price }}</span>
          <span class="sale">{{ item.sale }}人付款</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list{
  padding: 0 15px;
  // display: flex;
  // width: 100%;
  // flex-wrap: wrap;
  column-count: 2;
  .goods-item{
    // width: 48%;
    break-inside: avoid;
    img{
      width: 100%;
      border-radius: 6px;
    }
    .goods-info{
      height: 55px;
      padding: 4px;
      box-sizing: content-box;
      p{
        height: 35px;
        overflow: hidden;
      }
      div{
        display: flex;
        justify-content: space-between;
        .price{
          color: #d4237a;
        }
        .sale{
          font-size: 12px;
          color: #c0c0c0;
          padding-top: 2px;
          line-height: normal;
        }
      }
    }
  }
}
</style>

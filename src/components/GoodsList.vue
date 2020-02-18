<template>
  <div class="goods-list">
    <div v-for="(item, index) in goodsList" :key="index" class="goods-item">
      <img :src="item.show.img" alt="" @load="imageLoad">
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
  },
  methods: {
    imageLoad () {
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list{
  padding: 10px 15px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  // column-count: 2;
  .goods-item{
    width: 48%;
    display: flex;
    flex-direction: column;
    // break-inside: avoid;
    // max-height: 300px;;
    margin-bottom: 6px;
    img{
      width: 100%;
      border-radius: 6px;
    }
    .goods-info{
      padding: 4px;
      box-sizing: content-box;
      position: relative;
      flex: 1;
      p{
        max-height: 36px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      div{
        height: 20px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
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

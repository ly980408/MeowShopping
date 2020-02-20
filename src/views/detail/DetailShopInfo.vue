<template>
  <div v-if="Object.keys(shop).length != 0" class="shop-info">
    <div class="info-top">
      <img :src="shop.logo" alt="">
      <span>{{ shop.name }}</span>
    </div>
    <div class="info-mid">
      <div class="mid-left">
        <div class="sells">
          <p class="number">{{ shop.sells }}</p>
          <p class="text">总销量</p>
        </div>
        <div class="goods">
          <p class="number">{{ shop.goodsCount }}</p>
          <p class="text">全部宝贝</p>
        </div>
      </div>
      <div class="mid-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-red': item.isBetter }">{{ item.score }}</td>
            <td class="better" :class="{ 'better-red': item.isBetter }"><span>{{ item.isBetter ? '高':'低' }}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="info-bot">
      <div class="to-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
  .shop-info{
    padding: 25px 15px 0;
    border-bottom: 4px solid #cdcdcd;
    .info-top{
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
      img{
        height: 50px;
        border-radius: 50%;
      }
      span{
        padding-left: 18px;
        line-height: 50px;
      }
    }
    .info-mid{
      width: 100%;
      display: flex;
      .mid-left{
        flex: 1;
        width: 50%;
        display: flex;
        margin: 15px 0;
        padding: 0 15px 0 10px;
        text-align: center;
        justify-content: space-between;
        border-right: 1px solid #cdcdcd;
        .sells{
          width: 50%;
        }
        .number{
          font-size: 22px;
          padding-bottom: 5px;
          color: #000000;
        }
        .text{
          font-size: 14px;
        }
      }
      .mid-right{
        flex: 1;
        padding-left: 15px;
        table{
          width: 100%;
          height: 100%;
          font-size: 14px;
          .score{
            color: lawngreen;
          }
          .score-red{
            color: tomato;
          }
          .better{
            text-align: center;
            background: lawngreen;
            border-radius: 5px;
            color: #ffffff;
          }
          .better-red{
            background: tomato;
          }
        }
      }
    }
    .info-bot{
      width: 100%;
      margin: 15px 0;
      .to-shop{
        font-size: 18px;
        width: 40%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        margin: 0 auto;
        border-radius: 10px;
        background: #f6f6f6;
      }
    }
  }
</style>

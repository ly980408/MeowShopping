<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :imageList="topImages" />
    <detail-goods-info :goodsInfo="goodsInfo" />
    <detail-shop-info :shop="shop" />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
import DetailNavBar from './detail/DetailNavBar'
import DetailSwiper from './detail/DetailSwiper'
import DetailGoodsInfo from './detail/DetailGoodsInfo'
import DetailShopInfo from './detail/DetailShopInfo'

import {
  getDetailData,
  GoodsInfo,
  Shop
} from '@/network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImages: [],
      goodsInfo: {},
      shop: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo
  },
  created () {
    // 保存传入的id
    this.id = this.$route.params.id
    // 请求数据
    getDetailData(this.id).then(res => {
      const data = res.result
      console.log(data)
      this.topImages = data.itemInfo.topImages
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
    })
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>

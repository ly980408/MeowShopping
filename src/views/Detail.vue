<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="detail-scroll-wrapper" ref="scroll">
      <detail-swiper :imageList="topImages" />
      <detail-goods-info :goodsInfo="goodsInfo" />
      <detail-comment :commentInfo="commentInfo" />
      <detail-shop-info :shop="shop" />
      <detail-info :detailInfo="detailInfo" @imageLoad="refresh" />
      <detail-params :params="params" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './detail/DetailNavBar'
import DetailSwiper from './detail/DetailSwiper'
import DetailGoodsInfo from './detail/DetailGoodsInfo'
import DetailShopInfo from './detail/DetailShopInfo'
import DetailInfo from './detail/DetailInfo'
import DetailParams from './detail/DetailParams'
import DetailComment from './detail/DetailComment'

import Scroll from '@/components/Scroll'

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
      shop: {},
      detailInfo: {},
      params: {},
      commentInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParams,
    DetailComment,
    Scroll
  },
  created () {
    // 保存传入的id
    this.id = this.$route.params.id
    // 请求数据
    getDetailData(this.id).then(res => {
      const data = res.result
      console.log(data)
      this.topImages = data.itemInfo.topImages // 顶部轮播图片
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services) // 商品主要信息
      this.shop = new Shop(data.shopInfo) // 商家信息
      this.detailInfo = data.detailInfo // 商品详情信息
      this.params = data.itemParams // 商品参数信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
  },
  methods: {
    refresh () {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
  #detail{
    position: relative;
    z-index: 9;
    background: #ffffff;
    height: 100vh;
    .detail-scroll-wrapper{
      height: calc(100% - 44px);
    }
  }
</style>

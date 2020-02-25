<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <scroll class="detail-scroll-wrapper" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :imageList="topImages" />
      <detail-goods-info :goodsInfo="goodsInfo" />
      <detail-comment :commentInfo="commentInfo" ref="comment" />
      <detail-shop-info :shop="shop" />
      <detail-info :detailInfo="detailInfo" @imageLoad="refresh" ref="detail" />
      <detail-params :params="params" />
      <van-divider class="divider" ref="recommend">猜你喜欢</van-divider>
      <goods-list :goodsList="recommendList"/>
    </scroll>
    <detail-goods-action :goodsId="id"/>
    <detail-sku :skuInfo="skuInfo" :goodsId="id"/>
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
import DetailGoodsAction from './detail/DetailGoodsAction'
import DetailSku from './detail/DetailSku'

import Scroll from '@/components/Scroll'
import GoodsList from '@/components/GoodsList'

import {
  getDetailData,
  GoodsInfo,
  Shop,
  getRecommend
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
      commentInfo: {},
      recommendList: [],
      y: [],
      currentIndex: 0,
      skuInfo: {}
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
    DetailGoodsAction,
    DetailSku,
    GoodsList,
    Scroll
  },
  created () {
    // 保存传入的id
    this.id = this.$route.params.id
    // 请求数据
    getDetailData(this.id).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages // 顶部轮播图片
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services) // 商品主要信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      this.shop = new Shop(data.shopInfo) // 商家信息
      this.detailInfo = data.detailInfo // 商品详情信息
      this.params = data.itemParams // 商品参数信息
      this.skuInfo = data.skuInfo
    })

    getRecommend().then(res => {
      this.recommendList = res.data.list
    })
  },
  mounted () {
    // 监听图片加载，刷新scroll，重新计算高度
    this.$bus.$on('detailImageLoad', () => {
      const refresh = this.$refs.scroll.refresh
      this.debounce(refresh, 200)
    })
  },
  updated () {
  },
  destroyed () {
    this.$bus.$off('detailImageLoad')
  },
  methods: {
    refresh () {
      this.$refs.scroll.refresh()
      this.y = []
      this.y.push(0)
      this.y.push(this.$refs.comment.$el.offsetTop - 44)
      this.y.push(this.$refs.detail.$el.offsetTop - 44)
      this.y.push(this.$refs.recommend.offsetTop - 44)
    },
    // 防抖函数
    debounce (func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    titleClick (index) {
      this.$refs.scroll.scrollTo(0, -this.y[index], 200)
    },
    scroll (position) {
      const Y = -position.y
      if (this.currentIndex !== 0 && Y < this.y[1]) {
        this.$refs.nav.currentIndex = 0
        this.currentIndex = 0
      } else if (this.currentIndex !== 1 && Y >= this.y[1] && Y < this.y[2]) {
        this.$refs.nav.currentIndex = 1
        this.currentIndex = 1
      } else if (this.currentIndex !== 2 && Y >= this.y[2] && Y < this.y[3]) {
        this.$refs.nav.currentIndex = 2
        this.currentIndex = 2
      } else if (this.currentIndex !== 3 && Y >= this.y[3]) {
        this.$refs.nav.currentIndex = 3
        this.currentIndex = 3
      }
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
      height: calc(100% - 94px);
    }
    .divider{
      padding: 15px;
      margin: 0;
    }
  }
</style>

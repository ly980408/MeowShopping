<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">Meow Shopping</div></nav-bar>
    <swiper :bannerList="bannerList" />
    <recommend-view :recommendList="recommendList" />
    <single-recommend/>
    <tab :titles="['流行','新款','精选']" class="home-tab" @tabChange="tabChange" />
    <goods-list :goodsList="currentGoodsList" />

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Tab from '@/components/Tab'

import GoodsList from '@/components/goods/GoodsList'

import Swiper from './home/Swiper'
import RecommendView from './home/RecommendView'
import SingleRecommend from './home/SingleRecommend'

import { getHomeMultidata, getHomeGoods } from '@/network/home'

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    SingleRecommend,
    Tab,
    GoodsList
  },
  data () {
    return {
      bannerList: [],
      recommendList: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentSort: 'pop'
    }
  },
  computed: {
    currentGoodsList () {
      return this.goods[this.currentSort].list
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.bannerList = res.data.banner.list
      this.recommendList = res.data.recommend.list
    })

    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  methods: {
    // 数据请求
    getGoodsData (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    // 事件监听
    tabChange (i) {
      switch (i) {
        case 0:
          this.currentSort = 'pop'
          break
        case 1:
          this.currentSort = 'new'
          break
        case 2:
          this.currentSort = 'sell'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
  width: 100%;
  padding-top: 44px;
  .home-nav{
    background-color: #d4237a;
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .home-tab{
    position: sticky;
    top: 43px;
    left: 0;
  }

}
</style>

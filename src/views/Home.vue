<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">Meow Shopping</div></nav-bar>
    <tab v-show="isTabFixed" :titles="['流行','新款','精选']" class="tab-fixed" @tabChange="tabChange" ref="tab1" />
    <scroll class="scroll-wrapper"
            ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @scroll="scroll"
            @pullingUp="loadMore">
      <swiper :bannerList="bannerList" @swiperImageLoad="getTabOffsetTop" />
      <recommend-view :recommendList="recommendList" />
      <single-recommend/>
      <tab :titles="['流行','新款','精选']" class="home-tab" @tabChange="tabChange" ref="tab" />
      <goods-list :goodsList="currentGoodsList" />
    </scroll>

    <back-top @click.native="backTop" v-show="isBackTopShow" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Tab from '@/components/Tab'
import Scroll from '@/components/Scroll'

import GoodsList from '@/components/GoodsList'
import BackTop from '@/components/BackTop'

import Swiper from './home/Swiper'
import RecommendView from './home/RecommendView'
import SingleRecommend from './home/SingleRecommend'

import { getHomeMultidata, getHomeGoods } from '@/network/home'

export default {
  components: {
    NavBar,
    Scroll,
    Swiper,
    RecommendView,
    SingleRecommend,
    Tab,
    GoodsList,
    BackTop
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
      currentSort: 'pop',
      isBackTopShow: false,
      tabOffsetTop: 0,
      isTabFixed: false
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
  mounted () {
    // 监听图片加载，刷新scroll，重新计算高度
    this.$bus.$on('imageLoad', () => {
      const refresh = this.$refs.scroll.refresh
      this.debounce(refresh, 200)
    })
    this.$bus.$off('imageLoad')
  },
  activated () {
    this.$refs.scroll.refresh()
  },
  methods: {
    // 数据请求
    getGoodsData (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
        this.$refs.scroll.scroll.refresh()
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
      this.$refs.tab.current = i
      this.$refs.tab1.current = i
    },
    backTop () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    scroll (position) {
      this.isBackTopShow = (-position.y) > 1000

      this.isTabFixed = (-position.y) >= this.tabOffsetTop
    },
    loadMore () {
      this.getGoodsData(this.currentSort)
      this.$refs.scroll.scroll.refresh()
    },
    getTabOffsetTop () {
      this.tabOffsetTop = this.$refs.tab.$el.offsetTop
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
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
  height: 100vh;
  position: relative;
  // padding-top: 44px;
  .home-nav{
    background-color: #d4237a;
    color: #ffffff;
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // z-index: 999;
  }
  .tab-fixed{
    position: absolute;
    z-index: 9;
  }
  .scroll-wrapper{
    height: calc(100% - 94px);
    overflow: hidden;
    position: relative;
  }
}
</style>

<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">Meow Shopping</div></nav-bar>
    <swiper :bannerList="bannerList" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Swiper from './home/Swiper'
import { getHomeMultidata } from '@/network/home'

export default {
  components: {
    NavBar,
    Swiper
  },
  data () {
    return {
      bannerList: [],
      recommendList: []
    }
  },
  created () {
    getHomeMultidata().then(res => {
      // console.log(res.data)
      this.bannerList = res.data.banner.list
      this.recommendList = res.data.recommend.list
    })
  }
}
</script>

<style lang="scss" scoped>
#home{
  width: 100%;
  .home-nav{
    background-color: #d4237a;
    color: #ffffff;
  }
}
</style>

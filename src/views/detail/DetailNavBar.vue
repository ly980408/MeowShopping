<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="back"><span class="iconfont icon-jiantou"></span></div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index == currentIndex }"
          @click="currentIndex = index">
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
#detail{
  .nav-bar{
    box-shadow: 0px 1px #cdcdcd;
    .back{
      font-size: 18px;
      padding-left: 10px;
    }
    .title{
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      font-size: 14px;
      .active{
        color: #d4237a;
      }
    }
  }
}
</style>

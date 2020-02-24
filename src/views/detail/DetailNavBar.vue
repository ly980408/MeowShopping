<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="back"><span class="iconfont icon-jiantou" @click="back"></span></div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index == currentIndex }"
          @click="onClick(index)">
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
      titles: ['商品', '评论', '详情', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    onClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  }
}
</script>

<style lang="scss" scoped>
#detail{
  .nav-bar{
    box-shadow: 0px 1px #cdcdcd;
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    .back{
      font-size: 18px;
      padding: 0 20px 0 10px;
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

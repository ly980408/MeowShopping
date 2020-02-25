<template>
  <div class="sort">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
    <div class="content">
      <scroll class="scroll-wrapper">
        <van-sidebar v-model="activeKey" class="side-bar" @change="onSidebarChange">
          <van-sidebar-item v-for="title in titles" :key="title" :title="title" />
        </van-sidebar>
      </scroll>
      <scroll class="scroll-wrapper" ref="scroll">
        <div>
          <subcategory :subcategoryList="subcategoryList" />
          <div>
            <tab :titles="['推荐', '新品', '销量']" class="tab" @tabChange="tabChange" />
            <category-detail :categoryDetail="showCategoryDetail" />
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Scroll from '@/components/Scroll'
import Tab from '@/components/Tab'
import Subcategory from './category/Subcategory'
import CategoryDetail from './category/CategoryDetail'

import { getCategoryData, getSubcategory, getCategoryDetail } from '@/network/category'

export default {
  data () {
    return {
      categoryList: [],
      titles: [],
      categoryData: [],
      subcategoryList: [],
      activeKey: 0,
      currentType: 'pop'
    }
  },
  components: {
    NavBar,
    Scroll,
    Tab,
    Subcategory,
    CategoryDetail
  },
  computed: {
    showCategoryDetail () {
      if (this.categoryData.length === 0) {
        return []
      } else {
        const detail = this.categoryData[this.activeKey].categoryDetail
        return detail[this.currentType]
      }
    }
  },
  methods: {
    // 数据方法
    getSubcategoryByIndex (i) {
      const mailKey = this.categoryList[i].maitKey
      getSubcategory(mailKey).then(res => {
        this.categoryData[i].subcategory = res.data
        this.subcategoryList = res.data.list
        this.getCategoryDetail('pop')
        this.getCategoryDetail('sell')
        this.getCategoryDetail('new')
      })
    },
    getCategoryDetail (type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categoryList[this.activeKey].miniWallkey
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        if (!res) {
          console.log('请求失败')
          return
        }
        // 3.将获取的数据保存下来
        this.categoryData[this.activeKey].categoryDetail[type] = res
        this.categoryData = { ...this.categoryData }
      })
    },
    // 事件
    onSidebarChange (i) {
      this.getSubcategoryByIndex(i)
    },
    tabChange (i) {
      const titles = ['pop', 'new', 'sell']
      this.currentType = titles[i]
    }
  },
  created () {
    getCategoryData().then(res => {
      if (!res) {
        console.log('请求失败')
        return
      }
      // 获取分类列表
      const category = res.data.category
      this.categoryList = category.list
      for (const item of this.categoryList) {
        this.titles.push(item.title)
      }
      // 初始化子分类
      for (let i = 0; i < this.categoryList.length; i++) {
        this.categoryData[i] = {
          subcategory: {},
          categoryDetail: {
            pop: [],
            new: [],
            sell: []
          }
        }
      }
      // 请求第一个分类的数据
      this.getSubcategoryByIndex(0)
    })
  },
  mounted () {
    this.$bus.$on('categoryImageLoad', () => {
      this.$refs.scroll.refresh()
    })
  }
}
</script>

<style lang="scss" scoped>
  .sort{
    .nav-bar{
      background: #d4237a;
      color: #ffffff;
    }
    .content{
      display: flex;
      height: 100vh;
      .side-bar{
        min-width: 85px;
        .van-sidebar-item--select{ border-color: #d4237a;}
      }
      .scroll-wrapper{
        height: calc(100% - 94px);
      }
      .tab{
        background: #f6f6f6;
      }
    }
  }
</style>

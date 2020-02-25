<template>
  <van-sku
    v-model="show"
    :sku="sku"
    :goods="goods"
    :goods-id="goodsId"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
  />
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  props: {
    skuInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    goodsId: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      show: false,
      sku: {
        tree: [],
        list: [],
        price: '', // 默认价格（单位元）
        stock_num: 0, // 商品总库存
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: ''
      }
    }
  },
  created () {
    this.$bus.$on('showSku', () => {
      this.show = true
    })
  },
  mounted () {
  },
  watch: {
    skuInfo () { // 整合 sku 组件所需要的数据结构
      // 默认价格
      this.sku.price = this.skuInfo.defaultPrice.substring(1)
      // 总库存
      this.sku.stock_num = this.skuInfo.totalStock
      // 默认商品缩略图
      this.goods.picture = this.skuInfo.skus[0].img
      // tree
      const tree = []
      for (const prop of this.skuInfo.props) {
        const key = {}
        key.k = prop.label
        key.v = []
        for (const item of prop.list) {
          const value = {}
          value.id = item.styleId || item.sizeId
          value.name = item.name
          key.v.push(value)
        }
        tree.push(key)
      }
      tree[0].k_s = 's1'
      tree[1].k_s = 's2'
      // 添加预览图
      for (const item of tree[0].v) {
        const id = item.id
        const el = this.skuInfo.skus.find((el) => {
          if (el.styleId === id) return true
        })
        // console.log(el)
        item.imgUrl = el.img
      }

      this.sku.tree = tree
      // list
      const list = []
      for (const item of this.skuInfo.skus) {
        // console.log(item)
        const sku = {}
        sku.id = item.xdSkuId
        sku.price = item.nowprice
        sku.stock_num = item.stock
        sku.s1 = item.styleId
        sku.s2 = item.sizeId
        list.push(sku)
      }
      this.sku.list = list
    }
  },
  methods: {
    onBuyClicked (skuData) {
      console.log(skuData)
    },
    onAddCartClicked (skuData) {
      // 信息提取整合
      const { goodsId, selectedNum: num } = skuData
      const { id, price, s1, s2 } = skuData.selectedSkuComb
      // 颜色、尺寸和图片
      const { name: style, imgUrl } = this.sku.tree[0].v.find((el) => {
        if (el.id === s1) return true
      })
      const { name: size } = this.sku.tree[1].v.find((el) => {
        if (el.id === s2) return true
      })
      // 存入一个对象
      const data = {
        goodsId,
        title: this.skuInfo.title,
        num,
        id,
        price: (price / 100).toFixed(2),
        style,
        size,
        imgUrl
      }
      // 将数据存入 store 中
      this.$store.commit('addCartItem', data)
      this.show = false
      Toast('添加成功，在购物车中等亲~')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

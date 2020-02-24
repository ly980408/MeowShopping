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
    skuInfo () {
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
    onAddCartClicked () {
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

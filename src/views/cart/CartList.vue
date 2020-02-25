<template>
<div class="container">
  <scroll class="cart-scroll-wrapper" ref="scroll">
    <div class="cart-list">
      <van-checkbox-group v-model="checked" ref="checkboxGroup">
      <div v-for="(item, index) in cartList" :key="item.id" class="list-item">
        <van-checkbox :name="index" checked-color="#d4237a" class="item-check"></van-checkbox>
        <van-card
          class="item-card"
          :price="item.price"
          :title="item.title"
          :num="item.num"
          :thumb="item.imgUrl"
          @click="onClick(item.goodsId)"
          @
        >
          <div slot="desc" class="card-desc">
            <span>{{ item.style }};</span>
            <span>{{ item.size }}</span>
          </div>
        </van-card>
      </div>
      </van-checkbox-group>
    </div>
  </scroll>
  <van-checkbox v-model="isCheckAll" :disabled="cartList.length===0" checked-color="#d4237a" @input="checkAll" class="check-all">全选</van-checkbox>
  <cart-submit-bar :submitList="submitList"/>
</div>
</template>

<script>
import CartSubmitBar from './CartSubmitBar'
import Scroll from '@/components/Scroll'

export default {
  props: {
    cartList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    CartSubmitBar,
    Scroll
  },
  data () {
    return {
      checked: [],
      isCheckAll: false
    }
  },
  computed: {
    submitList () {
      const list = []
      for (const i of this.checked) {
        const item = this.cartList[i]
        list.push(item)
      }
      return list
    }
  },
  watch: {
    checked () {
      this.isCheckAll = this.checked.length === this.cartList.length
    }
  },
  methods: {
    checkAll (b) {
      this.$refs.checkboxGroup.toggleAll(b)
    },
    onClick (goodsId) {
      this.$router.push(`/detail/${goodsId}`)
    }
  },
  created () {},
  mounted () {
    this.$refs.scroll.refresh()
  },
  activated () {
    this.$refs.scroll.refresh()
    // console.log('1')
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: calc(100% - 44px);
  .cart-scroll-wrapper{
    height: calc(100% - 100px);
  }
  .cart-list{
    width: 100%;
    .list-item{
      width: 100%;
      display: flex;
      .item-check{
        padding-left: 10px;
        width: 30px;
        background-color: #fafafa;
        margin-top: 8px;
      }
      .item-card{
        flex: 1;
        .van-card__title{
          font-weight: 600;
          font-size: 14px;
        }
        .van-card__price{
          color: #d4237a;
        }
        .card-num{
          color: #666;
        }
        .card-desc{
          padding: 3px;
          width: fit-content;
          border-radius: 5px;
          background-color: #f2f2f2;
          margin-top: 3px;
        }
      }
    }
  }
  .check-all{
    position: fixed;
    bottom: 50px;
    z-index: 101;
    padding: 0 0 15px 10px;
  }
}
</style>

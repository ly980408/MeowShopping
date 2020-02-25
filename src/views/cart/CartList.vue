<template>
  <div class="cart-list">
    <van-checkbox-group v-model="checked" ref="checkboxGroup">
    <div v-for="(item, index) in cartList" :key="item.id" class="list-item">
      <van-checkbox :name="index" checked-color="#d4237a" class="item-check"></van-checkbox>
      <van-card
        class="item-card"
        :price="item.price"
        :title="item.title"
        :thumb="item.imgUrl"
      >
        <div slot="desc">
          <span>{{ item.style }};</span>
          <span>{{ item.size }}</span>
        </div>
        <div slot="num">
          <van-button size="mini">-</van-button>
          <span class="card-num"> {{ item.num }} </span>
          <van-button size="mini">+</van-button>
        </div>
      </van-card>
    </div>
    </van-checkbox-group>
    <van-checkbox v-model="isCheckAll" :disabled="cartList.length===0" checked-color="#d4237a" @change="checkAll" class="check-all">全选</van-checkbox>
    <cart-submit-bar :submitList="submitList"/>
  </div>
</template>

<script>
import CartSubmitBar from './CartSubmitBar'

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
    CartSubmitBar
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
      if (this.checked.length === this.cartList.length || this.checked.length === 0) {
        this.$refs.checkboxGroup.toggleAll(b)
      }
    }
  },
  created () {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
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
        .van-button--mini {
          height: 20px !important;
          width: 20px !important;
          min-width: unset !important;
        }
        .van-card__price{
          color: #d4237a;
        }
        .card-num{
          color: #666;
        }
      }
    }
    .check-all{
      position: absolute;
      bottom: 50px;
      z-index: 101;
      padding: 0 0 15px 10px;
    }
  }
</style>

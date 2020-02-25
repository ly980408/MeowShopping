<template>
  <van-submit-bar
    :price="sum"
    button-text="结算"
    :disabled="disabled"
    @submit="onSubmit"
  >
  </van-submit-bar>
</template>

<script>
export default {
  props: {
    submitList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onSubmit () {
      console.log('onSubmit', this.submitList)
    }
  },
  computed: {
    disabled () {
      return this.submitList.length === 0
    },
    sum () {
      let sum = 0
      for (const item of this.submitList) {
        sum += item.price * item.num
      }
      return sum * 100
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
  .van-submit-bar{
    position: fixed;
    bottom: 50px;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #f6f6f6;
    border-bottom: 1px solid #cdcdcd;
  }
</style>

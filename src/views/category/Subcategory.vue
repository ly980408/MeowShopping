<template>
  <van-grid :column-num="3" :border="false" :icon-size="55">
    <van-grid-item
      v-for="item in subcategoryList"
      :key="item.acm"
      :icon="item.image"
      :url="item.link"
      :text="item.title"
    />
  </van-grid>
</template>

<script>
export default {
  props: {
    subcategoryList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>

</style>

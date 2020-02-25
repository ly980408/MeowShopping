<template>
  <goods-list :goodsList="categoryDetail" />
</template>

<script>
import GoodsList from '@/components/GoodsList'

export default {
  props: {
    categoryDetail: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsList
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

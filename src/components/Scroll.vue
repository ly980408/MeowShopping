<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType
    })
    // 监听滚动
    this.scroll.on('scroll', position => {
      // 向父组件传递数据
      this.$emit('scroll', position)
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style>

</style>

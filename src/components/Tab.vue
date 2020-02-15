<template>
  <div class="tab">
    <div v-for="(item, index) in titles"
         :key="index"
         class="tab-item"
         :class="{ active: index == current }"
         @click="tabChange(index)">
        <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    tabChange (i) {
      this.current = i
      this.$emit('tabChange', i)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab{
    width: 100%;
    display: flex;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: #ffffff;
    .tab-item{
      flex: 1;
      span{
        padding: 6px;
      }
    }
    .active{
      span{
        color: #d4237a;
        border-bottom: 2px solid #d4237a;
      }
    }
  }
</style>

<template>
  <div class="recommend">
    <div v-for="(item, index) in recommendList" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .recommend{
    width: 100%;
    display: flex;
    text-align: center;
    padding: 10px 0 25px;
    border-bottom: 10px solid #eeeeee;
    .recommend-item{
      flex: 1;
      font-size: 14px;
      img{
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
      }
    }
  }
</style>

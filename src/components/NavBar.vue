<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
    z-index: 999;
    .left,.right{
      width: 60px;
    }
    .center{
      flex: 1;
      text-align: center;
    }
  }
</style>

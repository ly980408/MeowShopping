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
    border-bottom: 1px solid #cdcdcd;
    .left,.right{
      width: 60px;
    }
    .center{
      flex: 1;
      text-align: center;
    }
  }
</style>

<template>
  <div id="app">
    <router-view></router-view>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'

export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style lang="scss">
  @import "./assets/css/base.css";
</style>

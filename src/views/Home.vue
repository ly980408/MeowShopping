<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">Meow Shopping</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>

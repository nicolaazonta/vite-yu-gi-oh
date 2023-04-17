<script>

import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
}

</script>

<template>

  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>
  <SiteFooter></SiteFooter>

</template>

<style scoped>

</style>

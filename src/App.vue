<template>
  <div>
    <headerVue/>
    <router-view/>
    <footerVue/>
  </div>
</template>
<script>
import footerVue from "../src/views/FooterView.vue";
import headerVue from "../src/views/HeaderView.vue";
export default {
  components: {
    footerVue,
    headerVue
  },
};
</script>

<style lang="scss">
@import url(../public/css/style.css);
</style>

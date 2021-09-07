<template>
  <div class="topbar">
    <div class="container">
      <div class="header">
        <ul>
          <li><router-link to="/">Ana Sayfa</router-link></li>
          <li><router-link :to="{ name: 'products' }">Ürünler</router-link></li>
        </ul>
        <div
          v-if="$route.name != 'basket'"
          @click="$router.push({ name: 'basket' })"
          class="basket-box-topbar"
        >
          <div class="basket-box-notification">{{ basketList }}</div>
          <i class="fa fa-shopping-basket fcolor-white" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    basketList() {
      return this.$store.getters.basketList.length;
    },
  },
};
</script>

<style>
@import url("../../../dist/css/style.min.css");

</style>

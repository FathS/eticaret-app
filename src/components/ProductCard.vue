<template>
  <div class="row">
    <div v-for="product in productList" :key="product.id" class="col col-6">
      <div class="product-card">
        <div class="product-card-image">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-card-content">{{ product.name }}</div>
        <div class="product-card-footer">
          <span>{{ product.currency }} {{ product.price }}</span>
          <button @click="addToBasket(product)" class="btn btn-warning-dark">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    productList: {
      type: Array,
    },
  },
  methods: {
    addToBasket(product) {
      this.$emit("addToBasket", product);
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <div class="container">
      <ProductCard
        @addToBasket="addToBasket"
        v-loading="loading"
        :productList="products"
      />
    </div>
  </div>
</template>
<script>
import getListMixin from "../mixins/getList";
import ProductCard from "../components/ProductCard.vue";

export default {
  mixins: [getListMixin],
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  methods: {
    addToBasket(product) {
      var found = this.baskets.find((x) => x.id == product.id);
      if (found) {
        found.amount += 1;
      } else {
        let newProduct = {
          id: product.id,
          name: product.name,
          image: product.image,
          currency: product.currency,
          price: product.price,
          amount: 1,
        };
        this.$store.commit("addBasket", newProduct);
      }
      this.$router.push({ name: "basket" });
    },
  },
  computed: {
    baskets() {
      return this.$store.state.baskets;
    },
  },
};
</script>

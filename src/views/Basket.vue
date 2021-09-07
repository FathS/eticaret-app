<template>
  <div class="container">
    <div class="basket-view">
      <div class="row">
        <div class="col col-12">
          <h2>Sepetim ({{ basketList.length }})</h2>
          <div v-if="basketControl">
            <h1>{{ successMessage }} Sepetinizde ürün bulunmamaktadır.</h1>
          </div>
          <div
            v-for="(item, index) in basketList"
            :key="index"
            class="basket-box"
          >
            <div class="row">
              <div class="col-3">
                <img :src="item.image" alt="" />
                <el-input-number
                  v-model="item.amount"
                  :min="1"
                  :max="10"
                ></el-input-number>
              </div>
              <div class="col-9 basket-content">
                <p>{{ item.name }}</p>
                <p>
                  {{ item.price * item.amount }}
                  <span>{{ item.currency }}</span>
                </p>
                <p @click="deleteProduct(index)">
                  <i class="el-icon-delete"></i>Kaldır
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="basket-button-box">
      <button @click="$router.push({ name: 'products' })" class="btn btn-info">
        Continue Shopping
      </button>
      <button
        :disabled="basketControl"
        class="btn btn-warning-dark"
        @click="buyProduct()"
      >
        Place Order
      </button>
      <span>{{ resMessage }}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      resMessage: "",
      successMessage: "",
    };
  },
  methods: {
    buyProduct() {
      let buyProducts = this.basketList.map((item) => {
        return {
          id: item.id,
          amount: item.amount,
        };
      });
      this.$axios
        .post("order", buyProducts)
        .then((response) => {
          this.successMessage = response.data.message + ", ";
          this.resMessage = "";
          this.$store.commit("removeBasket", []);
        })
        .catch((err) => {
          this.resMessage = err.response.data.message;
        });
    },
    deleteProduct(index) {
      this.basketList.splice(index, 1);
    },
  },
  computed: {
    ...mapGetters(["basketList"]),

    basketControl() {
      return this.basketList.length <= 0;
    },
  },
};
</script>
<style scoped></style>

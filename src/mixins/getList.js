export default {
  data() {
    return {
      loading: false,
      products: [],
    };
  },
  async mounted() {
    await this.getProducts();
  },
  methods: {
    async getProducts() {
      this.loading = true;
      try {
        const response = await this.$axios.get("listing");
        this.products = response.data;
        this.loading = false;
      } catch (err) {
        console.log(err.response.data);
      }
      // this.$axios
      //     .get("listing")
      //     .then((response) => {
      //         this.products = response.data;
      //     })
      //     .catch((err) => {
      //         console.log(err.response.data);
      //     })
      //     .finally(() => {
      //         this.loading = false;
      //     });
    },
  },
};

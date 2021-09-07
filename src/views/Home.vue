<template>
  <div>
    <div v-loading="loading" class="container">
      <div class="row">
        <div class="col">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item, index) in products" :key="index">
              <img class="image" :src="item.image" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="fırsat-title">
            <h1>Fırsat Ürünleri</h1>
          </div>
          <div class="fırsat-content">
            <div class="row">
              <div
                v-for="(item, index) in products"
                :key="index"
                class="col col-2 col-m6"
              >
                <div class="fırsat-content-box">
                  <img :src="item.image" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getListMixin from "../mixins/getList";
export default {
  mixins: [getListMixin],
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.fırsat-title {
  position: relative;
  width: 100%;
  margin: 30px 0;
  padding: 10px 0;
  border-bottom: 1px solid gray;
}
.fırsat-content-box {
  position: relative;
  width: 100%;
  padding: 0 15px;
  margin: 0;
  text-align: center;
}
.fırsat-content-box img {
  width: 100%;
}
.el-carousel__container {
  text-align: center;
}
.image {
  height: 100%;
}
</style>

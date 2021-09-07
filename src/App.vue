<template>
  <div>
    <Topbar />
    <router-view />
  </div>
</template>
<script>
import Topbar from "./components/Layout/Topbar.vue";
export default {
  components: {
    Topbar,
  },
};
</script>

<style></style>

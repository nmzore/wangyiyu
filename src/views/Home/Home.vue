<template>
  <div class="home">
 <van-nav-bar  left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
   <template #title>
  </template>
</van-nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      container: null,
    };
  },
  components: {},
  mounted() {
    this.container = this.$refs.container;
  },
  created() {},
};
</script>

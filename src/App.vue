<template>
  <div id="app">
    <router-view class="main"></router-view>
    <van-tabbar route v-if="$route.meta.showTabbar">
      <van-tabbar-item replace :to="{ name: 'Home' }" icon="home-o"
        >发现</van-tabbar-item
      >
      <van-tabbar-item replace :to="{ name: 'Boke' }" icon="search"
        >博客</van-tabbar-item
      >
      <van-tabbar-item replace :to="{ name: 'User' }" icon="friends-o"
        >我的</van-tabbar-item
      >
      <van-tabbar-item replace :to="{ name: 'Kege' }" icon="setting-o"
        >K歌</van-tabbar-item
      >
      <van-tabbar-item replace :to="{ name: 'Yuncun' }" icon="setting-o"
        >云村</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      // active: 0,
      isShowNav: true,
    };
  },
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: auto;
}
img {
  max-width: 100%;
}
</style>

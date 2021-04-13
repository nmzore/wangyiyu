<template>
  <div id="yun">
    <div class="top">
      <div class="left">
        <van-icon name="wap-nav" />
      </div>
      <div class="center">
        <div class="guan">关注</div>
        <div class="tui">推荐</div>
      </div>
      <div class="right">
        <van-icon name="add-o" />
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>广场</li>
        <li>演唱</li>
        <li>音乐安利</li>
        <li>演奏</li>
        <li>MV</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
#yun .top {
  float: left;
  width: 100%;
  height: 45px;
}
.top .left {
  display: inline-block;
  font-size: 18px;
  margin: 15px 18px 13px;
  float: left;
}
.top .center {
  font-size: 13px;
  float: left;
  line-height: 45px;
}
.center .guan {
  float: left;
  width: 37px;
  height: 45px;
}
.center .tui {
  float: left;
  width: 37px;
  height: 45px;
}
.top .right {
  display: inline-block;
  width: 22px;
  height: 22px;
  font-size: 22px;
  float: right;
  margin: 11px;
  background: rgb(231, 17, 17);
  border-radius: 50%;
}

.nav ul li {
  border: 1px solid #f00;
  font-size: 12px;
}
</style>

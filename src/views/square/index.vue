<template>
  <div class="square">
    <!-- 头部 -->
    <div class="back">
      <van-icon name="arrow-left" @click="back" />
      <h2>歌单广场</h2>
    </div>

    <!-- 导航栏 -->
    <div class="nav">
      <van-tabs v-model="active">
        <p>xxx的宝藏歌单</p>
        <van-tab title="推荐">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in tjs"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.coverImgUrl" />
                <p>{{ item.copywriter }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="官方">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in gfs"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.cover" />
                <p>{{ item.name }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="视频歌单">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in videos"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.picUrl" />
                <p>{{ item.name }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="精品">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in tjs"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.coverImgUrl" />
                <p>{{ item.copywriter }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="华语">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in tjs"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.coverImgUrl" />
                <p>{{ item.copywriter }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="流行">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in gfs"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.cover" />
                <p>{{ item.name }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="民谣">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in gfs"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.cover" />
                <p>{{ item.name }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="电子">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in videos"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.picUrl" />
                <p>{{ item.name }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="轻音乐">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in videos"
              :key="item.id"
            >
              <van-grid-item>
                <van-image :src="item.picUrl" />
                <p>{{ item.name }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-icon name="apps-o" />
      </van-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      active: 0,
      tjs: [],
      gfs: [],
      videos: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    //返回按钮 跳转到首页
    back() {
      this.$router.push({
        path: "/",
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //推荐
    axios.get("http://localhost:3000/top/playlist/highquality").then((res) => {
      // console.log(res);
      this.tjs = res.data.playlists;
    });
    //官方
    axios.get("http://localhost:3000/mv/exclusive/rcmd").then((res) => {
      // console.log(res);
      this.gfs = res.data.data;
    });
    //视频歌单
    axios.get("http://localhost:3000/personalized").then((res) => {
      // console.log(res);
      this.videos = res.data.result;
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
.square {
  padding: 1rem;
}

/* 返回 */
.back {
  display: flex;
  margin-bottom: 0.8rem;
}
.van-icon-arrow-left {
  margin-right: 0.5rem;
}

/* 导航栏 */
.nav {
  position: relative;
}
.van-icon-apps-o {
  position: absolute;
  top: 0.5rem;
  right: 0;
  width: 2rem;
  height: 1.5rem;
  text-align: right;
  line-height: 1.5rem;
  background: #fff;
}

/* 标签 */
</style>

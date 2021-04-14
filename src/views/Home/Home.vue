<template>
  <div class="home">
    <!-- header -->
    <div class="header">
      <mokuai style=" padding: 10px;"></mokuai>
      <!-- v-model="value" -->
      <van-search
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />
      <van-icon name="service-o" />
    </div>

    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :touchable="true"
      indicator-color="white"
    >
      <van-swipe-item v-for="item in banners" :key="item.imageUrl">
        <img :src="item.imageUrl" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 导航栏 -->
    <div class="nav">
      <van-grid :gutter="10" :border="false">
        <van-grid-item icon="photo-o" text="推荐" />
        <van-grid-item icon="photo-o" text="FM" />
        <van-grid-item icon="photo-o" text="歌单" />
        <van-grid-item icon="photo-o" text="排行" />
        <van-grid-item icon="photo-o" text="直播" />
        <van-grid-item icon="photo-o" text="专辑" />
        <van-grid-item icon="photo-o" text="唱聊" />
        <van-grid-item icon="photo-o" text="游戏" />
      </van-grid>
    </div>

    <!-- 推荐歌单 -->
    <div class="tj">
      <div class="tj-top">
        <h3>推荐歌单</h3>
        <button>更多 &gt;</button>
      </div>
      <div class="tj-bot">
        <van-grid
          :border="false"
          :column-num="3"
          :gutter="5"
          :icon-size="100"
          v-for="item in gds"
          :key="item.id"
        >
          <van-grid-item>
            <van-image :src="item.picUrl" />
            <p>{{ item.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- 私人订制 -->
    <div class="sr">
      <div class="tj-top">
        <h3>私人订制</h3>
        <button>更多 &gt;</button>
      </div>
      <div class="sr-shua">
        <van-icon name="replay" :size="3" />
        <span>好听的华语歌曲精选</span>
      </div>
      <div class="sr-bot">
        <div class="sr-bot-01" v-for="item in srs" :key="item.id">
          <div v-for="aa in item" :key="aa.id">
            <van-card :thumb="aa.picUrl">
              <template #tags>
                <p>{{ aa.name }}</p>
                <van-tag plain type="danger">{{ aa.type }}</van-tag>
                <span>{{ aa.company }}</span>
              </template>
            </van-card>
          </div>
        </div>
      </div>
    </div>

    <!-- 精选音乐视频 -->
    <div class="jx">
      <div class="tj-top">
        <h3>精选音乐视频</h3>
        <button>更多 &gt;</button>
      </div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">
            <img
              src="https://img0.baidu.com/it/u=1017673628,2213309026&fm=26&fmt=auto&gp=0.jpg"
              alt=""
            />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 音乐日历 -->
    <div class="rl">
      <div class="tj-top">
        <h3>音乐日历</h3>
        <button>更多 &gt;</button>
      </div>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <span>今天</span>
            <p>范丞丞&程潇的专辑：遥望</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <img
              src="https://img2.baidu.com/it/u=288820895,2189925987&fm=15&fmt=auto&gp=0.jpg"
              alt=""
            />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <span>01-01</span>
            <p>预告-王贰浪的最新作品：悔过</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <img
              src="https://img2.baidu.com/it/u=787390020,1021945622&fm=15&fmt=auto&gp=0.jpg"
              alt=""
            />
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 专属场景歌单 -->
    <div class="tj">
      <div class="tj-top">
        <h3>专属场景歌单</h3>
        <button>更多 &gt;</button>
      </div>
      <div class="tj-bot">
        <van-grid
          :border="false"
          :column-num="3"
          :gutter="5"
          :icon-size="100"
          v-for="item in gds"
          :key="item.id"
        >
          <van-grid-item>
            <van-image :src="item.picUrl" />
            <p>{{ item.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- LOOK直播 -->
    <div class="tj zb">
      <div class="tj-top">
        <h3>LOOK直播</h3>
        <button>更多 &gt;</button>
      </div>
      <div class="tj-bot">
        <van-grid
          :border="false"
          :column-num="3"
          :gutter="5"
          :icon-size="100"
          v-for="item in gds"
          :key="item.id"
        >
          <van-grid-item>
            <van-image :src="item.picUrl" />
            <p>{{ item.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- 新歌 新碟 数字专辑 -->
    <div class="sr">
      <div class="tj-top">
        <van-tabs v-model="active">
          <van-tab title="标签 1">1</van-tab>
          <van-tab title="标签 2">2</van-tab>
          <van-tab title="标签 3">3</van-tab>
        </van-tabs>
        <button>更多 &gt;</button>
      </div>
    </div>

    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>
</template>

<script>
import axios from "axios";
import mokuai from "../../components/All/mokuai";
// import { get } from "../../utils/request";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      gds: [],
      srs: [],
      imags: [
        {
          img:
            "https://img2.baidu.com/it/u=2732402456,4109538454&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          img:
            "https://img1.baidu.com/it/u=2966533095,4259557322&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          img:
            "https://img0.baidu.com/it/u=1017673628,2213309026&fm=26&fmt=auto&gp=0.jpg",
        },
      ],
      active: 0,
    };
  },
   components: {
    mokuai,
  },
  mounted() {},
  method: {
    //私人订制 刷新
    // reset() {},
    //私人订制 请求接口
    // srList() {
    //   axios.get("http://localhost:3000/album/newest").then((res) => {
    //     var result = [];
    //     for (var i = 0; i < res.data.albums.length; i += 3) {
    //       result.push(res.data.albums.slice(i, i + 3));
    //     }
    //     // console.log(result);
    //     this.srs = result;
    //   });
    // },
  },
  created() {
    //轮播图请求
    axios.get("http://localhost:3000/banner").then((res) => {
      // console.log(res);
      this.banners = res.data.banners;
    });
    //推荐歌单
    axios
      .get("http://localhost:3000/personalized", { params: { limit: 7 } })
      .then((res) => {
        // console.log(res);
        this.gds = res.data.result;
      });
    //私人订制 调用接口
    // this.srList();
    axios.get("http://localhost:3000/album/newest").then((res) => {
      var result = [];
      for (var i = 0; i < res.data.albums.length; i += 3) {
        result.push(res.data.albums.slice(i, i + 3));
      }
      // console.log(result);
      this.srs = result;
    });
  },
};
</script>
<style scoped>
/* .home {
  padding: 0 1rem 0 1rem;
} */

/* header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
.van-search {
  width: 20rem;
}

/* 轮播图 */
.van-swipe {
  width: 85%;
  margin: 0 auto;
}

/* 导航 */
.nav .van-grid {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.nav .van-grid-item {
  margin-top: 0px !important;
}
.nav .van-grid-item__text {
  font-size: 20px;
  color: brown;
}
.nav .van-grid-item__content--center {
  width: 60px;
}

/* 推荐歌单 */
.tj-top {
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 0.5rem;
}
.tj-top h3 {
  font-size: 14px;
}
.tj-top button {
  width: 60px;
  height: 18px;
  font-size: 12px;
  color: rgb(170, 169, 169);
  background: #fff;
  border: 1px solid rgb(170, 169, 169);
  border-radius: 20px;
}
.tj-bot {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.tj .van-image {
  width: 5.5rem;
  margin-bottom: 0.5rem;
}
.tj .van-grid-item p {
  /* 单行文本显示省略号 */
  width: 5.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgb(117, 116, 116);
  line-height: 16px;
}
.tj .van-grid-item {
  margin-top: 0px !important;
}

/* 私人订制 */
.sr {
  border-top: solid 5px rgb(240, 239, 239);
  border-bottom: solid 5px rgb(240, 239, 239);
}
.sr-shua {
  padding: 0 1.5rem;
}
.sr-shua span {
  font-size: 0.2rem;
  margin-left: 0.2rem;
}
.sr-bot {
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  margin: 0.8rem 0;
}
.sr-bot-01 {
  margin-right: 1.5rem;
}
.van-card {
  width: 300px;
  background: #fff;
}
.van-card__content {
  border-bottom: solid 1px rgb(231, 229, 229);
}
.van-card__content p {
  font-size: 16px;
  line-height: 20px;
  margin: 0.4rem 0;
}
.van-card__content span {
  font-size: 12px;
}

/* 精选音乐视频 */
.el-carousel--card {
  z-index: -1000;
}
.el-carousel__item {
  width: 150px;
  margin: 2rem 0 0 1rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 音乐日历 */
.rl {
  border-top: solid 5px rgb(240, 239, 239);
  border-bottom: solid 5px rgb(240, 239, 239);
  margin-top: 1.5rem;
}
.el-row {
  border-top: solid 3px rgb(240, 239, 239);
  border-bottom: solid 1px rgb(240, 239, 239);
}
.bg-purple {
  height: 6.2rem;
  line-height: 3rem;
  font-size: 12px;
}
.bg-purple span {
  margin-left: 1rem;
}
.bg-purple p {
  margin-left: 1rem;
}
.bg-purple-light img {
  width: 80px;
  float: right;
  margin: 1rem;
}

/* 专属场景歌单 */

/* LOOK直播 */
.zb {
  border-top: solid 5px rgb(240, 239, 239);
  border-bottom: solid 5px rgb(240, 239, 239);
}

/* 新歌 */
/* .van-tabs__wrap{
  width: 100px;
  background: burlywood;
} */
/* .van-tabs__content {
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  margin: 0.8rem 0;
} */
</style>

<template>
  <div class="home">
    <!-- header -->
    <div class="header">
      <mokuai style=" padding: 10px;"></mokuai>
      <!-- v-model="value" -->
       <van-search  @click="find()" v-model="value" placeholder="搜索你感兴趣的内容" />
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
        <van-grid-item icon="shop-collect-o" text="推荐" />
        <van-grid-item icon="video-o" text="FM" />
        <van-grid-item icon="service-o" text="歌单" />
        <van-grid-item icon="bar-chart-o" text="排行" />
        <van-grid-item icon="tv-o" text="直播" />
        <van-grid-item icon="aim" text="专辑" />
        <van-grid-item icon="bullhorn-o" text="唱聊" />
        <van-grid-item icon="gem-o" text="游戏" />
      </van-grid>
    </div>

    <!-- 推荐歌单 -->
    <div class="tj">
      <div class="tj-top">
        <h3>推荐歌单</h3>
        <button @click="jumpsquare">更多 &gt;</button>
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
          <van-grid-item @click="godetail(item.id)">
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
            <van-card :thumb="aa.picUrl" @click="dianji(aa.id)">
              <template #tags >
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
    <div class="newMusic">
      <div class="newMusic-top">
        <van-tabs v-model="active">
          <van-tab title="新歌">
            <div class="newMusic-bot">
              <div class="newMusic-bot-01" v-for="item in srs" :key="item.id">
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
          </van-tab>
          <van-tab title="新碟">
            222
            <div class="newMusic-bot">
              <div class="newMusic-bot-01" v-for="item in srs" :key="item.id">
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
          </van-tab>
          <van-tab title="数字专辑">
            333
            <div class="newMusic-bot">
              <div class="newMusic-bot-01" v-for="item in srs" :key="item.id">
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
          </van-tab>
          <van-tab title="更多 &gt;"></van-tab>
        </van-tabs>
      </div>
      <div class="music-tj">
        <div class="music-tj-top">
          <h3>推荐以下新歌</h3>
          <span>赚双倍云贝</span>
          <p>云</p>
        </div>
        <div class="sr-bot">
          <div class="sr-bot-01" v-for="item in srs1" :key="item.id">
            <van-card :thumb="item.picUrl">
              <template #tags>
                <p>{{ item.name }}</p>
                <van-tag plain type="danger">{{ item.type }}</van-tag>
                <span>{{ item.company }}</span>
              </template>
            </van-card>
          </div>
        </div>
      </div>
    </div>

    <!-- 排行榜 -->
    <div class="phb">
      <div class="tj-top">
        <h3>排行榜</h3>
        <button>更多 &gt;</button>
      </div>
      <div class="phb-bot">
        <!-- 新歌榜 -->
        <div class="phb-newmusic">
          <div class="phb-newmusic-title">
            <p>新歌榜 ></p>
          </div>
          <div
            class="phb-newmusic-bot"
            v-for="(item, index) in phbs"
            :key="item.id"
          >
            <van-card
              num="..."
              :title="index + 1 + item.name"
              :thumb="item.cover"
              :centered="true"
            >
            </van-card>
          </div>
        </div>
        <!-- 云音乐说唱榜 -->
        <div class="phb-newmusic">
          <div class="phb-newmusic-title">
            <p>云音乐说唱榜 ></p>
          </div>
          <div
            class="phb-newmusic-bot"
            v-for="(item, index) in phbs"
            :key="item.id"
          >
            <van-card
              num="2"
              :title="index + 1 + item.name"
              :thumb="item.cover"
            >
            </van-card>
          </div>
        </div>
        <!-- 飙升榜 -->
        <div class="phb-newmusic">
          <div class="phb-newmusic-title">
            <p>飙升榜 ></p>
          </div>
          <div
            class="phb-newmusic-bot"
            v-for="(item, index) in phbs"
            :key="item.id"
          >
            <van-card
              num="2"
              :title="index + 1 + item.name"
              :thumb="item.cover"
            >
            </van-card>
          </div>
        </div>
      </div>
    </div>

    <!-- 24小时播客 -->
    <div class="hour">
      <van-tabs v-model="active">
        <van-tab title="24小时播客">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in bk"
              :key="item.id"
            >
              <van-grid-item>
                <van-image
                  round
                  width="4rem"
                  height="4rem"
                  :src="item.dj.avatarUrl"
                />
                <p>{{ item.dj.nickname }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="广播电台">
          <div class="tj-bot">
            <van-grid
              :border="false"
              :column-num="3"
              :gutter="5"
              :icon-size="100"
              v-for="item in dt"
              :key="item.id"
            >
              <van-grid-item>
                <van-image
                  round
                  width="4rem"
                  height="4rem"
                  :src="item.program.radio.picUrl"
                />
                <p>{{ item.program.radio.name }}</p>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 云村 -->
    <div class="ktv">
      <div class="tj-top">
        <h3>云村KTV</h3>
        <button>更多 &gt;</button>
      </div>
      <div class="tj-bot">
        <van-grid
          :border="false"
          :column-num="3"
          :gutter="5"
          :icon-size="100"
          v-for="item in yun"
          :key="item.id"
        >
          <van-grid-item>
            <van-image width="4rem" height="4rem" :src="item.coverImgUrl" />
            <p>{{ item.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- 刷新 -->
    <div class="refresh">
      <div class="icon">
        <van-icon name="replay" />
        <i>点击刷新</i>
        <span>换一批内容</span>
      </div>
      <div class="sort">
        <button>自定义排序</button>
      </div>
    </div>
    <bofang :inputName="ids"></bofang>
  </div>
</template>

<script>
import axios from "axios";
import bofang from "../../components/All/bofang";
import mokuai from "../../components/All/mokuai";
// import { get } from "../../utils/request";
export default {
  name: "Home",
  data() {
    return {
      ids:'',
      active: 0,
      banners: [],
      gds: [],
      srs1: [],
      srs: [],
      phbs: [],
      bk: [],
      dt: [],
      yun: [],
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
    };
  },
  components: {
    mokuai,
    bofang
  },
  mounted() {},
  methods: {
    dianji(id){
      this.ids=id
       console.log(this.ids)
      },
    //更多按钮跳转到歌单广场
    jumpsquare() {
      this.$router.push({
        path: "/square",
      });
    },
    //跳转到歌单详情页
    godetail(ids) {
      this.$router.push({
        path: "/songdetail",
        query: {
          ids: ids,
        },
      });
    },
     find(){
      this.$router.push({
        name:'Find',
      });
    }
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
      // console.log(res);
      this.srs1 = res.data.albums;
    });
    axios.get("http://localhost:3000/album/newest").then((res) => {
      var result = [];
      for (var i = 0; i < res.data.albums.length; i += 3) {
        result.push(res.data.albums.slice(i, i + 3));
      }
      // console.log(result);
      this.srs = result;
      console.log(this.srs);
    });
    //排行榜
    axios
      .get("http://localhost:3000/top/mv", { params: { limit: 3 } })
      .then((res) => {
        // console.log(res);
        this.phbs = res.data.data;
      });
    //博客
    axios.get("http://localhost:3000/program/recommend").then((res) => {
      // console.log(res);
      this.bk = res.data.programs;
    });
    //电台
    axios.get("http://localhost:3000/personalized/djprogram").then((res) => {
      // console.log(res);
      this.dt = res.data.result;
    });
    //云村
    axios.get("http://localhost:3000/top/playlist").then((res) => {
      // console.log(res);
      this.yun = res.data.playlists;
    });
  },
};
</script>
<style scoped>
.home {
  padding: 0 0 10rem 0;
}

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
.nav .van-grid-item {
  color: rgb(248, 84, 84);
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
.newMusic {
  border-bottom: solid 5px rgb(240, 239, 239);
}
.newMusic-bot {
  display: flex;
  overflow-x: auto;
}
.music-tj-top {
  font-size: 12px;
  display: flex;
}
.music-tj-top h3 {
  margin: 0.5rem 0.5rem 0 0.8rem;
  color: rgb(172, 172, 172);
}
.music-tj-top span {
  margin-top: 0.5rem;
  color: rgb(88, 88, 88);
}
.music-tj-top p {
  margin: 0.3rem 0 0 0.3rem;
  width: 1rem;
  height: 1.2rem;
  background: rgb(248, 113, 140);
  border-radius: 0.4rem 0.4rem 1rem 1rem;
  color: #fff;
  line-height: 1.2rem;
  text-align: center;
}

/* 排行榜 */
.phb {
  padding-bottom: 1rem;
}
.phb-bot {
  display: flex;
  overflow-x: auto;
}
.phb-newmusic {
  border: 1px solid #ccc;
  margin: 1rem 0 0 1rem;
}
.phb-newmusic-title {
  font-size: 14px;
  text-align: center;
  line-height: 30px;
}
.van-card__thumb {
  width: 50px;
  height: 50px;
}

/* 24小时播客 */
.hour {
  border-top: solid 5px rgb(240, 239, 239);
  border-bottom: solid 5px rgb(240, 239, 239);
}
.hour .van-grid-item {
  width: 6rem;
  margin: 0 auto;
}
.hour .van-grid-item p {
  font-size: 12px;
  margin-top: 1rem;
}

/* 云村 */
.ktv {
  border-bottom: solid 5px rgb(240, 239, 239);
}
.ktv-bot {
  display: flex;
  overflow-x: auto;
}
.ktv .van-grid-item__content p {
  margin-top: 0.8rem;
  font-size: 12px;
  width: 5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 刷新 */
.refresh {
  text-align: center;
}
.refresh .icon {
  font-size: 12px;
  color: rgb(62, 166, 226);
  margin: 1rem 0;
}
.refresh .icon span {
  color: #ccc;
  margin-left: 1rem;
}
.sort button {
  width: 5rem;
  height: 1.5rem;
  font-size: 12px;
  background: #fff;
  border-radius: 1.5rem;
  border: solid 1px #ccc;
}
</style>

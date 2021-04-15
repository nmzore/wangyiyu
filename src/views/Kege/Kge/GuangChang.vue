<template>
  <div class="guangchang">
    <h1 class="caini">
      猜你想唱的
      <i class="el-icon-arrow-right"></i>
    </h1>
    <div class="lunbo">
      <div class="lunbos_1" v-for="item in lunbos" :key="item._id">
        <img :src="item.al.picUrl" alt="item.name" />
        <h4>{{ item.al.name }}</h4>
        <p class="p1">{{ item.ar.name }}</p>
        <p class="p2">演唱</p>
      </div>
    </div>
    <!-- <van-swipe @change="onChange" class="lunbo">
      <van-swipe-item v-for="item in lunbos" :key="item._id">
        <div class="lunbos_1" v-for="item in lunbos" :key="item._id">
          <img :src="item.al.picUrl" alt="item.name" />
          <h4>{{ item.al.name }}</h4>
          <p>{{ item.ar.name }}</p>
        </div>
      </van-swipe-item>

    </van-swipe>-->
    <!-- 去唱歌  行 -->
    <van-row gutter="22" class="kg">
      <router-link :to="{ name: 'QuChGe' }">
        <van-col span="11" class="kg1">
          <i class="fa fa-microphone">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去唱歌</b>
          </i>
        </van-col>
      </router-link>

      <router-link :to="{ name: 'WoDeKGe' }">
        <van-col span="11" class="kg2">
          <i class="fa fa-book">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的K歌</b>
          </i>
        </van-col>
      </router-link>
    </van-row>
    <!-- 好友       行 -->
    <div id="hy_hang">
      <van-tabs class="hy_hang" v-model="activeName">
        <van-tab title="好友" name="a">
          <div class="hechang_bottom">
            <img src="../../../assets/kk.png" alt />
            <h4>这条街空荡荡的，快去加些好友吧</h4>
          </div>
        </van-tab>
        <van-tab title="歌手" name="b">
          <!-- <div class="list2">
                  <div class="item list2_1" v-for="item in dianges" :key="item._id">
                    <img :src="item.al.picUrl" alt="item.name" />
                    <h4>{{ item.name }}</h4>
                    <p class="p1">{{ item.name }}</p>
                    <p class="p2">演唱</p>
          </div>-->
          <div class="list2">
            <div class="item list2_1" v-for="item in tuijianers" :key="item._id">
              <img :src="item.picUrl" alt="item.name" />
              <h4>{{ item.name }}</h4>
              <p class="p1">演唱人数：{{item.musicSize}}</p>
              <p class="p2" style="flat:right">演唱</p>
            </div>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <!-- <button class="btn-loadmore" @click="loadMore">加载更多</button> -->
          </div>
        </van-tab>
        <van-tab title="古风" name="c">
          <div class="list2">
            <div class="item" v-for="item in gufengs" :key="item._id">
              <img :src="item.coverImgUrl" alt="item.name" />
              <h4>{{ item.name }}</h4>
            </div>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <button class="btn-loadmore" @click="loadMore">加载更多</button>
          </div>
        </van-tab>
        <van-tab title="说唱" name="d">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// huoquList
import axios from "axios";
import {
  haoyouList,
  tuijianList,
  tuijianerList
} from "../../../services/KeGe/TuiJan.js";
export default {
  data() {
    return {
      active: 2,
      activeName: "a",
      tuijians: [],
      gufengs: [],
      lunbos: [],
      tuijianers: []
    };
  },
  async created() {
    const haoyou = await haoyouList({
      cookie: localStorage.cookie
    });
    console.log(haoyou);
    this.lunbos = haoyou.data.dailySongs;
    this.lunbos.length = 20;
    const tuijian = await tuijianList({
      cookie: localStorage.cookie
    });
    console.log(tuijian);
    // 推荐
    const tuijianer = await tuijianerList({
      cookie: localStorage.cookie
    });
    console.log(tuijianer);
    this.tuijianers = tuijianer.artists;
    // // 获取 参数
    // const huoqu = await huoquList({
    //   cookie: localStorage.cookie
    // });
    // console.log(21333333333, huoqu);

    // /top/playlist/highquality 古风
    axios.get("http://localhost:3000/top/playlist/highquality").then(res => {
      console.log(res);
      this.gufengs = res.data.playlists;
      // this.banners = res.data.banners;
    });
  },
  methods: {
    loadMore() {},
    onChange() {}
  }
};
</script>

<style scoped>
.guangchang {
  background: rgb(255, 255, 255);
}
i {
  font: 0.213333rem;
  font-weight: 600;
  font-style: normal;
}
/* 猜你想唱 */
.caini {
  margin-top: 4rem;
  font-size: 1em;
  font-weight: 800;
  margin-left: 2rem;
  margin-bottom: 1rem;
}
/* 轮播 样式 */
.lunbo {
  width: 90%;
  height: 10rem;
  background: rgb(231, 231, 231);
  margin-top: 2rem;
  overflow: auto;
  margin: 0 auto;
  border-radius: 0.5rem;
}
.lunbo img {
  width: 3rem;
  margin-left: 1.4rem;
}
.lunbo h4 {
  /* display: inline-block; */
  margin-left: 5rem;
  margin-top: -3.8rem;
  width: 12rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.lunbos_1 {
  height: 3rem;
  margin-top: 0.4rem;
  line-height: 2.5rem;
}
.lunbos_1 .p2 {
  width: 4rem;
  height: 2rem;
  float: right;
  margin-right: 1.7rem;
  margin-top: -2.2rem;
  text-align: center;
  border: #e09a02 0.013333rem solid;
  border-radius: 1rem;
  line-height: 2rem;
}
/*  */
.kg {
  margin-top: 1rem;
}
.kg1 {
  height: 3rem;
  background: #fff3f7;
  text-align: center;
  margin-left: 0.666667rem;
  line-height: 3rem;
  color: rgb(48, 48, 48);
  border-radius: 0.4rem;
}
.kg2 {
  height: 3rem;

  background: linear-gradient(to right, #fff3fa, #fcf3fe);
  margin-left: 0.666667rem;
  line-height: 3rem;
  text-align: center;
  border-radius: 0.4rem;
  color: rgb(48, 48, 48);
}
.kg3 {
  height: 3rem;

  background: linear-gradient(to right, #fff3fa, #fcf3fe);
  margin-left: 0.666667rem;
  line-height: 3rem;
  text-align: center;
  border-radius: 0.4rem;
  color: rgb(48, 48, 48);
}
.fa-microphone {
  color: #ff6193;
}
.fa-book {
  color: #f067ca;
}
b {
  color: rgb(41, 41, 41);
}
/* 好友  行*/
#hy_hang /deep/ {
  width: 70%;
  margin-top: 1rem;
  color: rgb(199, 199, 199);
  height: 1.3rem;
  margin-left: 0.8rem;
  background: #ffffff;
  /* z-index: 2;
  position: fixed;
  top: 15rem; */
}

/*.van-tabs__nav--card {
  border: none;
}
.van-tabs__nav--card .van-tab {
  border: none;
  color: #cccccc;
} */
#hy_hang /deep/ .hy_hang .van-tabs__line {
  height: 0;
  width: 0;
}
#hy_hang /deep/ .hy_hang .van-tab--active {
  background: #fff6f6;
  /* color: red; */
  border-radius: 1.6rem;
}
.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.list .item {
  width: 45%;
  height: 260px;
  background-color: white;
  margin: 0.4rem 0;
}
.list .item h4 {
  margin: 0;
  padding: 0;
  color: #7b7b7b;
  height: 2.6rem;
  font-size: 0.8rem;
}
.list .item .price {
  color: #e83929;
}
.list .item .price button {
  float: right;
  margin-right: 1rem;
  border: none;
  padding: 0.2rem 0.6rem;
  background-color: #e83929;
  color: white;
}
.list .item .price i {
  margin-right: 0.5rem;
}
.list .zw {
  width: 45%;
}
.btn-loadmore {
  margin: 1rem;
  border: none;
  text-align: center;
  padding: 1rem 0;
  width: 80%;
  background-color: #e83929;
  color: white;
}
/*  好友 */
/* 合唱 内容样式 */
.hechang_bottom {
  margin: 0.1rem auto;
  text-align: center;
  color: rgb(66, 66, 66);
  margin-left: 5rem;
}
.hechang_bottom h4 {
  font-weight: 500;
  margin-top: 1rem;

  margin-bottom: 1rem;
}
.hechang_bottom h4 p {
  margin-top: 1rem;
}
/*  */
/* 推荐      */
.list2 {
  margin-top: -2rem;
  margin-left: 2rem;
}
.list2 .list2_1 {
  margin-top: 3rem;
}
.list2 .list2_1 img {
  width: 5rem;
  /* height: 4rem; */
  border-radius: 0.5rem;
}
.list2 .list2_1 h4 {
  margin-top: -4rem;
  margin-left: 7rem;
  font-weight: 600;
}
.list2 .list2_1 p {
  width: 12rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  margin-left: 7rem;
  margin-top: 1rem;
}

.list2 .list2_1 .p1 {
  font-size: 0.16rem;
}
.list2 .list2_1 .p2 {
  width: 4rem;
  height: 2rem;
  float: right;
  margin-right: -3.7rem;
  margin-top: -2.2rem;
  text-align: center;
  border: #e09a02 0.013333rem solid;
  border-radius: 1rem;
  line-height: 2rem;
}
</style>

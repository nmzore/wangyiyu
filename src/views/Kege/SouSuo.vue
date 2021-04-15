<template>
  <div class="sousuo">
    <!-- 搜索框 -->
    <!-- <span class="el-icon-back" @click="fanhuiHandle"></span> -->
    <van-search
      class="ipt"
      style="display:inline-block"
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
    />
    <p class="quxiao" @click="fanhuiHandle">取消</p>
    <div id="hy_hang">
      <van-tabs class="hy_hang" v-model="activeName">
        <!-- 猜你想唱 -->
        <van-tab title="猜你想唱" name="a">
          <div class="list1">
            <div class="item list1_1" v-for="item in gufengs" :key="item._id">
              <img :src="item.coverImgUrl" alt="item.name" />
              <h4>{{ item.name }}</h4>
              <p>{{ item.description }}</p>
            </div>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <button class="btn-loadmore" @click="loadMore">加载更多</button>
          </div>
        </van-tab>
        <!-- 热门榜单 -->
        <van-tab title="热门榜单" name="b">
          <div class="list2">
            <div class="item list2_2" v-for="item in tuijians" :key="item._id">
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
        <!-- 已点 -->
        <van-tab title="已点" name="c">
          <div class="list3">
            <div class="item list3_3" v-for="item in gufengs" :key="item._id">
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
      </van-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { xiangchangs } from "../../services/KeGe/TuiJan";
export default {
  data() {
    return {
      value: "",
      active: 2,
      activeName: "a",
      tuijians: [],
      gufengs: [],
      xiangchangs: []
    };
  },

  created() {
    axios.get("http://localhost:3000/top/playlist/highquality").then(res => {
      console.log(res);
      this.xiangchangs = res.data.playlists;
      // this.banners = res.data.banners;
    });
    axios.get("http://localhost:3000/related/playlist?id=1").then(res => {
      console.log(res);
      this.tuijians = res.data.playlists;
      // this.banners = res.data.banners;
    });
    // /top/playlist/highquality 古风
    axios.get("http://localhost:3000/event/forward").then(res => {
      console.log(res);
      this.gufengs = res.data.playlists;
      // this.banners = res.data.banners;
    });
  },
  methods: {
    search() {},
    onSearch() {},
    hyHandle() {},
    loadMore() {
      // this.loadData();
    },
    fanhuiHandle() {
      history.back();
    }
  }
  //   searchHandle(e) {
  //   if (e.keyCode === 13 && this.kw) {
  //     // http://net-music.penkuoer.com/search?keywords=" + this.kw
  //     fetch("http://net-music.penkuoer.com/search?keywords=" + this.kw)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         this.list = data.result.songs;
  //       });
  //   }
  // }
};
</script>

<style scoped>
.sousuo {
  height: 100%;
  background: #fff;
  width: 100%;

  display: block;
  margin: 0 auto;
  /* margin-left: 3rem; */
  z-index: 100000;
  background: #fff;
}
/* span {
  color: rgb(172, 172, 172);
  margin-left: 2rem;
  font-size: 1.5rem;
} */
.sousuo .quxiao {
  float: right;
  margin-right: 1.9rem;
  margin-top: -2.2rem;
}
.ipt {
  margin-left: 1rem;
  width: 21rem;
}
/* 选项卡样式 */
i {
  font: 0.213333rem;
  font-weight: 600;
  font-style: normal;
}
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
/* 猜你想唱  样式     list1 */
.list1 {
  margin-top: -2rem;
  margin-left: 2rem;
}
.list1 .list1_1 {
  margin-top: 3rem;
}
.list1 .list1_1 img {
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
}
.list1 .list1_1 h4 {
  /* display: inline-block; */
  margin-top: -4rem;
  margin-left: 5rem;
}
.list1 .list1_1 p {
  /* display: inline-block; */
  width: 12rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  margin-left: 5rem;
  margin-top: 1rem;
}
</style>
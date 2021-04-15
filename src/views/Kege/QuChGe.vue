<template>
  <!-- QuChGe -->
  <div class="sousuo">
    <!-- 搜索框 -->
    <span class="el-icon-back" @click="fanhuiHandle"></span>
    <van-search
      class="ipt"
      style="display:inline-block"
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
    />
    <div id="hy_hang">
      <van-tabs class="hy_hang" v-model="activeName">
        <!-- 猜你想唱   v-for="item in xaingchangs" :key="item"-->
        <van-tab title="猜你想唱" name="a">
          <div class="list1">
            <div class="item list1_1" v-for="item in cainis" :key="item._id">
              <img :src="item.al.picUrl" alt="item.name" />
              <h4>{{ item.al.name }}</h4>
              <p class="p1">{{ item.name }}</p>
              <p class="p2">演唱</p>
            </div>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <i class="zw"></i>
            <!-- <button class="btn-loadmore" @click="loadMore">加载更多</button> -->
          </div>
        </van-tab>
        <!-- 热门榜单 -->
        <van-tab title="热门榜单" name="b">
          <div id="rb_hang" style="margin-top: 1rem;">
            <van-tabs @click="onClick">
              <van-tab title="点歌榜">
                <div class="list2">
                  <div class="item list2_1" v-for="item in dianges" :key="item._id">
                    <img :src="item.al.picUrl" alt="item.name" />
                    <h4>{{ item.name }}</h4>
                    <p class="p1">{{ item.name }}</p>
                    <p class="p2">演唱</p>
                  </div>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <!-- <button class="btn-loadmore" @click="loadMore">加载更多</button> -->
                </div>
              </van-tab>
              <!-- 合唱热榜 -->
              <van-tab title="合唱热榜">
                <div class="list2">
                  <div class="item list2_1" v-for="item in hechangs" :key="item._id">
                    <img :src="item.al.picUrl" alt="item.name" />
                    <h4>{{ item.name }}</h4>
                    <p class="p1">{{ item.name }}</p>
                    <p class="p2">演唱</p>
                  </div>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <!-- <button class="btn-loadmore" @click="loadMore">加载更多</button> -->
                </div>
              </van-tab>
              <!-- 70后热榜 -->
              <van-tab title="70后热榜">
                <div class="list2">
                  <div class="item list2_1" v-for="item in qilings" :key="item._id">
                    <img :src="item.al.picUrl" alt="item.name" />
                    <h4>{{ item.name }}</h4>
                    <p class="p1">{{ item.name }}</p>
                    <p class="p2">演唱</p>
                  </div>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <i class="zw"></i>
                  <!-- <button class="btn-loadmore" @click="loadMore">加载更多</button> -->
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </van-tab>
        <!-- 已点 -->
        <van-tab title="已点" name="c">
          <div class="hechang_bottom">
            <img src="../../assets/kk.png" alt />
            <h4>这条街空荡荡的，快去点歌吧</h4>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { xiangchangList } from "../../services/KeGe/TuiJan";
export default {
  data() {
    return {
      value: "",
      active: 2,
      activeName: "a",

      cainis: [],
      dianges: [],
      hechangs: [],
      qilings: []
    };
  },

  async created() {
    const xiangchang = await xiangchangList({
      cookie: localStorage.cookie
    });
    console.log(xiangchang);
    this.cainis = xiangchang.data.dailySongs;
    this.dianges = xiangchang.data.dailySongs.splice(6, 30);
    const hechang = await xiangchangList({
      cookie: localStorage.cookie
    });
    this.hechangs = hechang.data.dailySongs.splice(12, 30);
    const qiling = await xiangchangList({
      cookie: localStorage.cookie
    });
    this.qilings = qiling.data.dailySongs.splice(19, 30);
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
    },
    diangeHandle() {},
    onClick() {}
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
span {
  color: rgb(172, 172, 172);
  margin-left: 2rem;
  font-size: 1.5rem;
}
.ipt {
  margin-left: 1rem;
  width: 80%;
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
  margin-top: -4rem;
  margin-left: 5rem;
  font-weight: 600;
}
.list1 .list1_1 p {
  width: 12rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  margin-left: 5rem;
  margin-top: 1rem;
}

.list1 .list1_1 .p1 {
  font-size: 0.16rem;
}
.list1 .list1_1 .p2 {
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
/* 已点 */
/* 合唱 内容样式 */
.hechang_bottom {
  margin: 3rem auto;
  text-align: center;
  color: rgb(66, 66, 66);
}
.hechang_bottom h4 {
  font-weight: 500;
  margin-top: 1rem;

  margin-bottom: 1rem;
}
.hechang_bottom h4 p {
  margin-top: 1rem;
}
/* 去唱歌   热门榜单   点歌榜 */
.van-tabs .van-tabs--line {
  height: 2rem;
  /* background: #e09a02; */
}
#rb_hang /deep/ .van-tabs__nav .van-tabs__nav--line {
  padding: 3rem;
  z-index: 1000;
  background: #023de0;
}
#rb_hang /deep/ .van-tabs__content {
  margin-top: 0.4rem;
  /* background: #27e002; */
}
#rb_hang /deep/ .van-tabs__nav {
  background: #ffd1d1;
  border-radius: 1.6rem;
}

#rb_hang /deep/ .van-tabs__line {
  height: 0;
  width: 0;
}
#rb_hang /deep/ .van-tab--active {
  background: #fff59b;
  border-radius: 1.6rem 1.6rem 0 0;
}
/* 热门榜单     点歌榜 */
.list2 {
  margin-top: -2rem;
  margin-left: 2rem;
}
.list2 .list2_1 {
  margin-top: 3rem;
}
.list2 .list2_1 img {
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
}
.list2 .list2_1 h4 {
  font-size: 0.8rem;
  margin-top: -4rem;
  margin-left: 5rem;
  font-weight: 600;
}
.list2 .list2_1 p {
  width: 12rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  margin-left: 5rem;
  margin-top: 1rem;
}

.list2 .list2_1 .p1 {
  font-size: 0.16rem;
}
.list2 .list2_1 .p2 {
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
</style>
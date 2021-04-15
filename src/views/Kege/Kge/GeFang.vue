<template>
  <div class="gefang">
    <van-row type="flex" justify="center" class="gf">
      <van-col span="7" class="gf1">
        <b>创建歌房</b>
      </van-col>
      <van-col span="7" class="gf2">
        <b>热房榜</b>
      </van-col>
      <van-col span="7" class="gf3">
        <b>快速加入</b>
      </van-col>
      <div id="gf_hang">
        <van-tabs class="gf_hang" v-model="activeName" @click="hyHandle">
          <!-- 欢乐K歌               -->
          <van-tab title="欢乐KTV" name="a" style="width:10rem">
            <!-- <div class="list1">
              <div class="item list1_1" v-for="item in huanles" :key="item._id">
                <img :src="item.coverImgUrl" alt="item.name" />
                <h4>{{ item.name }}</h4>
                <p>{{ item.description }}</p>
              </div>
              <i class="zw"></i>
              <i class="zw"></i>
              <i class="zw"></i>
              <i class="zw"></i>
              <button class="btn-loadmore" @click="loadMore">加载更多</button>
            </div>-->
            <div id="list1">
              <van-grid :column-num="2" class="huanles">
                <van-grid-item v-for="item in huanles" :key="item">
                  <h4>{{ item.name }}</h4>
                  <img :src="item.coverImgUrl" alt="item.name" />
                </van-grid-item>
              </van-grid>
            </div>
            <!-- <van-grid :gutter="10">
              <van-grid-item v-for="item in huanles" :key="item" class="huanle" column-num="2">
                <h4>{{ item.name }}</h4>
                <img :src="item.coverImgUrl" alt="item.name" />
              </van-grid-item>
            </van-grid>-->
          </van-tab>
          <van-tab title="聊天室" name="b" style="width:10rem">内容 2</van-tab>
        </van-tabs>
      </div>
    </van-row>

    <!-- <van-grid :gutter="10">
          <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文字" />
    </van-grid>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      active: 2,
      activeName: "a",
      huanles: []
    };
  },
  created() {
    axios.get("http://localhost:3000/top/playlist/highquality").then(res => {
      console.log(res);
      this.huanles = res.data.playlists;
      // this.banners = res.data.banners;
    });
  },
  methods: {
    hyHandle() {}
  }
};
</script>

<style scoped>
/* 歌房 */

.gf {
  /* height: 2rem; */
  /* background: #f067ca; */
  text-align: center;
  line-height: 2rem;
  margin-top: 4rem;
}
.gf1 {
  height: 3rem;
  background: #feeef2;
  text-align: center;
  margin-left: 0.666667rem;
  line-height: 3rem;
  color: rgb(48, 48, 48);
  border-radius: 0.4rem;
}
.gf2 {
  height: 3rem;
  background: #fcf7f2;
  text-align: center;
  margin-left: 0.666667rem;
  line-height: 3rem;
  color: rgb(48, 48, 48);
  border-radius: 0.4rem;
}
.gf3 {
  height: 3rem;
  background: #eaf6f6;
  text-align: center;
  margin-left: 0.666667rem;
  line-height: 3rem;
  color: rgb(48, 48, 48);
  border-radius: 0.4rem;
}
#gf_hang /deep/ {
  width: 50%;
  display: flex;
  flex: 1;

  flex-direction: row;
  justify-content: flex-start;

  margin-top: 1rem;
  color: rgb(199, 199, 199);
  height: 1rem;
  margin-left: 1rem;
}
#gf_hang /deep/ .gf_hang .van-tabs__line {
  height: 0;
  width: 0;
}
#gf_hang /deep/ .gf_hang .van-tab--active {
  background: #fff6f6;
  border-radius: 1.6rem;
}
/* 欢乐k歌     */
.list1 {
  background: #15f1f1;
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-direction: row;
}
.huanles /deep/ {
  width: 24rem;
  /* margin-left: 1rem; */
  border: none;
  background: #ffffff;
  margin: 10px 0;
}
.huanles img {
  width: 6rem;
  border-radius: 20rem;
  background: #e20a0a;
}
</style>
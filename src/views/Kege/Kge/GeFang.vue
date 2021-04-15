<template>
  <div class="gefang">
    <van-row type="flex" justify="center" class="gf">
      <van-col span="7" class="gf1" v-if="show">
        <van-popup position="bottom" :style="{ height: '30%' }" @click="show=!show">{{txt}}</van-popup>
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
            <div id="list1">
              <van-grid :column-num="2" class="huanles">
                <van-grid-item v-for="item in huanles" :key="item">
                  <img :src="item.cover" alt="item.name" />
                  <h4>{{ item.name }}</h4>
                </van-grid-item>
              </van-grid>
              <div class="height:5rem"></div>
            </div>
            <!-- <HearList></HearList> -->
          </van-tab>
          <van-tab title="聊天室" name="b" style="width:10rem">
            <div id="list1">
              <van-grid :column-num="2" class="huanles">
                <van-grid-item v-for="item in liaotians" :key="item">
                  <h4>{{ item.name }}</h4>
                  <img :src="item.coverImgUrl" alt="item.cover" style="margin-top: 1rem;" />
                </van-grid-item>
              </van-grid>
            </div>
            <!-- <div class="height:5rem"></div> -->
          </van-tab>
        </van-tabs>
      </div>
    </van-row>
  </div>
</template>

<script>
// tuijianList
import { liaotianList, huanleList } from "../../../services/KeGe/TuiJan";
// import HearList from "../../../components/boke/HearList";
// import axios from "axios";

export default {
  data() {
    return {
      active: 2,
      activeName: "a",
      huanles: [],
      liaotians: [],
      show: true,
      txt: "创建歌房"
    };
  },

  async created() {
    const huanle = await huanleList({
      cookie: localStorage.cookie
    });
    console.log(huanle);
    this.huanles = huanle.data;
    // ##########################33
    const liaotian = await liaotianList({
      cookie: localStorage.cookie
    });
    console.log(liaotian);
    this.liaotians = liaotian.playlist;
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
  width: 100%;
  display: flex;
  flex: 1;

  flex-direction: row;
  justify-content: flex-start;

  margin-top: 1rem;
  color: rgb(199, 199, 199);
  height: 1rem;
  margin-left: 1rem;
  /* background: #000000; */
}

/* 欢乐k歌     */
.list1 {
  margin-top: 1rem;
  /* background: #000000; */
}
.huanles /deep/ {
  width: 23rem;
  border: none;
  margin: 0 auto;
}
.huanles img {
  width: 7rem;
  border-radius: 1rem;
}
/*     欢乐k歌 */
#list1 h4 {
  width: 7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 16px;
  text-align: center;
  color: #000000;
  margin-top: 1rem;
}
</style>
<template>
  <div>
    <van-tabs v-model="active" route>
      <van-tab>
        <template #title>
          <van-icon name="wap-nav" size="26" />
        </template>
        内容4
      </van-tab>
      <van-tab>
        <!-- @click="GuangChangHandle" :to="{ name: 'GuangChang' }" -->
        <template #title >
          <router-link :to="{ name: 'GuangChang' }">广场</router-link>
          
        </template>

      </van-tab>
      <van-tab>
        <template #title>
        <router-link :to="{ name: 'GeFang' }">
          <h3 style="color:black">歌房</h3>
   </router-link>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <router-link :to="{ name: 'SouSuo' }">
            <van-icon name="search" size="26" />
          </router-link>
        </template>
        内容3
      </van-tab>
    </van-tabs>
   <router-view/>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      active: 2,
      activeName: "a"
    };
  },
  methods: {
    hyHandle() {},

  }
};
</script>

<style  scoped>
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
/* 好友  行*/
#hy_hang /deep/ {
  width: 70%;
  margin-top: 1rem;
  color: rgb(199, 199, 199);
  height: 1.3rem;
  margin-left: 0.8rem;
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
/* 歌房 */

.gf {
  /* height: 2rem; */
  /* background: #f067ca; */
  text-align: center;
  line-height: 2rem;
  margin-top: 1rem;
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
</style>


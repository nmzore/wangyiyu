<template>
  <div class="guangchang">
          <van-row gutter="22" class="kg">
           <router-link :to="{ name: 'QuChGe' }">
          <van-col span="11" class="kg1">
            <i class="fa fa-microphone">
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去唱歌</b>
            </i>
          </van-col></router-link>
          <van-col span="11" class="kg2">
            <i class="fa fa-book">
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的K歌</b>
            </i>
          </van-col>
        </van-row>

        <div id="hy_hang">
          <van-tabs class="hy_hang" v-model="activeName" >
            <van-tab title="好友" name="a">
              
            </van-tab>
            <van-tab title="推荐" name="b">
               <div class="list">
    <div class="item" v-for="item in tuijians" :key="item._id">
      <img :src="item.coverImg" alt="item.name" />
      <h4>{{ item.name }}</h4>

      <div class="price">
        <span>￥{{ item.price / 100 }}</span>
        <button class="btn" @click="buy(item._id)">
          <i class="fa fa-shopping-cart"></i> 购买
        </button>
      </div>
    </div>
    <i class="zw"></i>
    <i class="zw"></i>
    <i class="zw"></i>
    <i class="zw"></i>
    <button class="btn-loadmore" @click="loadMore">加载更多</button>
  </div>
            </van-tab>
            <van-tab title="古风" name="c">内容 3</van-tab>
            <van-tab title="说唱" name="d">内容 4</van-tab>
          </van-tabs>
        </div>
  </div>
</template>

<script>
import { loadList } from "../../../services/KeGe/TuiJan.js";
export default {
    data() {
    return {
      active: 2,
      activeName: "a",
       tuijians: [],
      page: 1
    };
  },
    created() {
    this.loadData();
  },
  methods: {
    loadMore() {
      this.loadData();
    },
    // hyHandle() {},
     async loadData() {
      const res = await loadList(this.page, this.$route.query.c);
      console.log(res);
      
      this.page++;
      this.tuijians = [...this.tuijians, ...res.tuijians];
    },
  }
};

</script>

<style scoped>
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
</style>

<template>
  <div class="mine mine-style">
    <!-- 侧边栏 -->
    <div>
      <!-- <van-icon name="wap-nav" /> -->
      <mokuai style="padding: 10px"></mokuai>
    </div>
    <!-- 用户信息 -->
    <div class="user">
      <div class="userinfo">
        <div class="img">
          <van-image round width="40px" height="40px" :src="url" />
        </div>
        <div class="right">
          <p @click="nowlogin">{{ Namea }}</p>
          <div class="tab" v-if="vip">
            <van-tag class="tab-1" color="#919191" :round="true"
              ><i>Vip续费</i></van-tag
            >
            <van-tag
              class="tab-2"
              color="#fff"
              text-color="#525252"
              :round="true"
              ><i>Lv.18</i></van-tag
            >
          </div>
        </div>
      </div>
      <div class="arrow">
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 小图标们 -->
    <div class="guide">
      <div>
        <van-grid square :border="false">
          <van-grid-item
            icon="music"
            text="本地下载"
            @click="dianji(33894312)"
          />
          <van-grid-item
            icon="invition"
            text="云盘"
            @click="dianji(1804320463)"
          />
          <van-grid-item icon="gift-card" text="已购" />
          <van-grid-item icon="play-circle" text="音乐播放" />
          <van-grid-item icon="friends" text="我的好友" />
          <van-grid-item icon="like" text="收藏和赞" />
          <van-grid-item icon="smile" text="我的博客" />
          <van-grid-item icon="add" text="音乐应用" />
        </van-grid>
      </div>
    </div>
    <!-- 我喜欢的 -->
    <div class="ilike" @click="golikelist">
      <div class="ilike-left">
        <div>
          <van-image width="65px" height="65px" :src="url2" />
        </div>
        <div class="left-text">
          <h6>我喜欢的音乐</h6>
          <van-icon name="passed" /><i
            ><span>{{ num1 }}</span
            >首，已下载<span>{{ num2 }}</span
            >首</i
          >
        </div>
      </div>
      <div class="ilike-right">心动模式</div>
      <router-view></router-view>
    </div>
    <!-- 标签导航 -->
    <div class="tabnav">
      <van-tabs scrollspy sticky background="none" line-width="60px">
        <van-tab title="创建歌单" name="a">
          <div class="createlist">
            <div class="title">
              <p>创建歌单（{{ num3 }}个）</p>
              <div class="icons">
                <van-icon name="plus" />
                <van-icon name="more-o" />
              </div>
            </div>
            <div class="card">
              <div
                v-for="item in list"
                :key="item.id"
                @click="golistdetail(item.id)"
              >
                <van-card
                  :desc="'' + item.trackCount"
                  :title="item.name"
                  :thumb="item.coverImgUrl"
                >
                  <van-icon name="more-o" />
                </van-card>
              </div>
              <!-- <van-icon name="more-o" /> -->
            </div>
          </div>
        </van-tab>
        <van-tab class="collect" title="收藏歌单" name="b">
          <div class="createlist">
            <div class="collect-title">
              <van-cell is-link @click="showPopup">收藏歌单</van-cell>
              <van-popup
                v-model="show"
                round
                closeable
                close-icon-position="top-right"
                position="bottom"
                :style="{ height: '30%' }"
              >
                <div class="confirm">
                  <p class="mine-create">我创建的歌单</p>
                  <p><van-icon class="icon" name="add-o" />创建新歌单</p>
                  <p>
                    <van-icon class="icon" name="music-o" />一键导入外部音乐
                  </p>
                  <p><van-icon class="icon" name="clock-o" />恢复歌单</p>
                </div>
              </van-popup>
            </div>
            <div class="collectcontent">
              <p>暂无收藏的歌单</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="歌单助手" name="c">
          <div class="createlist helper">
            <div class="collect-title">
              <p>歌单助手</p>
            </div>
            <div class="collectcontent helper-content">
              <p>你可以从歌单中筛选</p>
            </div>
            <div class="texts">
              <div class="inner-container">
                <p>
                  最近<span class="a">一年收藏</span>的<span class="b"
                    >古风歌曲</span
                  >
                </p>
                <p>
                  陪你一起<span class="c">运动</span>的50首<span class="f"
                    >摇滚</span
                  >
                </p>
                <p>
                  适合<span class="d">夜晚听</span>的<span class="e">民谣</span>
                </p>
                <p>
                  很久<span class="f">未听的</span>华语<span class="g"
                    >男声</span
                  >精选
                </p>
                <p>
                  夜晚<span class="c">学习</span>热血<span class="f">励志</span
                  >30首
                </p>
              </div>
            </div>
            <van-button round color="#ff2639" size="small" @click="gosquare"
              >试试看</van-button
            >
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 为你推荐 -->
    <div class="recommend">
      <p>为你推荐</p>
      <div class="tuijianbox">
        <div
          v-for="item in list2"
          :key="item.id"
          @click="golistdetail(item.id)"
        >
          <div class="listcontent">
            <img :src="item.coverImgUrl" alt="" width="100" height="100" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
      <van-button color="#bababa" plain size="small" round
        >更多推荐歌单></van-button
      >
    </div>
    <bofang :inputName="ids"></bofang>
  </div>
</template>
<script>
import mokuai from "../../components/All/mokuai";
import bofang from "../../components/All/bofang";
import {
  likelist,
  yonghu,
  songdetail,
  userplaylist,
  toplist,
} from "../../services/auto";

export default {
  data() {
    return {
      ids: "",
      Namea: "立即登录",
      url: "https://img01.yzcdn.cn/vant/cat.jpeg",
      vip: false,
      num1: 0,
      num2: 0,
      uid: "",
      url2: "https://img01.yzcdn.cn/vant/cat.jpeg",
      idss: [],
      num3: "",
      list: [],
      list2: [],
      id: "",
      listid: "",
      flag: false,
      show: false,
      // arr: [
      //   "1 不是被郭德纲发现的，也不是一开始就收为徒弟。",
      //   "2 现在雅阁这个状态像极了新A4L上市那段日子。",
      //   "3 低配太寒碜，各种需要加装，中配定价过高，又没啥特色",
      //   "4 然后各种机油门、经销商造反什么的幺蛾子。",
      //   "5 看五月销量，建议参考A4，打8折吧。",
      //   "1 不是被郭德纲发现的，也不是一开始就收为徒弟。",
      // ],
    };
  },
  async created() {
    const res = await yonghu({
      cookie: localStorage.cookie,
    });
    console.log(res);
    if (res.code == 200) {
      this.Namea = res.profile.nickname;
      this.url = res.profile.avatarUrl;
      //console.log(localStorage.cookie);
      if (localStorage.cookie) {
        this.vip = true;
      } else {
        this.vip = false;
      }
    }
    //console.log(res.account.id);
    this.uid = res.account.id;
    //console.log(this.uid);
    const res1 = await likelist({
      uid: this.uid,
      cookie: localStorage.cookie,
    });
    // console.log(res1);
    // console.log(res1.ids.length);
    this.num1 = res1.ids.length;
    this.idss = res1.ids;
    //const ids = this.idss[0];
    // console.log(this.idss);
    // console.log(ids);
    const res2 = await songdetail({
      ids: this.idss[0],
      cookie: localStorage.cookie,
    });
    // console.log(res2);
    // console.log(res2.songs[0].al.picUrl);
    this.url3 = res2.songs[0].al.picUrl;
    const res3 = await userplaylist({
      uid: this.uid,
      cookie: localStorage.cookie,
    });
    // console.log(res3);
    this.num3 = res3.playlist.length;
    this.list = this.list.concat(res3.playlist);
    console.log(this.list);
    this.url2 = res3.playlist[0].coverImgUrl;
    // this.title = res3.playlist[0].name;
    // this.desc = res3.playlist[0].trackCount;
    // const res4 = await albumsublist({
    //   cookie: localStorage.cookie,
    // });
    // console.log(res4);
    const res4 = await toplist({
      cookie: localStorage.cookie,
    });
    console.log(res4);
    const arr = res4.list;
    console.log(this.listid);
    console.log(arr);
    // this.list2 = this.list2.concat(arr.slice(0, 18));
    this.list2 = arr;
  },
  methods: {
    dianji(ids) {
      this.ids = ids;
    },
    nowlogin() {
      if (localStorage.cookie != null) {
        console.log(1);
      } else {
        this.$router.push({
          path: "Login",
        });
      }
    },
    golikelist() {
      this.$router.push({
        path: "/likelist",
        query: {
          uid: this.uid,
          url: this.url,
        },
      });
    },
    golistdetail(id) {
      console.log(id);
      this.listid = id;
      console.log(this.listid);
      this.$router.push({
        path: "/listdetail",
        query: {
          listid: this.listid,
        },
      });
    },
    gosquare() {
      this.$router.push({
        path: "/square",
      });
    },
    showPopup() {
      this.show = true;
    },
  },
  components: {
    mokuai,
    bofang,
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.arr[this.number],
      };
    },
  },
  startMove() {
    let timer = setTimeout(() => {
      if (this.number === 5) {
        this.number = 0;
      } else {
        this.number += 1;
      }
      this.startMove(timer);
    }, 2000);
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
/* html {
  font-size: 100px;
} */
.mine-style.mine {
  background: #f6f6f6;
  padding-bottom: 40px;
}
.mine-style .nav {
  padding-top: 15px;
  padding-left: 15px;
}

/* user */
.mine-style .user {
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 30px; */
}
.mine-style .userinfo {
  width: 50%;
  margin-left: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mine-style .img {
  width: 40px;
  height: 40px;
  border: solid #ccc 1px;
  border-radius: 50px;
}
.mine-style .right p {
  width: 100px;
  line-height: 20px;
}
.mine-style .tab {
  width: 90px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
}
.mine-style .tab-1 {
  width: 45px;
  text-align: center;
}
.mine-style .van-grid {
  margin: 0 auto;
  width: 330px;
  margin-top: 15px;
}
.mine-style .van-grid-item__content {
  color: #ff3a47;
  /* font-size: 40px; */
}
.mine-style .van-grid-item__content .van-grid-item__icon {
  font-size: 38px;
}

/* ilike */
.mine-style .van-sticky {
  background: #fff;
}
.mine-style .ilike {
  margin: 0 auto;
  width: 320px;
  min-height: 100px;
  margin-top: 15px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0px 10px;
}
.mine-style .ilike-left {
  width: 80%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.mine-style .left-text {
  margin-left: 5px;
}
.mine-style .left-text h6 {
  color: #616161;
  line-height: 30px;
}
.mine-style .left-text span {
  font-size: 14px;
  color: #bababa;
}
.mine-style .left-text .van-icon-passed {
  color: #3dc1f0;
  font-size: 17px;
}
.mine-style .ilike-right {
  width: 75px;
  height: 30px;
  border: solid 1px #ccc;
  border-radius: 30px;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  font-size: 13px;
  color: #6d6d6d;
}

/* tabnav */
.mine-style .van-tabs {
  padding-top: 20px;
}
.mine-style .van-tab__pane {
  margin-top: 20px;
}
/* createlist */
.mine-style .createlist {
  margin: 0 auto;
  width: 320px;
  min-height: 150px;
  margin-top: 15px;
  background: #fff;
  /* display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left; */
  overflow: hidden;
  padding: 0px 10px;
}
.mine-style .van-card {
  background: #fff;
}
.mine-style .createlist .title p {
  font-size: 12px;
  color: #949494;
}
.mine-style .van-card__thumb img {
  width: 70px;
  height: 70px;
}
.mine-style .title {
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  margin-left: 20px;
}
.mine-style .title .icons {
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #979797;
}
.mine-style .title .icons .van-icon-plus {
  font-size: 20px;
  color: #979797;
}
.mine-style .title .icons .van-icon-more-o {
  font-size: 20px;
  color: #979797;
}
.mine-style .card {
  margin: 0 auto;
  width: 100%;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}
.mine-style .card .v-card {
  width: 80%;
}
.mine-style .card .van-icon-more-o {
  margin-right: 37px;
  font-size: 20px;
  color: #979797;
}
.mine-style .collect-title {
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  margin-left: 20px;
  font-size: 14px;
  color: #949494;
}

.mine-style .confirm {
  padding: 20px;
}
.mine-style .confirm .mine-create {
  border-bottom: solid 1px #ccc;
  color: #616161;
  margin-bottom: 15px;
}
.mine-style .confirm p {
  line-height: 40px;
  text-align: left;
  font-size: 14px;
  color: #2b2929;
  display: flex;
  justify-content: left;
  align-items: center;
}
.mine-style .icon {
  font-size: 25px;
  color: #504f4f;
  margin-right: 20px;
}
.mine-style .collectcontent p {
  font-size: 14px;
  color: #949494;
  width: 85%;
  height: 100px;
  text-align: center;
  line-height: 80px;
}
.mine-style .helper-content p {
  width: 85%;
  height: 30px;
  line-height: 20px;
}
.mine-style .createlist .texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  width: 300px;
  height: 35px;
  overflow: hidden;
}
.inner-container {
  animation: myMove 5s linear infinite;
  animation-fill-mode: forwards;
}
/*文字无缝滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-30px);
  }
  20% {
    transform: translateY(-30px);
  }
  30% {
    transform: translateY(-60px);
  }
  40% {
    transform: translateY(-60px);
  }
  50% {
    transform: translateY(-90px);
  }
  60% {
    transform: translateY(-90px);
  }
  70% {
    transform: translateY(-120px);
  }
  80% {
    transform: translateY(-120px);
  }
  90% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-150px);
  }
}
.mine-style .inner-container p {
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: #6d6d6d;
  width: 300px;
  height: 30px;

  /* margin: px 0; */
}
.a {
  color: #f164ce;
  background: pink;
}
.b {
  color: #ec44c2;
  background: rgb(245, 189, 198);
}
.c {
  color: #094c8b;
  background: rgb(180, 213, 240);
}
.d {
  color: #054d14;
  background: rgb(183, 228, 205);
}
.e {
  color: #053836;
  background: rgb(161, 189, 172);
}
.f {
  color: #3b3f03;
  background: rgb(234, 241, 203);
}
.g {
  color: #ec08b3;
  background: pink;
}
.mine-style .createlist button {
  margin-left: 130px;
}
.mine-style .recommend {
  padding: 20px 20px;
}
.mine-style .recommend p {
  font-size: 14px;
  color: #616161;
  margin-bottom: 10px;
}
.mine-style .tuijianbox {
  display: flex;
  overflow-x: auto;
}
.mine-style .tuijianbox .listcontent {
  width: 100px;
  margin: 0 10px;
}
.mine-style .van-button--plain {
  margin-top: 15px;
  margin-left: 110px;
}
</style>

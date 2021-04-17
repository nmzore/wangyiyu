<template>
  <div class="Likelist">
    <!-- top -->
    <div class="top">
      <div class="nav">
        <van-nav-bar title="歌单" :border="false">
          <template #left>
            <van-icon
              name="arrow-left"
              size="28"
              style="color: #fff"
              @click="gouser"
            />
          </template>
          <template #right>
            <van-icon name="search" size="28" />
            <van-icon name="ellipsis" size="28" />
          </template>
        </van-nav-bar>
      </div>
      <!-- ilike -->
      <div class="ilike">
        <van-image width="120px" height="120px" :src="url2" />
        <div class="left-text">
          <h6>我喜欢的音乐</h6>
          <div class="userinfo">
            <van-image round width="30px" height="30px" :src="url" />
            <p>{{ name }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="list">
      <div class="list-nav">
        <p>
          <van-icon name="play-circle-o" color="red" size="28" />
          <i
            >播放全部<span>({{ num1 }})</span></i
          >
        </p>
        <p>
          <van-icon name="down" size="20" />
          <van-icon name="certificate" size="20" />
        </p>
      </div>
      <div class="list-content">
        <van-list v-for="(item, index) in list" :key="item.id" >
          <p>{{ index + 1 }}</p>
          <div class="listname">
            <span class="listname-top">{{ item.al.name }}</span>
            <div>
              <span>{{ item.ar[0].name }}</span>
              <span>—</span>
              <span>{{ item.al.name }}</span>
            </div>
          </div>
          <div class="listcontent-right">
            <van-icon name="video-o" size="22" @click="dianji(item.id)"/>
            <van-icon name="other-pay" @click="delatesong(item.id)" size="22" />
          </div>
        </van-list>
      </div>
    </div>
       <bofang :inputName="ids"></bofang>
  </div>
</template>

<script>
import { likelist, yonghu, songdetail } from "../../../services/auto";

import bofang from "../../../components/All/bofang";

export default {
  props: {},
  data() {
    return {
      ids:'',
      url2: "https://img01.yzcdn.cn/vant/cat.jpeg",
      name: "",
      num1: "",
      url: "",
      list: [],
      id: "",
      loading: false,
      finished: false,
    };
  },
  computed: {},
  async created() {
    const res = await yonghu({
      cookie: localStorage.cookie,
    });
    console.log(res);
    if (res.code == 200) {
      this.Namea = res.profile.nickname;
      this.url = res.profile.avatarUrl;
      console.log(localStorage.cookie);
      if (localStorage.cookie) {
        this.vip = true;
      } else {
        this.vip = false;
      }
    }
    console.log(res.account.id);
    console.log(res.profile.nickname);
    this.name = res.profile.nickname;
    this.uid = res.account.id;
    console.log(this.uid);
    const res1 = await likelist({
      uid: this.uid,
      cookie: localStorage.cookie,
    });
    console.log(res1);
    this.id = res1.checkPoint;
    console.log(this.id);
    console.log(res1.ids.length);
    this.num1 = res1.ids.length;
    this.idss = res1.ids;
    const ids = this.idss[0];
    console.log(this.idss);
    //console.log(ids);
    const res2 = await songdetail({
      ids: ids,
      cookie: localStorage.cookie,
    });
    console.log(res2);
    console.log(res2.songs[0].al.picUrl);
    this.url2 = res2.songs[0].al.picUrl;
    this.ilikelist();
  },
  mounted() {
    console.log(this.$route.query.uid);
    console.log(this.$route.query.url);
    // this.name = this.$route.query.uid;
    this.url = this.$route.query.url;
  },
  watch: {},
  methods: {
    gouser() {
      this.$router.push({
        path: "/User",
      });
   
    },
       dianji(ids){
      this.ids=ids
    },
    async ilikelist() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      for (let i = 0; i < this.idss.length; i++) {
        console.log(i);
        console.log(this.idss[i]);
        const ids = this.idss[i];
        const res3 = await songdetail({
          ids: ids,
          cookie: localStorage.cookie,
        });
        console.log(res3);
        // this.list.push(this.list.length + 1);
        this.list = this.list.concat(res3.songs); //结果放到list里面。
        console.log(this.list);
      }
    },
    //op: 从歌单增加单曲为 add, 删除为 del

    //pid: 歌单 id tracks: 歌曲 id,可多个,用逗号隔开
    // async delatesong(del, id) {
    //   console.log(id);
    //   const res4 = await playlisttracks({
    //     op: del,
    //     pid: this.id,
    //     tracks: id,
    //   });
    //   console.log(res4);
    // },
  },
    components: {
    bofang
  },
};
</script>

<style scoped>
.top {
  padding-top: 10px;
  background: rgb(117, 116, 116);
  height: 230px;
}
/* top-nav */
.van-nav-bar {
  background: rgb(117, 116, 116);
}
.van-nav-bar__content .van-nav-bar__title {
  color: #fff;
}
.van-icon-arrow-left {
  color: #fff;
}
.van-icon-search {
  color: #fff;
}
.van-icon-ellipsis {
  color: #fff;
}
.van-nav-bar__left {
  font-size: 20px;
}
.van-icon-search {
  margin-right: 20px;
}
.van-nav-bar__title {
  margin-right: 60px;
}
/* ilike */
.ilike {
  margin: 0 auto;
  /* width: 320px; */
  min-height: 100px;
  margin-top: 15px;
  margin-left: 15px;
  /* background: #fff; */
  display: flex;
  justify-content: left;
  align-items: center;
  overflow: hidden;
  padding: 0px 10px;
}
.ilike-left {
  width: 80%;
  display: flex;
  justify-content: left;
  align-items: flex-start;
}
.left-text {
  margin-left: 25px;
}
.left-text h6 {
  color: #fff;
  line-height: 30px;
  font-size: 18px;
}
.userinfo {
  margin-top: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.userinfo p {
  margin-left: 8px;
}
/* list */
.list .list-nav {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}
.list-nav p i {
  margin-left: 15px;
}
.list-nav p i span {
  font-size: 12px;
  font-weight: normal;
}
/* 列表样式 */
.van-list {
  /* width: 90%;
  height: 20%; */
  /* margin-top: 20px; */
  padding: 10px 15px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  position: relative;
}
.van-list p {
  margin-right: 24px;
  font-size: 18px;
  color: rgb(192, 192, 189);
}
.listname .listname-top {
  font-size: 18px;
  color: rgb(28, 29, 29);
}
.listname div {
  margin-top: 10px;
  font-size: 14px;
  color: rgb(97, 99, 99);
}
.listcontent-right {
  position: absolute;
  top: 0;
  left: 300px;
}
</style>

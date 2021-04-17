<template>
  <div class="Likelist">
    <!-- top -->
    <div class="top">
      <div class="nav">
        <van-nav-bar :border="false">
          <template #title> 歌单 </template>
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
        <van-image width="120px" height="120px" :src="url" />
        <div class="left-text">
          <h6>{{ name }}</h6>
          <div class="userinfo">
            <p>{{ desc }}</p>
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
            >播放全部<span>({{ num }})首</span></i
          >
        </p>
        <p>
          <van-icon name="down" size="20" />
          <van-icon name="certificate" size="20" />
        </p>
      </div>
      <div class="list-content">
        <van-list v-for="(item, index) in lists" :key="item.id" >
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
            <van-icon name="video-o" size="22" @click="dianji(item.id)" />
            <van-icon name="other-pay" size="22" />
          </div>
        </van-list>
      </div>
    </div>
    <bofang :inputName="ids"></bofang>
  </div>
</template>

<script>
import { playlistdetail } from "../../../services/auto";
import bofang from "../../../components/All/bofang";
export default {
    components: {
    bofang
  },
  data() {
    return {
      ids:'',
      listid: "",
      url: "",
      name: "",
      desc: "",
      num: "",
      lists: [],
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$route.query.listid);
    const a = this.$route.query.listid;
    this.listid = Number(a);
    const id = this.listid;
    //console.log(this.listid);
    console.log(id);
    //调用songlist函数，并把参数 id 传给她
    this.songlist(id);
  },
  watch: {},
  methods: {
     
    gouser() {
      this.$router.push({
        path: "/User",
      });
    },
    //定一个songlist函数 并发起请求，
    async songlist(id) {
      const res = await playlistdetail({
        id,
      });
      console.log(res); //获得 歌单列表详情数据；
      this.name = res.playlist.name;
      this.url = res.playlist.coverImgUrl;
      this.desc = res.playlist.description;
      this.num = res.playlist.tracks.length;
      this.lists = this.lists.concat(res.playlist.tracks);
      console.log(this.lists);
    },
    dianji(id){
       console.log(id)
      this.ids=id
    },
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
  color: #ccc;
  font-size: 11px;
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
.van-nav-bar__title {
  color: #fff;
}
</style>

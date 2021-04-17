<template>
  <div class="songdetail">
    <!-- 头部 -->
    <div class="header">
      <div class="back">
        <div class="back-left">
          <van-icon name="arrow-left" @click="goHome" />
          <h2>歌单</h2>
        </div>
        <div class="back-right">
          <van-icon name="search" />
          <van-icon name="ellipsis" />
        </div>
      </div>
      <div class="tit">
        <img :src="imgUrl" alt="" />
        <h2>{{ title }}</h2>
      </div>
    </div>

    <!-- 播放全部 -->
    <div class="bofang">
      <div class="bofang-left">
        <van-icon name="play-circle" />
        <span
          >播放全部 <i>({{ num }})</i>
        </span>
      </div>
      <div class="bofang-right">
        <van-icon name="upgrade" />
        <van-icon name="certificate" />
      </div>
    </div>

    <!-- 歌单详情列表 -->
    <div class="xun" v-for="(item, index) in gdlist" :key="item.id">
      <div class="list">
        <div class="list-left" @click="dianji(item.id)">
          <i>{{ index + 1 }}</i>
          <div class="musicname">
            <!-- 歌名 -->
            <p>{{ item.name }}</p>
            <!-- 作者 -->
            <i class="sq">SQ</i>
            <span>{{ item.al.name }}</span>
          </div>
        </div>
        <div class="list-right">
          <van-icon name="play-circle-o" />
          <van-icon name="ellipsis" />
        </div>
      </div>
    </div>
     <bofang :inputName="ids"></bofang>
     <div id="box0"></div>
  </div>
</template>

<script>
// import axios from "axios";, musicUrl
import { souso } from "../../services/auto";
import bofang from "../../components/All/bofang";
export default {
  data() {
    return {
      ids:'',
      id: "",
      title: "",
      imgUrl: "",
      num: "",
      gdlist: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
   components: {
    bofang
  },
  //监控data中的数据变化
  watch: {},
  methods: {
    //跳转到首页
    goHome() {
      this.$router.push({
        path: "/",
      });
    },
     dianji(id){
      this.ids=id
       console.log(this.ids)
      },
    //歌单列表
    async songList(id) {
      const ref = await souso({
        id,
      });
      // console.log(ref);
      //歌单标题
      this.title = ref.playlist.name;
      //歌曲列表第一首歌的图片
      this.imgUrl = ref.playlist.coverImgUrl;
      //歌单歌曲列表
      // console.log(ref.playlist.tracks);
      this.gdlist = ref.playlist.tracks;
      //歌曲总数
      this.num = ref.playlist.tracks.length;
      // console.log(this.num);

      //根据歌曲id名播放音乐
      const music = ref.playlist.trackIds;
      for (let i = 0; i < music.length; i++) {
        // console.log(i, music[i].id);
        // const gdId = music[i].id;
        // console.log(gdId);
        // const music = await musicUrl({
        //   id: gdId,
        // });
        // console.log(music);
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //调用歌曲列表
    // this.songList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.id = this.$route.query.ids;
    // console.log(this.id);
    let ids = this.id;
    this.songList(ids);
    // this.musicList(gdId);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  
};

</script>
<style scoped>
/* 头部 */
.header {
  background: rgb(160, 159, 159);
  overflow: hidden;
  padding: 0.8rem 0.8rem 3rem 0.8rem;
}
.back {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem 0;
  color: #fff;
}
.back-left {
  display: flex;
}
.back-left h2 {
  margin-left: 1rem;
}
.van-icon-search {
  margin-right: 1rem;
}
.tit {
  display: flex;
  color: #fff;
}
.tit img {
  width: 7rem;
}
.tit h2 {
  width: 10rem;
  line-height: 1.5rem;
  margin: 2rem 0 0 2rem;
}

/* 播放全部 */
.bofang {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 0 1.5rem;
}
.van-icon-play-circle {
  font-size: 20px;
  color: rgb(255, 62, 62);
}
.bofang-left span {
  font-size: 20px;
  margin-left: 0.7rem;
  font-weight: 900;
}
.bofang-left span i {
  font-size: 16px;
  color: rgb(168, 166, 166);
  font-weight: 200;
}
.bofang-right {
  font-size: 18px;
}
.bofang-right .van-icon-upgrade {
  margin-right: 1rem;
}

/* 列表 */
.list {
  padding: 0 1.5rem;
  display: flex;
  margin: 2rem 0;
  justify-content: space-between;
}
.list-left {
  display: flex;
}
.list-left i {
  line-height: 3rem;
  margin-right: 1rem;
}
.musicname p {
  margin: 0.5rem 0;
}
.musicname span {
  font-size: 12px;
  color: #ccc;
}
.musicname .sq {
  width: 1rem;
  height: 2rem;
  border: 1px solid red;
  font-size: 8px;
  color: red;
  /* background: red; */
}
.list-right {
  color: #ccc;
}
.list-right .van-icon-play-circle-o {
  margin-right: 1rem;
}
#box0{
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    background: #fff;
    z-index: 1000000;
}
</style>

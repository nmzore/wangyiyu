<template>
  <div class="musicstory">
    <div class="tit" >
      <div class="tj-top">
        <div style="display:inline-block">
          <span style="font-weight:600;">重磅呈现</span>
          <span style="font-weight:600;">不容错过的宝藏播客</span>
        </div>  
        <button style="color:#000">更多 &gt;</button>
      </div>
      <div class="tj-bot">
        <van-grid
          :border="false"
          :column-num="3"
          :gutter="8"
          :icon-size="120"
          v-for="item in gds"
          :key="item.id"
        >
          <van-grid-item>
            <van-image :src="item.coverImgUrl" />
            <p>{{ item.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
   data(){
    return{
      gds:[],
    };
  },
  method:{

  },
  created(){
    axios
    .get("http://localhost:3000/top/playlist",)
    .then((res) => {
      console.log(909,res)
      this.gds = res.data.playlists.splice(12,14);
    });
  }
}
</script>

<style scoped>
.tj-top {
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 0.5rem;
}
.tj-top span {
  font-size: 14px;
}
.tj-top button {
  width: 60px;
  height: 18px;
  font-size: 12px;
  color: rgb(170, 169, 169);
  background: #fff;
  border: 1px solid rgb(170, 169, 169);
  border-radius: 20px;
}
.tj-bot {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.musicstory .van-image {
  width: 5.5rem;
  margin-bottom: 0.5rem;
}
.musicstory .van-grid-item p {
  /* 单行文本显示省略号 */
  width: 5.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgb(117, 116, 116);
  line-height: 16px;
}
.musicstory .van-grid-item {
  margin-top: 0px !important;
}
</style>
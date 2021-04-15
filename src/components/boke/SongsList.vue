<template>
  <div class="songslist">
    <div class="tj">
      <div class="tj-top">
        <h3 style="font-weight:600;">猜你在追</h3>
        <!-- <button style="color:#000">更多 &gt;</button> -->
      </div>
      <div class="tj-bot">
        <van-grid
          :border="false"
          :column-num="3"
          :gutter="5"
          :icon-size="100"
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
  methods:{

  },
  created(){
    axios
    .get("http://localhost:3000/top/playlist/highquality", { params: { limit:10 } })
    .then((res) => {
      console.log(res)
      this.gds = res.data.playlists;
    });
  }
}
</script>

<style scoped>
/* 推荐歌单 */
.tj-top {
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 0.5rem;
}
.tj-top h3 {
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
.tj .van-image {
  width: 5.5rem;
  margin-bottom: 0.5rem;
}
.tj .van-grid-item p {
  /* 单行文本显示省略号 */
  width: 5.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgb(117, 116, 116);
  line-height: 16px;
}
.tj .van-grid-item {
  margin-top: 0px !important;
}
</style>
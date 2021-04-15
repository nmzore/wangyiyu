<template>
  <div class="rmdList">
      <!-- 导航栏 -->
    <div class="nav">
      <van-grid :gutter="12" :border="false"  v-for="item in gds" :key="item.id">
        <van-grid-item>
          <van-image :src="item.coverImgUrl" />
          <p>{{ item.name }}</p>
        </van-grid-item>
      </van-grid>
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
    .get("http://localhost:3000/toplist/detail", { params: { limit:10 } })
    .then((res) => {
      console.log(res)
      this.gds = res.data.list;
    });
  }
}
</script>

<style scoped >
.nav  {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.nav .van-image {
  width: 2.5rem;
  margin-bottom: 0.5rem;
}
.nav .van-grid-item p{
   width: 2.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgb(117, 116, 116);
  line-height: 16px;
  text-align: center;
}
.nav .van-grid-item {
  margin-top: 0px !important;
}
.nav .van-grid-item__text {
  font-size: 20px;
  color: brown;
}
.nav .van-grid-item__content--center {
  width: 65px;
}

</style>
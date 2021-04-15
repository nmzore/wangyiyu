<template>
  <div class="hear">
    <div class="contents" style="position:relative;">
      <div class="nav">
      <van-grid v-for="item in lbs"
          :border="false" 
          :gutter="8"
          :column-num="5"
          :key="item.id">
        <van-grid-item>
          <van-image :src="item.coverImgUrl" />
          <p>{{ item.name }}</p>
        </van-grid-item>
      </van-grid>
      </div>
      <div class="more" @click="getmoreshow()"
      style="
            display:inline-block;
            width:72px;
            height:96px;
            position:absolute;
            top:0;
            right:0;">
            <button style="border: none;
              outline: none;
              width:42px;
              height:42px;
              display:inline-block;
              margin-left:.7rem;
              margin-top:.8rem;
              ">
        <van-icon style="display:none;" name="arrow-up" size="30"  />
        <van-icon name="arrow-down" size="30" />
            </button>
            <p>更多</p>
      </div>
      <div v-if="isShow" id="mydiv" class="mynav">
        <van-grid v-for="item in lbss"
          :border="false" 
          :gutter="10"
          :column-num="5"
          :key="item.id">
        <van-grid-item>
          <van-image :src="item.coverImgUrl" />
          <p>{{ item.name }}</p>
        </van-grid-item>
      </van-grid>
      </div>
    </div>
    <HearList></HearList>
  </div>
</template>
<script>
import axios from "axios";
import HearList from "./HearList"
export default {
  name:"Hear",
  data(){
    return{
    isShow:false,
    lbs:[],
    lbss:[],
    }
  },
  components:{
    HearList,
  },
   created(){
    axios
    .get("http://localhost:3000/toplist/detail", { params: { limit:4 } })
    .then((res) => {
      // console.log(res)
      this.lbs = res.data.list;
      this.lbs.length = 4;
    });
     axios
    .get("http://localhost:3000/toplist/detail", { params: { limit:4 } })
    .then((res) => {
      // console.log(res)
      this.lbss = res.data.list;
      this.lbss.length = 6;
    });
  },
  methods:{
     getmoreshow(){
       this.isShow = !this.isShow;
     },
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
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
.more p{
  font-size: 12px;
  color: rgb(117, 116, 116);
  line-height: 16px;
  margin-left:1.5rem;
  margin-top:.5rem;
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
.mynav{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items: center;
}
.mynav .van-image {
  width: 2.5rem;
  margin-bottom: 0.5rem;
}
.mynav .van-grid{
  width: 70px;
  height: 96px;
}
.mynav .van-grid-item {
  
  margin-top: 0px !important;
}
.mynav .van-grid-item p{
  width: 2.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgb(117, 116, 116);
  line-height: 16px;
  text-align: center;
}
</style>
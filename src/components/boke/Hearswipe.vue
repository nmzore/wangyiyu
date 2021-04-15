<template>
  <div class="hearswipe" style="position:relative">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :touchable="true"
      indicator-color="white"
    >
      <van-swipe-item @click="cehua()" v-for="item in banners" :key="item.imageUrl">
          <img :src="item.imageUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <p @click="cehua()" style="position:absolute;top:3rem;left:4rem; 
    color:#fff;">
    独家策划，等你来战！点击进入</p>
    

    
  </div>
</template>

<script>
import axios from "axios";
// import { Lazyload } from 'vant';
export default {
    data() {
    return {
      banners: [ ],
    };
  },
  methods:{
    cehua(){
      this.$router.push({
        name: "Cehua",
      });
     
    }
  },
   created(){
     //轮播图请求
    axios.get("http://localhost:3000/banner").then((res) => {
      console.log(888,res);
      this.banners = res.data.banners;
    });
  }
}
</script>

<style>
  .hearswipe,.my-swipe .van-swipe{
    height: 133px;
  }
   .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 133px;
    text-align: center;
   
    /* background-color: #39a9ed; */
  }
</style>
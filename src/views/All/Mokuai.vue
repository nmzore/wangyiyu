<template>
<div> 
  <van-button is-link @click="showPopup">展示弹出层</van-button>
  <van-popup v-model="show" position="left" :style="{ height: '100%',width:'80%',background:'rgba(245,245,245,1)'}">
    <div id="xinxi" @click="tiaozhuan" >
      <img id="imga" :src="url" alt="">
      <div id="Name">{{Namea}}</div>
      <div id="gt">&gt;</div>
    </div>
    <div v-for="item in banners" :key="item.userId"> 
    </div>
    <div id="boox">
      <p><span id="spanlist">开通黑胶VIP</span><span id="spanlista" >会员中心</span></p>
      <p><span id="spanlistb">立享超17项专属特权&gt;</span></p>
      <p><span id="spanlistc">开通黑胶VIP</span><span id="spanlistad" ></span></p>
    </div>
    <div id="booox">
      <van-cell title="我的信息" icon="shop-o" is-link />
      <van-cell title="云贝中心" icon="shop-o" is-link />
    </div>
    <div id="booox">
     <van-cell title="我的信息" style="font-size:10px;  margin:0;padding:2px 10px;" />
      <van-cell title="我的信息" icon="shop-o" is-link />
      <van-cell title="云贝中心" icon="shop-o" is-link />
      <van-cell title="游戏专区" icon="shop-o" is-link />
      <van-cell title="口袋彩铃" icon="shop-o" is-link />
    </div>
     <div id="booox">
     <van-cell title="其他" style="font-size:10px;  margin:0;padding:2px 10px;" />

      <van-cell title="我的信息" icon="shop-o" is-link />
      <van-cell title="云贝中心" icon="shop-o" is-link />
      <van-cell title="游戏专区" icon="shop-o" is-link />
      <van-cell title="口袋彩铃" icon="shop-o" is-link />
       <van-cell title="我的信息" icon="shop-o" is-link />
      <van-cell title="云贝中心" icon="shop-o" is-link />
      <van-cell title="游戏专区" icon="shop-o" is-link />
      <van-cell title="口袋彩铃" icon="shop-o" is-link />
      <van-cell title="口袋彩铃" icon="shop-o" is-link />
    </div>
    <div id="booox">
      <van-cell title="我的信息" icon="shop-o" is-link />
      <van-cell title="云贝中心" icon="shop-o" is-link />
      <van-cell title="游戏专区" icon="shop-o" is-link />
      <van-cell title="口袋彩铃" icon="shop-o" is-link />
      <van-cell title="口袋彩铃" icon="shop-o" is-link />
    </div>
     <van-button id="btn" type="default" style="color:red;">关闭网抑郁</van-button>

  </van-popup>
  </div>
</template>

<script>
import{yonghu}from "../../services/auto"
// import { axios } from "axios";
export default {
  data() {
    return {
      show: false,
      Deng:true,
      Namea:'未登录',
      url:'https://s1.music.126.net/style/favicon.ico?v20180307',
      banners:[]
    };
  },
async created() {
  const res = await yonghu({
    cookie:localStorage.cookie
  })
   console.log(res);
    if(res.code == 200){
  this.Deng =!this.Deng
   this.Namea = res.profile.nickname
   this.url = res.profile.avatarUrl
    }
    else{
     this.$router.push({
          name: "Login",
        });
    }
    console.log(this.banners)
    console.log(this.banners.userId)
},

  methods: {
    showPopup() {
      this.show = true;
    },
    tiaozhuan(){
      this.$router.push({
          name: "Login",
        });
    }
  },
};
</script>

<style scoped>
#xinxi{
  margin-top: 25px;
  width: 100%;
  height: 60px;
}
#imga{
  width: 50px;
  height: 50px;
  float: left;
}
#Name{
float: left;
line-height: 50px;
margin-left: 15px;
}
#gt{
  font-size: 20px;
    float: right;
    line-height: 50px;
    margin-right: 5px;
}
#boox{
  width: 95%;
  margin: 2%;
  border-radius: 15px;
  height: 90px;
  background: rgba(168, 168, 168, 1);
}
#spanlist{
  display:block;
  float: left;
  font-size: 18px;
  color: #fff;
  margin-left: 15px;
  margin-top: 3px;
  font-weight:600;

}
#spanlistb{
width: 70%;
  display:block;
  float: left;
  font-size: 5px;
  color: #ddd;
  margin-left: 15px;
  margin-top: 3px;
  font-weight:600;

}
#spanlista{
  display:block;
  float: right;
  color: #fff;
  height: 16px;
  padding: 2px;
  font-size: 8px;
  margin-top: 7px;
  margin-right: 10px;
  border: 1px solid #fff;
  border-radius:5px;
}
#spanlistc{
width: 70%;
  display:block;
  float: left;
  font-size: 5px;
  color: #ddd;
  margin-left: 15px;
  margin-top: 16px;
  font-weight:600;

}
#spanlistad{
  display:block;
  float: right;
  color: #fff;
  height: 10px;
  width: 10px;
  padding: 2px;
  /* font-size: 8px; */
  margin-top: 22px;
  margin-right: 10px;
  border: 1px solid #fff;
  border-radius:5px;
}
#booox{
  width: 95%;
  margin: 5% 2%;
  border-radius: 17px;
  /* height: 90px; */
  /* background: rgba(168, 168, 168, 1); */
}
#btn{
  width: 90%;
  border-radius: 20px;
  margin: 5px 10px;
}
</style>

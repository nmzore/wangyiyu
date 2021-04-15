<template>
  <div class="wodekge">
    <van-tabs v-model="active" route class="zong">
      <van-tab>
        <template #title>
          <span class="el-icon-back" @click="fanhuiHandle"></span>
        </template>
      </van-tab>
      <van-tab>
        <!-- @click="GuangChangHandle" :to="{ name: 'GuangChang' }" -->
        <template #title>
          <h1 style="margin-right:3rem">我的K歌</h1>
        </template>
      </van-tab>

      <van-tab>
        <template #title>
          <!-- <router-link :to="{ name: 'SouSuo' }"> -->
          <p class="wodezhanghu">我的账户</p>
          <!-- </router-link> -->
        </template>
      </van-tab>
    </van-tabs>
    <!-- 作品       合唱邀请 -->
    <van-tabs @click="onClick" class="zuopinhechang">
      <van-tab title="作品">
        <div class="zuopin">
          <!-- el-icon-document-remove -->
          <p class="p1">
            <i class="el-icon-document-remove"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;草稿箱
          </p>
          <p class="p2">
            暂无草稿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
        <!-- https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E7%A9%BA%E7%9B%92%E5%AD%90%E5%8A%A0%E9%A3%9E%E6%9C%BA%E7%9A%84%E5%8A%A8%E6%BC%AB%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=2495716465,2836756380&os=1041154026,2929298249&simid=3487417876,289187925&pn=0&rn=1&di=161480&ln=1481&fr=&fmq=1618383454147_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fdpic.tiankong.com%252F67%252Fj2%252FQJ6805124483.jpg%26refer%3Dhttp%253A%252F%252Fdpic.tiankong.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1620975452%26t%3Df2ad7249309383e54b3238283b5d118f&rpstart=0&rpnum=0&adpicid=0&force=undefined -->
        <div class="zuopin_bottom">
          <img src="../../assets/kk.png" alt />
          <h4>暂无K歌作品</h4>
          <p class="p3">发布你的K歌作品到这里</p>
        </div>
      </van-tab>
      <van-tab title="合唱邀请">
        <div class="hechang_bottom">
          <img src="../../assets/kk.png" alt />
          <h4>暂无合唱邀请</h4>
          <p>发布你的合唱邀请到这里</p>
        </div>
      </van-tab>
    </van-tabs>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
    fanhuiHandle() {
      history.back();
    },
    onClick() {}
  }
};
</script>

<style scoped>
.wodekge {
  height: 100%;
  background: #fff;
  width: 100%;

  display: block;
  margin: 0 auto;
  /* margin-left: 3rem; */
  z-index: 2;
  background: #fff;
}
.wodekge /deep/ .van-tabs__line {
  height: 0;
  width: 0;
}
/* f返回键 */
span {
  color: rgb(172, 172, 172);
  margin-left: 2rem;
  font-size: 1.5rem;
  margin-right: 5rem;
}
/* 我的账户 */

.wodezhanghu {
  width: 5rem;
  /* height: 2rem; */
  text-align: center;
  border: black 1px solid;
  border-radius: 10rem;
}
.zuopinhechang {
  width: 80%;
  margin: 0 auto;
}
/* 作品 */
.zuopin {
  margin-top: 1rem;
  /* height: 3rem;
   */
  height: 5rem;
  width: 22rem;
  /* background: rgb(255, 177, 177); */
  font-size: 1rem;
  line-height: 5rem;
  border-radius: 0.3rem;
  margin: 1rem auto;
  margin-left: -1rem;
  box-shadow: 0px 0px 5px 5px rgb(236, 236, 236);
}
.van-tab__text .van-tab__text--ellipsis:active {
  font-weight: 700;
}
.zuopin p {
  display: inline-block;
}
.zuopin .p1 {
  float: left;
  margin-left: 1rem;
}
.zuopin .p2 {
  float: right;
  margin-right: 1rem;
}
/* 作品下 样式 */
.zuopin_bottom {
  margin: 0 auto;
  text-align: center;
  color: rgb(66, 66, 66);
}
.zuopin_bottom h4 {
  font-weight: 500;
  margin-top: 1rem;

  margin-bottom: 1rem;
}
.zuopin_bottom h4 p {
  margin-top: 1rem;
}
/* 合唱 内容样式 */
.hechang_bottom {
  margin: 3rem auto;
  text-align: center;
  color: rgb(66, 66, 66);
}
.hechang_bottom h4 {
  font-weight: 500;
  margin-top: 1rem;

  margin-bottom: 1rem;
}
.hechang_bottom h4 p {
  margin-top: 1rem;
}
</style>
<template>
  <div class="Reg">
    <van-nav-bar
  title="注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<div id="box">
  <img id="imga" src="https://s1.music.126.net/style/favicon.ico?v20180307" alt="">
</div>
      <van-form @submit="onSubmit">
   <!-- 输入任意文本 -->
<van-field v-model="nickname"  label-align="center" input-align="center" label="昵称" />
<!-- 输入手机号，调起手机号键盘 -->
<van-field v-model="phone" type="tel"  label-align="center" input-align="center" label="手机号" />
<!-- 允许输入正整数，调起纯数字键盘 -->
 <button @click="yanzhengma"  id="huoqu">验证码</button>
 <br>
  <br>
  
<van-field v-model="captcha" type="digit" input-align="center"  label-align="center" label="验证码" />
<!-- 输入密码 -->
<van-field v-model="password"  label-align="center" input-align="center" type="password" label="密码" />
  
   <div style="margin: 16px;">
    <van-button round block type="default" native-type="submit">提交</van-button>
  </div>
   <div style="margin: 5px auto; width:90%">
    <van-button round block type="danger" :to="{name:'Login'}" style="border:1px solid #fff">返回到登录</van-button>
  </div>
  </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reg,zhuce } from "../../services/auto";
export default {
  name: "Reg",
  data() {
    return {
      phone: '',
      nickname: '',
      captcha: '',
      password: '',
    };
  },
  methods: {
    async onSubmit(values) {
      console.log("submit", values);
      const res = await reg({
        captcha: this.captcha,
        phone: this.phone,
        password: this.password,
        nickname: this.nickname,
      });
      console.log(res);
      if (res.code == 200 ) {
        Toast.success({
          message: "注册成功",
        });

        this.$router.push({
          name: "Login",
        });
      } else {
        Toast.fail({
          message: "此账号已经注册"      }
        )
    }
    },
    async yanzhengma(){
        const res = await zhuce({
        phone: this.phone,
      });
      console.log(res)
    },
     onClickLeft() {
       this.$router.push({
          name: "Login",
        });
    },
   
     },
 
  components: {},
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 100px;
}
.Reg{
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(219, 44, 31, 1);
}
.van-cell{
  width: 90%;
  margin:1rem;
  height: 3rem;
  border-radius: 28rem;
     line-height: 3rem;
}
#huoqu{
 height: 2rem;
 width: 70px;
float: right;
background-color: greenyellow;
margin-right: 2rem ;
border-radius: 25px;
border: 0;
 }
 #box{
  width: 100%;
  height: 25%;
  position: relative;
}
#imga{
     width: 50px;
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
    margin: 30% 43%;
}
</style>
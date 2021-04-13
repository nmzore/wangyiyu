<template>
  <div class="Login">
    <van-nav-bar
  title="登录"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
    <div id="box">
      <img id="imga" src="https://s1.music.126.net/style/favicon.ico?v20180307" alt="">
    </div>
   <van-form @submit="onSubmit" id="buootn">
  <van-field
  id="deng"
    v-model="username"
    name="手机号"
    label="手机号"
    label-align="center"
    placeholder="手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
     label-align="center"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 5px auto; width:90%">
    <van-button round block type="default" native-type="submit">提交</van-button>
  </div>
   <div style="margin: 5px auto; width:90%">
    <van-button round block type="danger" :to="{name:'Reg'}" style="border:1px solid #fff" >跳转到注册</van-button>
  </div>
  
</van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getToken,setToken,setCookie,getCookie} from "../../utils/tools";
import { } from "../../utils/tools";
import { login } from "../../services/auto";
export default {
   name:'Login',
  data() {
    return {
      username: "",
      password: "",
      name:"",
    };
  },
  methods: {
    async onSubmit(values) {
      console.log("submit", values);
      const res = await login({
        phone: this.username,
        password: this.password,
      });
      console.log(res);
      if (res.code == 200) {
        Toast.success({
          message: "登录成功",
        });
        //此处做页面跳转并且设置token
        
        setToken(res.token);
        setCookie(res.cookie);
        getToken(res.token);
        getCookie(res.cookie);

        this.$router.push({
          name: "Home",
        });
      } else {
        Toast.fail({
          message: "请输入正确的账号密码",
        });
      }
      
    },
onClickLeft() {
       this.$router.push({
          name: "Home",
        });
    },
}
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 100px;
}
.Login{
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(219, 44, 31, 1);
}
.van-cell{
  width: 90%;
  height:3rem;
  margin: 1rem auto;
  border-radius: 28rem;
  text-align: center;
   line-height: 3rem;
}
.van-field__label{
  margin-left: 10px;;
  
}
#box{
  width: 100%;
  height: 50%;
  position: relative;
}
#imga{
     width: 80px;
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     margin: 40%;
}
</style>

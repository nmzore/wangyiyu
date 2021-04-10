<template>
  <div class="Login">
      <van-form @submit="onSubmit">
    
   <!-- 输入任意文本 -->
<van-field v-model="nickname" label="昵称" />
<!-- 输入手机号，调起手机号键盘 -->
<van-field v-model="phone" type="tel" label="手机号" />
<!-- 允许输入正整数，调起纯数字键盘 -->
 <button @click="yanzhengma">验证码</button>
<van-field v-model="captcha" type="digit" label="验证码" />
<!-- 输入密码 -->
<van-field v-model="password" type="password" label="密码" />
  
   <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
  </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reg,zhuce } from "../services/auto";
export default {
  name: "Login",
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
    }
     },
 
  components: {},
};
</script>

<style scoped></style>
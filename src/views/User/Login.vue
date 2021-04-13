<template>
  <div class="Login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="default" native-type="submit">
          提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getToken } from "../../utils/tools";
import { setToken } from "../../utils/tools";
import { login } from "../../services/auto";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
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
        getToken(res.token);

        this.$router.push({
          name: "Home",
        });
      } else {
        Toast.fail({
          message: "请输入正确的账号密码",
        });
      }
    },
  },
  components: {},
};
</script>

<style scoped></style>

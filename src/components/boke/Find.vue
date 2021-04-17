<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" @click="onSearch(value)" />
      </template>
      <template #title>
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </template>
    </van-nav-bar>
    <div id="quanbu" v-show="!show">
      <ul v-for="(item, index) in lista" :key="item" id="ulsta"  @click="dianji(item.id)">
        <li id="list"  @click="dianji(item.id)">
          <span id="spanst">{{ index }}</span
          >{{ item.name }}
        </li>
      </ul>
    </div>
    <div id="quanb" v-show="show">
      <div id="zhangshang">
        <h1>招商位</h1>
      </div>
      <div id="box">
        <h1>热门搜索</h1>
        <ul v-for="(item, index) in list" :key="item" id="ulst">
          
            <li id="list" >
              <span id="spanst">{{ index }}</span
              >{{ item.first }}
            </li>
        </ul>
      </div>
    </div>
    <bofang :inputName="ids"></bofang>
  </div>
</template>

<script>
import { Toast } from "vant";
import bofang from "../All/bofang";
import { chaxun, ree } from "../../services/auto";
export default {
  data() {
    return {
      ids: "",
      value: "",
      show: true,
      list: [],
      lista: [],
    };
  },
  methods: {
    async onSearch(val) {
      console.log(val);
      const chaxu = await chaxun({
        keywords: val,
      });
       this.show=true
      this.lista = chaxu.result.songs;
      console.log(this.lista);
    },
    onCancel() {
      Toast("取消");
      this.show=false
    },
    dianji(ids) {
      this.ids = ids;
    },
  },
  components: {
    bofang,
  },
  async created() {
    const res = await ree({});
    console.log(res);
    this.list = res.result.hots;
  },
};
</script>

<style scoped>
#box {
  width: 100%;
  height: 300px;
}
#box h1 {
  text-align: center;
  font-size: 25px;
}
#ulst {
  margin-top: 20px;
  margin-left: 36px;
  width: 40%;
  float: left;
  height: 25px;
  color: #666;
}
#ulsta {
  margin-top: 20px;
  margin-left: 36px;
  height: 25px;
  color: #666;
}
#spanst {
  margin-right: 8px;
  color: red;
  font-weight: 600;
}
#zhangshang {
  width: 100%;
  height: 100px;
  font-size: 50px;
  text-align: center;
  padding-top: 5px;
}
#quanbu {
  background: #fff;
  width: 100%;
  height: 90%;
  float: left;
}
</style>

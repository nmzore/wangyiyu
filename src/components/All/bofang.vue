<template>
  <div id="Aplayer">
    <div style="padding:10px 0;">
      <aplayer
      id="audio"
       controls
       theme 
       listFolded
       fixed=true,
       autoplay="autoplay"
       lrcType=3
        :music="currentMusic[0]"
        :list="currentMusic"
      >
      </aplayer>
    </div>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import {gequ,xiangqing } from "../../services/auto";
import { } from "../../utils/tools";

export default {
  name: "Aplayer",
  props: ["pdfurl", "inputName"],

  watch: {
    inputName: function(indexVal, oldVal) {
      console.log(indexVal, oldVal);
      this.dianji(indexVal);
      console.log(indexVal)
    },
  },
  data() {
    return {
      autoplay:true,
      ids: "inputName",
      currentMusic: [{
         title: "请播放",
        author: "请播放",
        url: "",
        pic: "",
        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
      }],
    };
  },
  components: {
    //别忘了引入组件
    aplayer: aplayer,
  },
  methods: {
    async dianji(inputName) {
      const res = await gequ({
        cookie: localStorage.cookie,
        id: inputName,
      });
      console.log(res.data[0].url);
      const ref = await xiangqing({
        cookie: localStorage.cookie,
        ids: inputName,
      });
      console.log(ref);
      const shuzu = {
        title: ref.songs[0].name,
        author: ref.songs[0].ar[0].name,
        url: res.data[0].url,
        pic: ref.songs[0].al.picUrl,
        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
      };
      sessionStorage.setItem('shoucang', JSON.stringify(shuzu));
var info1 = JSON.parse(sessionStorage.getItem("shoucang"))
console.log(info1, 'info1')
this.currentMusic.push(info1)
      if (this.currentMusic[0].url == "") {
        this.currentMusic.shift();
      }
      console.log(this.currentMusic);
      if (res.code == 200) {
        this.show = true;
      }
    },
  },
  async created(indexVal) {
    const res = await gequ({
      cookie: localStorage.cookie,
      id: indexVal,
    });
    console.log(res.data[0].url);
    const ref = await xiangqing({
      cookie: localStorage.cookie,
      ids: indexVal,
    });
    console.log(ref);
    const xinshuzu = {
      title: ref.songs[0].name,
      author: ref.songs[0].ar[0].name,
      url: res.data[0].url,
      pic: ref.songs[0].al.picUrl,
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
    };
    this.currentMusic.title = xinshuzu;
    console.log(this.currentMusic);
    if (res.code == 200) {
      this.show = true;
    }
  },

  computed: {
    url() {
      return this.pdfurl;
    },
  },
  mounted() {},
};
</script>

<style>
#Aplayer {
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 100%;
}
.aplayer-pic .aplayer-button {
  top: 15px;
  left: 320px;
  background: rebeccapurple !important;
}
.aplayer-pic .aplayer-pause .aplayer-icon-pause {
  width: 22px !important;
  height: 22px !important;
}
.aplayer-pic .aplayer-pause {
  width: 26px !important;
  height: 26px !important;
}
/* .aplayer-controller {
  display: none !important;
} */
</style>

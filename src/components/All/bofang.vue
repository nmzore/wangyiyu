<template>

  <div id="box">
    <div style="padding:10px 0;">
      <aplayer autoplay :music="currentMusic[0]" v-show="show"> </aplayer>
    </div>
   
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import { gequ, xiangqing } from "../../services/auto";

export default {
  name: "Aplayer",
  props: ["pdfurl","inputName"],

watch:{
    inputName:function(indexVal, oldVal){
        console.log(indexVal, oldVal)
        this.dianji(indexVal)
    }
},
  data() {
    return {
      show:false,
      ids:"inputName",
      currentMusic: [{"title":[]}],
    };
  },
  components: {
    //别忘了引入组件
    aplayer: aplayer,
  },
  methods: {
   async dianji(inputName){
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
    const xinshuzu = {
      title: ref.songs[0].name,
      author: ref.songs[0].ar[0].name,
      url: res.data[0].url,
      pic: ref.songs[0].al.picUrl,
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
    };
    this.currentMusic = [xinshuzu];
    console.log(this.currentMusic[0]);
    if(res.code ==200){
      this.show = true
    }
    }
  },
  async created(inputName) {
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
    const xinshuzu = {
      title: ref.songs[0].name,
      author: ref.songs[0].ar[0].name,
      url: res.data[0].url,
      pic: ref.songs[0].al.picUrl,
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
    };
    this.currentMusic = [xinshuzu];
    console.log(this.currentMusic[0]);
    if(res.code ==200){
      this.show = true
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
#box {
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 100%;
}
.aplayer-pic .aplayer-button {
  top: 25px;
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
.aplayer-controller {
  display: none !important;
}
</style>

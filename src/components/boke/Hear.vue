<template>
  <div class="hear">
    <div class="contents">
      <van-grid :column-num="5">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item tag='button' @click="getmoreshow()" 
         icon="moreshow?'arrow-down':'arrow-up" text="文字" />
      </van-grid>
      <div v-if="isShow" id="mydiv">
        <van-grid  :column-num="5">
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
      </div>
    </div>
    <HearList></HearList>
  </div>
</template>
<script>
import HearList from "./HearList"
export default {
  name:"Hear",
  data(){
    return{
    isShow:false,
    }
  },
  components:{
    HearList,
  },
  methods:{
     getmoreshow(){
       this.isShow = !this.isShow;
     },
    
  }
}
</script>

<style>

</style>
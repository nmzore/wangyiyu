<template>
  <div class="clstit">
     <van-grid :border="false"
      v-for="(clsfen,index) in clsfens"
      :column-num="4"
      :gutter='5'
      :key="index">
      <van-grid-item>
        <van-image :src="clsfen.picIPadUrl" />
        <p>{{clsfen.name}}</p>
      </van-grid-item>
    </van-grid>

  </div>
</template>
<script>
import { clsfen } from '../../services/boke/clstit'
export default {
   
     data() {
    return {
      ids:'',
    clsfens:[],
    };
   },
  
 async created(){
    const ref = await clsfen({
    cookie: localStorage.cookie,
    });
    // console.log(11122,ref);
    this.clsfens = ref.categories;
    this.picIPadUrl=ref.categories.picIPadUrl;
    this.name = ref.categories.name;
  },
}
</script>

<style scoped>
.clstit{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items: center;
}
.clstit .van-grid-item{
  /* width: 45%; */
  margin-top: 0px !important;
}
.van-image{
  width:3rem;
  height: 3rem;
}
.clstit  .van-grid{
  width: 23%;
}
.clstit .van-grid-item p{
  width: 3rem;
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  font-size: 12px;
  color: rgba(0, 0, 0, 0.534);
  line-height: 16px;
  text-align: center;
}
</style>
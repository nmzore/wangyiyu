<template>
  <div class="hearList">
   <van-grid :column-num="2" 
    :border="false" 
    v-for="(mv,index) in mvs"
    :key="index"
    :gutter="20">
      <van-grid-item style="position:relative">
        <van-image  :src="mv.cover" />
        <p style="position:absolute;left:1rem;bottom:1rem">
          {{ mv.name }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
// import axios from "axios";
import { res } from '../../services/boke/boke'
export default {
   data() {
    return {
     mvs:[],
    };
   },
 async created(){
    const ref = await res({
    cookie: localStorage.cookie,
    });
    console.log(11122,ref);
    this.mvs = ref.data;
    this.cover=ref.data.cover
    this.name = ref.data.name
    // console.log(this.cover);
  },
  
}
</script>

<style scoped>
.hearList{
   display: flex;
   flex-direction:row;
    flex-wrap:wrap;
    align-items: center;
}
 .hearList .van-grid-item{
  /* width: 45%; */
  margin-top: 0px !important;
}
.van-image{
  width:9rem;
  height: 9rem;
}
.hearList .van-grid{
  width: 44%;
}
.hearList  .van-grid-item p{
  width: 2.5rem;
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  font-size: 12px;
  color: #fff;
  line-height: 16px;
  text-align: center;
}

</style>
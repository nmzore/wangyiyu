<template>
  <div class="sltsongs">
    <div class="songslist">
    <div class="tj"  v-for="(tit,item) in tits"
          :key="item" >
      <div class="tj-top">
        <h3 style="font-weight:600;">{{tit.category}}</h3>
        <button style="color:#000">{{tit.more}} &gt;</button>
      </div>
      <div class="tj-bot">
        <van-grid  v-for="(contentt,index) in contentss"
          :key="index"
          :border="false"
          :column-num="3"
          :gutter="8"
          :icon-size="120"
        >
          <van-grid-item>
            <van-image :src="contentt.al.picUrl" />
            <p>{{ contentt.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import {clsctn} from '../../services/boke/clsctn'
export default {
   data(){
    return{
      tits:[
        {
          categoryId:2,
          category:"音乐故事",
          more:'更多'
        },
        {
          categoryId:3,
          category:"情感调频",
          more:'更多w'
        },
        {
          categoryId:2001,
          category:"创作翻唱",
          more:'更多'
        },
      ],
      contentss:[],
    };
  },
async  created(){
  const reg = await clsctn({
  cookie: localStorage.cookie,
  });
  // switch
    this.contentss = reg.data.dailySongs;
    console.log(888,this.contentss);
    this.contentss.length = 6;
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 .tj-top {
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 0.5rem;
}

.tj-top h3 {
  font-size: 14px;
}
.tj-top button {
  width: 60px;
  height: 18px;
  font-size: 12px;
  color: rgb(170, 169, 169);
  background: #fff;
  border: 1px solid rgb(170, 169, 169);
  border-radius: 20px;
}

.tj-bot {
  display: flex;
  flex-wrap: wrap;
}
.tj .van-image {
  width: 5.5rem;
  margin-bottom: 0.5rem;
}
.tj .van-grid-item p { 
  /* 单行文本显示省略号 */
   width: 5.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgb(117, 116, 116);
  line-height: 16px;
}
.tj .van-grid-item {
  margin-top: 0px !important;
}  
</style>
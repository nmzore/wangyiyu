<template>
  <div class="boke">
    <van-tabs v-model="activeName">
        <van-tab  name="a">
            <template  #title >
              <van-icon name="wap-nav" size="26" />
            </template>
          </van-tab>
          <van-tab  title="听听" name="b">
            <Hear></Hear>
          </van-tab>
          <van-tab style="width:100%"  title="推荐" name="c">
            <Recommend></Recommend>
          </van-tab>
          <van-tab  title="分类" name="d">
            <Classify></Classify>
          </van-tab>
          <van-tab   name="e">
            <template  #title >
              <div style="background:#ee0a24;border-radius:50% ;width:1.5rem ;height:1.5rem ;line-height:1.5rem; text-align:center">
                <van-icon name="plus" style="size:1.5rem" color="#fff" />
              </div>
            </template>
          </van-tab>
        </van-tabs>
  </div>
</template>

<script>
import Hear from '../../components/boke/Hear'
import Recommend from '../../components/boke/Recommend'
import Classify from '../../components/boke/Classify'
export default {
  name: 'Boke',
  components:{
   Hear,
   Recommend,
   Classify,
  },
  data() {
    return {
      activeName: 'c',
      banners:[],
    };
  },
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    /* text-align: ; */
    background-color: #39a9ed; 
  }
 .van-tabs__wrap{
   margin-top: .3rem;
 }

</style>

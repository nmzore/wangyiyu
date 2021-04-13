<template>
  <div class="find">
    <Findsou></Findsou>
    <div class="history"  style="height:4rem;padding-top:1.5rem;">
      <span style="font-weight:550;margin-left:1rem">历史</span>
      <span style="display:inline-block; width:6rem;height:2rem;line-height:2rem;border-radius:0.9rem;
      text-align:center; background:#e0e0e0;margin-left:1rem">爱就一个字</span>
      <span style="height:2rem; margin-left:10rem;"><van-icon style="font-size:1.6rem;line-height:2rem;" name="delete-o" /></span>
    </div>
    <Findbang></Findbang>
  </div>
</template>

<script>
import Findbang from './Findbang';
import Findsou from './Findsou'
export default {
  data(){
    return{

    };
  },
  components:{
    Findsou,
    Findbang,
  }

}
</script>

<style>

</style>
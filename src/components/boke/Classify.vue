<template>
  <div class="classify">
   <Clstit></Clstit>
   <Clscontent></Clscontent>
   <Msclover></Msclover>
   <Mslover></Mslover>
  </div>
</template>

<script>
import Clstit from './Clstit.vue'
import Clscontent from './Clscontent.vue'
import Mslover from './Mslover.vue'
import Msclover from './Mslover.vue'
export default {
   data(){
    return{
      
    };
  },
	components: { Clstit,Clscontent ,Msclover,Mslover},

}
</script>

<style>

</style>
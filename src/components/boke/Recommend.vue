<template>
  <div class="recommend">
    <van-search  @click="find()" v-model="value" placeholder="搜索你感兴趣的内容" />
    <RmdList></RmdList>
    <SongsList></SongsList>
    <Sltsongs></Sltsongs>
    <Musicstory></Musicstory>
  </div>
</template>

<script>
import Musicstory from './Musicstory'
import RmdList from './RmdList'
import Sltsongs from './Sltsongs'
import SongsList from './SongsList'
export default {
  data(){
    return {
      value: '',
    };
  },
  components:{
    RmdList,
    SongsList,
    Sltsongs,
    Musicstory,
  },
  methods:{
    find(){
      this.$router.push({
        name:'Find',
      });
    }
  }

}
</script>

<style scoped>
  /* van-search{
    border-radius: 50%;
    text-align: center;
  } */
</style>
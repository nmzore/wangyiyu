<template>
  <div class="recommend">
    <van-search  @click="find()" v-model="value" placeholder="搜索你感兴趣的内容" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: '',
    };
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
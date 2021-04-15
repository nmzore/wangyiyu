<template>
  <div class="cehua">
    <iframe src="https://music.163.com/m/at/606eac0f38963d979f80dac9" id="mobsf" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
   mounted(){
   function changeMobsfIframe(){
    const mobsf = document.getElementById('mobsf');
    const deviceWidth = document.body.clientWidth;
    const deviceHeight = document.body.clientHeight;
    mobsf.style.width = Number(deviceWidth) + 'px'; 
    mobsf.style.height = Number(deviceHeight) + 'px';
   }
   changeMobsfIframe()
   window.onresize = function(){
    changeMobsfIframe()
   }
  }
}
</script>

<style>

</style>
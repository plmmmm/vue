<template>
<div class="amusement">
    <el-carousel :interval="2000" type="card" height="230px">
    <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
    </el-carousel>



<el-collapse v-model="activeName" accordion>
  <el-collapse-item title="你的名字" name="1">
    <div>你的名字</div>
    <div>在远离大都会的小山村，住着巫女世家出身的高中女孩宫水三叶。校园和家庭的原因本就让她充满烦恼，而近一段时间发生的奇怪事件，又让三叶摸不清头脑。不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。那里有陌生的同学和朋友，有亲切的前辈和繁华的街道，一切都是如此诱人而真实。</div>
  </el-collapse-item>
  <el-collapse-item title="言叶之庭" name="2">
    <div>言叶之庭</div>
    <div>在梅雨季节的日子里,他们的心渐渐向彼此靠拢雨过天晴，艳阳高照，庭园中久久不见秋月和雪野的身影，相会无期亦有期</div>
  </el-collapse-item>
  <el-collapse-item title="秒速五厘米" name="3">
    <div>秒速五厘米</div>
    <div>如果，樱花掉落的速度是每秒5厘米，那么两颗心需要多久才能靠近？少年时，贵树和明理是形影不离的好朋友</div>
    <div>不知不觉那就成了我们的距离。可即使我只看着你，你也变成那些距离我越来越远的事</div>
  </el-collapse-item>
  <el-collapse-item title="侧耳倾听" name="4">
    <div>侧耳倾听</div>
    <div>正在读初三的月岛滴滴是一个喜欢看书的女孩，她每次都能在借书卡上看到一个叫天泽圣司名字，因此她对这个人充满了好奇</div>
  </el-collapse-item>
</el-collapse>




<hr>


<el-link href="http://www.gov.cn/" target="_blank">点击有惊喜</el-link>

</div>
</template>





<script>
export default {
    data() {
      return {
        activeName: '1'
      };
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #418f29;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color:#f99;
  } 
</style>

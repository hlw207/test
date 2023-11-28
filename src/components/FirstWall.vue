<script setup lang="ts">

import {onMounted, ref} from "vue";
import {PICTURE_ADDR} from "~/config";
import {useWindowStore} from "~/stores/window";

const width = useWindowStore().width
const pictures = ref([])
onMounted(()=>{
  let i : number
  for (i = 0;i < 8;i ++){
    pictures.value.push(PICTURE_ADDR + i + '.jpg')
  }
})
</script>

<template>
  <div style="position: relative;height: 600px">
    <el-image :src="pictures[0]" class="image0"></el-image>
    <el-image :src="pictures[6]" class="image1"></el-image>
    <el-image :src="pictures[1]" class="image2"></el-image>
    <el-image :src="pictures[2]" class="image3"></el-image>
    <el-image :src="pictures[4]" class="image4"></el-image>
    <el-image :src="pictures[3]" class="image5"></el-image>
    <el-image :src="pictures[7]" class="image6"></el-image>
    <el-image :src="pictures[5]" class="image7"></el-image>
  </div>
</template>

<style scoped>
@keyframes showOut
{
  from {opacity: 0;margin-left: -300px}
  to {opacity: 100%;margin-left: 0}
}
.image0{
  z-index: 5;
  top: 45px;
  left: 20%;
  width: 17%;
  position: absolute;
  border: 6px solid white;
  animation: showOut 3s;
}
.image1{
  z-index: 4;
  top: 45px;
  left: 38%;
  width: 13%;
  position: absolute;
  border: 6px solid white;
  transform: rotate(-20deg);
  animation: showOut 3s;
}
.image2{
  z-index: 3;
  top: 45px;
  left: 51%;
  width: 14%;
  position: absolute;
  border: 6px solid white;
  transform: rotate(10deg);
  animation: showOut 3s;
}
.image3{
  z-index: 3;
  top: 80px;
  left: 65%;
  width: 14%;
  position: absolute;
  border: 6px solid white;
  transform: rotate(18deg);
  animation: showOut 3s;
}
.image4{
  z-index: 0;
  top: v-bind(45 + width / 5.2 + 'px');
  left: 23%;
  width: 15%;
  position: absolute;
  border: 6px solid white;
  transform: rotate(5deg);
  animation: showOut 3s;
}
.image5{
  z-index: 2;
  top: v-bind(45 + width / 6.1 + 'px');
  left: 36%;
  width: 14%;
  position: absolute;
  border: 6px solid white;
  transform: rotate(8deg);
  animation: showOut 3s;
}
.image6{
  z-index: 1;
  top: v-bind(45 + width / 6.2 + 'px');
  left: 50%;
  width: 14%;
  position: absolute;
  border: 6px solid white;
  transform: rotate(-12deg);
  animation: showOut 3s;
}
.image7{
  z-index: 0;
  top: v-bind(45 + width / 9 + 'px');
  left: 64%;
  width: 12%;
  position: absolute;
  border: 6px solid white;
  transform: rotate(15deg);
  animation: showOut 3s;
}
</style>
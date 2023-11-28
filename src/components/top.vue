<script setup lang="ts">

import {ref} from "vue";

const src = ref("../../public/back.jpg")

const DateDiffer = ()=>{
  //date1结束时间
  let date1 = new Date(2023, 8, 23);
  //date2当前时间
  let date2 = new Date();
  date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  date2 = new Date(date2.getFullYear(), date2.getMonth() + 1, date2.getDate())
  const diff = date2.getTime() - date1.getTime(); //目标时间减去当前时间
  const diffDate = diff / (24 * 60 * 60 * 1000);  //计算当前时间与结束时间之间相差天数
  return Math.floor(diffDate)
}
</script>

<template>
  <div>
    <el-image :src="src" class="background"></el-image>
    <div class="text">
      WE HAVE BEEN TOGETHER
    </div>
    <div class="picture" @click="DateDiffer">
      <div class="picture_day">{{DateDiffer()}}</div>
      <div class="picture_days">days</div>
    </div>
  </div>
</template>

<style scoped>

@keyframes show
{
  from {opacity: 0; top: -50px}
  to {opacity: 100%;top: 0;}
}

@keyframes showOut
{
  from {opacity: 0;}
  to {opacity: 100%;}
}

.background{
  width: 100%;
  height: 160px;
}

.text{
  top: 0;
  position: absolute;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  color: rgba(94, 92, 96, 0.9);
  font-size: 28px;
  font-weight: bolder;
  letter-spacing: 2px;
  animation: show 0.8s;
}

.picture{
  z-index: 1;
  position: absolute;
  top: 65px;
  left: 37%;
  width: 26%;
  height: 80px;
  background: rgba(255, 255, 255, 0.5);
}

.picture_day{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 30px;
  font-style: italic;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.75);
  animation: showOut 3s;
}

.picture_days{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: bolder;
  color: rgba(94, 92, 96, 0.8);
  animation: showOut 3s;
}
</style>
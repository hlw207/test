<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {PICTURE_ADDR} from "~/config";

const show = ref(false)
const height = window.innerHeight
const pictures = ref([])
const check = ()=>{
  if(document.documentElement.scrollTop > height - 500){
    show.value = true
    window.removeEventListener("scroll", check)
  }
}

onMounted(()=>{
  window.addEventListener("scroll", check)
  let i : number
  for (i = 0;i < 5;i ++){
    pictures.value.push(PICTURE_ADDR + (i + 8) + '.jpg')
  }
})
</script>

<template>
  <div style="height: 600px">
    <el-carousel :interval="3000" type="card" class="carousel" v-if="show">
      <el-carousel-item v-for="item in pictures" :key="item">
        <div class="picture">
          <el-image :src="item" style="width: 100%"></el-image>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
@keyframes showOut
{
  from {opacity: 0}
  to {opacity: 100%}
}

.carousel{
  margin: 100px 80px;
  height: 400px;
  animation: showOut 2s;
}


.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}

.picture{
  height: 288px;
  margin: 6px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

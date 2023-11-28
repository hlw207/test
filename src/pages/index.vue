<script setup lang="ts">
import Top from "~/components/top.vue";
import Carousel from "~/components/carousel.vue";


</script>

<template>
  <div>
    <Top />
    <div class="main">
      <FirstWall />
      <Carousel />
    </div>
  </div>
</template>

<style scoped>
.main{
  margin-top: -10px;
  height: 1600px;
  background: rgba(66, 184, 221, 0.2);
}
</style>
<template>
  <canvas 
    id="playcanvas-canvas"
    ref="canvas"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { createApp } from '../playcanvas';
  let canvas = ref()

  defineProps({
    msg: String,
  })

  async function launchCanvas(canvas){
    let result = await createApp(canvas)
    console.log(result)
  }

  onMounted(async ()=> {
    await launchCanvas(canvas.value)
  })

  const count = ref(0)
</script>

<style scoped>

</style>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

</script>

<template>
  <div class="hello-world max-w-150 mx-auto my-5 text-justify text-lg">
  <h1 class="text-center mb-2 text-[30px]">Hello World</h1>

  <div class="flex flex-col justify-center items-center">
    <h2 class="mb-5 text-5xl">{{ count }}</h2>
    <div> <button type="button" @click="count--" >Decrease</button>
      <button type="button" @click="count++" style="margin-left: 10px;">Increase</button></div>
   
  </div>

 
</div>
</template>

<style scoped>

</style>

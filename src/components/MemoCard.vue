<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  deleteButtonClick: (id:number) => void,
  memo: { id: number, title:string, content: string, date: string, }
}>()

</script>
<template>

<div 
        class="card" 
        >
          <h2>{{ memo.title }}</h2>
          <button @click="deleteButtonClick(memo.id)" class="card-close-button">X</button>
          <p class="card-content">{{ memo.content }}</p>
          <p class="card-date">{{ memo.date }}</p>
          
        </div>
</template>
<style scoped>
.card-close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  top: 5px;
  width: 30px;
  height: 30px;
  font-size: 25px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: black;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #495a7d;
  border-radius: 5%;
  padding: 10px;
  height: 210px;
  width: 210px;
  margin-bottom: 10px;
  color: white;
  position: relative;
}
.card:nth-child(3n) {
  background-color: antiquewhite;
  color: black;
}
.card:nth-child(3n-2) {
  background-color: antiquewhite;
  color: black;
}
</style>
<script setup lang="ts">
import { ref, watch } from 'vue'
import memosDatas from './data/memos.json'

import MemoCard from './components/MemoCard.vue'

const showForm = ref(false)
const titleMemo = ref('')
const newMemo = ref('');
const memos = ref<{ id: number, title:string, content: string, date: string, }[]>(memosDatas);
const errorMessage = ref('');

const deleteCard = (id: number) => {
    memos.value = memos.value.filter((memo: any) => memo.id !== id);
  };



const saveMemo = () => {
    if(!newMemo.value) {
      errorMessage.value = 'Please enter a memo';
      return
    }
    if(!titleMemo.value) {
      errorMessage.value = 'Please enter a title';
      return
    }
    memosDatas.push({
      id: Date.now(),
      title: titleMemo.value,
      content: newMemo.value,
      date: new Date().toLocaleDateString("en-GB"),
    })
    
    newMemo.value   = '';
    showForm.value  = false;
  }

const handleKeydown = () => {
      showForm.value = false
};

const search = ref('')

watch(search, () => {
  memos.value = memosDatas.filter((memo: any) => memo.title.toLowerCase().includes(search.value.toLowerCase()))
})
  

</script>

<template>
  {{ memos }}
  <main>
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <input type="text" v-model="search" placeholder="Search memo" />
        <button @keydown.escape="handleKeydown()" @click="showForm = true" class="header-button">+</button>
      </header>
      <div class="card-container">
        <MemoCard v-for="memo in memos" :key="memo.id" :memo="memo" :deleteButtonClick="deleteCard"/>
      </div>
    </div>
    <div v-if="showForm" class="form-overlay">
      <div class="form-model">
        <button @click="showForm = false"  class="form-close-button">&times;</button>
        <span v-if="errorMessage" class="form-error">{{ errorMessage }}</span>
        <input v-model="titleMemo" name="memo-title" id="memo-title"></input>
        <textarea v-model="newMemo" name="memo" id="memo" rows="10"></textarea>
        <button @click="saveMemo()" class="form-save-button">Save</button>
      </div>
    </div>
    
  </main>
  </template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.container {
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #495a7d;
}

.header-button {
  padding: 10px;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 30%;
  background-color: #495a7d;
  color: white;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 105px;
}


.form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.765);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-model {
  width: 420px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-save-button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: #495a7d;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  color: white;  
}

.form-close-button {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  font-size: 25px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.form-error {
  color: red;
  margin-bottom: 10px;
}
</style>

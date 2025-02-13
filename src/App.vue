<script setup lang="ts">
import { ref } from 'vue'

const showForm = ref(false)
const newMemo = ref('');
const memos = ref<{ id: number, content: string, date: string }[]>([]);
const errorMessage = ref('');


  const saveMemo = () => {
    if(!newMemo.value) {
      errorMessage.value = 'Please enter a memo';
      return
    }
    memos.value.push({
      id: Date.now(),
      content: newMemo.value,
      date: new Date().toLocaleDateString("en-GB"),
    })
    newMemo.value   = '';
    showForm.value  = false;
  }

  const handleKeydown = () => {
        showForm.value = false
  };

  const deleteCard = (id: number) => {
    memos.value = memos.value.filter((memo) => memo.id !== id);
  };

</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @keydown.escape="handleKeydown()" @click="showForm = true" class="header-button">+</button>
      </header>
      <div class="card-container">
        <div 
        v-for="(memo) in memos" 
        class="card" 
        :key="memo.id"
        >
          <button @click="deleteCard(memo.id)" class="card-close-button">X</button>
          <p class="card-content">{{ memo.content }}</p>
          <p class="card-date">{{ memo.date }}</p>
          
        </div>
      </div>
    </div>
    <div v-if="showForm" class="form-overlay">
      <div class="form-model">
        <button @click="showForm = false"  class="form-close-button">&times;</button>
        <span v-if="errorMessage" class="form-error">{{ errorMessage }}</span>
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
}
.card:nth-child(3n) {
  background-color: antiquewhite;
  color: black;
}
.card:nth-child(3n-2) {
  background-color: antiquewhite;
  color: black;
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

.card-close-button {
  position: absolute;
  top: 10px;
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


</style>

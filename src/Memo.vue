<script setup lang="ts">
import { ref, watch } from 'vue'
import memosDatas from './data/memos.json'
import toTitleCase  from './utils/utils.ts'
import Toast from './components/Toast.vue'
import MemoCard from './components/MemoCard.vue'

interface Memo {
  id: number,
  title: string,
  content: string,
  date: string,
}

const showForm = ref(false)
const titleMemo = ref('')
const newMemo = ref('');
const memos = ref<Memo[]>(memosDatas);


    const showToast = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 1500)
    }

const deleteCard = (id: number) => {
    memos.value = memos.value.filter((memo: any) => memo.id !== id);
  };



const saveMemo = () => {
    if(!newMemo.value || !titleMemo.value) {
      triggerToast();
      return
    }
    memos.value.push({
      id: Date.now(),
      title: toTitleCase(titleMemo.value),
      content: newMemo.value,
      date: new Date().toLocaleDateString("en-GB"),
    })
    
    watch(memosDatas,() => {
        memos.value = memosDatas
    })

    newMemo.value   = '';
    titleMemo.value   = '';
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
<div class="memo">
      <Transition name="toast"> 
        <Toast v-if="showToast" />
      </Transition>

      <header class="flex justify-between items-center mb-8">
        <h1 class="text-cyan-800 text-[48px] font-bold p-0">Memo</h1>
        <div class="flex items-end gap-5">
            <input type="text" v-model="search" placeholder="Search memo" class="border-2 border-cyan-900 rounded-md p-1"/>
        <button @keydown.escape="handleKeydown()" @click="showForm = true" class="p-2.5 w-12.5 h-12.5 cursor-pointer rounded-md bg-cyan-800 text-white">+</button>
        </div>
      </header>
      <Transition name="switch" mode="out-in">
        <TransitionGroup name="cards" class="relative flex flex-wrap gap-5" tag="div" v-if="memos.length">
          <MemoCard v-for="memo in memos" :key="memo.id" :memo="memo" :deleteButtonClick="deleteCard"/>
        </TransitionGroup>
        <h1 v-else class="text-2xl text-center">No Memo</h1>
      </Transition>
    

    <div v-if="showForm" class="absolute top-0 left-0 w-full h-full bg-black/70 z-10 flex justify-center items-center">
      <div class="relative w-[420px] bg-white rounded-lg p-6 flex flex-col">
        <button @click="showForm = false"  class="absolute top-[5px] right-[10px] w-[30px] h-[30px] text-[25px] border-0 cursor-pointer bg-transparent">&times;</button>
        <input v-model="titleMemo" name="memo-title" id="memo-title" class="my-3 p-1 rounded-sm border" placeholder="Please Insert The Title">
        <textarea v-model="newMemo" name="memo" id="memo" rows="10" class="mb-3 p-1 rounded-sm border" placeholder="Please Insert Memos"></textarea>
        <button @click="saveMemo()" class="py-[10px] px-[20px] text-[20px] w-full bg-cyan-800 curson-pointer rounded-md mt-[5px] text-white">Save</button>
      </div>
    </div>
  </div>
    

  </template>

<style scoped>
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.toast-leave-active {
  transition: all 0.5s ease;
}

.toast-enter-active {
  animation: wobble 0.5s ease, transform 0.5s ease;
}

@keyframes wobble {
  0% { transform: translateY(-60px); opacity: 0;}
  50% { transform: translateY(0px); opacity: 1;}
  60% { transform: translateX(-8px); }
  70% { transform: translateX(8px); }
  80% { transform: translateX(-4px); }
  90% { transform: translateX(2px); }
  100% { transform: translateX(0px); }
}

/* cards animation */
.cards-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.cards-enter-active {
  transition: all 0.4s ease;
}
.cards-leave-to {
  opacity: 0;
}
.cards-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}

.cards-move {
  transition: all 0.6s ease;
}
/* end of cards animation */


.switch-enter-from,
.switch-leave-to{
  opacity: 0;
  transform: scale(0.6);
}
.switch-enter-active,
.switch-leave-active{
  transition: all 0.4s ease-in-out;
}

</style>

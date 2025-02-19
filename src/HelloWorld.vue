<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// Reference to the h1 element
const titleRef = ref<HTMLElement | null>(null)

const count = ref(0)

onMounted(() => {
    if (titleRef.value) {
        gsap.fromTo(
            titleRef.value,
            { y: 5, scale: 1 },
            {
                y: -5,
                scale: 1.05,
                duration: 1,
                ease: 'power2.inOut',
                repeat: -1, // Infinite loop
                yoyo: true, // Reverse effect for smooth looping
            },
        )
    }
})
</script>

<template>
    <div class="hello-world max-w-150 mx-auto my-5 text-justify text-lg">
        <h1 ref="titleRef" class="animated-text text-center mb-2 text-[30px]">
            Hello World
        </h1>

        <div class="flex flex-col justify-center items-center">
            <h2 class="mb-5 text-5xl p-6 rounded-3xl bg-cyan-800 text-white">
                {{ count }}
            </h2>
            <div>
                <button
                    type="button"
                    @click="count--"
                    class="bg-cyan-800 text-white p-2 m-2 rounded-md cursor-pointer"
                >
                    Decrease
                </button>
                <button
                    type="button"
                    @click="count++"
                    class="bg-cyan-800 text-white p-2 m-2 rounded-md cursor-pointer"
                >
                    Increase
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

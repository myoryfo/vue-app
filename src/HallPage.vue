<script setup lang="ts">
import gsap from 'gsap'
import { ref } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'

const sections = ref([
    {
        title: 'Section 1',
        content: 'This is the content for section 1.',
        bg: 'bg-white',
    },
    {
        title: 'Section 2',
        content: 'Details about section 2 go here.',
        bg: 'bg-gray-200',
    },
    {
        title: 'Section 3',
        content: 'Information for section 3.',
        bg: 'bg-white',
    },
    {
        title: 'Section 4',
        content: 'More text for section 4.',
        bg: 'bg-gray-200',
    },
    { title: 'Section 5', content: 'Final section content.', bg: 'bg-white' },
    {
        title: 'Section 6',
        content: 'Details about section 2 go here.',
        bg: 'bg-gray-200',
    },
    {
        title: 'Section 7',
        content: 'Information for section 3.',
        bg: 'bg-white',
    },
    {
        title: 'Section 8',
        content: 'More text for section 4.',
        bg: 'bg-gray-200',
    },
    { title: 'Section 9', content: 'Final section content.', bg: 'bg-white' },
    {
        title: 'Section 10',
        content: 'This is the content for section 1.',
        bg: 'bg-white',
    },
])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const beforeEnter = (el: any): void => {
    el.style.opacity = '0'
    el.style.transform = 'translateX(-100px)'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const enter = (el: any, done: () => void): void => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            toggleActions: 'restart none reverse none',
            start: 'center 90%',
            end: 'center 90%',
            markers: true,
        },
        opacity: 1,
        x: 0,
        duration: 1,
        onComplete: done,
    })
}
</script>
<template>
    <div class="min-h-screen bg-gray-100 text-gray-900">
        <header
            class="bg-cyan-800 rounded-2xl text-white py-6 text-center text-xl font-bold"
        >
            Vue 3 Page with 5 Sections
        </header>
        <TransitionGroup
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            tag="div"
            class="container mx-auto p-6 space-y-8"
        >
            <div
                v-for="(section, index) in sections"
                :key="index"
                class="p-6 rounded-lg shadow-md"
                :class="section.bg"
                :data-index="index"
            >
                <h2 class="text-2xl font-semibold mb-2">{{ section.title }}</h2>
                <p>{{ section.content }}</p>
            </div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>

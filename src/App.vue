<script setup lang="ts"></script>
<template>
    <div id="nav" class="container mx-auto px-4">
        <nav
            class="p-4 mb-3 flex justify-center gap-4 border-b-5 border-gray-400 border-double"
        >
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/hello-world">HelloWorld</RouterLink>
            <RouterLink to="/hall">Hall</RouterLink>
        </nav>
        <Transition name="slide" mode="out-in">
            <RouterView />
        </Transition>
    </div>
</template>
<style scoped>
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2f2f2;
}

#nav {
    padding: 0px px 30px 30px;
}

#nav a {
    font-weight: bold;
    color: gray;
}

#nav a.router-link-exact-active {
    color: #2c3e50;
}

.slide-enter-active {
    transition: all 0.6s ease-out;
}

.slide-leave-active {
    transition: all 0.6s ease-in;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.slide-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>

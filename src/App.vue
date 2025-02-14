<script setup lang="ts">
    import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/atlan.svg" class="logo vue" alt="Atlan logo" />
        </a>
        <a href="https://v3.tailwindcss.com/docs" target="_blank">
            <img
                src="./assets/tailwind.svg"
                class="logo vue"
                alt="Tailwind logo"
            />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue + Atlantis + Tailwind v3" />
</template>

<style scoped>
    .logo {
        height: 144px;
        width: 144px;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>

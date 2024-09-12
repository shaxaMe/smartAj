<template>
    <div class="w-full">
        <h1 class="title text-black">Nuxt Gsap</h1>
        <NavHeader class="relative z-10" />
        <NuxtPage class="relative z-[1]" />
    </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.to('.title', { rotation: 3, x: 100, duration: 1 })
})
</script>

<style lang="scss" scoped></style>
<template>
    <div @click.self="isOpen = false"
        class="z-10 bg-black/25 top-0 left-0 min-w-full transitio duration-500 ease-out min-h-screen hidden"
        :class="{ '!fixed !inline-block': isOpen }">
        <div class="bg-white max-w-[0%] w-full h-full min-h-dvh -left-[200%] transition duration-700 ease-in-out"
            :class="{ '!left-0 !max-w-[90%]': isOpen }">
            <div class="text-black py-3 px-4 flex w-full justify-end" @click="isOpen=false">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="#000"
                        d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41z" />
                </svg>
            </div>
            <nav
                class="flex-1 py-6 gap-5 px-5 mobile-nav  max-w-[500px] flex w-full justify-start flex-col list-none text-[#101011] font-[600] text-base">
                <nuxt-link to="/#about" class="nav-link app-nav relative">Biz haqimizda</nuxt-link>
                <a href="#" class="app-nav !relative group z-30">
                    Jamoa
                    <ul
                        class="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[350px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                        <li>
                            <nuxt-link :to="{ path: '/team', query: { type: 'main' } }"
                                class="nav-link app-nav relative w-fit">Rahbariyat</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/team', query: { type: 'control' } }"
                                class="nav-link app-nav relative w-fit">Boshqaruv va nazorat organlari</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/team', query: { type: 'department' } }"
                                class="nav-link app-nav relative w-fit">Tashkiliy tuzilma</nuxt-link>
                        </li>
                    </ul>
                </a>
                <nuxt-link to="/#products" class="nav-link app-nav relative">Mahsulotlarimiz</nuxt-link>
                <!-- <a href="#" class="nav-link app-nav relative">Nizom</a> -->


                <!-- <a href="#" class="nav-link app-nav relative">Vakansiyalar</a> -->
                <nuxt-link :to="'/#news'" class="nav-link app-nav relative">Yangiliklar</nuxt-link>
                <!-- <a href="#">
                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" class="ui-dropdonw">
                    <UButton color="white" label="More" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </a> -->
            </nav>
        </div>
    </div>
</template>

<script setup>
const isOpen = useState('menuOpen');

watch(isOpen, (newValue, oldValue) => {
    if (!newValue) {
        useState('menuOpen', () => false);
    };
})
onMounted(() => {
    document.querySelectorAll('.mobile-nav .nav-link').forEach((item) => {
        if (!!item) {
            item.addEventListener('click', (event) => {
                // event.preventDefault();
                isOpen.value = false;
            });
        }
    });
})
</script>

<style lang="scss" scoped>
.mobile-nav {
    a {
        width: fit-content;
    }
}
</style>
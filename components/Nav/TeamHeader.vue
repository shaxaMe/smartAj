<template>
    <div class="cm-container max-md:px-5 py-3" data-aos="fade-down" data-aos-duration="550" :class="{'!fixed top-0 !max-w-[100%] left-0 w-full bg-white':windowScrollY>120}">
        <div class="w-full min-h-[60px] flex justify-between items-center" :class="{'max-w-[1330px] mx-auto':windowScrollY>120}">
            <nuxt-link :to="localePath('/')"
                class="w-fit h-full text-xl max-h-12 max-md:text-lg max-md:leading-5 text-black cursor-pointer logo-text">
                <!-- <img src="~/assets/images/logonew.png" class="w-full h-full max-w-32 max-h-12 object-contain" alt="logo"> -->
                "SMART MARKETPLACE" AJ
            </nuxt-link>
            <nav
                class="flex-1 max-md:hidden max-w-[500px] flex w-full justify-between list-none text-[#101011] font-[600] text-base">
                <nuxt-link :to="localePath('/#about')" class="nav-link app-nav relative">{{ t('about') }}</nuxt-link>
                <!-- <a href="#" class="nav-link app-nav !relative group z-30">
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
                </a> -->
                <nuxt-link :to="localePath('/#products')" class="nav-link app-nav relative">{{ t('products') }}</nuxt-link>
                <!-- <a href="#" class="nav-link app-nav relative">Nizom</a> -->


                <!-- <a href="#" class="nav-link app-nav relative">Vakansiyalar</a> -->
                <nuxt-link :to="localePath('/#news')" class="nav-link app-nav relative">{{ t('news') }}</nuxt-link>
                <nuxt-link :to="localePath('/#vacancy')" class="nav-link app-nav relative">{{ t('vacansy') }}</nuxt-link>

                <!-- <a href="#">
                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" class="ui-dropdonw">
                    <UButton color="white" label="More" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </a> -->
            </nav>


            <UDropdown
                class="min-h-[40px] max-sm:hidden  hover:text-white transition duration-150 ease-in-out font-semibold text-base text-[#fff] rounded-[10px]"
                v-model:open="open" :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
                <div>
                    <button
                        class="min-h-[40px] max-sm:hidden hover:bg-[#023363] px-6 bg-[#023363] hover:text-white transition duration-150 ease-in-out text-center flex justify-center items-center font-semibold text-[#fff] border-[#023363] border-2 gap-2 rounded-[10px] text-lg">
                        <img :src="currentLang == 'uz' ? UzFlag : RuFlag" class="w-4 h-4" alt="current" />
                        {{ currentLang }}
                    </button>
                </div>
                <template #item="{ item }" class="w-fit px-3 py-2">
                    <div>
                        <img :src="flags(item.label)" alt="lang">
                    </div>
                    <span class="truncate">{{ item.label }}</span>
                </template>
            </UDropdown>
            <div class="cursor-pointer hidden max-md:inline-block text-black" v-if="!menuOpen" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18"/></svg>
            </div>
        </div>
    </div>

</template>

<script setup>
import UzFlag from "../../assets/images/flags/la.svg"
import RuFlag from "../../assets/images/flags/ru.svg"
const { setLocale,t } = useI18n();
const menuOpen = useState('menuOpen', () => false);
const localePath = useLocalePath();

const windowScrollY = ref(0)
const toggleMenu = () => {
  menuOpen.value = true;
};
const items = [
    // [{
    //     label: 'Profile',
    //     avatar: {
    //         src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    //     }
    // }], 
    [{
        label: 'uz',
        click: () => {
            changeFlag("uz")
        }
    },
    {
        label: 'ru',
        click: () => {
            changeFlag("ru")
        }
    }]
]
const currentLang = ref('uz')
function flags(name) {
    return name == 'uz' ? UzFlag : RuFlag;
}
function changeFlag(current) {
    let lang = current;
    setLocale(lang);
    localStorage.setItem("lang",JSON.stringify(lang));
    currentLang.value = current;
}
onMounted(()=>{
    window.addEventListener('scroll', () => {
        windowScrollY.value = window.scrollY;
    });
    let lang = JSON.parse(localStorage.lang);
     if(lang){
        setLocale(lang);
        currentLang.value = lang;
     }
})
</script>

<style lang="scss">

</style>
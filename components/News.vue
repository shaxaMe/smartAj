<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div id="news"
                class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
                {{ $t('news') }}
            </div>
        </div>
        <div>
            <h2
                class="text-[#101011] text-5xl font-semibold leading-[110%] max-md:text-3xl max-sm:text-2xl max-sm:text-center my-5" v-html="$t('news_title')">
                </h2>
            <div class="grid grid-cols-4 gap-3 mt-5 max-md:grid-cols-3 max-sm:grid-cols-1" v-if="!pending">
                <nuxt-link  v-for="(item,i) in Lists" :to="localePath(`/news/${item.id}`)" class="relative hover:shadow-xl transition duration-200 flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg" :key="i">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img :src="`https://api.admin.realsoft.uz/uploads/images/${item.image}`"
                            alt="card-image" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-4">
                        <h6 class="mb-2 text-slate-800 text-xl font-semibold line-clamp-2">
                            {{ item.title }}
                        </h6>
                        <p class="text-slate-600 leading-normal font-light line-clamp-4">
                            {{ item.description }}
                        </p>
                    </div>
                    <div class="px-4 pb-4 pt-0 mt-2">
                        <button
                            class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            {{ $t('read_more') }}
                        </button>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
const {locale} = useI18n();
const {pending,data:Lists} = await useCustomFetch('/v1/sm/news',{
    params:{
     lang:locale,
    },
    lazy:false,
    transform:(Lists)=>{
        return Lists.data
    }
})
</script>

<style lang="scss" scoped></style>
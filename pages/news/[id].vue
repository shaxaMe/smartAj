<template>
    <div class="cm-container py-10 max-md:px-4" v-if="!pending">
        <div class="flex justify-center items-center">
            <div class="max-w-full overflow-hidden rounded-xl h-[500px]">
                <img class="w-full h-full object-cover"
                :src="`https://api.admin.realsoft.uz/uploads/images/${Detail.image}`" alt="news">
            </div>
        </div>
        <div class="mt-10">
            <h1 class="text-2xl font-bold">
                {{ Detail.title }}
            </h1>
            <p class="mt-4 text-lg" v-html="Detail.description">
                
            </p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'team'
})
const route = useRoute();
const {locale} = useI18n();
const {pending,data:Detail} = await useCustomFetch('/v1/sm/news/detail',{
    params:{
     lang:locale,
     id:route.params.id
    },
    lazy:false,
    transform:(Detail)=>{
        return Detail.data
    }
})

</script>

<style lang="scss" scoped></style>
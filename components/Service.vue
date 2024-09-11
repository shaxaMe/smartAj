<template>
    <div class="cm-container py-10">
        <div class="bg-[#F2F5F7] text-[#101011] text-lg font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
            Xizmatlarimiz
        </div>
        <div class="mt-5 flex flex-col gap-20">
            <div class="text-black text-6xl w-full font-semibold leading-[110%]">
                We specialize in the<br>
                <div class="flex gap-4">
                    <p>following &</p>
                    <p class="w-fit relative flex flex-col">
                        <span class="m-0 h-auto">case studies</span>
                        <NuxtImg
                            src="https://raw.githubusercontent.com/shaxaMe/cfgcs/c7ba119359f7c2674f6cad75d53c71fb89522ac1/line.svg"
                            class="h-auto absolute w-full -top-4" />
                    </p>
                </div>
            </div>
        </div>
        <div class="flex items-stretch gap-5 mt-[5rem]">
           <div class="overflow-hidden rounded-xl h-full relative cursor-pointer">
             <img src="~/assets/images/service.png" class="h-full object-cover w-full" alt="servise">
             <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 bg-black/25">
                <p class="font-semibold text-xl">Dreamy vision</p>
                <p>Logo, user interface</p>
             </div>
           </div>
           <div class="flex flex-col justify-between">
             <div class="max-h-[300px] overflow-hidden rounded-xl relative cursor-pointer">
                <img src="~/assets/images/service.png" alt="servise">
                <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 bg-black/25">
                <p class="font-semibold text-xl">Dreamy vision</p>
                <p>Logo, user interface</p>
             </div>
             </div>
             <div class="max-h-[300px] overflow-hidden rounded-xl relative cursor-pointer">
                <img src="~/assets/images/service.png" alt="servise">
                <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 bg-black/25">
                <p class="font-semibold text-xl">Dreamy vision</p>
                <p>Logo, user interface</p>
             </div>
             </div>
           </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
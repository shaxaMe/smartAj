<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div data-aos="fade-up" data-aos-duration="600" data-aos-offest="100" data-aos-easing="ease-in-back" class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
            Xizmatlarimiz
        </div>
        </div>
        <div class="mt-5 flex flex-col gap-20">
            <div class="text-black text-5xl  max-md:text-3xl max-sm:text-2xl max-sm:text-center  w-full font-semibold leading-[110%]" data-aos="fade-up" data-aos-duration="600" data-aos-offest="300">
                We specialize in the<br>
                <div class="flex gap-4 max-sm:text-center max-sm:justify-center max-sm:gap-2">
                    <p>following &</p>
                    <p class="w-fit relative flex flex-col">
                        <span class="m-0 h-auto">case studies</span>
                        <NuxtImg
                            src="https://raw.githubusercontent.com/shaxaMe/cfgcs/c7ba119359f7c2674f6cad75d53c71fb89522ac1/line.svg"
                            class="h-auto absolute w-full -top-4 max-sm:top-0" />
                    </p>
                </div>
            </div>
        </div>
        <div class="flex items-stretch gap-5 mt-[5rem] max-md:mt-10 max-md:flex-col">
           <div class="overflow-hidden flex-1 rounded-xl h-full relative cursor-pointer" data-aos="fade-up" data-aos-duration="1000" data-aos-offest="300">
             <!-- <img src="~/assets/images/service.png" class="h-full object-cover w-full" alt="servise"> -->
             <video src="~/assets/video/smartmarket.mp4" loop class="min-h-[650px] max-md:min-h-[300px] object-cover" autoplay muted></video>
             <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 bg-black/25">
                <p class="font-semibold text-xl">Smart-Mаrket </p>
                <p>Logo, user interface</p>
             </div>
           </div>
           <div class="flex flex-col flex-1 justify-between max-md:flex-row max-md:gap-4 max-sm:flex-col">
             <div class="max-h-[320px] overflow-hidden rounded-xl relative cursor-pointer" data-aos="fade-up" data-aos-duration="1000" data-aos-offest="300">
                <img class="min-w-full" src="~/assets/images/service.png" alt="servise">
                <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 bg-black/25">
                <p class="font-semibold text-xl">Dreamy vision</p>
                <p>Logo, user interface</p>
             </div>
             </div>
             <div class="max-h-[320px] overflow-hidden rounded-xl relative cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-offest="500">
                <img class="min-w-full" src="~/assets/images/service.png" alt="servise">
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
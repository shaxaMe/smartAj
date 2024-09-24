<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div id="products" data-aos="fade-up" data-aos-duration="600" data-aos-offest="100"
                data-aos-easing="ease-in-back"
                class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
                {{ $t('products') }}
            </div>
        </div>
        <div class="mt-5 flex flex-col gap-20">
            <span
                class="text-black text-5xl  max-md:text-3xl max-sm:text-2xl max-sm:text-center  w-full font-semibold leading-[110%]"
                data-aos="fade-up" data-aos-duration="600" data-aos-offest="300" v-html="$t('product_entering')"> 
        </span>
    </div>
    <div class="flex items-stretch gap-5 mt-[5rem] max-md:mt-10 max-md:flex-col">
        <a href="https://smart-market.uz/" target="_blank"
            class="overflow-hidden shadow-md flex-1 rounded-xl h-full relative cursor-pointer" data-aos="fade-up"
            data-aos-duration="1000" data-aos-offest="300">
            <!-- <img src="~/assets/images/service.png" class="h-full object-cover w-full" alt="servise"> -->
            <video src="~/assets/video/Smartmarket.mp4" class="min-h-[650px] max-md:min-h-[300px] object-cover" autoplay
                muted loop></video>
            <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 bg-black/25">
                <p class="font-semibold text-xl">Smart-Market</p>
                <p>{{ $t('choose_correct') }}</p>
            </div>
        </a>
        <div class="flex flex-col flex-1 justify-between max-md:flex-row max-md:gap-4 max-sm:flex-col">
            <a href="https://online-bozor.uz/" target="_blank"
                class="max-h-[320px] max-md:min-h-[300px] overflow-hidden border shadow-md rounded-xl relative cursor-pointer"
                data-aos="fade-up" data-aos-duration="1000" data-aos-offest="300">
                <!-- <img class="min-w-full" src="~/assets/images/service.png" alt="servise"> -->
                <video src="~/assets/video/Onlinebozor.mp4" class="min-w-full max-md:absolute h-full object-cover"
                    autoplay muted loop></video>
                <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 bg-black/25">
                    <p class="font-semibold text-xl">Online Bozor</p>
                    <p>{{ $t('infinity_buy') }}</p>
                </div>
            </a>
            <a href="https://realpay.uz/" target="_blank"
                class="max-h-[320px] shadow-md overflow-hidden max-md:min-h-[300px] rounded-xl relative cursor-pointer"
                data-aos="fade-up" data-aos-duration="1500" data-aos-offest="500">
                <video src="~/assets/video/realpay.mp4" class="min-w-full max-md:absolute h-full object-cover" autoplay
                    muted loop></video>
                <div class="absolute px-3 py-5 z-10 text-[#fff] bottom-3 rounded-md left-4 max-sm:w-[80%] bg-black/25">
                    <p class="font-semibold text-xl">RealPay</p>
                    <p>{{ $t('realpay_title') }}</p>
                </div>
            </a>
        </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
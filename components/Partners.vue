<template>
    <div class="cm-container max-md:px-5">
        <div class="flex justify-between items-stretch gap-2 py-10 max-md:py-5" data-aos="fade-up"
            data-aos-duration="850" data-aos-easing="ease-in-back">
            <div class="card relative" v-for="(item, i) in images" :key="i">
               <a :href="item.link"  target="_blank" >
                <img :src="item.src" alt="logos" class="w-[10rem] max-md:w-[8rem] max-sm:w-[6rem] max-sm:object-contain h-full" >
               </a>
            </div>
        </div>
    </div>
</template>

<script setup>

import onlinebozor from "~/assets/images/onlinebozor.svg";
import RealPay from "~/assets/images/RealPay.svg";
import smartmarket from "~/assets/images/smartmarket.svg";
import RealSoft_logo from "~/assets/images/RealSoft_logo.svg";

const images = ref([{
    src: onlinebozor,
    link:'https://online-bozor.uz/'
}, {
    src: RealPay,
    link:'https://realpay.uz/'
}, {
    src: smartmarket,
    link:'https://smart-market.uz/'
},{
    src: RealSoft_logo,
    link:'https://realsoft.uz/'
}])
</script>

<style lang="scss" scoped></style>
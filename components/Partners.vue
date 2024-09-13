<template>
    <div class="cm-container">
        <div class="flex justify-between items-stretch gap-2 py-10 max-md:py-5" data-aos="fade-up" data-aos-duration="850" data-aos-easing="ease-in-back">
            <div class="card w-fit" v-for="(item, i) in images" :key="i">
                <img :src="item" alt="img" class="w-full object-contain">
            </div>
        </div>
    </div>
</template>

<script setup>

import huawei from "~/assets/images/huawei.svg";
import lexus from "~/assets/images/lexus.svg";
import netfilx from "~/assets/images/netfilx.svg";
import shopify from "~/assets/images/shopify.svg";
import sputify from "~/assets/images/sputify.svg";


const images = ref([huawei, lexus, netfilx, shopify, sputify])
</script>

<style lang="scss" scoped></style>
<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div id="statute" data-aos="fade-up" data-aos-duration="600" data-aos-offest="100" data-aos-easing="ease-in-back"
                class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
                Nizom
            </div>
        </div>
        <div class="mt-10">
            <div class="max-w-[300px] faqs-tab">
                <UTabs v-model="selected" :items="items" :default-index="2" />
            </div>
            <div class="mt-10" v-if="selected==1">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="max-h-[650px] overflow-hidden hover:shadow-2xl transition duration-300">
                        <img class="h-auto object-cover max-w-full rounded-lg"
                            src="../assets/images/smartplacemchj.webp" alt="">
                    </div>
                    <div class="max-h-[650px] overflow-hidden hover:shadow-2xl transition duration-300">
                        <img class="h-auto object-cover max-w-full rounded-lg"
                            src="../assets/images/onlinebozor.webp" alt="">
                    </div>
                    <div class="max-h-[650px] overflow-hidden hover:shadow-2xl transition duration-300">
                        <img class="h-auto object-cover max-w-full rounded-lg"
                            src="../assets/images/smartmarket.webp" alt="">
                    </div>
                    <div class="max-h-[650px] overflow-hidden hover:shadow-2xl transition duration-300">
                        <img class="h-auto object-cover max-w-full rounded-lg"
                            src="../assets/images/RealPaypatent.webp" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

const selected = ref(1)
const items = [{
    label: 'Nizom',
    icon: 'i-mdi:file-document',
    content: '',
    disabled: true,
}, {
    label: 'Litsenziya',
    icon: 'i-clarity:license-line',
    content: ''
}]
</script>

<style lang="scss" scoped></style>
<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div data-aos="fade-up" data-aos-duration="600" data-aos-offest="100" data-aos-easing="ease-in-back" class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
            Nizom
        </div>
        </div>
        <div class="mt-10">
            <div class="max-w-[300px] faqs-tab">
                <UTabs :items="items" :default-index="2" />
            </div>
        </div>
    </div>
</template>

<script setup>
const items = [{
    label: 'Nizom',
    icon: 'i-mdi:file-document',
    content: 'This is the content shown for Tab1'
}, {
    label: 'Litsenziya',
    icon: 'i-clarity:license-line',
    content: 'And, this is the content for Tab2'
}]
</script>

<style lang="scss" scoped></style>
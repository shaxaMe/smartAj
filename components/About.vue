<template>
    <div class="cm-container py-10  max-lg:px-5 max-md:py-5">
        <div id="about" class="w-full max-sm:flex max-sm:justify-center">
            <div data-aos="fade-up" data-aos-duration="600" data-aos-offest="300" data-aos-easing="ease-in-back"
                class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-[1em] font-semibold px-5 py-3 text-center w-fit rounded-[10px] ">
                {{ $t('about') }}
            </div>
        </div>
        <div class="mt-5 flex flex-col gap-20 max-md:gap-8">
            <h1 data-aos="fade-up" data-aos-duration="700" data-aos-offest="400"
                class="text-[#101011] text-5xl font-semibold leading-[110%] max-md:text-2xl max-sm:text-2xl max-sm:text-center" v-html="$t('about_title')">
               </h1>
            <div class="flex gap-4 justify-between max-md:flex-wrap items-stretch">
                <div class="bg-[#F6F6F7] max-[500px]:min-w-full p-10 max-md:px-3 max-md:py-5 text-black max-w-[300px] max-md:max-w-full max-sm:min-h-[200px] max-md:flex-1 rounded-xl"
                    data-aos="fade-left" data-aos-duration="700" data-aos-offest="100">
                    <div class="bg-[#FFFFFF] rounded-full flex justify-center items-center p-4 w-fit shadow-lg">
                        <img src="~/assets/images/profile.svg" class="w-6 h-6 object-contain" alt="profile">
                    </div>
                    <p class="font-semibold text-2xl my-4 max-sm:text-xl max-sm:my-2">{{ $t('market_title') }}
                    </p>
                    <p class="text-[#101011] text-lg">
                        {{ $t('market_subtitle') }}
                    </p>

                </div>
                <div class="flex-1 max-md:min-w-full overflow-hidden h-full max-h-[350px] rounded-xl group max-md:-order-1"
                    data-aos="fade-left" data-aos-duration="900" data-aos-offest="1000">
                    <img src="../assets/images/istock-transformed.webp"
                        class="w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-500"
                        alt="team" />
                </div>
                <div class="bg-[#F6F6F7] max-md:flex-1 p-10 max-md:px-3 max-md:py-5 text-black max-md:max-w-full max-w-[300px] rounded-xl"
                    data-aos="fade-left" data-aos-duration="1200" data-aos-offest="100">
                    <div class="bg-[#FFFFFF] rounded-full flex justify-center items-center p-4 w-fit shadow-lg">
                        <img src="~/assets/images/exchange.svg" class="w-6 h-6 object-contain" alt="profile">
                    </div>
                    <p class="font-semibold text-2xl my-4">{{ $t('local_opportunities') }}</p>
                    <p class="text-[#101011] text-lg">
                        {{ $t('we_platform') }}
                    </p>

                </div>
            </div>
        </div>
        <div class="mt-5 flex flex-col gap-20">
            <div class="flex gap-4 justify-between max-md:flex-wrap items-stretch">
                <div class="bg-[#F6F6F7] max-md:flex-1 max-[500px]:min-w-full max-md:max-w-full p-10 max-md:px-3 max-md:py-5 text-black max-w-[300px] rounded-xl"
                    data-aos="fade-left" data-aos-duration="700" data-aos-offest="100">
                    <div class="bg-[#FFFFFF] rounded-full flex justify-center items-center p-4 w-fit shadow-lg">
                        <img src="~/assets/images/docs.svg" class="w-6 h-6 object-contain" alt="profile">
                    </div>
                    <p class="font-semibold text-2xl my-4">{{ $t('paid') }}</p>
                    <p class="text-[#101011] text-lg">
                       {{ $t('local_market') }}
                    </p>

                </div>
                <div class="flex-1 max-md:hidden overflow-hidden h-full max-h-[350px] rounded-xl group"
                    data-aos="fade-left" data-aos-duration="900" data-aos-offest="1000">
                    <img src="../assets/images/istock2-transformed.webp"
                        class="w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-500"
                        alt="team" />
                </div>
                <div class="bg-[#F6F6F7] max-md:max-w-full p-10 max-md:px-3 max-md:py-5 max-md:flex-1 text-black max-w-[300px] rounded-xl"
                    data-aos="fade-left" data-aos-duration="1200" data-aos-offest="100">
                    <div class="bg-[#FFFFFF] rounded-full flex justify-center items-center p-4 w-fit shadow-lg">
                        <img src="~/assets/images/financy.svg" class="w-6 h-6 object-contain" alt="profile">
                    </div>
                    <p class="font-semibold text-2xl my-4">{{ $t('simple_paid') }}</p>
                    <p class="text-[#101011] text-lg">
                        {{ $t('payment_system') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
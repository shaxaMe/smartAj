<template>
    <div class="cm-container py-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offest="300" data-aos-easing="ease-in-back" class="bg-[#F2F5F7] text-[#101011] text-lg font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
            Vakansiyalar
        </div>
        <div class="mt-5 flex flex-col gap-20">
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-offest="300" data-aos-easing="ease-in-back" class="text-[#101011] text-5xl font-semibold leading-[110%]">Globally Recruitment and <br>
                Consultation Solutions</h1>

            <div class="grid grid-cols-3 gap-4 items-stretch">
                <div class="px-5 py-3 bg-[#F2F5F7] rounded-lg" v-for="item in 6">
                    <h1 class="text-[#101011] text-xl">Strong Junior | Middle QA Engineer</h1>
                    <div class="my-6">
                        <p class="text-[#101011]"><strong>Texnologiyalar:</strong> Jira, Selenium, Appium, Jmeter</p>
                        <div class="text-[#101011] flex mt-3 justify-between items-center">
                            <p class="flex items-center gap-1"><UIcon name="i-ic:round-calendar-month" class="w-5 h-5" /><span>Dushanba-Juma</span></p>
                            <p>09:00 18:00</p>
                        </div>
                        <p class="text-[#101011] mt-3"><strong>Maosh:</strong> <span> 4000 000 - 8000 000</span></p>
                    </div>
                    <button class="min-h-[44px] max-w-[160px] flex-1 hover:text-white text-[#023363] transition duration-150 ease-in-out font-semibold text-base min-w-[150px] hover:bg-[#023363] border-[#023363] bg-[#fff] border rounded-[10px]">
                          Batafsil
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
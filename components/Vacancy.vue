<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div data-aos="fade-up" data-aos-duration="600" data-aos-offest="100" data-aos-easing="ease-in-back" class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
            Vakansiyalar 
        </div>
        </div>
        <div class="mt-10 flex flex-col gap-20 max-md:gap-10">
            <!-- <h1 data-aos="fade-up" data-aos-duration="700" data-aos-offest="100" data-aos-easing="ease-in-back" class="text-[#101011] text-5xl font-semibold leading-[110%] max-md:text-3xl max-sm:text-2xl max-sm:text-center">Globally Recruitment and <br>
                Consultation Solutions</h1> -->
            <div class="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 items-stretch">
                <div class="px-5 py-3 bg-[#F2F5F7] rounded-lg my-6 hover:shadow-xl transition duration-200" v-for="item in 6" >
                    <h1 class="text-[#101011] text-xl">Strong Junior | Middle QA Engineer</h1>
                    <div class="my-6">
                        <p class="text-[#101011]"><strong>Texnologiyalar:</strong> Jira, Selenium, Appium, Jmeter</p>
                        <div class="text-[#101011] flex mt-3 justify-between items-center">
                            <p class="flex items-center gap-1"><UIcon name="i-ic:round-calendar-month" class="w-5 h-5" /><span>Dushanba-Juma</span></p>
                            <p>09:00 18:00</p>
                        </div>
                        <p class="text-[#101011] mt-3"><strong>Maosh:</strong> <span> 4000 000 - 8000 000</span></p>
                    </div>
                    <button class="min-h-[44px] max-w-[160px] flex-1 hover:text-white text-[#023363] transition duration-150 ease-in-out font-semibold text-base min-w-[150px] hover:bg-[#023363] border-[#023363] bg-[#fff] border rounded-[10px] max-md:max-w-full max-md:min-w-full">
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
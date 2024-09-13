<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div data-aos="fade-up" data-aos-duration="600" data-aos-offest="100" data-aos-easing="ease-in-back" class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
            Yangiliklar 
        </div>
        </div>
            <div>
                <h2 class="text-[#101011] text-5xl font-semibold leading-[110%] max-md:text-3xl max-sm:text-2xl max-sm:text-center my-4">Our popular blogs</h2>
                <div
                    class="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    <div v-for="(item,i) in 3" :key="i"
                        class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#023363]">
                        <div class="flex items-center mb-6">
                            <img src="https://pagedone.io/asset/uploads/1696244553.png" alt="Harsh image"
                                class="rounded-lg w-full object-cover">
                        </div>
                        <div class="block">
                            <h4 class="text-gray-900 font-medium leading-8 mb-9">Fintech 101: Exploring the Basics of
                                Electronic Payments</h4>
                            <div class="flex items-center justify-between  font-medium">
                                <h6 class="text-sm text-gray-500">By Harsh C.</h6>
                                <span class="text-sm text-[#023363]">2 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="javascript:;"
                    class="cursor-pointer hidden border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100 max-sm:text-sm max-sm:py-3">View
                    All</a>
            </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
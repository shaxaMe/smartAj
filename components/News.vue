<template>
    <div class="cm-container py-10 max-md:px-5">
        <div class="w-full max-sm:flex max-sm:justify-center">
            <div id="news" data-aos="fade-up" data-aos-duration="600" data-aos-offest="100"
                data-aos-easing="ease-in-back"
                class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-base  font-semibold px-5 py-3 text-center w-fit rounded-[10px]">
                Yangiliklar
            </div>
        </div>
        <div>
            <h2
                class="text-[#101011] text-5xl font-semibold leading-[110%] max-md:text-3xl max-sm:text-2xl max-sm:text-center my-4">
                Our popular blogs</h2>
            <div class="grid grid-cols-4 gap-3 mt-5">
                <nuxt-link :to="`/news/${item}`" v-for="item in 5" class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                            alt="card-image" />
                    </div>
                    <div class="p-4">
                        <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                            Website Review Check
                        </h6>
                        <p class="text-slate-600 leading-normal font-light line-clamp-4">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                            Barcelona.
                        </p>
                    </div>
                    <div class="px-4 pb-4 pt-0 mt-2">
                        <button
                            class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Read more
                        </button>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
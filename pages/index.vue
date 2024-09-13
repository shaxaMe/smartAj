<template>
    <div>
        <section class="py-5">
            <div class="w-screen h-[65dvh] max-md:h-[50dvh] relative">
                <div class="w-full h-full absolute inset-0 bg-black/25">
                    <p>

                    </p>
                </div>
                <video v-show="!loading" id="video" class="w-full h-full object-cover" src="~/assets/video/meeting.mp4"
                    autoplay muted loop></video>
                    <img v-show="loading" src="~/assets/images/offise.jpg"
                        class="w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-500"
                        alt="" />   
            </div>
        </section>
        <section class="bg-[#F2F5F7] py-10 max-md:py-5">
            <div class="cm-container flex max-md:gap-4 max-md:px-5 max-md:flex-col">
                <div class="flex-1 mt-20 max-md:mt-5 flex flex-col justify-between">
                    <div class="flex flex-col gap-8 max-md:gap-4 max-md:justify-center max-md:items-center"
                        data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-back">
                        <div
                            class="text-black text-6xl max-md:text-5xl max-sm:text-3xl max-md:text-center w-full font-semibold leading-[110%] max-md:leading-[120%] max-[350px]:text-3xl">
                            Consulting for your<br>
                            <div class="flex gap-4 max-md:text-center max-md:justify-center max-sm:gap-2">
                                <p>app &</p>
                                <p class="w-fit relative flex flex-col">
                                    <span class="m-0 h-auto">software</span>
                                    <NuxtImg
                                        src="https://raw.githubusercontent.com/shaxaMe/cfgcs/c7ba119359f7c2674f6cad75d53c71fb89522ac1/line.svg"
                                        class="h-auto absolute w-full top-4 max-sm:top-2" />
                                </p>
                            </div>
                        </div>
                        <p class="text-[#404144] text-[1.5em] max-sm:text-[1em] leading-[130%] max-md:text-center">
                            Discover our app for seamless rewards
                            -
                            access<br>
                            perks, cashbacks, and savings effortlessly.</p>
                        <div
                            class="flex justify-start max-md:justify-center max-sm:flex-col max-md:w-full items-stretch gap-3">
                            <UInput class="ui-input max-sm:max-w-full target-button max-w-[250px] flex-1"
                                icon="i-material-symbols:mail" size="xl" color="white" :trailing="false"
                                placeholder="hello@innovar.com" />
                            <button
                                class="min-h-[44px] target-button max-w-[160px] flex-1 text-white transition duration-150 ease-in-out max-sm:max-w-full font-semibold text-base min-w-[150px] hover:bg-[#023363] bg-[#023363] border rounded-[10px]">
                                Get in touch
                            </button>
                        </div>
                    </div>
                    <div class="flex justify-start max-md:justify-center items-stretch text-[#101011] mt-7"
                        data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-duration="750">
                        <div class="w-fit pr-8 max-md:pr-3 py-2">
                            <p class="text-4xl max-md:text-center max-md:text-3xl max-sm:text-2xl font-semibold">30M
                            </p>
                            <p class="text-base max-sm:text-sm max-sm:text-center max-sm:mt-1">Paid in cashbacks</p>
                        </div>
                        <div class="w-fit px-8 max-md:px-4 py-2 border-y-0 border-x-2">
                            <p class="text-4xl max-md:text-center max-md:text-3xl max-sm:text-2xl font-semibold">10K
                                +
                            </p>
                            <p class="text-base max-sm:text-sm max-sm:text-center max-sm:mt-1">Paid in cashbacks</p>
                        </div>
                        <div class="w-fit pl-8 max-md:pl-3 py-2">
                            <p class="text-4xl max-md:text-center max-md:text-3xl max-sm:text-2xl font-semibold">250
                            </p>
                            <p class="text-base max-sm:text-sm max-sm:text-center max-sm:mt-1">Paid in cashbacks</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1 max-md:flex max-md:justify-center" data-aos="fade-left" data-aos-duration="650"
                    data-aos-easing="ease-in-back">
                    <NuxtImg
                        src="https://raw.githubusercontent.com/shaxaMe/cfgcs/c7ba119359f7c2674f6cad75d53c71fb89522ac1/main.svg"
                        class="w-full max-w-[650px] max-md:max-w-[450px] max-h-[600px]" />
                </div>
            </div>
        </section>
        <section>
            <Partners />
        </section>
        <section>
            <About />
        </section>
        <section>
            <Service />
        </section>
        <section>
            <Statute />
        </section>
        <section>
            <Vacancy />
        </section>
        <section>
            <News />
        </section>
        <section>
            <Footer />
        </section>
    </div>
</template>

<script setup>
let loading = ref(true);
onMounted(() => {
    let video = document.querySelector("#video");
    console.log(video)
    setTimeout(()=>{
        if (video) {
        video.addEventListener("canplaythrough", (event) => {
            console.log(event);
            loading.value = false;
        });
    }
    },100)
})
</script>
<template>
    <div>
        <section class="bg-[#F2F5F7] h-screen">
            <div class="cm-container flex">
                <div class="flex-1 mt-20 flex flex-col justify-between">
                    <div class="flex flex-col gap-8">
                        <div class="text-black text-6xl w-full font-semibold leading-[110%]">
                            Consulting for your<br>
                            <div class="flex gap-4">
                                <p>app &</p>
                                <p class="w-fit relative flex flex-col">
                                    <span class="m-0 h-auto">software</span>
                                    <NuxtImg src="/line.svg" class="h-auto absolute w-full top-1" />
                                </p>
                            </div>
                        </div>
                        <p class="text-[#404144] text-[1.5em] leading-[130%]">Discover our app for seamless rewards
                            -
                            access<br>
                            perks, cashbacks, and savings effortlessly.</p>
                        <div class="flex justify-start items-stretch gap-3">
                            <UInput class="ui-input max-w-[250px] flex-1" icon="i-material-symbols:mail" size="xl"
                                color="white" :trailing="false" placeholder="hello@innovar.com" />
                            <button
                                class="min-h-[44px] max-w-[160px] flex-1 hover:bg-[#6aca7c] hover:text-white transition duration-150 ease-in-out font-semibold text-base min-w-[150px] text-[#5DB36E] border-[#5DB36E] border rounded-[10px]">
                                Get in touch
                            </button>
                        </div>
                    </div>
                    <div class="flex justify-start items-stretch text-[#101011] mt-7">
                        <div class="w-fit pr-8 py-2">
                            <p class="text-4xl font-semibold">30M</p>
                            <p class="text-base">Paid in cashbacks</p>
                        </div>
                        <div class="w-fit px-8 py-2 border-y-0 border-x-2">
                            <p class="text-4xl font-semibold">10K +</p>
                            <p class="text-base">Paid in cashbacks</p>
                        </div>
                        <div class="w-fit px-8 py-2 font-semibold">
                            <p class="text-4xl">250</p>
                            <p class="text-base">Paid in cashbacks</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <NuxtImg src="/main.svg" class="w-full max-w-[650px] max-h-[600px]" />
                </div>
            </div>
        </section>
    </div>
</template>
<template>
    <div>
        <section class="py-5">
            <div class="cm-container py-10  max-lg:px-5 max-md:py-5">
                <div class="w-full justify-center items-center flex max-sm:justify-center">
                    <div data-aos="fade-up" data-aos-duration="600" data-aos-offest="300" data-aos-easing="ease-in-back"
                        class="bg-[#F2F5F7] text-[#101011] text-lg max-sm:text-[1em] font-semibold px-5 py-3 text-center w-fit rounded-[10px] ">
                        {{route.query.type=='main'?'Rahbariyat':route.query.type=='control'?'Boshqaruv va nazorat organlari':'Tashkiliy tuzilma'}}
                    </div>
                </div>
                <div class="mt-10 flex flex-col gap-20 max-md:gap-8">
                    <h1 data-aos="fade-up" data-aos-duration="700" data-aos-offest="400"
                        class="text-[#101011] text-5xl text-center font-semibold leading-[110%] max-md:text-2xl max-sm:text-2xl max-sm:text-center">
                        Team Innovar: behind<br>
                        the great work audiences</h1>
                    <div class="grid grid-cols-3 gap-3">
                          <div class="bg-[#F6F6F7] p-6 rounded-xl" v-for="item in 6">
                                 <div class="w-full p-1 overflow-hidden">
                                    <img src="https://unistudio.co/html/innovar/assets/images/team/member-01.jpg" alt="team">
                                 </div>
                                 <div >
                                    <h1 class="text-[#023363] text-3xl font-semibold ">John Carter</h1>
                                    <p>
                                        CEO & Founder
                                    </p>
                                 </div>
                          </div> 
                    </div>    
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'team'
})
const route  = useRoute();
</script>
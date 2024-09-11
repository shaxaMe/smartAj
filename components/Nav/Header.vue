<template>
    <div class="cm-container" data-aos="fade-down" data-aos-duration="550">
        <div class="w-full min-h-[100px] flex justify-between items-center">
        <nuxt-link to="/" class="w-fit h-full text-xl max-h-12 text-black cursor-pointer logo-text">
            <!-- <img src="~/assets/images/logonew.png" class="w-full h-full max-w-32 max-h-12 object-contain" alt="logo"> -->
            SMART MARKETPLACE AJ
        </nuxt-link>
        <nav class="flex-1 max-w-[600px] flex w-full justify-between list-none text-[#101011] font-[600] text-base">
            <a href="#" class="nav-link app-nav relative">Biz haqimizda</a>
            <a href="#" class="nav-link app-nav relative">Xizmatlarimiz</a>
            <a href="#" class="nav-link app-nav relative">Nizom</a>
            <a href="#" class="nav-link app-nav relative">Jamoa</a>
            <a href="#" class="nav-link app-nav relative">Bo'sh ish o'rinlari</a>

            <!-- <a href="#">
                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" class="ui-dropdonw">
                    <UButton color="white" label="More" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </a> -->
        </nav>
        <button
            class="min-h-[44px] hover:bg-[#023363] bg-[#023363] hover:text-white transition duration-150 ease-in-out font-semibold text-base min-w-[150px] text-[#fff] border-[#023363] border-2 rounded-[10px]">
            Get in touch
        </button>
    </div>
    </div>
    
</template>

<script setup>
const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
    }]
]
</script>

<style lang="scss"></style>
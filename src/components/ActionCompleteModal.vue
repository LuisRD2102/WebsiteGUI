<template>
    <div tabindex="-1" id="action-modal"
        class="hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full min-h-full">
        <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div id="actionModalContent" class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="closeModal" type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                    <svg 
                        class="mx-auto mb-4 text-green-500 w-12 h-12 dark:text-green-200" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" 
                        viewBox="0 0 20 20">
                        <path 
                            stroke="currentColor" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2"
                            d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z">
                        </path>
                    </svg>
                    <h3 class="mb-6 mt-6 text-lg font-normal text-gray-500 dark:text-gray-400">{{ modalText }}</h3>
                    <button type="button" @click="confirm"
                        class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modalText: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        openModal() {
            const modal = document.getElementById('action-modal');
            modal.classList.remove('hidden');
            const actionModalContent = document.getElementById('actionModalContent');
            actionModalContent.style.opacity = 0;
            setTimeout(() => actionModalContent.style.opacity = 1, 50);
        },
        closeModal() {
            const modal = document.getElementById('action-modal');
            const actionModalContent = document.getElementById('actionModalContent');
            actionModalContent.style.opacity = 0;
            setTimeout(() => modal.classList.add('hidden'), 300);
        },
        confirm() {
            this.closeModal();
        }
    }
}
</script>

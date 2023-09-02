<template>
    <Modal ref="modalComponent">
        <template v-slot:header>
            <div>Add new client</div>
        </template>

        <template v-slot:body>
            <form class="grid grid-cols-2 gap-4">
                <!-- Name -->
                <div class="relative">
                    <input type="text" id="small_outlined"
                        class="block px-2.5 pb-1 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="small_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-light dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                        First name
                    </label>
                </div>
                <!-- Last name -->
                <div class="relative" data-te-input-wrapper-init>
                    <input type="text" id="small_outlined"
                        class="block px-2.5 pb-1 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="small_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-light dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                        Last name
                    </label>
                </div>
                <!-- Phone -->
                <div class="relative" data-te-input-wrapper-init>
                    <input type="text" id="small_outlined"
                        class="block px-2.5 pb-1 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="small_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-light dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                        Phone
                    </label>
                </div>
                <!-- Email -->
                <div class="relative" data-te-input-wrapper-init>
                    <input type="text" id="small_outlined"
                        class="block px-2.5 pb-1 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="small_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-light dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">
                        Email
                    </label>
                </div>
                <!-- status -->
                <div class="relative" data-te-input-wrapper-init>
                    <div className="mb-3">
                        <select className="form-select appearance-none
                                w-full
                                px-3
                                pb-2
                                pt-2
                                text-sm
                                font-normal
                                text-gray-500
                                bg-light bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-lg
                                transition
                                ease-in-out
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example">
                            <option selected>Select status...</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                </div>
            </form>
        </template>

        <template v-slot:footer>
            <div class="flex justify-end w-full gap-3">
                <Button label="Cancel" bgColorClass="bg-red-700" @click="closeModal()" />
                <Button label="Save" class="w-14" />
            </div>
        </template>
    </Modal>
</template>

<script>
import Modal from '../components/Modal.vue';
import {
    Input,
    initTE,
    Select
} from "tw-elements";

initTE({ Input, Select });
export default {
    components: {
        Modal
    },
    methods: {
        openModal() {
            this.$refs.modalComponent.openModal();
        },
        closeModal() {
            this.$refs.modalComponent.closeModal();
        },
    },
}
</script>
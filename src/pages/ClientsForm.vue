<template>
    <Modal ref="modalComponent">
        <template v-slot:header>
            <div>Add new client</div>
        </template>

        <template v-slot:body>
            PENE
        </template>

        <template v-slot:footer>
            <Button label="Save" />
            <Button label="Cancel" bgColorClass="bg-red-700" @click="closeModal()"/>
        </template>
    </Modal>
</template>

<script>
import Modal from '../components/Modal.vue';

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
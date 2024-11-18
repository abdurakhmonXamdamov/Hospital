<template>
    <header-part/>
    <spec-modal/>
    <spec-table/>
</template>

<script>
import specModal from '@/components/spec/specModal.vue';
import specTable from '@/components/spec/specTable.vue';

export default {
    components: {
        specModal,
        specTable,
    },
}
</script>

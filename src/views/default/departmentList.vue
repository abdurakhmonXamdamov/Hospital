<template>
    <header-part/>
    <departmentModal/>
    <TableDepartment/>
</template>

<script>
import departmentModal from '@/components/departments/departmentModal.vue';
import TableDepartment from '@/components/departments/tableDepartment.vue';

export default {
    components: {
        departmentModal,
        TableDepartment,
    },
}
</script>
<style lang="">
    
</style>
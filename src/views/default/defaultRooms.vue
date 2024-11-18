<template>
    <headerPart/>
    <TableRoom/>
    <modal-room />
</template>

<script>
import TableRoom from '@/components/room/tableRoom.vue';
import modalRoom from '@/components/room/modalRoom.vue';

export default {
    components: {TableRoom, modalRoom },
}
</script>
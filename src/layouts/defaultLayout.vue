<template>
    <div>
        <defoultSidebar/>
        <div class="lg:pl-72">
            <defaultHeader/>
            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                <router-view/>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import defaultHeader from '@/components/dashboard/defaultHeader.vue';
import defoultSidebar from '@/components/dashboard/defoultSidebar.vue';

export default {
    components: {
        defaultHeader,
        defoultSidebar,
    },
    data: () => ({
        show: false,
        title: ''
    }),
}
</script>

<template>
     <div class="md:flex md:items-center md:justify-between">
    <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ $route?.meta?.name }}</h2>
    </div>
    <div class="mt-4 flex md:ml-4 md:mt-0">
        <button type="button" @click="open" class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Yangi {{ $route?.meta?.name?.slice(0, $route?.meta?.name.length-3).toLowerCase() }}</button>
    </div>
    </div>
</template>
<script>

export default {
    methods: {
        open() {
            this.$store.commit('setToggle', true)
        }
    }
}
</script>

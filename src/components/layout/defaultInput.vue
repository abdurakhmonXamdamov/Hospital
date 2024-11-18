<template>
    <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">
        {{ label }}
    </label>
    <div class="mt-2">
        <input 
        
        :id="name" 
        :name="name" 
        :type="type || 'text'" 
        :autocomplete="name" 
        required=""
        class="input" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: ['modelValue', 'label', 'name', 'type', '_ref']
    // props: {
    //     modelValue: String,
    //     label: {
    //         type: String,
    //         required: true
    //     },
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     type: {
    //         type: String,
    //         default: 'text'
    //     }
    // }
}
</script>
<style lang="">
    
</style>
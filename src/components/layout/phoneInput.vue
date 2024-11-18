<template>
    <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">
        {{ label }}
    </label>
    <div class="mt-2">
        <input 
        v-maska="'+998 (##) ###-##-##'"
        :ref="_ref || name" :id="name" :name="name" :type="type || 'text'" :autocomplete="name" required=""
            class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>
<script>
import { vMaska } from "maska/vue"
export default {
    directives: { maska: vMaska },
    emits: ['update:modelValue'],
    props: ['modelValue', 'label', 'name', 'type', '_ref']
}
</script>

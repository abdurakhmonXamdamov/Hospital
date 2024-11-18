<template>
    <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
    <select 
    :id="name" required :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :name="name"
        class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option value="">{{ placeholder || "Ro'yhatdan tanlang" }}</option>
        <option v-for="item, index of list" :key="item._id" :value="item[fieldName]">
            {{ item[labelName] }}
        </option>
    </select>

</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: ['label', 'name', 'modelValue', 'list', 'fieldName', 'labelName', 'placeholder']
}
</script>

<template>
    <div>
        <button
            class="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 text-white font-bold text-xs py-2 px-4 rounded-full shadow-md">
            {{props.buttonText}}
        </button>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    buttonText: {
        type: String,
        default: 'Insert Button Text'
    }
})
</script>
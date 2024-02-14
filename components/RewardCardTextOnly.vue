<template>
    <div class="flex RewardCardTextOnly-bg-color border shadow-sm rounded-md h-[100px] w-[400px]" style="align-items: center">
        <div class="p-4 text-3xl ext-orange-500 RewardCardTextOnly-text-box flex justify-center">
            {{ props.cardText }}
        </div>
        <div class="RewardCardTextOnly-side-logo-box flex items-end h-[100px]">
            <div><img src="~/assets/images/logo_side.png"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    cardText: {
        type: String,
        default: 'Insert Text'
    }
})
</script>

<style scoped>
.RewardCardTextOnly-bg-color {
    background-color: #1C446A;
}
.RewardCardTextOnly-text-box {
  flex: 1;
}
.RewardCardTextOnly-side-logo-box {
  flex: 0, 75px;
}
</style>


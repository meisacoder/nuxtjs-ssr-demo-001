<script lang="ts" setup>
const props = defineProps({
	buttonText: {
		type: String,
		default: "3rd party Sign-up Button"
	},
})

</script>

<template>
  <div>
    <button class="">
      {{ props.buttonText }}
    </button>
  </div>
</template>

<style scoped></style>

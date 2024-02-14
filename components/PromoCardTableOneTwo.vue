<template>
	<table class=" text-center text-sm font-light">
		<tr>
			<td class="whitespace-nowrap px-3 py-2 font-medium">
				<div class="w-[20px] h-[20px] bg-orange-400 rounded-full flex 
	 justify-center items-center">
					<p>1</p>
				</div>
			</td>
			<td class="whitespace-wrap px-3 py-2 text-left text-lg text-orange-400 font-bold pb-0">
				<h6>US$200 credits </h6>
			</td>
		</tr>
		<tr>
			<td class="whitespace-nowrap px-3 py-2 font-medium">
			</td>
			<td class="whitespace-wrap px-3 py-2 text-left text-lg text-white pt-0">
				<p>when you open an account and deposit US$200</p>
			</td>
		</tr>
		<tr>
			<td class="whitespace-nowrap px-3 py-2 font-medium">
				<div class="w-[20px] h-[20px] bg-orange-400 rounded-full flex 
	 justify-center items-center">
					<p>2</p>
				</div>
			</td>
			<td class="whitespace-wrap px-3 py-2 text-left text-lg text-orange-400 font-bold pb-0">
				<h6>US$20 credits</h6>
			</td>
		</tr>
		<tr>
			<td class="whitespace-nowrap px-3 py-2 font-medium">
			</td>
			<td class="whitespace-wrap px-3 py-2 text-left text-lg text-white pt-0">
				<p>for every lot you trade, up to 20 lots</p>
			</td>
		</tr>
		<tr>
			<td class="whitespace-nowrap px-3 py-2 font-medium">
			</td>
			<td class="whitespace-wrap px-3 py-2 text-left text-lg text-white pt-0">
				<div v-if="computedWindowWidth.valueOf() >= 640">
					<div>
						<ButtonWithShadow button-text="Create Live Account" class="mr-2 mt-2 inline-block mt-10" />
						<ButtonWithShadow button-text="Download MT4 Platform" class="mt-2 inline-block" />
					</div>
				</div>
			</td>
		</tr>
	</table>
</template>

<script lang="ts" setup>
// const props = defineProps({
// 	windowWidth: {
// 		type: Number,
// 		default: 640
// 	}
// })
const myGlobalObject = useMyGlobalObject();
const computedWindowWidth = computed(() => myGlobalObject.windowWidth.value);
</script>

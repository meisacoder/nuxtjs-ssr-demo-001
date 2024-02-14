<template>
	<div class="bg-cover bi-center w-[340px] h-[273px]" :id=stepBgId.toString()>
	          <div class="text-white pt-[100px] px-10">{{props.descriptionText}}</div>
	</div>
</template>
<style scope>
#Step-1 {
	background-image: url('~/assets/images/Step01.png');
}
#Step-2 {
	background-image: url('~/assets/images/Step02.png');
}
#Step-3 {
	background-image: url('~/assets/images/Step03.png');
}
</style>

<script lang="ts" setup>
const props = defineProps({
	step: {
		type: Number,
		default: 1
	},
	descriptionText: {
		type: String,
		default: "Please enter a description"
	}
})

const stepBgId:String = getStepBgId(props.step);

function getStepBgId(step:number): String {
	const stepsObj = [
		'Step-1',
		'Step-2',
		'Step-3'
	]
	return stepsObj[step - 1];
}
</script>
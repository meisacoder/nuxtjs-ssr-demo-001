<template>
  <div class="bg-cover flex flex-row items-center w-[420px] h-[260px]"
    :id=guideBgId.toString()> <!-- sm:w-[113px] sm:h-[91px] md:w-[226px] md:h-[182px] xl:w-[340px] xl:h-[273px] -->
    <div class="text-white pt-[100px] sm:text-sm">{{ props.descriptionText }}</div> 
    <!--  w-[420px] h-[260px] sm:w-[140px] sm:h-[86px] md:w-[240px] md:h-[172px] xl:w-[420px] xl:h-[260px] -->
  </div>
</template>
<style scope>
#Guide-1 {
  background-image: url('~/assets/images/guides_01.png');
}

#Guide-2 {
  background-image: url('~/assets/images/guides_02.png');
}

#Guide-3 {
  background-image: url('~/assets/images/guides_03.png');
}
</style>

<script lang="ts" setup>
const props = defineProps({
  guide: {
    type: Number,
    default: 1
  },
  descriptionText: {
    type: String,
    default: "Please enter a description"
  }
})

const guideBgId: String = getGuideBgId(props.guide);

function getGuideBgId(step: number): String {
  const stepsObj = [
    'Guide-1',
    'Guide-2',
    'Guide-3'
  ]
  return stepsObj[step - 1];
}
</script>
<template>
	<div>
		<SectionOne />
		<SectionTwo />
		<SectionThree />
		<SectionFour />
	</div>
</template>

<script>
	import SectionOne from './SectionOne.vue'
	import SectionTwo from './SectionTwo.vue'
	import SectionThree from './SectionThree.vue'
	import SectionFour from './SectionFour.vue'

	export default {
        name: 'Contents',

        components: {
			SectionOne,
			SectionTwo,
			SectionThree,
			SectionFour,
        },
	}
</script>
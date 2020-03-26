<template>
	<div
		class="vue-skeleton-circle"
		ref="vueSkeletonCircle"
		:style="{
			backgroundColor: backColor,
			width: diameter,
			height: diameter,
			'border-radius': '50%',
			margin: margin,
		}"
	/>
</template>

<script>
export default {
	name: 'skeleton-circle',
	props: {
		backColor: {
			type: String,
			default: '#efefef',
		},
		diameter: {
			type: String,
			default: '50px',
		},
		margin: {
			type: String,
			default: '0 0 0 0',
		},
	},
	data() {
		return {};
	},
};
</script>

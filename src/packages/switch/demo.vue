<template>
	<div class="demo-list">
		<h4>基本用法</h4>
		<div>
			<nut-cell>
				<span slot="title"><nut-switch :active.sync="swActive" /></span>
				<div slot="desc">{{ swActive }}</div>
			</nut-cell>
		</div>

		<h4>自定义尺寸</h4>
		<div>
			<nut-cell>
				<span slot="title"><nut-switch :active="true" size="small" /></span>
				<div slot="desc">small</div>
			</nut-cell>
			<nut-cell>
				<span slot="title"><nut-switch :active="true" size="base" /></span>
				<div slot="desc">base</div>
			</nut-cell>
			<nut-cell>
				<span slot="title"><nut-switch :active="true" size="large" /></span>
				<div slot="desc">large</div>
			</nut-cell>
		</div>
		<p>内置"small","base","large"三种规格</p>

		<h4>change事件</h4>
		<div>
			<nut-cell>
				<span slot="title"><nut-switch @change="onChange" /></span>
			</nut-cell>
		</div>

		<h4>禁用状态</h4>
		<div>
			<nut-cell>
				<span slot="title"><nut-switch :disabled="true" /></span>
			</nut-cell>
			<nut-cell>
				<span slot="title"><nut-switch @change="onChange" :active="true" :disabled="true" /></span>
			</nut-cell>
		</div>
		<p>禁用状态下，change事件参数永远为初始值</p>

		<h4>自定义Class</h4>
		<div>
			<nut-cell>
				<span slot="title"><nut-switch :active="true" class="my-switch" /></span>
			</nut-cell>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			swActive: true,
		};
	},
	methods: {
		onChange(status) {
			alert(status);
		},
	},
};
</script>

<style lang="scss">
.my-switch.nut-switch {
	border-radius: 3px;
	border-color: #ccc;
	background-color: #ccc;

	.nut-switch-btn {
		border: 2px solid #fff;
		box-shadow: none;
		background-color: #fff;
		border-radius: 3px;
	}

	&.nut-switch-active {
		border-color: #0092e6;
		background-color: #0092e6;

		.nut-switch-btn {
			background-color: #fff;
		}
	}
}
</style>

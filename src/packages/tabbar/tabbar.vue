<template>
	<div class="nut-tabbar" :class="{ bottom: bottom }">
		<a
			class="tabbar-nav"
			v-for="(value, index) in tabList"
			:class="[{ curr: value.curr }, type == 'card' ? 'bor-right' : null]"
			:key="value.tabTitle"
			@click="switchTabs(value, index)"
			:href="value.href"
		>
			<span class="icon-box">
				<b class="tips" v-if="value.num">{{ value.num }}</b>
				<template v-if="value.icon">
					<div class="icon" v-if="value.curr" :style="{ backgroundImage: 'url(' + value.activeIcon + ')' }" />
					<div class="icon" v-if="!value.curr" :style="{ backgroundImage: 'url(' + value.icon + ')' }" />
				</template>

				<span :class="['tabbar-nav-word', { 'big-word': !value.icon }]">{{ value.tabTitle }}</span>
			</span>
		</a>
	</div>
</template>
<script>
export default {
	name: 'nut-tabbar',
	props: {
		tabbarList: {
			type: Array,
			default: () => [],
		},
		bottom: {
			type: Boolean,
			default: false,
		},
		type: {
			type: String,
			default: 'based',
		},
	},
	data() {
		return {
			tabList: this.tabbarList,
		};
	},
	computed: {},
	mounted() {},
	methods: {
		closeItem(value, e) {
			this.$emit('delete-tabs', value);
		},
		switchTabs(value, index) {
			const newArr = [...this.tabList];
			newArr.forEach((item, idx) => {
				if (index == idx) {
					item.curr = true;
				} else {
					item.curr = false;
				}
			});
			this.tabList = newArr;
			this.$emit('tab-switch', value, index);
		},
	},
};
</script>

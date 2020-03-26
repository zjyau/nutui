<template>
	<div>
		<h5>示例</h5>
		<h6>默认用法</h6>
		<nut-textbox />
		<h6>自定义高度:100px</h6>
		<nut-textbox :txt-area-h="100" :max-num="300" />

		<h6>自定义提示语</h6>
		<nut-textbox :place-text="'请填写详细情况请填写详细情况'" />

		<h6>自定义字数限制</h6>
		<nut-textbox :max-num="100" />

		<h6>限制字数不可超出</h6>
		<nut-textbox :switch-max="true" :max-num="10" :txt-area-h="100" text-bg-color="#efefef" />

		<h6>字数超出报错</h6>
		<nut-textbox :max-num="10" :txt-area-h="100" @errorFunc="overLength" />

		<h6>自定义文本框背景色</h6>
		<nut-textbox :switch-max="true" :max-num="10" :txt-area-h="100" text-bg-color="#feefef" />

		<h6>不显示字数限制</h6>
		<nut-textbox :limit-show="false" :max-num="10" />

		<h6>输入回调返回文字</h6>
		<nut-textbox :max-num="10" txt-area-h="100" @inputFunc="inputText" />
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		overLength() {
			alert('字数超出');
		},
		inputText(val) {
			alert(val);
		},
	},
};
</script>

<style lang="scss" scoped></style>

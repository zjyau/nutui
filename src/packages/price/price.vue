<template>
	<div class="nut-price" v-html="priceShow"><span /></div>
</template>
<script>
export default {
	name: 'nut-price',
	props: {
		price: {
			type: [Number, String],
			default: 0,
		},
		needSymbol: {
			type: Boolean,
			default: true,
		},
		decimalDigits: {
			type: [Number, String],
			default: 2,
		},
		thousands: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {};
	},
	computed: {
		priceShow() {
			const self = this;
			const symbol = self.needSymbol ? '<span class="price-symbol">￥</span>' : '';
			return symbol + self.formatToHump(self.price);
		},
	},
	methods: {
		// 判断是否为小数点
		checkPoint(num) {
			return String(num).indexOf('.') > 0;
		},

		// 将数字转换成驼峰形式
		formatToHump(num) {
			const self = this;
			num = String(num).replace('￥', '');
			if (self.checkPoint(num)) {
				const numArray = String(num).split('.');
				return (
					'<span class="price-big">' +
					self.formatThousands(numArray[0]) +
					'</span><span class="price-point">.</span><span class="price-small">' +
					self.formatDecimal(numArray[1]) +
					'</span>'
				);
			}
			return (
				'<span class="price-big">' +
				self.formatThousands(num) +
				'</span><span class="price-point">.</span><span class="price-small">' +
				self.formatDecimal(0) +
				'</span>'
			);
		},

		// 根据小数位数格式化小数部分
		formatDecimal(decimalNum) {
			const self = this;
			const { decimalDigits } = self;
			const result = '0.' + String(decimalNum);
			const resultFixed = (result / 1).toFixed(decimalDigits);
			return String(resultFixed).substring(2, resultFixed.length);
		},
		// 千分位显示
		formatThousands(num) {
			const self = this;
			const result = '';
			// let
			if (self.thousands) {
				return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
			}
			return num;
		},
	},
};
</script>

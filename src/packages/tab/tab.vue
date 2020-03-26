<template>
	<div v-if="showTabs">
		<div class="nut-tab" :class="{ 'nut-tab-leftnav': positionNavCss }">
			<template v-if="positionNav == 'top'">
				<div :class="['nut-tab-title', tabType]">
					<b class="nav-bar" :style="[{ transform: 'translateX(' + initX + 'px)' }, { width: navWidth + 'px' }]" />
					<span
						v-for="(value, index) in tabTitleList"
						:key="index"
						@click="switchTab(index, $event, value.disable)"
						class="nut-title-nav-list"
						:class="['nut-title-nav', { 'nut-tab-disable': value.disable }, { 'nut-tab-active': activeIndex == index }]"
					>
						<b v-if="closable" class="close-btn" @click="closeItem(value)">x</b>
						<a :href="value.href" :clstag="value.clstag" class="nut-tab-link" @click="switchTabLink(index, $event, value.disable)">
							<i class="nut-tab-icon" :style="{ backgroundImage: 'url(' + value.iconUrl + ')' }" v-if="value.iconUrl" />
							{{ value.tabTitle }}
						</a>
					</span>
				</div>
				<div class="nut-tab-item" v-show="contentShow">
					<slot />
				</div>
			</template>
			<template v-else-if="positionNav == 'left'">
				<div :class="['nut-tab-title-leftnav', tabType]">
					<b class="nav-bar-left" :style="[{ transform: 'translateY(' + initX + 'px)' }, { height: navWidth + 'px' }]" />
					<span
						v-for="(value, index) in tabTitleList"
						:key="index"
						@click="switchTab(index, $event, value.disable)"
						class="nut-title-nav-leftnav"
						:class="['nut-title-nav', { 'nut-tab-disable': value.disable }, { 'nut-tab-active': activeIndex == index }]"
					>
						<b v-if="closable" class="close-btn" @click="closeItem(value)">x</b>
						<a :href="value.href" :clstag="value.clstag" class="nut-tab-link" @click="switchTabLink(index, $event, value.disable)">
							<i class="nut-tab-icon" :style="{ backgroundImage: 'url(' + value.iconUrl + ')' }" v-if="value.iconUrl" />
							{{ value.tabTitle }}
						</a>
					</span>
				</div>
				<div class="nut-tab-item" v-show="contentShow">
					<slot />
				</div>
			</template>
			<template v-else-if="positionNav == 'right'">
				<div class="nut-tab-item" v-show="contentShow">
					<slot />
				</div>
				<div :class="['nut-tab-title-rightnav', tabType]">
					<b class="nav-bar-right" :style="[{ transform: 'translateY(' + initX + 'px)' }, { height: navWidth + 'px' }]" />
					<span
						v-for="(value, index) in tabTitleList"
						:key="index"
						@click="switchTab(index, $event, value.disable)"
						class="nut-title-nav-rightnav"
						:class="['nut-title-nav', { 'nut-tab-disable': value.disable }, { 'nut-tab-active': activeIndex == index }]"
					>
						<b v-if="closable" class="close-btn" @click="closeItem(value)">x</b>
						<a :href="value.href" :clstag="value.clstag" class="nut-tab-link" @click="switchTabLink(index, $event, value.disable)">
							{{ value.tabTitle }}
							<i class="nut-tab-icon" :style="{ backgroundImage: 'url(' + value.iconUrl + ')' }" v-if="value.iconUrl" />
						</a>
					</span>
				</div>
			</template>
			<template v-else-if="positionNav == 'bottom'">
				<div class="nut-tab-item" v-show="contentShow">
					<slot />
				</div>
				<div :class="['nut-tab-title-bottomnav', tabType]">
					<b class="nav-bar-bottom" :style="[{ transform: 'translateX(' + initX + 'px)' }, { width: navWidth + 'px' }]" />
					<span
						v-for="(value, index) in tabTitleList"
						:key="index"
						@click="switchTab(index, $event, value.disable)"
						class="nut-title-nav-list"
						:class="['nut-title-nav', { 'nut-tab-disable': value.disable }, { 'nut-tab-active': activeIndex == index }]"
					>
						<b v-if="closable" class="close-btn" @click="closeItem(value)">x</b>
						<a :href="value.href" :clstag="value.clstag" class="nut-tab-link" @click="switchTabLink(index, $event, value.disable)">
							<i class="nut-tab-icon" :style="{ backgroundImage: 'url(' + value.iconUrl + ')' }" v-if="value.iconUrl" />
							{{ value.tabTitle }}
						</a>
					</span>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
export default {
	name: 'nut-tab',
	props: {
		type: {
			type: String,
			default: 'based',
		},
		defIndex: {
			type: Number,
			default: 0,
		},
		contentShow: {
			type: Boolean,
			default: true,
		},
		positionNav: {
			type: String,
			default: 'top',
		},
		closable: {
			type: Boolean,
			default: false,
		},
		initData: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			tabTitleList: [],
			isShowTab: this.defIndex,
			activeIndex: this.defIndex,
			initIndex: 0,
			showTabs: true,
			initX: '0px',
			navWidth: 0,
		};
	},
	computed: {
		tabType() {
			return this.type;
		},
		positionNavCss() {
			if (this.positionNav == 'top' || this.positionNav == 'bottom') {
				return false;
			}
			return true;
		},
	},
	watch: {
		initData() {
			setTimeout(() => {
				const slot = [...this.$slots.default];
				this.tabTitleList = [];
				this.activeIndex = this.defIndex;
				this.initTab(slot);
			}, 100);
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.$slots.default && this.initTab(this.$slots.default);
		});
	},
	methods: {
		closeItem(value) {
			this.$emit('tab-remove', value);
			setTimeout(() => {
				this.tabTitleList = [];
				if (this.$slots.default) {
					const slot = [...this.$slots.default];
					this.initTab(slot);
				} else {
					this.showTabs = false;
				}
			}, 10);
		},
		initTab(params) {
			const slot = params;
			for (let i = 0; i < slot.length; i++) {
				const aa = slot[i].tag;
				if (typeof aa === 'string') {
					if (slot[i].tag.indexOf('nut-tab-panel') != -1) {
						const item = {
							tabTitle: slot[i].data.attrs.tabTitle,
							disable: slot[i].data.attrs.disable == '',
							iconUrl: slot[i].data.attrs.iconUrl,
							clstag: slot[i].data.attrs.clstag,
							href: slot[i].data.attrs.tabLink ? slot[i].data.attrs.tabLink : 'javascript:void(0)',
						};
						this.tabTitleList.push(item);
						const slotElm = slot[i].elm;
						if (slotElm) {
							this.addClass(slotElm, 'hide');
							if (this.isShowTab == i) {
								this.removeClass(slotElm, 'hide');
							}
						}
					}
				}
			}
			setTimeout(() => {
				this.getTabWidth();
			}, 0);
		},
		getStyle(obj, styleName) {
			if (obj.currentStyle) {
				return obj.currentStyle[styleName];
			}
			return getComputedStyle(obj, null)[styleName];
		},
		getTabWidth() {
			if (this.positionNav == 'top' || this.positionNav == 'bottom') {
				const tabTitle = document.querySelector('.nut-tab-title');
				const tabWidth = this.getStyle(tabTitle, 'width');
				const tabWidthNum = tabWidth.substring(0, tabWidth.length - 2);
				const navBarWidth = tabWidthNum / this.tabTitleList.length;
				this.navWidth = navBarWidth;
				this.initX = parseInt(this.navWidth * this.defIndex);
			} else {
				const tabTitle = document.querySelector('.nut-tab-title-leftnav') || document.querySelector('.nut-tab-title-rightnav');
				const tabWidth = this.getStyle(tabTitle, 'height');
				const tabWidthNum = tabWidth.substring(0, tabWidth.length - 2);
				const navBarWidth = tabWidthNum / this.tabTitleList.length;
				this.navWidth = navBarWidth;
				this.initX = parseInt(this.navWidth * this.defIndex);
			}
		},
		hasClass(elements, cName) {
			return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)')); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
		},
		addClass(elements, cName) {
			if (!this.hasClass(elements, cName)) {
				elements.className += ' ' + cName;
			}
		},
		removeClass(elements, cName) {
			if (this.hasClass(elements, cName)) {
				elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' '); // replace方法是替换
			}
		},
		switchTabLink(index, event, disable) {
			if (!disable) {
				event.target.parentNode.click();
			}
		},
		switchTab(index, event, disable) {
			if (!disable && event.target.className.indexOf('nut-title-nav') !== -1) {
				this.activeIndex = index;
				this.initX = parseInt(this.navWidth * index);
				const nutTab = event.target.parentNode.parentNode;
				const items = this.positionNav == 'bottom' || this.positionNav == 'right' ? nutTab.children[0].children : nutTab.children[1].children;
				for (let i = 0; i < items.length; i++) {
					if (i == index) {
						this.removeClass(items[i], 'hide');
					} else {
						this.addClass(items[i], 'hide');
					}
				}
				this.$emit('tab-switch', index, event);
			}
		},
	},
};
</script>

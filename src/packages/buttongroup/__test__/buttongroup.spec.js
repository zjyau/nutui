import { shallowMount, mount } from '@vue/test-utils';
import ButtonGroup from '../buttongroup.vue';
import Vue from 'vue';

describe('ButtonGroup.vue', () => {
	it('设置shape', () => {
		const wrapper = shallowMount(ButtonGroup, {
			slots: {
				default: '<div>测试</div>',
			},
			propsData: {
				shape: 'circle',
			},
		});
		return Vue.nextTick().then(() => {
			expect(wrapper.attributes('class')).toContain('circle');
		});
	});
	it('设置type', () => {
		const wrapper = shallowMount(ButtonGroup, {
			slots: {
				default: '<div>测试</div>',
			},
			propsData: {
				type: 'menu',
			},
		});
		return Vue.nextTick().then(() => {
			expect(wrapper.attributes('class')).toContain('menu');
		});
	});
});

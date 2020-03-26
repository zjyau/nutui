import { shallowMount, mount } from '@vue/test-utils';
import Icon from '../icon.vue';
import Vue from 'vue';

describe('Icon.vue', () => {
	const wrapper = shallowMount(Icon, {
		propsData: {
			type: 'top',
		},
	});

	it('图标展示', () =>
		// wrapper.setProps({ type: 'top' });

		Vue.nextTick().then(() => {
			expect(wrapper.contains('.nut-icon-top')).toBe(true);
		}));
});

import {
	createComponent,
	defineComponent,
	ref,
	reactive,
	watch,
	onMounted,
	onUpdated,
	onUnmounted,
	computed,
	isRef,
	toRefs,
	provide,
	inject
} from '@vue/composition-api';

export const nCreateComponent = componentOptions => createComponent(componentOptions);

export const nDefineComponent = componentOptions => defineComponent(componentOptions);

export const nRef = value => ref(value);

export const nReactive = obj => reactive(obj);

export const nWatch = (source, callback, options) => watch(source, callback, options);

export const nOnMounted = (callback: Function) => onMounted(callback);

export const nOnUpdated = (callback: Function) => onUpdated(callback);

export const nOnUnmounted = (callback: Function) => onUnmounted(callback);

export const nComputed = options => computed(options);

export const nIsRef = value => isRef(value);

export const nToRefs = obj => toRefs(obj);

export const nProvide = (key, value) => provide(key, value);

export const nInject = (key, defaultValue) => inject(key, defaultValue);

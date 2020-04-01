import {
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
	inject,
	onActivated,
	onDeactivated,
	onBeforeMount,
	onBeforeUnmount,
	onBeforeUpdate,
	onErrorCaptured,
} from '@vue/composition-api';

export const nDefineComponent = defineComponent;

export const nRef = ref;

export const nReactive = reactive;

export const nWatch = watch;

export const nComputed = computed;

export const nIsRef = isRef;

export const nToRefs = toRefs;

export const nProvide = provide;

export const nInject = inject;

export const nOnMounted = onMounted;

export const nOnUpdated = onUpdated;

export const nOnUnmounted = onUnmounted;

export const nOnActivated = onActivated;

export const nOnDeactivated = onDeactivated;

export const nOnBeforeMount = onBeforeMount;

export const nOnBeforeUnmount = onBeforeUnmount;

export const nOnBeforeUpdate = onBeforeUpdate;

export const nOnErrorCaptured = onErrorCaptured;

import Vue from 'vue';
import settings from './dialog.vue';

const DialogConstructor = Vue.extend(settings);

let inst;

const Dialog = function (options) {
	options.id = options.id || 'nut-dialog-default-id';
	if (options.type === 'image' && typeof options.closeBtn === 'undefined') {
		options.closeBtn = true;
	}

	inst = new DialogConstructor({
		propsData: options,
	});

	inst.vm = inst.$mount();

	const dialogDom = document.querySelector('#' + options.id);
	if (options.id && dialogDom) {
		dialogDom.parentNode.replaceChild(inst.$el, dialogDom);
	} else {
		document.body.appendChild(inst.$el);
	}

	setTimeout(() => {
		//  设置z-index保证最新的弹窗再最上面
		const dialogThis = document.querySelector('#' + options.id);
		const nutDialogWrapper = document.getElementsByClassName('nut-dialog-wrapper');
		const zIndexNum = 100 + 10 * nutDialogWrapper.length;
		dialogThis.style.zIndex = zIndexNum;
		setTimeout(() => {
			for (let i = 0; i < nutDialogWrapper.length; i++) {
				nutDialogWrapper[i].style.zIndex = zIndexNum - 1 - i;
			}
		}, 0);
	}, 10);

	Vue.nextTick(() => {
		inst.visible = true;
	});
};

export default Dialog;

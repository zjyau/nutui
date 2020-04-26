import { version } from '../package.json';
import { packages as pkgList } from './config.json';
import { locale } from './locales';
import VueCompositionApi from '@vue/composition-api';
import Avatar from './packages/avatar/index.js';
import './packages/avatar/avatar.scss';

const packages = {
	Avatar,
};

const components = {};
const methods = {};
const filters = {};
const directives = {};
pkgList.map((item) => {
	const pkg = packages[item.name];
	if (!pkg) return;

	if (item.type == 'component') {
		if (pkg.name) {
			components[pkg.name] = pkg;
		} else {
			for (const n in pkg) {
				components[n] = pkg[n];
			}
		}
	} else if (item.type == 'method') {
		methods[item.name] = pkg;
	} else if (item.type == 'filter') {
		filters[item.name] = pkg;
	} else if (item.type == 'directive') {
		directives[item.name] = pkg;
	}
});

const install = function (Vue, opts = {}) {
	if (install.installed) return;

	if (opts.locale) {
		Vue.config.lang = opts.locale;
	}

	if (opts.lang) locale(Vue.config.lang, opts.lang);

	for (const cptName in methods) {
		if (Array.isArray(methods[cptName])) {
			Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName][0];
			Vue.component(methods[cptName][1].name, methods[cptName][1]);
		} else {
			Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName];
		}
	}

	for (const cptName in components) {
		if (components[cptName] && components[cptName].name) {
			Vue.component(components[cptName].name, components[cptName]);
		}
	}

	for (const cptName in filters) {
		if (filters[cptName] && filters[cptName].name) {
			Vue.filter(cptName, filters[cptName]);
		}
	}

	for (const cptName in directives) {
		if (directives[cptName] && directives[cptName].name) {
			Vue.directive(directives[cptName].name, directives[cptName]);
		}
	}
	Vue.use(VueCompositionApi);
	// Vue.use(Lazyload, {
	// 	lazyComponent: true,
	// 	loading: '//img12.360buyimg.com/imagetools/jfs/t1/73967/28/14561/916/5dc142e4E0666555b/bf33454553c6035e.png',
	// });
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	version,
	locale,
	install,
	// Lazyload,
	...components,
	...filters,
	...directives,
	...methods,
};

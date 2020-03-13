import TextBoxx from './textboxx.vue';
import './textboxx.scss';

TextBoxx.install = function(Vue) {
  Vue.component(TextBoxx.name, TextBoxx);
};

export default TextBoxx
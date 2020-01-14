<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>国际化</h1><p>NutUI 2.0 以上版本支持多语言。组件默认使用中文，支持加载其他语言包来实现多语言切换功能。除了组件本身的语言切换以外，用户还可以调用相关的语言转换方法来支持其他功能的国际化。具体使用方法如下：</p>
<h2 class='visibility' id='head1'>使用方法</h2><h3 class='visibility' id='headnull'>引用整个组件库</h3><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> NutUI <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui'</span>;

<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui/dist/locales/lang/en-US'</span>;

Vue.use(NutUI, {
  locale: <span class="hljs-string">'en-US'</span>,
  lang: enUS
});</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3 class='visibility' id='headnull'>按需引用组件</h3><p>通过 <strong><a href="https://www.npmjs.com/package/@nutui/babel-plugin-separate-import">@nutui/babel-plugin-seperate-import</a></strong> 插件，我们可以根据项目需要引用 NutUI 的组件，最终只打包引用的组件，减少引入代码的体积。国际化功能同样支持按需引用的方式。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> {locale} <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui'</span>;

<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui/dist/locales/lang/en-US'</span>;

locale(<span class="hljs-string">'en-US'</span>, enUS);</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>请注意：通过该插件进行按需引用组件时默认引用的是构建后的文件，此时并不支持国际化的功能。如需使用组件库的国际化功能，需要在 babel 的配置文件（如.babelrc）中将 <strong>@nutui/babel-plugin-seperate-import</strong> 插件的 <strong>sourceCode</strong> 参数值设为 <strong>true</strong> 。这样插件将引用未经构建的源文件，同时引用的组件也不再具有 <code>install</code> 方法，请使用 <code>Vue.component</code> 对组件进行注册。</p>
</blockquote>
<hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash">{
  <span class="hljs-attr">"plugins"</span>: [
    [<span class="hljs-string">"@nutui/babel-plugin-separate-import"</span>, {
      <span class="hljs-attr">"sourceCode"</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">"style"</span>: <span class="hljs-string">"css"</span>
    }]
  ]
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2 class='visibility' id='head2'>兼容 vue-i18n</h2><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> VueI18n <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-i18n'</span>;
<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui/dist/locales/lang/en-US'</span>;

Vue.use(VueI18n);

Vue.locale = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {};
<span class="hljs-keyword">const</span> i18n = <span class="hljs-keyword">new</span> VueI18n({
  <span class="hljs-attr">locale</span>: <span class="hljs-string">'en-US'</span>,
  <span class="hljs-attr">messages</span>: {
    <span class="hljs-string">'en-US'</span>: enUS
  }
});


<span class="hljs-keyword">const</span> app = <span class="hljs-keyword">new</span> Vue({
  <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>,
  i18n
})
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2 class='visibility' id='head3'>语言切换</h2><p>使用 <strong>vue-i18n</strong> 时，可以通过调用 <strong>$t</strong> 方法来对某个位置做国际化支持的语言切换。我们也可以调用 NutUI 内置的语言切换方法 <strong>nutTranslate</strong> 来实现相同功能，而且还支持非常灵活的模板化传参方式。我们可以通过 <strong>mixin</strong> 将该语言切换方法混入到每个组件的 <strong>methods</strong>，方便直接调用。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> {i18n} <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui'</span>;

Vue.<span class="hljs-keyword">mixin</span>({
    methods: {
        nutTranslate() {
            <span class="hljs-keyword">return</span> i18n.apply(<span class="hljs-keyword">this</span>, arguments);
        }
    }
});


<span class="hljs-comment">// 使用 nutTranslate</span>
<span class="hljs-comment">// params 参数支持默认值、对象、数组、函数等格式</span>
&lt;nut-cell :title=<span class="hljs-string">"nutTranslate('demo.cell.title', params)"</span> /&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>一般来说，要实现全面的国际化，我们还需要将用户自己的语言包与组件库的语言包进行合并。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> {locale} <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui'</span>;
<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui/dist/locales/lang/en-US'</span>;
<span class="hljs-keyword">import</span> myEnUS <span class="hljs-keyword">from</span> <span class="hljs-string">'./path/to/lang/en-US'</span>;

<span class="hljs-built_in">Object</span>.assign(enUS, myEnUS);

locale(<span class="hljs-string">'en-US'</span>, enUS);</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<ul class="markList"><li @click="leavelchose(1)" :class="levalcur==1?'cur':''"  class="level1"><a href="#head1">使用方法</a></li><li @click="leavelchose(2)" :class="levalcur==2?'cur':''"  class="level2"><a href="#head2">兼容 vue-i18</a></li><li @click="leavelchose(3)" :class="levalcur==3?'cur':''"  class="level3"><a href="#head3">语言切换</a></li></ul><nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
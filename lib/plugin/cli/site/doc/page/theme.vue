<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>主题定制</h1><blockquote>
<p>定制主题须使用 NutUI 2.0 以上版本</p>
</blockquote>
<p>NutUI 默认提供一套 UI 主题，同时允许在一定程度上定制新的主题，以满足业务的多样化视觉需求。</p>
<p><img src="http://img14.360buyimg.com/uba/jfs/t1/14893/39/4803/92712/5c3478afEc0458edb/54e06165a4445661.png" alt="主题定制"></p>
<h2 class='visibility' id='head1'>样式变量</h2><p>NutUI 的样式是基于 <strong><a href="https://sass-lang.com/">SCSS</a></strong> 开发的，定义了一套默认样式变量，定制主题就是编辑这个变量列表。</p>
<p>以下是一些与颜色相关基本样式变量，所有可用的变量请参考配置文件。</p>
<hide><pre class="prettyprint"><span class="lang">scss</span><div class="code-wrapper"><code class="language-scss"><span class="hljs-variable">$primary-color</span>: <span class="hljs-number">#F0250F</span>;
<span class="hljs-variable">$normal-color</span>: <span class="hljs-number">#848484</span>;
<span class="hljs-variable">$link-color</span>: <span class="hljs-variable">$primary-color</span>;
<span class="hljs-variable">$link-hover-color</span>: mix(<span class="hljs-variable">$link-color</span> , <span class="hljs-number">#000</span>, <span class="hljs-number">80%</span>);
<span class="hljs-variable">$title-color</span>: <span class="hljs-number">#2D2D2D</span>;
<span class="hljs-variable">$text-color</span>: <span class="hljs-number">#848484</span>;
<span class="hljs-variable">$light-color</span>: <span class="hljs-number">#F6F6F6</span>;
<span class="hljs-variable">$dark-color</span>: <span class="hljs-number">#DADADA</span>;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2 class='visibility' id='head2'>定制主题</h2><h3 class='visibility' id='headnull'>第一步：新建自定义变量 SCSS 文件</h3><p>在本地项目中新建一个 <strong>SCSS</strong> 文件，包含上述变量，自定义变量值。</p>
<h3 class='visibility' id='headnull'>第二步：修改本地项目 webpack 的配置文件</h3><p>修改 webpack 配置文件中 <strong>sass-loader</strong> 的配置。在 <strong>options</strong> 的 <strong>data</strong> 属性值中，先后 import 你自定义的 SCSS 文件（如 <code>custom.scss</code>）和 NutUI 的样式变量配置文件（路径为 <strong>dist/styles/variable.scss</strong>）。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">{
    test: /\.(<span class="hljs-name">sa</span>|sc)ss$/,
    use: [
        {
            loader: 'sass-loader',
            options: {
                data: `@import <span class="hljs-string">"./asset/css/custom.scss"</span><span class="hljs-comment">; @import "@nutui/nutui/dist/styles/index.scss"; `,</span>
            }
        }
    ]
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>如果你的项目使用的是VueCLI 3以上版本 请修改 <code>vue.config.js</code> 进行配置</p>
<hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash">module.exports = {
<span class="hljs-symbol">    css:</span> {
<span class="hljs-symbol">        loaderOptions:</span> {
            <span class="hljs-comment">// 给 sass-loader 传递选项</span>
<span class="hljs-symbol">            scss:</span> {
                <span class="hljs-comment">// @/ 是 src/ 的别名</span>
                <span class="hljs-comment">// 注意：在 sass-loader v7 中，这个选项名是 "data"</span>
<span class="hljs-symbol">                prependData:</span> ` 
                @import <span class="hljs-string">"@/assets/custom_theme.scss"</span>;
                @import <span class="hljs-string">"@nutui/nutui/dist/styles/index.scss"</span>;
                `,
            }
        },
    }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3 class='visibility' id='headnull'>第三步：引用组件样式时引用 SCSS 文件</h3><p>在主题定制场景下，项目中引用组件时，需要引入 <strong>SCSS</strong> 文件，而不是 <strong>CSS</strong> 文件。分三种情况：</p>
<p>1.引用完整组件库时，需要引入 <strong>nutui.scss</strong> 文件</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-attribute">import</span> NutUI from <span class="hljs-string">'<span class="hljs-variable">@nutui</span>/nutui'</span>;
<span class="hljs-attribute">import</span> <span class="hljs-string">'<span class="hljs-variable">@nutui</span>/nutui/dist/nutui.scss'</span>;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>2.未使用插件，手动按需引用组件时，需手动引入组件对应的 SCSS 文件。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-attribute">import</span> Button from <span class="hljs-string">'<span class="hljs-variable">@nutui</span>/nutui/dist/packages/button/button.js'</span>;
<span class="hljs-attribute">import</span> <span class="hljs-string">'<span class="hljs-variable">@nutui</span>/nutui/dist/packages/button/button.scss'</span>;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>3.使用了插件 <strong><a href="https://www.npmjs.com/package/@nutui/babel-plugin-separate-import">@nutui/babel-plugin-seperate-import</a></strong> 进行按需引用时，需修改babel的配置文件（如.babelrc），将 <strong>style</strong> 的设置为 <strong>scss</strong>。该插件将会自动引入指定组件对应的 SCSS 文件。</p>
<hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash">{
  <span class="hljs-attr">"plugins"</span>: [
    [<span class="hljs-string">"@nutui/babel-plugin-separate-import"</span>, {
        <span class="hljs-attr">"libraryName"</span>: <span class="hljs-string">"@nutui/nutui"</span>,
        <span class="hljs-attr">"libraryDirectory"</span>: <span class="hljs-string">"dist/packages"</span>,
        <span class="hljs-attr">"style"</span>: <span class="hljs-string">"scss"</span>
    }]
  ]
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>VueCLI 3 相关Demo 请查看 <a href="https://github.com/richard1015/nutui-demo">NutUI Demo</a></p>
</blockquote>
<ul class="markList"><li @click="leavelchose(1)" :class="levalcur==1?'cur':''"  class="level1"><a href="#head1">样式变量</a></li><li @click="leavelchose(2)" :class="levalcur==2?'cur':''"  class="level2"><a href="#head2">定制主题</a></li></ul><nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
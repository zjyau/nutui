<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>快速上手</h1><h2 class='visibility' id='head1'>推荐工程</h2><p>我们提供一个命令行工具 <a href="https://www.npmjs.com/package/gaea-cli">Gaea CLI</a> ，可用来快速生成一个已经内置了本组件库的基于 Webpack 的 Vue 项目工程。基于这个工程开发项目，可省去大量配置和调试环境的时间，也可略过下面组件库安装使用部分内容直接进入开发阶段。</p>
<h2 class='visibility' id='head2'>安装</h2><ul>
<li>通过 NPM 或 YARN 安装（推荐）</li>
</ul>
<h4 class='visibility' id='headnull'>NPM</h4><hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash"><span class="hljs-built_in">npm</span> i @nutui/nutui -S</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h4 class='visibility' id='headnull'>YARN</h4><hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash"><span class="hljs-selector-tag">yarn</span> <span class="hljs-selector-tag">add</span> @<span class="hljs-keyword">nutui</span>/<span class="hljs-keyword">nutui</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>如果你的网络环境不佳，不妨试试国内的npm镜像</p>
</blockquote>
<blockquote>
<p>默认安装最新版，如需使用 1.x 版本，请指定版本号，如：  <code>npm i @nutui/nutui@1.3.2 -S</code></p>
</blockquote>
<ul>
<li>页面直接引用</li>
</ul>
<p>在页面中使用 script 和 link 标签直接引入文件，<strong>NutUI</strong> 将会自动注册。我们在 npm 发布包内的 dist 目录下提供了 <strong>nutui.js</strong> <strong>nutui.css</strong> 以及 <strong>nutui.min.js</strong> <strong>nutui.min.css</strong>。</p>
<p>当然你也可以通过 CDN 的方式引入， 可以在 <strong>jsdelivr</strong> 和 <strong>unpkg</strong> 等公共 CDN 上获取到 NutUI。我们推荐链接到一个你可以手动更新的指定版本号。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-comment">&lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;</span>
<span class="hljs-comment">&lt;!-- 引入样式 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/nutui.css"</span>&gt;</span>
<span class="hljs-comment">&lt;!-- 引入Vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-comment">&lt;!-- 引入组件库 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/nutui.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>或者</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-comment">&lt;!-- 生产环境版本，优化了尺寸和速度 --&gt;</span>
<span class="hljs-comment">&lt;!-- 引入样式 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/nutui.min.css"</span>&gt;</span>
<span class="hljs-comment">&lt;!-- 引入Vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-comment">&lt;!-- 引入组件库 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/nutui.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>CDN 引入示例</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 引入样式 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/nutui.min.css"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"showDialog"</span>&gt;</span>
            Button
        <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-comment">&lt;!-- 引入Vue --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 引入NutUI组件库 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/nutui.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
        <span class="hljs-keyword">new</span> Vue({
            el: <span class="hljs-string">'#app'</span>,
            methods: {
                showDialog() {
                    <span class="hljs-keyword">this</span>.$dialog({
                        title: <span class="hljs-string">"确定删除此订单？"</span>,
                        content: <span class="hljs-string">"删除后将从你的记录里消失，无法找回"</span>
                    });
                }
            }
        });
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>CDN 按需加载引入示例</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span>&gt;</span>cdn按需加载<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-comment">&lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;</span>
    <span class="hljs-comment">&lt;!-- 引入样式 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
      <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
      <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/packages/button/button.css"</span>
    /&gt;</span>
    <span class="hljs-comment">&lt;!-- 引入Vue --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 引入组件库 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.9/dist/packages/button/button.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="vbscript">
      Vue.component(button.<span class="hljs-keyword">default</span>.name, button.<span class="hljs-keyword">default</span>);
      <span class="hljs-keyword">new</span> Vue({
        el: <span class="hljs-string">"#app"</span>
      });
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>在页面中直接引入，将无法使用 <strong>主题定制</strong> 等功能。我们推荐使用 <em>NPM</em> 或 <em>YARN</em> 方式安装，不推荐在页面中直接引入的用法</p>
</blockquote>
<ul>
<li>通过 <strong>Vue CLI</strong> 图形化界面安装</li>
</ul>
<p>如果你的项目是使用 <a href="https://cli.vuejs.org/zh/">Vue CLI</a> 脚手架搭建，那么你还可以通过 <strong>Vue CLI</strong> 提供的图形化界面安装 <strong>NutUI</strong> ：在图形化界面的 <strong>依赖</strong> 界面，点击右上角 <strong>安装依赖</strong> 按钮，搜索 <strong>@nutui/nutui</strong> 安装即可。</p>
<h2 class='visibility' id='head3'>加载示例</h2><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> NutUI <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">'@nutui/nutui/dist/nutui.css'</span>;

NutUI.install(Vue);</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>注意：这种方式将会导入所有组件</p>
</blockquote>
<h2 class='visibility' id='head4'>按需加载</h2><p>以下两种方式都可以实现只加载用到的组件，从而减少加载的文件体积。</p>
<h3 class='visibility' id='headnull'>1. 使用 webpack 插件 <strong><a href="https://www.npmjs.com/package/@nutui/babel-plugin-separate-import">@nutui/babel-plugin-seperate-import</a></strong> (推荐)</h3><p>首先安装 <strong>@nutui/babel-plugin-separate-import</strong> 插件</p>
<hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash"><span class="hljs-selector-tag">npm</span> <span class="hljs-selector-tag">i</span> @<span class="hljs-keyword">nutui</span>/<span class="hljs-keyword">babel</span>-<span class="hljs-keyword">plugin</span>-<span class="hljs-keyword">separate</span>-<span class="hljs-keyword">import</span> -D</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>然后配置一下babel的配置文件</p>
<hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash">{
  <span class="hljs-attr">"plugins"</span>: [
    [<span class="hljs-string">"@nutui/babel-plugin-separate-import"</span>, {
        <span class="hljs-attr">"style"</span>: <span class="hljs-string">"css"</span>
    }]
  ]
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>style 选项值为 &quot;css&quot; 时加载组件对应的css文件，为 &quot;scss&quot; 时加载对应的scss文件。无style选项时，不自动加载样式文件。</p>
</blockquote>
<p>接下来，我们就可以在项目里只引入用到的组件了。默认情况下，样式也无需单独引入。插件会自动将代码转换为方式二的手动引入方式。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> { Dialog,Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui'</span>;

Dialog.install(Vue);
Picker.install(Vue);</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>如果需要按需加载 scss 文件（如需要自定义主题）时，除了需要把 style 选项值设为为 <strong>scss</strong> 外，还需要修改 webpack 配置文件的 sass-loader 配置，如下所示：</p>
<hide><pre class="prettyprint"><span class="lang">bash</span><div class="code-wrapper"><code class="language-bash">{
    <span class="hljs-attribute">loader</span>: <span class="hljs-string">'sass-loader'</span>,
    <span class="hljs-attribute">options</span>: {
        <span class="hljs-attribute">data</span>: <span class="hljs-built_in">`@import "@nutui/nutui/dist/styles/index.scss"; `</span>
    }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p><code>vue.config.js</code> VueCLI3 配置方式 </p>
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
<blockquote>
<p>VueCLI 3 相关Demo 请查看 <a href="https://github.com/richard1015/nutui-demo">NutUI Demo</a></p>
</blockquote>
<h3 class='visibility' id='headnull'>2. 手动引入</h3><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">'@nutui/nutui/dist/packages/button/button.js'</span>;  <span class="hljs-comment">// 加载构建后的JS</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'@nutui/nutui/dist/packages/button/button.css'</span>;  <span class="hljs-comment">//加载构建后的CSS</span>
<span class="hljs-comment">//主题定制等场景需要加载SCSS,而不是构建后的CSS</span>
<span class="hljs-comment">//import '@nutui/nutui/dist/packages/button/button.scss'; </span>

Button.install(Vue);</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2 class='visibility' id='head5'>组件使用</h2><p>1.使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-built_in">switch</span> :active=<span class="hljs-string">"true"</span> <span class="hljs-built_in">size</span>=<span class="hljs-string">"base"</span>&gt;&lt;/nut-<span class="hljs-built_in">switch</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>2.组件 css 单位使用的是 <strong>px</strong>，如果你的项目中需要 <strong>rem</strong> 单位，可借助一些工具进行转换，比如 <a href="https://www.webpackjs.com/">webpack</a> 的 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>、<a href="https://github.com/postcss/postcss">postcss</a> 的 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> 插件等</p>
<p>VueCLI3 配置示例 <code>vue.config.js</code></p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-attr">const</span> <span class="hljs-string">pxtorem = require('postcss-pxtorem');</span>
<span class="hljs-meta">module.exports</span> = <span class="hljs-string">{</span>
    <span class="hljs-attr">css</span>: <span class="hljs-string">{</span>
        <span class="hljs-attr">loaderOptions</span>: <span class="hljs-string">{</span>
          <span class="hljs-attr">postcss</span>: <span class="hljs-string">{</span>
            <span class="hljs-attr">plugins</span>: <span class="hljs-string">[</span>
              <span class="hljs-attr">pxtorem({</span>
                <span class="hljs-attr">rootValue</span>: <span class="hljs-string">37.5,</span>
                <span class="hljs-attr">propList</span>: <span class="hljs-string">['*']</span>
              <span class="hljs-attr">})</span>
            <span class="hljs-attr">]</span>
          <span class="hljs-attr">}</span>
        <span class="hljs-attr">}</span>
      <span class="hljs-attr">}</span>
<span class="hljs-attr">}</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>3.组件具体用法以文档为准</p>
<p>4.组件使用过程中如有问题或建议，欢迎<a href="https://github.com/jdf2e/nutui/issues">反馈</a></p>
<ul class="markList"><li @click="leavelchose(1)" :class="levalcur==1?'cur':''"  class="level1"><a href="#head1">推荐工程</a></li><li @click="leavelchose(2)" :class="levalcur==2?'cur':''"  class="level2"><a href="#head2">安装</a></li><li @click="leavelchose(3)" :class="levalcur==3?'cur':''"  class="level3"><a href="#head3">加载示例</a></li><li @click="leavelchose(4)" :class="levalcur==4?'cur':''"  class="level4"><a href="#head4">按需加载</a></li><li @click="leavelchose(5)" :class="levalcur==5?'cur':''"  class="level5"><a href="#head5">组件使用</a></li></ul><nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
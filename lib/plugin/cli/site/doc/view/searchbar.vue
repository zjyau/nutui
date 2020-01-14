<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>SearchBar 搜索栏<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><blockquote>
<p>依赖 <strong>Icon</strong> 组件</p>
</blockquote>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span>
    <span class="hljs-attr">placeText</span>=<span class="hljs-string">"请输入自定义文案"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>右侧搜索按钮可根据需要进行配置</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span>
    <span class="hljs-attr">placeText</span>=<span class="hljs-string">"请输入自定义文案"</span>
    <span class="hljs-attr">:hasSearchButton</span>=<span class="hljs-string">"false"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>可配置输入框前面是否显示搜索图标、右侧是否显示文字按钮、显示文字、自定义 class</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span>
    <span class="hljs-attr">placeText</span>=<span class="hljs-string">"ERP/姓名/邮箱"</span>
    <span class="hljs-attr">:hasIcon</span>=<span class="hljs-string">"true"</span>
    <span class="hljs-attr">:hasTextButton</span>=<span class="hljs-string">"true"</span>
    <span class="hljs-attr">textInfo</span>=<span class="hljs-string">"取消"</span>
    <span class="hljs-attr">customClass</span>=<span class="hljs-string">"search_demo"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>事件</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-searchbar
    placeText=<span class="hljs-string">"请输入自定义文案"</span>
    <span class="hljs-symbol">@focus</span>=<span class="hljs-string">"focusFun"</span>
    <span class="hljs-symbol">@input</span>=<span class="hljs-string">"inputFun"</span>
    <span class="hljs-symbol">@blur</span>=<span class="hljs-string">"blurFun"</span>
    <span class="hljs-symbol">@submit</span>=<span class="hljs-string">"submitFun"</span>
&gt;&lt;/nut-searchbar&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>输入、失去焦点、提交事件都会返回当前输入值</p>
</blockquote>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
    data() {
        <span class="hljs-keyword">return</span> {
        }
    },
    methods:{
        focusFun() {
            console.log(<span class="hljs-string">'获取焦点操作！'</span>);
        },
        inputFun(<span class="hljs-keyword">value</span>) {
            console.log(<span class="hljs-keyword">value</span>);
            console.log(<span class="hljs-string">'您正在输入...'</span>);
        },
        blurFun(<span class="hljs-keyword">value</span>) {
            console.log(<span class="hljs-keyword">value</span>);
            console.log(<span class="hljs-string">'您已失去焦点！'</span>);
        },
        submitFun(<span class="hljs-keyword">value</span>) {
            console.log(<span class="hljs-keyword">value</span>);
            console.log(<span class="hljs-string">'默认提交操作！'</span>);
        }
    }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>Prop</h2><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>hasIcon</td>
<td>是否显示输入框前面的 icon</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>placeText</td>
<td>输入框 placeholder 内容</td>
<td>String</td>
<td>&#39;请输入内容...&#39;</td>
</tr>
<tr>
<td>hasSearchButton</td>
<td>是否显示右侧搜索按钮</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>hasTextButton</td>
<td>右侧搜索按钮是否为文字按钮</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>textInfo</td>
<td>右侧文字搜索按钮文案</td>
<td>String</td>
<td>&#39;搜索&#39;</td>
</tr>
<tr>
<td>animation</td>
<td>是否需要默认的搜索框显示动画</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>customClass</td>
<td>自定义 class</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>searchIconSize</td>
<td>Search 图标的尺寸</td>
<td>String</td>
<td>&#39;20px&#39;</td>
</tr>
<tr>
<td>searchIconColor</td>
<td>Search 图标的颜色</td>
<td>String</td>
<td>&#39;#2e2d2d&#39;</td>
</tr>
<tr>
<td>searchBtnIconSize</td>
<td>搜索按钮图标的尺寸</td>
<td>String</td>
<td>&#39;20px&#39;</td>
</tr>
<tr>
<td>searchBtnIconColor</td>
<td>搜索按钮图标的颜色</td>
<td>String</td>
<td>&#39;#2e2d2d&#39;</td>
</tr>
<tr>
<td>clearIconSize</td>
<td>清空按钮图标的尺寸</td>
<td>String</td>
<td>&#39;15px&#39;</td>
</tr>
<tr>
<td>clearIconColor</td>
<td>清空按钮图标的颜色</td>
<td>String</td>
<td>&#39;#2e2d2d&#39;</td>
</tr>
</tbody></table>
<h2>Event</h2><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody><tr>
<td>focus</td>
<td>输入框获取焦点时触发事件</td>
<td>无</td>
</tr>
<tr>
<td>input</td>
<td>输入框输入内容时触发事件</td>
<td>无</td>
</tr>
<tr>
<td>blur</td>
<td>输入框失去焦点时触发事件</td>
<td>无</td>
</tr>
<tr>
<td>submit</td>
<td>默认提交事件，点击右侧Icon或文字也会触发</td>
<td>无</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
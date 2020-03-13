<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Toast 吐司<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>轻提示。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  mounted() {
    this.<span class="hljs-variable">$toast</span>.text(<span class="hljs-string">'提示信息'</span>);
  }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>高级用法</h2><p>第二个参数是一个对象，可以传入一些高级配置。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  mounted() {
    <span class="hljs-keyword">this</span>.$toast.text(<span class="hljs-string">'提示信息'</span>,{
        duration: <span class="hljs-number">4000</span>, <span class="hljs-comment">//展示时长</span>
        center: <span class="hljs-keyword">true</span>, <span class="hljs-comment">//是否居中展示，值为false时展示在页面底部</span>
        bottom: <span class="hljs-number">40</span>, <span class="hljs-comment">//展示在页面底部时，距底部的距离（px)</span>
        textAlignCenter:<span class="hljs-keyword">true</span> <span class="hljs-comment">//多行文本是否居中展示，值为false时单行居中，多行居左</span>
    });
  }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>带ICON</h2><p>成功提示</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  mounted() {
    this.<span class="hljs-variable">$toast</span>.success(<span class="hljs-string">'操作成功！'</span>);
  }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>失败提示</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  mounted() {
    this.<span class="hljs-variable">$toast</span>.fail(<span class="hljs-string">'操作失败！'</span>);
  }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>警告提示</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  mounted() {
    this.<span class="hljs-variable">$toast</span>.warn(<span class="hljs-string">'确定删除？'</span>);
  }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>加载提示</h2><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-comment">//Loading类型，默认不会自动消失，带透明遮罩</span>
<span class="hljs-keyword">this</span>.loading = <span class="hljs-keyword">this</span>.$toast.loading();

<span class="hljs-comment">//手动关闭上面的Loading</span>
<span class="hljs-keyword">this</span>.loading.hide();

<span class="hljs-comment">//带文字，自动消失，不要遮罩</span>
<span class="hljs-keyword">this</span>.$toast.loading(<span class="hljs-string">'加载中...'</span>,{ 
    duration:<span class="hljs-number">3000</span>,
    cover:<span class="hljs-literal">false</span>
});</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>共享实例</h2><p>Toast的id如果相同，将共享一个实例。如果不设置id，多个Toast将拥有相同的id默认值，它们将共享一个实例（loading类型与其他类型实例不共享），新的内容和设置将取代旧的，多个Toast不能同时出现。如果不需要共享实例，可以给其设置id。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-comment">//二者id不同，不会共享一个实例</span>
<span class="hljs-keyword">this</span>.$toast.success(msg,{
    id:<span class="hljs-number">123</span>
});

<span class="hljs-keyword">this</span>.$toast.text(msg,{
    id:<span class="hljs-number">321</span>,
    duration:<span class="hljs-number">4000</span>
});</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义样式</h2><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">/<span class="hljs-regexp">/自定义背景颜色/</span>透明度
this.$toast.text(<span class="hljs-string">'提示文案'</span>,{
    <span class="hljs-symbol">bgColor:</span><span class="hljs-string">'rgba(50, 50, 50, 0.9)'</span>
});

<span class="hljs-regexp">//</span>自定义字号，<span class="hljs-string">'small'</span>/<span class="hljs-string">'base'</span>/<span class="hljs-string">'large'</span>三选一
this.$toast.text(<span class="hljs-string">'提示文案'</span>,{
    <span class="hljs-symbol">size:</span><span class="hljs-string">'small'</span>
});

<span class="hljs-regexp">//</span>自定义<span class="hljs-class"><span class="hljs-keyword">class</span></span>
this.$toast.text(<span class="hljs-string">'提示文案'</span>,{
    <span class="hljs-symbol">customClass:</span><span class="hljs-string">'my-class'</span>
});</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<!-- ```javascript
//自定义loading的Icon
this.$toast.loading(msg,{icon:"data:image/svg+xml,%3Csvg fill="#FFFFFF" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 21'%3E%3Cpath d='M10 13.5l-7-6-3 3L10.5 21 28 3.5l-3-3z' fill-rule='evenodd'/%3E%3C/svg%3E"),
    duration:3000
});
``` -->


<h2>API</h2><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>msg</td>
<td>消息文案</td>
<td>String</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>option.id</td>
<td>标识符，相同者共用一个实例。loading类型默认使用一个实例，其他类型默认不共用。</td>
<td>String/Number</td>
<td>-</td>
</tr>
<tr>
<td>option.duration</td>
<td>展示时长（毫秒）,为0时不自动关闭（loading类型默认为0）</td>
<td>Number</td>
<td>2000</td>
</tr>
<tr>
<td>option.center</td>
<td>是否展示在页面中部（为false时展示在底部）</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>option.bottom</td>
<td>距页面底部的距离（像素），option.center为false时生效</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>option.textAlignCenter</td>
<td>多行文案是否居中</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>option.bgColor</td>
<td>背景颜色（透明度）</td>
<td>String</td>
<td>&quot;rgba(46, 46, 46, 0.7)&quot;</td>
</tr>
<tr>
<td>option.customClass</td>
<td>增加自定义class</td>
<td>String</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>option.icon</td>
<td>自定义图标，Data URI格式</td>
<td>String</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>option.size</td>
<td>尺寸，small/base/large三选一</td>
<td>String</td>
<td>&quot;base&quot;</td>
</tr>
<tr>
<td>option.cover</td>
<td>透明遮罩，loading类型默认打开</td>
<td>Boolean</td>
<td>loading类型true/其他false</td>
</tr>
<tr>
<td>option.loadingRotate</td>
<td>loading图标是否旋转，仅对loading类型生效</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>option.onClose</td>
<td>关闭时触发的事件</td>
<td>function</td>
<td>null</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
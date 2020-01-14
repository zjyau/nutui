<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>ButtonGroup 按钮<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><p>常规按钮组</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-buttongroup</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
    <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span>
  &gt;</span>
    重置
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span>&gt;</span>
    确定
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-buttongroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>圆角按钮组</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-buttongroup</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
    <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span>
  &gt;</span>
    重置
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span>&gt;</span>
    确定
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-buttongroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>页面底部功能，配合Badge使用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-buttongroup 
  type=<span class="hljs-string">"menu"</span>
&gt;
  &lt;nut-<span class="hljs-selector-tag">button</span> 
    type=<span class="hljs-string">"light"</span> 
    <span class="hljs-attribute">icon</span>=<span class="hljs-string">"action"</span> 
    <span class="hljs-attribute">color</span>=<span class="hljs-string">"#f00"</span>
  &gt;
    关于
  &lt;/nut-button&gt;
  &lt;nut-<span class="hljs-selector-tag">button</span> 
    type=<span class="hljs-string">"light"</span> 
    <span class="hljs-attribute">icon</span>=<span class="hljs-string">"more"</span> 
    <span class="hljs-attribute">color</span>=<span class="hljs-string">"#f00"</span>
  &gt;
    更多
  &lt;/nut-button&gt;
  &lt;nut-<span class="hljs-selector-tag">button</span> 
    type=<span class="hljs-string">"light"</span> 
    <span class="hljs-attribute">icon</span>=<span class="hljs-string">"search"</span> 
    <span class="hljs-attribute">color</span>=<span class="hljs-string">"#f00"</span>
  &gt;
    关闭
  &lt;/nut-button&gt;
  &lt;nut-badge 
    value=<span class="hljs-string">"2"</span> 
    <span class="hljs-attribute">top</span>=<span class="hljs-string">"0.5rem"</span> 
    <span class="hljs-attribute">right</span>=<span class="hljs-string">"2rem"</span>
  &gt;
    &lt;nut-<span class="hljs-selector-tag">button</span> 
      type=<span class="hljs-string">"light"</span> 
      <span class="hljs-attribute">icon</span>=<span class="hljs-string">"trolley"</span> 
      <span class="hljs-attribute">color</span>=<span class="hljs-string">"#f00"</span>
    &gt;
      购物车
    &lt;/nut-button&gt;
  &lt;/nut-badge&gt;      
  &lt;nut-<span class="hljs-selector-tag">button</span> 
    type=<span class="hljs-string">"light"</span> 
    <span class="hljs-attribute">icon</span>=<span class="hljs-string">"tick"</span> 
    <span class="hljs-attribute">color</span>=<span class="hljs-string">"#f00"</span>
  &gt;
    成功
  &lt;/nut-button&gt;
&lt;/nut-buttongroup&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>shape</td>
<td>设置按钮组形状，可选值：circle、无</td>
<td>String</td>
<td>无</td>
</tr>
<tr>
<td>type</td>
<td>设置按钮样式，可选值为：menu、无</td>
<td>String</td>
<td>无</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
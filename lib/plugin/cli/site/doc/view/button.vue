<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Button 按钮<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><p>常规按钮</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">"clickHandler"</span>
&gt;</span>
  去结算
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">disabled</span>
&gt;</span>
  去结算（disabled）
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>常规按钮-小</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  去结算
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">small</span> 
  <span class="hljs-attr">disabled</span>
&gt;</span>
  去结算（disabled）
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>常规按钮组</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
    <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span>
  &gt;</span>
    重置
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span>&gt;</span>
    确定
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button-group</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>通栏按钮</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">button </span>
  <span class="hljs-keyword">block
</span>&gt;
  登录
&lt;/nut-<span class="hljs-keyword">button&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>通栏按钮-圆角</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">button </span>
  <span class="hljs-keyword">block </span>
  shape=<span class="hljs-string">"circle"</span>
&gt;
  登录
&lt;/nut-<span class="hljs-keyword">button&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>圆角按钮-常规Button</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"red"</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  确认收货
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"gray"</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  查看物流
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"default"</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  再次购买
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  降价通知
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>圆角按钮-标签Button</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-selector-tag">button</span>
  type=<span class="hljs-string">"primary"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  small
&gt;
  京东快递
&lt;/nut-button&gt;

&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"lightred"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  small
&gt;
  好评 <span class="hljs-number">6.6</span>万
&lt;/nut-button&gt;

&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"actived"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attribute">icon</span>=<span class="hljs-string">"tick"</span> 
  small
&gt;
  全部 <span class="hljs-number">100</span>万
&lt;/nut-button&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>图标按钮-小</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"actived"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attribute">icon</span>=<span class="hljs-string">"tick"</span> 
  small
&gt;
&lt;/nut-button&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>图标按钮-大</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"actived"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attribute">icon</span>=<span class="hljs-string">"tick"</span>
&gt;
&lt;/nut-button&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>圆角按钮-商品属性选择Button</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"actived"</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  象牙白
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  皓月灰
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"dashed"</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attr">small</span>
&gt;</span>
  晶钻蓝
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>自定义颜色</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"actived"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  small 
  <span class="hljs-attribute">color</span>=<span class="hljs-string">"#fff"</span>
&gt;
  象牙白
&lt;/nut-button&gt;

&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"primary"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  small 
  <span class="hljs-attribute">color</span>=<span class="hljs-string">"rgb(0,0,0)"</span>
&gt;
  象牙白
&lt;/nut-button&gt;

&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"actived"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attribute">icon</span>=<span class="hljs-string">"tick"</span> 
  <span class="hljs-attribute">color</span>=<span class="hljs-string">"rgb(0,0,0)"</span> 
  small
&gt;
&lt;/nut-button&gt;

&lt;nut-<span class="hljs-selector-tag">button</span> 
  type=<span class="hljs-string">"actived"</span> 
  shape=<span class="hljs-string">"circle"</span> 
  <span class="hljs-attribute">icon</span>=<span class="hljs-string">"tick"</span> 
  <span class="hljs-attribute">color</span>=<span class="hljs-string">"rgb(0,0,0)"</span> 
  small
&gt;
  全部 <span class="hljs-number">100</span>万
&lt;/nut-button&gt;
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> {
  <span class="hljs-attribute">methods</span>: {
      <span class="hljs-built_in">clickHandler</span>() {
        <span class="hljs-built_in">alert</span>(<span class="hljs-string">'我点击了按钮'</span>);
      }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>type</td>
<td>按钮类型，可选类型包含：空、red、gray、light、lightred、primary、default、actived、dashed</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>block</td>
<td>是否为通栏</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>small</td>
<td>是否为小号组件</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>shape</td>
<td>形状配置，可选类型：空、circle</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>按钮前的图标，参考Icon组件</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>自定义颜色，包含文字与图片颜色</td>
<td>String</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
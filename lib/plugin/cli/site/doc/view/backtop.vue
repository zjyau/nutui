<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>BackTop 回到顶部<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>用于较长的页面快捷回到顶部的组件。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-section">&lt;nut-backtop&gt;</span>
<span class="hljs-section">&lt;/nut-backtop&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置出现位置</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> 
  <span class="hljs-attr">:distance</span>=<span class="hljs-string">"400"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>“页面垂直方向滚动高度”后出现</p>
</blockquote>
<h2>click事件</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">"onClick"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  methods: {
    onClick() {
      console.log(<span class="hljs-string">"触发回到顶部按钮"</span>)
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置样式</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-backtop 
  <span class="hljs-symbol">:bottom=<span class="hljs-string">"20"</span></span>
  <span class="hljs-symbol">:right=<span class="hljs-string">"20"</span></span>
  <span class="hljs-symbol">:zIndex=<span class="hljs-string">"10"</span></span>
&gt;
&lt;<span class="hljs-regexp">/nut-backtop&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置动画持续时间</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-backtop</span> 
  <span class="hljs-attr">:duration</span>=<span class="hljs-string">"1000"</span>  
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-backtop</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>duration</td>
<td>设置动画持续时间</td>
<td>Number</td>
<td>1000</td>
</tr>
<tr>
<td>distance</td>
<td>“页面垂直方向滚动高度”后出现</td>
<td>Number</td>
<td>200</td>
</tr>
<tr>
<td>bottom</td>
<td>设置离页面底部距离</td>
<td>Number</td>
<td>30</td>
</tr>
<tr>
<td>right</td>
<td>设置离页面右边距离</td>
<td>Number</td>
<td>30</td>
</tr>
<tr>
<td>zIndex</td>
<td>设置层级</td>
<td>Number</td>
<td>1111</td>
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
<td>click</td>
<td>按钮点击时触发</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
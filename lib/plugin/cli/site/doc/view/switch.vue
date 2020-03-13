<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Switch 滑动开关<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>用来打开或关闭选项。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">switch</span> 
  :active=<span class="hljs-string">"true"</span>
&gt;
&lt;/nut-<span class="hljs-keyword">switch</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>加上 <strong>.sync</strong> 可实现数据的“双向绑定”。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">switch</span> 
  :active.<span class="hljs-keyword">sync</span>=<span class="hljs-string">"swActive"</span>
&gt;
&lt;/nut-<span class="hljs-keyword">switch</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  data() {
    return {
      swActive: <span class="hljs-literal">true</span>
    };
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义尺寸</h2><p>内置 <strong>small</strong>，<strong>base</strong>，<strong>large</strong> 三种规格供使用。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">switch</span> 
  :active=<span class="hljs-string">"true"</span> 
  <span class="hljs-built_in">size</span>=<span class="hljs-string">"small"</span>
&gt;
&lt;nut-<span class="hljs-keyword">switch</span> 
  :active=<span class="hljs-string">"true"</span> 
  <span class="hljs-built_in">size</span>=<span class="hljs-string">"base"</span>
&gt;
&lt;nut-<span class="hljs-keyword">switch</span> 
  :active=<span class="hljs-string">"true"</span> 
  <span class="hljs-built_in">size</span>=<span class="hljs-string">"large"</span>
&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>change事件</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">switch</span> 
  <span class="hljs-symbol">@change</span>=<span class="hljs-string">"onChange"</span>
&gt;
&lt;/nut-<span class="hljs-keyword">switch</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  methods: {
    onChange(status) {
      alert(status);
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>禁用状态</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">switch</span> 
  :disabled=<span class="hljs-string">"true"</span>
&gt;
&lt;/nut-<span class="hljs-keyword">switch</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>禁用状态下，change事件参数永远为初始值</p>
</blockquote>
<h2>自定义Class</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-keyword">switch</span> 
  :active=<span class="hljs-string">"true"</span>  
  <span class="hljs-keyword">class</span>=<span class="hljs-string">"my-switch"</span>
&gt;
&lt;/nut-<span class="hljs-keyword">switch</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>active</td>
<td>开关状态</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>尺寸，可选值small/base/large</td>
<td>String</td>
<td>base</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
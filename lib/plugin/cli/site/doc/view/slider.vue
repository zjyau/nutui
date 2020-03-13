<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Slider 滑块<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>滑动输入器，用于在数值区间/自定义区间内进行选择。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-slider</span> 
   <span class="hljs-attr">v-model</span>=<span class="hljs-string">"val1"</span> 
   <span class="hljs-attr">:range</span>=<span class="hljs-string">"[0,10]"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-slider</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>拖动时展示标签</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-slider</span> 
   <span class="hljs-attr">v-model</span>=<span class="hljs-string">"val2"</span> 
   <span class="hljs-attr">:range</span>=<span class="hljs-string">"[0,100]"</span> 
   <span class="hljs-attr">:showLabel</span>=<span class="hljs-string">"true"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-slider</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>一直展示标签</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-slider 
   v-model=<span class="hljs-string">"val3"</span> 
   <span class="hljs-symbol">:range=<span class="hljs-string">"[0,100]"</span></span> 
   <span class="hljs-symbol">:showLabel=<span class="hljs-string">"true"</span></span> 
   <span class="hljs-symbol">:showLabelAlways=<span class="hljs-string">"true"</span></span>
&gt;
&lt;<span class="hljs-regexp">/nut-slider&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>两端显式可选取范围</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-slider 
   v-model=<span class="hljs-string">"val4"</span> 
   <span class="hljs-symbol">:range=<span class="hljs-string">"[-50,50]"</span></span> 
   <span class="hljs-symbol">:showLabel=<span class="hljs-string">"true"</span></span> 
   <span class="hljs-symbol">:showRangeTxt=<span class="hljs-string">"true"</span></span>
&gt;
&lt;<span class="hljs-regexp">/nut-slider&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置分段数（stage=20）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-slider 
   v-model=<span class="hljs-string">"val5"</span> 
   <span class="hljs-symbol">:range=<span class="hljs-string">"[0,100]"</span></span> 
   <span class="hljs-symbol">:showLabel=<span class="hljs-string">"true"</span></span> 
   <span class="hljs-symbol">:showRangeTxt=<span class="hljs-string">"true"</span></span> 
   <span class="hljs-symbol">:stage=<span class="hljs-string">"5"</span></span>
&gt;
&lt;<span class="hljs-regexp">/nut-slider&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义class</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-slider 
   <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"my-slider"</span> 
   v-model=<span class="hljs-string">"val6"</span> 
   :range=<span class="hljs-string">"[0,100]"</span>
&gt;
<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">nut-slider</span>&gt;</span></span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>value</td>
<td>滑块选定的值，可以使用 <strong>v-model</strong> 双向绑定数据。</td>
<td>Number</td>
<td>-</td>
</tr>
<tr>
<td>showLabel</td>
<td>拖动时是否展示标签</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>showLabelAlways</td>
<td>是否一直展示标签</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>showRangeTxt</td>
<td>两端是否展示可选取范围</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>stage</td>
<td>分段数</td>
<td>Number/String</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
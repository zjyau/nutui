<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Stepper 步进器<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>通过点击按钮控制数字增减。</p>
<h2>默认用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-stepper</span> 
    <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"val1"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-stepper</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置最大最小值</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-stepper 
    <span class="hljs-symbol">:value</span>.sync=<span class="hljs-string">"val2"</span> 
    <span class="hljs-symbol">:min=<span class="hljs-string">"5"</span></span> 
    <span class="hljs-symbol">:max=<span class="hljs-string">"100"</span></span>
&gt;&lt;<span class="hljs-regexp">/nut-stepper&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置加减的步长</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-stepper</span> 
    <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"val3"</span> 
    <span class="hljs-attr">:step</span>=<span class="hljs-string">"5"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-stepper</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置只读</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-stepper</span> 
    <span class="hljs-attr">:readonly</span>=<span class="hljs-string">"true"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-stepper</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>显示边框</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-stepper</span> 
    <span class="hljs-attr">:simple</span>=<span class="hljs-string">"false"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-stepper</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>关闭动画效果</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-stepper</span> 
    <span class="hljs-attr">:transition</span>=<span class="hljs-string">"false"</span> 
    <span class="hljs-attr">:simple</span>=<span class="hljs-string">"false"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-stepper</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>初始值</td>
<td>Number, String</td>
<td>1</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>Number, String</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>Number, String</td>
<td>Infinity</td>
</tr>
<tr>
<td>step</td>
<td>步长</td>
<td>Number, String</td>
<td>1</td>
</tr>
<tr>
<td>readonly</td>
<td>是否只读</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>transition</td>
<td>是否需要过渡效果</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>simple</td>
<td>是否显示简单版</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>decimalPlaces</td>
<td>设置保留的小数位</td>
<td>Number</td>
<td>0</td>
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
<td>add</td>
<td>点击加时触发事件 ｜ value</td>
<td></td>
</tr>
<tr>
<td>reduce</td>
<td>点击减时触发事件 ｜ value</td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>值改变时触发事件 ｜ value</td>
<td></td>
</tr>
<tr>
<td>blur</td>
<td>输入框失去焦点时触发事件</td>
<td>value</td>
</tr>
<tr>
<td>focus</td>
<td>输入框获取焦点时触发事件</td>
<td>value</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
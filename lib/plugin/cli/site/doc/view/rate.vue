<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Rate 评分<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>用于快速的评级操作，或对评价进行展示。</p>
<h2>基础用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"val"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-rate</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>只读</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"val"</span>
    <span class="hljs-attr">:readOnly</span>=<span class="hljs-string">"true"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-rate</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>绑定事件</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> 
    @<span class="hljs-attr">click</span>=<span class="hljs-string">"onClick"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-rate</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>自定义尺寸</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> 
    <span class="hljs-attr">:size</span>=<span class="hljs-string">"35"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-rate</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>自定义ICON</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span>
    <span class="hljs-attr">:checkedIcon</span>=<span class="hljs-string">"icon1"</span>
    <span class="hljs-attr">:uncheckedIcon</span>=<span class="hljs-string">"icon2"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-rate</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>total</td>
<td>star 总数</td>
<td>Number</td>
<td>5</td>
</tr>
<tr>
<td>value</td>
<td>当前 star 数，可使用 v-model 双向绑定数据</td>
<td>Number</td>
<td>3</td>
</tr>
<tr>
<td>size</td>
<td>star 大小</td>
<td>Number</td>
<td>25</td>
</tr>
<tr>
<td>spacing</td>
<td>两个star的间距</td>
<td>Number</td>
<td>20</td>
</tr>
<tr>
<td>readOnly</td>
<td>是否只读</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>uncheckedIcon</td>
<td>使用图标(未选中)</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>checkedIcon</td>
<td>使用图标(选中)</td>
<td>String</td>
<td>-</td>
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
<td>点击star时触发</td>
<td>star的index</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
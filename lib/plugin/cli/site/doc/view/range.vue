<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Range 区间选择器<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基础用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-range
    :range<span class="hljs-keyword">Values</span>.sync="val1"
    :range="[-93,322]"
&gt;
&lt;/nut-range&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>修改主题颜色</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-range
    color="#31ccec"
    :range<span class="hljs-keyword">Values</span>.sync="val2" 
    :range="[0,200]"&gt;
&lt;/nut-range&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>显示标签文字</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-range
    color="#31ccec"
    :range<span class="hljs-keyword">Values</span>.sync="val2"
    :range="[0,200]"
    :showLabel="true"
    :showRangeTxt="true"
&gt;
&lt;/nut-range&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>rangeValues</td>
<td>区间数据</td>
<td>Array</td>
<td>[0, 0]</td>
</tr>
<tr>
<td>color</td>
<td>主题颜色</td>
<td>String</td>
<td>#ff0000</td>
</tr>
<tr>
<td>showLabel</td>
<td>是否在选择区间时显示标签</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>showLabelAlways</td>
<td>是否一直显示着标签</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>showRangeTxt</td>
<td>是否显示区间值</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>range</td>
<td>最小最大区间范围</td>
<td>Array</td>
<td>[0, 10]</td>
</tr>
<tr>
<td>stage</td>
<td>区间的步长</td>
<td>Number, String</td>
<td>1</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
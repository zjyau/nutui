<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Price 商品价格<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-price 
    <span class="hljs-symbol">:price=<span class="hljs-string">"1010"</span></span> 
    <span class="hljs-symbol">:needSymbol=<span class="hljs-string">"false"</span></span> 
    <span class="hljs-symbol">:thousands=<span class="hljs-string">"true"</span></span>
/&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>带人民币符号，无千位分隔</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-price  
    <span class="hljs-symbol">:price=<span class="hljs-string">"10010.01"</span></span> 
    <span class="hljs-symbol">:needSymbol=<span class="hljs-string">"true"</span></span> 
    <span class="hljs-symbol">:thousands=<span class="hljs-string">"false"</span></span>
/&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>带人民币符号和千位分隔，保留小数点后三位</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-price  
    <span class="hljs-symbol">:price=<span class="hljs-string">"15213.122"</span></span> 
    <span class="hljs-symbol">:decimalDigits=<span class="hljs-string">"3"</span></span> 
    <span class="hljs-symbol">:needSymbol=<span class="hljs-string">"true"</span></span> 
    <span class="hljs-symbol">:thousands=<span class="hljs-string">"true"</span></span>
/&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>price</td>
<td>价格数量</td>
<td>Number</td>
<td>0</td>
</tr>
<tr>
<td>needSymbol</td>
<td>是否需要加上人民币符号</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>decimalDigits</td>
<td>小数位位数</td>
<td>Number</td>
<td>2</td>
</tr>
<tr>
<td>thousands</td>
<td>是否按照千分号形式显示</td>
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
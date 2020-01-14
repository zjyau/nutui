<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Badge 徽标<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-badge 
    :<span class="hljs-keyword">value</span>=<span class="hljs-string">"9"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    &lt;div <span class="hljs-keyword">class</span>=<span class="hljs-string">"demo-svg"</span>&gt;&lt;/div&gt;
&lt;/nut-badge&gt;

&lt;nut-badge 
    :<span class="hljs-keyword">value</span>=<span class="hljs-string">"9"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    购物车
&lt;/nut-badge&gt;

&lt;nut-badge 
    :<span class="hljs-keyword">value</span>=<span class="hljs-string">"9"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    &lt;nut-button&gt;
        购物车
    &lt;/nut-button&gt;
&lt;/nut-badge&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>Max用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-badge 
    :<span class="hljs-keyword">value</span>=<span class="hljs-string">"200"</span> 
    :max=<span class="hljs-string">"99"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    &lt;div <span class="hljs-keyword">class</span>=<span class="hljs-string">"demo-svg"</span>&gt;&lt;/div&gt;
&lt;/nut-badge&gt;

&lt;nut-badge 
    :<span class="hljs-keyword">value</span>=<span class="hljs-string">"200"</span> 
    :max=<span class="hljs-string">"99"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    购物车
&lt;/nut-badge&gt;

&lt;nut-badge 
    :<span class="hljs-keyword">value</span>=<span class="hljs-string">"200"</span> 
    :max=<span class="hljs-string">"99"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    &lt;nut-button&gt;
        购物车
    &lt;/nut-button&gt;
&lt;/nut-badge&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>文字用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-badge 
    <span class="hljs-keyword">value</span>=<span class="hljs-string">"new"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    &lt;div <span class="hljs-keyword">class</span>=<span class="hljs-string">"demo-svg"</span>&gt;&lt;/div&gt;
&lt;/nut-badge&gt;

&lt;nut-badge 
    <span class="hljs-keyword">value</span>=<span class="hljs-string">"new"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    购物车
&lt;/nut-badge&gt;

&lt;nut-badge 
    <span class="hljs-keyword">value</span>=<span class="hljs-string">"new"</span> 
    :max=<span class="hljs-string">"99"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    &lt;nut-button&gt;
        购物车
    &lt;/nut-button&gt;
&lt;/nut-badge&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>小圆点</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-badge 
    :isDot=<span class="hljs-string">"true"</span> 
    <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"item"</span>
&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-svg"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span></span>

<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> 
    <span class="hljs-attr">:isDot</span>=<span class="hljs-string">"true"</span> 
    <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>
&gt;</span>
    文字内容
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span></span>

<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> 
    <span class="hljs-attr">:isDot</span>=<span class="hljs-string">"true"</span> 
    <span class="hljs-attr">:max</span>=<span class="hljs-string">"99"</span> 
    <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>
&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span>&gt;</span>
        购物车
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span></span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义位置</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-badge 
    :<span class="hljs-keyword">value</span>=<span class="hljs-string">"200"</span> 
    top=<span class="hljs-string">"5px"</span> 
    right=<span class="hljs-string">"10px"</span> 
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"item"</span>
&gt;
    &lt;div <span class="hljs-keyword">class</span>=<span class="hljs-string">"demo-svg"</span>&gt;
    &lt;/div&gt;
&lt;/nut-badge&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>显示的内容</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>max</td>
<td>value为数值时，最大值</td>
<td>Number</td>
<td>10000</td>
</tr>
<tr>
<td>zIndex</td>
<td>徽标的z-index值</td>
<td>Number</td>
<td>10</td>
</tr>
<tr>
<td>isDot</td>
<td>是否为小点</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>hidden</td>
<td>是否隐藏</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>top</td>
<td>上下偏移量，支持单位设置，可设置为：5px、5rem等</td>
<td>String</td>
<td>0</td>
</tr>
<tr>
<td>left</td>
<td>左右偏移量，支持单位设置，可设置为：5px、5rem等</td>
<td>String</td>
<td>0</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
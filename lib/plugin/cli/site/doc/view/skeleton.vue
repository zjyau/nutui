<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Skeleton 骨架屏<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。</p>
<h2>长方形</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">skeleton-square</span> 
    <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">skeleton-square</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>圆形</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;skeleton-<span class="hljs-built_in">circle</span> 
    diameter=<span class="hljs-string">"50px"</span>
&gt;
&lt;/skeleton-<span class="hljs-built_in">circle</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>横向排列</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">row</span>  <span class="hljs-attr">padding</span>=<span class="hljs-string">"15px 10px 0"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">skeleton-square</span> 
        <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">skeleton-square</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">skeleton-square</span> 
        <span class="hljs-attr">width</span>=<span class="hljs-string">"50px"</span> 
        <span class="hljs-attr">margin</span>=<span class="hljs-string">"0 0 0 40px"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">skeleton-square</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">skeleton-square</span> 
        <span class="hljs-attr">width</span>=<span class="hljs-string">"50px"</span> 
        <span class="hljs-attr">margin</span>=<span class="hljs-string">"0 0 0 10px"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">skeleton-square</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">row</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>纵向排列</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">skeleton-square</span> 
        <span class="hljs-attr">width</span>=<span class="hljs-string">"275px"</span> 
        <span class="hljs-attr">:count</span>=<span class="hljs-string">"2"</span> 
        <span class="hljs-attr">margin</span>=<span class="hljs-string">"5px 10px 5px 10px"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">skeleton-square</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">skeleton-square</span> 
        <span class="hljs-attr">width</span>=<span class="hljs-string">"100px"</span> 
        <span class="hljs-attr">margin</span>=<span class="hljs-string">"5px 10px 5px 10px"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">skeleton-square</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">column</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>Prop</h2><p>layout（row|column）</p>
<table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>width</td>
<td>宽度</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>padding</td>
<td>填充间距</td>
<td>String</td>
<td>-</td>
</tr>
</tbody></table>
<p>basic（square|circle）</p>
<table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>width</td>
<td>宽度</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>margin</td>
<td>外部间距</td>
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
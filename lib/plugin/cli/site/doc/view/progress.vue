<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Progress 进度条<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>展示操作或任务的当前进度，比如上传文件。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">percentage</span>=<span class="hljs-string">"30"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置高度和颜色</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span>
    <span class="hljs-attr">percentage</span>=<span class="hljs-string">"30"</span>
    <span class="hljs-attr">strokeColor</span>=<span class="hljs-string">"#8e71c7"</span> 
    <span class="hljs-attr">strokeWidth</span>=<span class="hljs-string">"12"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置百分比不显示</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">percentage</span>=<span class="hljs-string">"50"</span>
    <span class="hljs-attr">:showText</span>=<span class="hljs-string">"false"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置百分比内显</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">percentage</span>=<span class="hljs-string">"60"</span> 
    <span class="hljs-attr">:textInside</span>=<span class="hljs-string">"true"</span> 
    <span class="hljs-attr">strokeWidth</span>=<span class="hljs-string">"24"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置状态显示</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">percentage</span>=<span class="hljs-string">"30"</span> 
    <span class="hljs-attr">strokeColor</span>=<span class="hljs-string">"#f30"</span> 
    <span class="hljs-attr">status</span>=<span class="hljs-string">"active"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">percentage</span>=<span class="hljs-string">"50"</span>
    <span class="hljs-attr">strokeColor</span>=<span class="hljs-string">"#f30"</span>
    <span class="hljs-attr">strokeWidth</span>=<span class="hljs-string">"15"</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">"wrong"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">percentage</span>=<span class="hljs-string">"100"</span> 
    <span class="hljs-attr">:strokeWidth</span>=<span class="hljs-string">"15"</span> 
    <span class="hljs-attr">status</span>=<span class="hljs-string">"success"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义尺寸</h2><p>内置 <strong>small</strong>，<strong>base</strong>，<strong>large</strong> 三种规格供使用。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">"base"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
    <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>percentage</td>
<td>百分比</td>
<td>Number</td>
<td>0</td>
</tr>
<tr>
<td>strokeColor</td>
<td>进度条背景色</td>
<td>String</td>
<td>#1890ff</td>
</tr>
<tr>
<td>strokeWidth</td>
<td>进度条高度</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>size</td>
<td>进度条及文字尺寸，可选值small/base/large</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>showText</td>
<td>是否显示进度条文字内容</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>textInside</td>
<td>进度条文字显示位置</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>进度条当前状态,可选值text/active/wrong/success</td>
<td>String</td>
<td>text</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
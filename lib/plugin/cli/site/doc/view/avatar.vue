<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Avatar 头像<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>用来代表用户或事物，支持图片、图标或字符展示。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-section">&lt;nut-avatar&gt;</span><span class="hljs-section">&lt;/nut-avatar&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置背景色</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> 
    <span class="hljs-attr">bgColor</span>=<span class="hljs-string">"#87d068"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置大小</h2><p>内置 <strong>smal</strong> / <strong>normal</strong> / <strong>large</strong> 三种尺寸规格</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"normal"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置头像的形状类型</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> 
  <span class="hljs-attr">shape</span>=<span class="hljs-string">"square"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置头像的文本内容</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> 
  <span class="hljs-attr">:size</span>=<span class="hljs-string">"30"</span>
  <span class="hljs-attr">bgIcon</span>=<span class="hljs-string">""</span>
&gt;</span>U<span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置头像背景图片</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> 
  <span class="hljs-attr">bgIcon</span>=<span class="hljs-string">""</span> 
  <span class="hljs-attr">bgImage</span>=<span class="hljs-string">"http://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置头像Icon图标</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span>
  <span class="hljs-attr">bgIcon</span>=<span class="hljs-string">"http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>点击头像有触发事件</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> 
  @<span class="hljs-attr">activeAvatar</span>=<span class="hljs-string">"activeAvatar"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>bgColor</td>
<td>设置头像背景色</td>
<td>String</td>
<td>#eee</td>
</tr>
<tr>
<td>size</td>
<td>设置头像的大小，提供三种：large /normal/small</td>
<td>String</td>
<td>normal</td>
</tr>
<tr>
<td>shape</td>
<td>设置头像的形状，默认是圆形，可以设置为square方形</td>
<td>String</td>
<td>--</td>
</tr>
<tr>
<td>bgImage</td>
<td>设置头像的背景图片</td>
<td>String</td>
<td>--</td>
</tr>
<tr>
<td>bgIcon</td>
<td>设置头像的icon图标</td>
<td>String</td>
<td>--</td>
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
<td>activeAvatar</td>
<td>点击头像触发事件</td>
<td>--</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
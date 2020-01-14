<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Icon 图标<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"top"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义尺寸</h2><p>支持通过<strong>size</strong>设置图标大小，注意包含单位，如“40px”、“4rem”…</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">"action"</span> 
  <span class="hljs-attr">size</span>=<span class="hljs-string">"40px"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义颜色</h2><p>支持通过<strong>color</strong>设置图标颜色，支持十六进制/RGB/RGBA等写法。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-attribute">icon</span> 
  type=<span class="hljs-string">"trolley"</span> 
  <span class="hljs-attribute">color</span>=<span class="hljs-string">"#f0250f"</span>
&gt;
&lt;/nut-<span class="hljs-attribute">icon</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>type可选值</h2><ul>
<li>top</li>
<li>down</li>
<li>right</li>
<li>action</li>
<li>more</li>
<li>trolley</li>
<li>search</li>
<li>tick</li>
<li>plus</li>
<li>minus</li>
<li>cross</li>
<li>circle-cross</li>
</ul>
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
<td>type</td>
<td>图标，可选值top/action/cross/down/right/more/plus/search/trolley/tick/minus/circle-cross</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>尺寸，需要带单位</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>颜色</td>
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
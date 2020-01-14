<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Cell 列表项<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>列表项，可组成列表。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-cell 
  <span class="hljs-attr">title</span> = <span class="hljs-string">"左侧主标题"</span> 
  <span class="hljs-attr">subTitle</span> = <span class="hljs-string">"左侧副标题"</span>
  <span class="hljs-attr">desc</span> = <span class="hljs-string">"右侧描述文字"</span>
  :<span class="hljs-attr">showIcon</span> = <span class="hljs-string">"true"</span>
&gt;
&lt;/nut-cell&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p><strong>isLink</strong>值为true时有点击状态。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-cell 
  :<span class="hljs-attr">isLink</span> = <span class="hljs-string">"true"</span>
  <span class="hljs-attr">title</span> = <span class="hljs-string">"左侧主标题"</span>
  <span class="hljs-attr">subTitle</span> = <span class="hljs-string">"左侧副标题"</span>
  <span class="hljs-attr">desc="右侧描述文字"&gt;</span>
&lt;/nut-cell&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置<strong>linkUrl</strong>，点击可跳转。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> 
  <span class="hljs-attr">:isLink</span> = <span class="hljs-string">"true"</span>
  <span class="hljs-attr">linkUrl</span> = <span class="hljs-string">http://m.jd.com</span>"
  <span class="hljs-attr">title</span> = <span class="hljs-string">"左侧主标题"</span> 
  <span class="hljs-attr">subTitle</span> = <span class="hljs-string">"左侧副标题"</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">"右侧描述文字"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>title</td>
<td>左侧主slot</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>subTitle</td>
<td>左侧副slot</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>desc</td>
<td>右侧slot</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>isLink</td>
<td>是否是链接</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>linkUrl</td>
<td>链接Url</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>showIcon</td>
<td>是否展示右侧箭头Icon</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>bgColor</td>
<td>背景颜色</td>
<td>String</td>
<td>&quot;#FFFFFF&quot;</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
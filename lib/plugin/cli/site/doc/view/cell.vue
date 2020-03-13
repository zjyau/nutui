<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Cell 列表项<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>列表项，可组成列表。</p>
<h2>基本用法</h2><p><strong>to</strong>有值的时候，跳转路由，<strong>click-cell</strong>点击cell触发事件</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-built_in">cell</span> title=<span class="hljs-string">"我是标题"</span> desc=<span class="hljs-string">"描述文字"</span> @click-<span class="hljs-built_in">cell</span>=<span class="hljs-string">"clickEvnt"</span> to=<span class="hljs-string">"/index"</span>&gt;
&lt;/nut-<span class="hljs-built_in">cell</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置<strong>link-url</strong>，点击可跳转。设置<strong>target</strong>，可以配置是否打开新的页面</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-cell <span class="hljs-symbol">:is-link=<span class="hljs-string">"true"</span></span> link-url=<span class="hljs-string">"//m.jd.com"</span> <span class="hljs-symbol">:show-icon=<span class="hljs-string">"true"</span></span> title=<span class="hljs-string">"带链接"</span> target=<span class="hljs-string">"_target"</span>&gt;
&lt;<span class="hljs-regexp">/nut-cell&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>可以通过设置slot，设置cell的具体内容</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">:is-link</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:show-icon</span>=<span class="hljs-string">"true"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>我是主标题<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"sub-title"</span>&gt;</span>我是副标，我们都是通过Slot分发的<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"desc"</span>&gt;</span>我是描述<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">:show-icon</span>=<span class="hljs-string">"true"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>通过Slot自定义右侧ICON<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"tick"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"15px"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#848484"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p><strong>slot为avatar</strong>可以添加左侧头像，具体组件配置请参考avatar组件</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">:show-icon</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"我是标题"</span> <span class="hljs-attr">sub-title</span>=<span class="hljs-string">"我是副标题"</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">"展示默认ICON"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"avatar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
<td>左侧主标题</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>sub-title</td>
<td>左侧副标题</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>desc</td>
<td>右侧部分内容</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>is-link</td>
<td>是否是链接</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>link-url</td>
<td>链接Url</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>show-icon</td>
<td>是否展示右侧箭头Icon</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>bg-color</td>
<td>背景颜色</td>
<td>String</td>
<td>&quot;#FFFFFF&quot;</td>
</tr>
<tr>
<td>to</td>
<td>路由路径</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>target</td>
<td>同<code>&lt;a&gt;</code>中target属性</td>
<td>String</td>
<td>_self</td>
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
<td>click-cell</td>
<td>点击cell区域触发事件回调函数</td>
<td>无</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
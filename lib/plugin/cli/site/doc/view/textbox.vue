<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>TextBox 文本域输入<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>多行文本输入框，支持字数提示、字数限制等功能。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"> <span class="hljs-section">&lt;nut-textbox&gt;</span><span class="hljs-section">&lt;nut-textbox/&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义高度</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"> &lt;nut-textbox 
    <span class="hljs-symbol">:txtAreaH=<span class="hljs-string">"5"</span></span> 
    <span class="hljs-symbol">:maxNum=<span class="hljs-string">"300"</span>&gt;</span>
&lt;<span class="hljs-regexp">/nut-textbox&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义提示语</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-textbox</span> 
    <span class="hljs-attr">:placeText</span>=<span class="hljs-string">"'请填写详细情况请填写详细情况'"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-textbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义字数限制</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-textbox</span> 
    <span class="hljs-attr">:maxNum</span>=<span class="hljs-string">"100"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-textbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>限制字数不可超出</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"> &lt;nut-textbox 
    <span class="hljs-symbol">:switchMax=<span class="hljs-string">"true"</span></span> 
    <span class="hljs-symbol">:maxNum=<span class="hljs-string">"10"</span></span> 
    <span class="hljs-symbol">:txtAreaH=<span class="hljs-string">"2"</span></span> 
    textBgColor=<span class="hljs-string">"#efefef"</span>&gt;
&lt;<span class="hljs-regexp">/nut-textbox&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>字数超出报错</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"> &lt;nut-textbox 
    <span class="hljs-symbol">:maxNum=<span class="hljs-string">"10"</span></span> 
    <span class="hljs-symbol">:txtAreaH=<span class="hljs-string">"2"</span></span> 
     <span class="hljs-variable">@errorFunc</span>=<span class="hljs-string">"overLength"</span> &gt;
&lt;<span class="hljs-regexp">/nut-textbox&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义文本框背景色</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"> &lt;nut-textbox :<span class="hljs-attribute">switchMax</span>=<span class="hljs-string">"true"</span> :<span class="hljs-attribute">maxNum</span>=<span class="hljs-string">"10"</span> :<span class="hljs-attribute">txtAreaH</span>=<span class="hljs-string">"2"</span> <span class="hljs-attribute">textBgColor</span>=<span class="hljs-string">"#feefef"</span>&gt;&lt;/nut-textbox&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>不显示字数限制</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-textbox</span> <span class="hljs-attr">:limitShow</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">:maxNum</span>=<span class="hljs-string">"10"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-textbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>输入回调返回文字</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-textbox</span>  <span class="hljs-attr">:maxNum</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">txtAreaH</span>=<span class="hljs-string">"2"</span> @<span class="hljs-attr">inputFunc</span>=<span class="hljs-string">"inputText"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-textbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  data() {
    return {
      val: <span class="hljs-string">""</span>
    };
  },
  methods: {
    onFocus() {
      console.log(<span class="hljs-string">"focus事件触发！"</span>);
    },
    onBlur() {
      console.log(<span class="hljs-string">"blur事件触发！"</span>);
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>txtAreaH</td>
<td>文本框高度</td>
<td>Number</td>
<td>1rem</td>
</tr>
<tr>
<td>placeText</td>
<td>自定义placeholder文案提示</td>
<td>String</td>
<td>请您在此输</td>
</tr>
<tr>
<td>maxNum</td>
<td>最大字数</td>
<td>Number</td>
<td>50</td>
</tr>
<tr>
<td>switchMax</td>
<td>控制字数超出是否不可输入，注意：最大字数限制，请设置maxNum</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>textBgColor</td>
<td>设置输入框背景色</td>
<td>String</td>
<td>#fff</td>
</tr>
<tr>
<td>limitShow</td>
<td>不显示字数限制</td>
<td>Boolean</td>
<td>true</td>
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
<td>errorFunc</td>
<td>输入字数超过限定字数时触发事件</td>
<td>--</td>
</tr>
<tr>
<td>inputText</td>
<td>文字输入事件回调，默认传回输入文本</td>
<td>--</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
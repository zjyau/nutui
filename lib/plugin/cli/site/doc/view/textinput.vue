<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>TextInput 文本框<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>单行文本框。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-textinput 
    <span class="hljs-attribute">v-model</span>=<span class="hljs-string">"val"</span>
    <span class="hljs-attribute">label</span>=<span class="hljs-string">"无清空按钮："</span>
    <span class="hljs-attribute">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
    :<span class="hljs-attribute">clearBtn</span>=<span class="hljs-string">"true"</span>
    :<span class="hljs-attribute">disabled</span>=<span class="hljs-string">"false"</span>
/&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>高级用法</h2><p>密码框</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-textinput 
    <span class="hljs-attribute">placeholder</span>=<span class="hljs-string">"请输入密码"</span> 
    <span class="hljs-attribute">v-model</span>=<span class="hljs-string">"val"</span> 
    <span class="hljs-attribute">label</span>=<span class="hljs-string">"密码框："</span> 
    <span class="hljs-attribute">type</span>=<span class="hljs-string">"password"</span>
/&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>禁用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-textinput 
    <span class="hljs-attribute">label</span>=<span class="hljs-string">"禁用状态："</span> 
    :<span class="hljs-attribute">disabled</span>=<span class="hljs-string">"true"</span> 
    <span class="hljs-attribute">placeholder</span>=<span class="hljs-string">"请输入内容"</span> 
/&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>使用input原生属性</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-comment">&lt;!-- maxlength --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-textinput</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"maxlength=5"</span>
    <span class="hljs-attr">maxlength</span>=<span class="hljs-string">"5"</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">"限制文字数："</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- readonly --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-textinput</span> 
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"val"</span> 
    <span class="hljs-attr">readonly</span> 
    <span class="hljs-attr">label</span>=<span class="hljs-string">"只读："</span> 
/&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>使用input原生事件</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-textinput
    <span class="hljs-attribute">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
    <span class="hljs-attribute">label</span>=<span class="hljs-string">"focus/blur事件："</span>
    @<span class="hljs-attribute">focus</span>=<span class="hljs-string">"onFocus"</span>
    @<span class="hljs-attribute">blur</span>=<span class="hljs-string">"onBlur"</span>
    <span class="hljs-attribute">v-model</span>=<span class="hljs-string">"val"</span>
/&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>value</td>
<td>当前input值，可使用 v-model 双向绑定数据</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>label</td>
<td>文本框前面的标签</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>clearBtn</td>
<td>是否需要情况按钮</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>hasBorder</td>
<td>是否需要边框</td>
<td>Boolean</td>
<td>true</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Radio 单选按钮<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><p>通过 <strong>v-model</strong> 绑定值当前选中项的 <strong>label</strong> ，二者一致时 <strong>Radio</strong> 选中。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioVal"</span>
  <span class="hljs-attr">:label</span>=<span class="hljs-string">"b"</span>
&gt;</span>备选项1
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  data() {
    return {
      radioVal:<span class="hljs-string">"a"</span>,
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>组合使用</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioVal1"</span>
  <span class="hljs-attr">:label</span>=<span class="hljs-string">"1"</span>
&gt;</span>备选项1
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioVal1"</span>
  <span class="hljs-attr">:label</span>=<span class="hljs-string">"2"</span>
&gt;</span>备选项2
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>组合使用 <strong>Radio</strong> 组件时，推荐使用 <strong>RadioGroup</strong> 组件，按需加载时，别忘了引入哦</p>
</blockquote>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioGroupVal1"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"a"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"b"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  data() {
    return {
      radioGroupVal1:<span class="hljs-string">"b"</span>,
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>禁用状态</h2><p>通过给 <strong>disabled</strong> 传布尔值 <strong>false</strong> ，可将组件禁用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
  <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioVal2"</span> 
  <span class="hljs-attr">label</span>=<span class="hljs-string">"禁用"</span>
&gt;</span>备选项1
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>RadioGroup整体禁用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioGroupVal2"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"3"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义尺寸</h2><p>内置 <strong>small</strong>，<strong>base</strong>，<strong>large</strong> 三种规格供使用。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
  <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>
&gt;</span>小号
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
  <span class="hljs-attr">size</span>=<span class="hljs-string">"base"</span>
&gt;</span>默认
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
  <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>
&gt;</span>大号
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>自定义RadioGroup整体尺寸</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioGroupVal3"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"3"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>禁用动效</h2><p>通过给 <strong>animated</strong> 传布尔值 <strong>false</strong> ，禁用自带动效</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
   <span class="hljs-attr">:animated</span>=<span class="hljs-string">"false"</span> 
   <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioVal3"</span> 
   <span class="hljs-attr">label</span>=<span class="hljs-string">"a"</span>
&gt;</span>备选项1
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
   <span class="hljs-attr">:animated</span>=<span class="hljs-string">"false"</span> 
   <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioVal3"</span> 
   <span class="hljs-attr">label</span>=<span class="hljs-string">"b"</span>
&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>禁用 <strong>RadioGroup</strong> 动效</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioGroupVal4"</span> <span class="hljs-attr">:animated</span>=<span class="hljs-string">"false"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"a"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"b"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"c"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>新增自定义class</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> 
   <span class="hljs-attr">class</span>=<span class="hljs-string">"my-radio"</span>
&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p><strong>RadioGroup</strong> 也支持新增自定义class</p>
<h2>Prop</h2><h3>Radio</h3><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>v-model</td>
<td>当前选中项的标识符，与label值一致时呈选中状态</td>
<td>任意类型</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>标识符，与v-model值一致时呈选中状态</td>
<td>任意类型</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>尺寸，可选值small/base/large</td>
<td>String</td>
<td>base</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>animated</td>
<td>是否需要动效</td>
<td>Boolean</td>
<td>true</td>
</tr>
</tbody></table>
<h3>RadioGroup</h3><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>v-model</td>
<td>当前选中项的标识符，与label值一致时呈选中状态</td>
<td>任意类型</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>尺寸，可选值small/base/large</td>
<td>String</td>
<td>base</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>animated</td>
<td>是否需要动效</td>
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
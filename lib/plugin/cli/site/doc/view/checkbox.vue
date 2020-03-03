<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Checkbox 复选按钮<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox1"</span>&gt;</span>
    选项
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">data</span>() {
    <span class="hljs-title">return</span> {
          <span class="hljs-title">checkbox1</span>: <span class="hljs-title">false</span>,
    };</span>
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>禁用状态</h2><p>非选中时的禁用状态</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox1"</span> 
    <span class="hljs-attr">disabled</span>&gt;</span>
    未选时禁用状态
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">data</span>() {
    <span class="hljs-title">return</span> {
          <span class="hljs-title">checkbox1</span>: <span class="hljs-title">false</span>,
    };</span>
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>选中时的禁用状态</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox1"</span> 
    <span class="hljs-attr">disabled</span>&gt;</span>
    已选时禁用状态
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">data</span>() {
    <span class="hljs-title">return</span> {
          <span class="hljs-title">checkbox1</span>: <span class="hljs-title">true</span>,
    };</span>
},</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义尺寸</h2><p>内置 <strong>small</strong>，<strong>base</strong>，<strong>large</strong> 三种规格供使用。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox1"</span> 
    <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
    小号
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox2"</span> 
    <span class="hljs-attr">size</span>=<span class="hljs-string">"base"</span> &gt;</span>
     默认
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox3"</span>  
    <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>
    大号
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-string">data()</span> <span class="hljs-string">{</span>
    <span class="hljs-string">return</span> <span class="hljs-string">{</span>
          <span class="hljs-attr">checkbox1:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span>
          <span class="hljs-attr">checkbox2:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span>
          <span class="hljs-attr">checkbox3:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span>
    <span class="hljs-string">};</span>
<span class="hljs-string">}</span>
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>禁用动效</h2><p>animation属性值为false时，禁用自带动效</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox1"</span>
    <span class="hljs-attr">:animation</span>=<span class="hljs-string">"false"</span>&gt;</span>
    没有动效
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">data</span>() {
    <span class="hljs-title">return</span> {
          <span class="hljs-title">checkbox1</span>: <span class="hljs-title">false</span>,
    };</span>
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>事件</h2><p>值发生变化时，将触发change事件</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox1"</span> 
    @<span class="hljs-attr">change</span>=<span class="hljs-string">"checkboxChange"</span>&gt;</span>
    change事件
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">methods: {
    checkboxChange(<span class="hljs-keyword">checked</span>) {
        alert(<span class="hljs-string">'change事件触发'</span> + <span class="hljs-keyword">checked</span>);
    }  
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>设置label属性，获取选项状态和选项label值的方法：</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkbox1"</span>
    <span class="hljs-attr">:label</span>=<span class="hljs-string">"'选项值'"</span>  
    @<span class="hljs-attr">change</span>=<span class="hljs-string">"getChange"</span>&gt;</span>
    备选项
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">methods: {
    getChange(<span class="hljs-keyword">checked</span>,val){
        console.log(<span class="hljs-string">'选中状态：'</span> + <span class="hljs-keyword">checked</span> +<span class="hljs-string">'，选中选项：'</span> + val) 
    }

}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p><strong>注意</strong>：当设置了label属性时，第二个参数label才有值，否则默认为空。(label设置后替换插值内容)</p>
<h2>新增自定义class</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-checkbox 
    v-model=<span class="hljs-string">"checkbox1"</span>
    <span class="hljs-keyword">class</span>=<span class="hljs-string">"my-checkbox"</span>&gt;
    自定义了<span class="hljs-keyword">Class</span>:<span class="hljs-string">"my-checkbox"</span>
&lt;/nut-checkbox&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>name</td>
<td>checkbox的name属性</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>v-model</td>
<td>必填项，当前选中项的选中状态,同步value</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>当前选中项的label值，（可不设，设置后label有值，替换插值内容）</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>checked</td>
<td>checkbox的checked属性</td>
<td>Boolean</td>
<td>false</td>
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
<td>animation</td>
<td>是否需要动效</td>
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
<td>change</td>
<td>值变化时触发</td>
<td>当前选中项状态（checked），当前选中项值（label）【设置label后有值、默认为空】,event</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
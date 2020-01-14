<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Steps 步骤条<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。</p>
<h2>基本用法</h2><p>正常流程</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-steps 
  :current=<span class="hljs-string">"current"</span>
&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"已完成"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"已完成"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"进行中"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"待进行"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"待进行"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
&lt;/nut-steps&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>流程终止</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-steps 
  :current=<span class="hljs-string">"current"</span> 
  <span class="hljs-built_in">status</span>=<span class="hljs-string">"error"</span>
&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"已完成"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"已完成"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"进行中"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"待进行"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> 
    <span class="hljs-built_in">title</span>=<span class="hljs-string">"待进行"</span> 
    <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>
  &gt;
  &lt;/nut-<span class="hljs-keyword">step</span>&gt;
&lt;/nut-steps&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>动态加载(2s后渲染)</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-steps :current=<span class="hljs-string">"current2"</span> <span class="hljs-built_in">status</span>=<span class="hljs-string">"error"</span> :source=<span class="hljs-string">"titles"</span>&gt;
  &lt;nut-<span class="hljs-keyword">step</span> :<span class="hljs-built_in">key</span>=<span class="hljs-string">"index"</span> v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"(item,index) in titles"</span> :<span class="hljs-built_in">title</span>=<span class="hljs-string">"item"</span> <span class="hljs-built_in">content</span>=<span class="hljs-string">"这里是该步骤的描述信息"</span>&gt;&lt;/nut-<span class="hljs-keyword">step</span>&gt;
&lt;/nut-steps&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
  components: {},
  <span class="hljs-keyword">data</span>() {
    <span class="hljs-keyword">return</span> {
      current: <span class="hljs-number">3</span>,
      titles: [],
      current2: <span class="hljs-number">0</span>
    };
  },
  mounted() {
    setTimeout(() =&gt; {
      <span class="hljs-keyword">this</span>.titles = [<span class="hljs-string">"已完成"</span>, <span class="hljs-string">"已完成"</span>, <span class="hljs-string">"进行中"</span>];
      <span class="hljs-keyword">this</span>.current2 = <span class="hljs-number">3</span>;
    }, <span class="hljs-number">2000</span>);
  },
  methods: {
    next() {
      <span class="hljs-keyword">this</span>.current = <span class="hljs-keyword">this</span>.current + <span class="hljs-number">1</span>;
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>Prop</h2><h3>nut-steps</h3><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>current</td>
<td>当前所在的步骤</td>
<td>Number</td>
<td>0</td>
</tr>
<tr>
<td>status</td>
<td>流程状态</td>
<td>String</td>
<td>&quot;process&quot;（可选值 &quot;wait&quot;、&quot;process&quot;、&quot;finish&quot;、&quot;error&quot;）</td>
</tr>
<tr>
<td>source</td>
<td>异步数据渲染nut-step时，必须绑定对应数组</td>
<td>Array</td>
<td>-</td>
</tr>
</tbody></table>
<h3>nut-step</h3><table>
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
<td>流程步骤的title</td>
<td>String</td>
<td>步骤</td>
</tr>
<tr>
<td>content</td>
<td>流程步骤的content</td>
<td>String</td>
<td>步骤描述</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
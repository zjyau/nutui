<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>CountDown 倒计时<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基础用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> 
    <span class="hljs-attr">:endTime</span>=<span class="hljs-string">"end"</span>  
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>显示天</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> 
    <span class="hljs-attr">:endTime</span>=<span class="hljs-string">"end"</span> 
    <span class="hljs-attr">showDays</span> 
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>以服务端的时间为准</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> 
    <span class="hljs-attr">:startTime</span>=<span class="hljs-string">"serverTime"</span>
    <span class="hljs-attr">:endTime</span>=<span class="hljs-string">"end"</span> 
    <span class="hljs-attr">showDays</span> 
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>显示为 天时分秒</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> 
    <span class="hljs-attr">showDays</span> 
    <span class="hljs-attr">showPlainText</span> 
    <span class="hljs-attr">:endTime</span>=<span class="hljs-string">"end"</span> 
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>控制开始和暂停的倒计时</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> 
    <span class="hljs-attr">:endTime</span>=<span class="hljs-string">"end"</span> 
    <span class="hljs-attr">:paused</span>=<span class="hljs-string">"paused"</span> 
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>startTime</td>
<td>开始时间</td>
<td>String, Number</td>
<td>Date.now()</td>
</tr>
<tr>
<td>endTime</td>
<td>结束时间</td>
<td>String, Number</td>
<td>Date.now()</td>
</tr>
<tr>
<td>showDays</td>
<td>是否显示天</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>showPlainText</td>
<td>显示为纯文本</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>paused</td>
<td>是否暂停</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody></table>
<h2>Event</h2><p>| 字段 | 说明 | 回调参数
| ----- | ----- | ----- | -----
| on-end | 倒计时结束时 | 剩余时间戳
| on-paused | 暂停时 | 剩余时间戳
| on-restart | 暂停时 | 剩余时间戳</p>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>ShortPassword 短密码<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>底部弹出短密码</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-shortpassword
    :<span class="hljs-attr">visible="isShow"</span>
    @<span class="hljs-attr">close</span> = <span class="hljs-string">"shortpwdClose"</span>
    <span class="hljs-attr">type</span> = <span class="hljs-string">"bottom"</span>
    <span class="hljs-attr">link</span> = <span class="hljs-string">"https://m.jd.com"</span>
&gt;
&lt;/nut-shortpassword&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>居中弹出短密码</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-shortpassword 
    :visible=<span class="hljs-string">"isShow2"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"shortpwdClose2"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"center"</span>
&gt;&lt;/nut-shortpassword&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
    <span class="hljs-keyword">data</span>(){
        <span class="hljs-keyword">return</span>{
            isShow:<span class="hljs-literal">false</span>,
            isShow2:<span class="hljs-literal">false</span>,
            val1:<span class="hljs-string">''</span>,
            val2:<span class="hljs-string">''</span>
        }
    },
    methods:{
        shortpwdClose(<span class="hljs-keyword">val</span>){
            <span class="hljs-keyword">if</span>(<span class="hljs-keyword">val</span>) <span class="hljs-keyword">this</span>.val1 = <span class="hljs-keyword">val</span>;
            <span class="hljs-keyword">this</span>.isShow = <span class="hljs-literal">false</span>;
        },
        shortpwdClose2(<span class="hljs-keyword">val</span>){
                <span class="hljs-keyword">if</span>(<span class="hljs-keyword">val</span>) <span class="hljs-keyword">this</span>.val2 = <span class="hljs-keyword">val</span>;
            <span class="hljs-keyword">this</span>.isShow2 = <span class="hljs-literal">false</span>;
        },
        showShortpwd(){
            <span class="hljs-keyword">this</span>.isShow = <span class="hljs-literal">true</span>;
        },
        showShortpwd2(){
            <span class="hljs-keyword">this</span>.isShow2 = <span class="hljs-literal">true</span>;
        },


    }
}
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>visible</td>
<td>是否显示短密码</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>link</td>
<td>忘记密码跳转链接</td>
<td>String</td>
<td>&#39;javascript:;&#39;</td>
</tr>
<tr>
<td>type</td>
<td>短密码样式类型</td>
<td>String</td>
<td>&#39;bottom&#39;</td>
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
<td>close</td>
<td>关闭短密码框</td>
<td>val</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
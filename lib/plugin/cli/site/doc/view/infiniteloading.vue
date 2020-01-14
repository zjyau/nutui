<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>InfiniteLoading 无限加载<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>列表滚动到底部自动加载更多数据。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-infiniteloading 
    @loadmore=<span class="hljs-string">"onInfinite"</span> 
    :<span class="hljs-keyword">is</span>-show-mod=<span class="hljs-string">"true"</span> 
    :has-more=<span class="hljs-string">"isHasMore"</span> 
    :<span class="hljs-keyword">is</span>-loading=<span class="hljs-string">"isLoading"</span> 
    :threshold=<span class="hljs-string">"200"</span>
&gt;
    &lt;ul <span class="hljs-keyword">class</span>=<span class="hljs-string">"list"</span> &gt;
        &lt;li 
            <span class="hljs-keyword">class</span>=<span class="hljs-string">"list-item"</span> 
            v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"(item, index) of data"</span> 
            :key=<span class="hljs-string">"item"</span>
        &gt;我是测试数据{{index + <span class="hljs-number">1</span>}}&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nut-infiniteloading&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
    <span class="hljs-keyword">data</span>() {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-keyword">data</span>: new Array(<span class="hljs-number">30</span>),
            page: <span class="hljs-number">2</span>,
            num: <span class="hljs-number">30</span>,
            isHasMore: <span class="hljs-literal">true</span>,
            isLoading: <span class="hljs-literal">false</span>,
            isErr: <span class="hljs-literal">false</span>,
            timer: <span class="hljs-literal">null</span>
        };
    },
    methods: {
        onInfinite () {
            <span class="hljs-keyword">this</span>.isLoading = <span class="hljs-literal">true</span>;
            <span class="hljs-keyword">this</span>.timer = setTimeout(() =&gt; {
                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.page &lt;= <span class="hljs-number">5</span>) {
                    <span class="hljs-keyword">this</span>.<span class="hljs-keyword">data</span> = new Array(<span class="hljs-keyword">this</span>.num * <span class="hljs-keyword">this</span>.page);
                    <span class="hljs-keyword">this</span>.page = <span class="hljs-keyword">this</span>.page + <span class="hljs-number">1</span>;
                } <span class="hljs-keyword">else</span> {
                    <span class="hljs-keyword">this</span>.isHasMore = <span class="hljs-literal">false</span>;
                }
                <span class="hljs-keyword">this</span>.isLoading = <span class="hljs-literal">false</span>;
            }, <span class="hljs-number">100</span>);
        }
    },
    destroyed() {
        clearTimeout(<span class="hljs-keyword">this</span>.timer);
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
<td>hasMore</td>
<td>是否还有更多数据</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>isLoading</td>
<td>是否加载中</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>threshold</td>
<td>距离底部多远加载</td>
<td>Number</td>
<td>200</td>
</tr>
<tr>
<td>isShowMod</td>
<td>是否展示懒加载模块内容，一般适用于选项卡切换</td>
<td>Boolean</td>
<td>false</td>
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
<td>loadmore</td>
<td>继续加载的回调函数</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
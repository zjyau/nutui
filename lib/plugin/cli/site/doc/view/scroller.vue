<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Scroller 滚动<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>局部滚动组件，支持惯性、吸边回弹。纵向可支持下拉刷新和上拉加载，横向可支持滚动末尾跳转。</p>
<h2>基本用法</h2><p>横向使用，支持惯性、吸边回弹，支持滚动末尾跳转。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-scroller</span> @<span class="hljs-attr">jump</span>=<span class="hljs-string">"jump()"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"list"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-hor-list-item"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) of listData"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"index"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dl</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-scroller-item-info"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dt</span>&gt;</span>防水升级版 蓝 迷你小音<span class="hljs-tag">&lt;/<span class="hljs-name">dt</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dd</span>&gt;</span>2018-02-25<span class="hljs-tag">&lt;/<span class="hljs-name">dd</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dl</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"more"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-hor-jump-more"</span>&gt;</span>查看更多<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-scroller</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>横向小于一屏</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"hor-panel"</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">nut-scroller</span> @<span class="hljs-attr">jump</span>=<span class="hljs-string">"jump()"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"list"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-hor-list-item"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) of listData3"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"index"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dl</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-scroller-item-info"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dt</span>&gt;</span>防水升级版 蓝牙音箱 小音<span class="hljs-tag">&lt;/<span class="hljs-name">dt</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dd</span>&gt;</span>2018-02-25<span class="hljs-tag">&lt;/<span class="hljs-name">dd</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">dl</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"more"</span> &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-hor-jump-more"</span>&gt;</span>查看更多<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-scroller</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>纵向使用，支持下拉刷新和上拉加载更多。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-scroller</span>
    <span class="hljs-attr">:is-un-more</span>=<span class="hljs-string">"isUnMore1"</span> 
    <span class="hljs-attr">:is-loading</span>=<span class="hljs-string">"isLoading1"</span>
    <span class="hljs-attr">:type</span>=<span class="hljs-string">"'vertical'"</span>
    @<span class="hljs-attr">loadMore</span>=<span class="hljs-string">"loadMoreVert"</span>
    @<span class="hljs-attr">pulldown</span>=<span class="hljs-string">"pulldown"</span>
&gt;</span> 
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"list"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-vert-list-panel"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-vert-list-item"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) of listData1"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"index"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dl</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-scroller-item-info"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dt</span>&gt;</span>防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音<span class="hljs-tag">&lt;/<span class="hljs-name">dt</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dd</span>&gt;</span>2018-02-25<span class="hljs-tag">&lt;/<span class="hljs-name">dd</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">dl</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-scroller</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>纵向不满一屏</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-scroller</span>
    <span class="hljs-attr">:is-un-more</span>=<span class="hljs-string">"isUnMore2"</span> 
    <span class="hljs-attr">:is-loading</span>=<span class="hljs-string">"isLoading2"</span>
    <span class="hljs-attr">:type</span>=<span class="hljs-string">"'vertical'"</span>
    @<span class="hljs-attr">loadMore</span>=<span class="hljs-string">"loadMoreVert2"</span>
    @<span class="hljs-attr">pulldown</span>=<span class="hljs-string">"pulldown2"</span>
&gt;</span> 
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"list"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-vert-list-panel"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-vert-list-item"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) of listData2"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"index"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dl</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-scroller-item-info"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dt</span>&gt;</span>防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音<span class="hljs-tag">&lt;/<span class="hljs-name">dt</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dd</span>&gt;</span>2018-02-25<span class="hljs-tag">&lt;/<span class="hljs-name">dd</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">dl</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-scroller</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
    <span class="hljs-keyword">data</span>() {
        <span class="hljs-keyword">return</span> {
            listData: new Array(<span class="hljs-number">20</span>),
            listData1: new Array(<span class="hljs-number">20</span>),
            listData2: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
            listData3: [<span class="hljs-number">1</span>],
            maxPages: <span class="hljs-number">4</span>,
            isUnMore1: <span class="hljs-literal">false</span>,
            isLoading1: <span class="hljs-literal">false</span>,
            page1: <span class="hljs-number">2</span>,
            maxPages2: <span class="hljs-number">1</span>,
            isUnMore2: <span class="hljs-literal">false</span>,
            isLoading2: <span class="hljs-literal">false</span>,
            page2: <span class="hljs-number">2</span>,
            timers: <span class="hljs-literal">null</span>,
        };
    },

    methods: {
        jump() {
            location.href = <span class="hljs-string">'http://www.jd.com'</span>;
        },

        loadMoreVert() {
            <span class="hljs-keyword">this</span>.isLoading1 = <span class="hljs-literal">true</span>;
            <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.page1 &gt; <span class="hljs-keyword">this</span>.maxPages) {
                <span class="hljs-keyword">this</span>.isUnMore1 = <span class="hljs-literal">true</span>;
                <span class="hljs-keyword">this</span>.isLoading1 = <span class="hljs-literal">false</span>;
            } <span class="hljs-keyword">else</span> {
                clearTimeout(<span class="hljs-keyword">this</span>.timers);
                <span class="hljs-keyword">this</span>.timer = setTimeout(() =&gt; {
                    <span class="hljs-keyword">this</span>.isLoading1 = <span class="hljs-literal">false</span>;
                    <span class="hljs-keyword">this</span>.isUnMore1 = <span class="hljs-literal">false</span>;
                    <span class="hljs-keyword">this</span>.listData1 = new Array(<span class="hljs-number">20</span> * <span class="hljs-keyword">this</span>.page1);
                    <span class="hljs-keyword">this</span>.page1 = ++<span class="hljs-keyword">this</span>.page1;
                }, <span class="hljs-number">300</span>);
            }
        },

        pulldown() {
            <span class="hljs-keyword">this</span>.isLoading1 = <span class="hljs-literal">true</span>;
            clearTimeout(<span class="hljs-keyword">this</span>.timers);
            <span class="hljs-keyword">this</span>.timer = setTimeout(() =&gt; {
                <span class="hljs-keyword">this</span>.isLoading1 = <span class="hljs-literal">false</span>;
                <span class="hljs-keyword">this</span>.isUnMore1 = <span class="hljs-literal">false</span>;
                <span class="hljs-keyword">this</span>.listData1 = new Array(<span class="hljs-number">20</span>);
                <span class="hljs-keyword">this</span>.page1 = <span class="hljs-number">2</span>;
            }, <span class="hljs-number">3000</span>);
        },


        loadMoreVert2() {
            <span class="hljs-keyword">this</span>.isLoading2 = <span class="hljs-literal">true</span>;
            <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.page2 &gt; <span class="hljs-keyword">this</span>.maxPages2) {
                <span class="hljs-keyword">this</span>.isUnMore2 = <span class="hljs-literal">true</span>;
                <span class="hljs-keyword">this</span>.isLoading2 = <span class="hljs-literal">false</span>;
            } <span class="hljs-keyword">else</span> {
                clearTimeout(<span class="hljs-keyword">this</span>.timers);
                <span class="hljs-keyword">this</span>.timer = setTimeout(() =&gt; {
                    <span class="hljs-keyword">this</span>.isLoading2 = <span class="hljs-literal">false</span>;
                     <span class="hljs-keyword">this</span>.isUnMore2 = <span class="hljs-literal">false</span>;
                    <span class="hljs-keyword">this</span>.listData2 = new Array(<span class="hljs-number">20</span> * <span class="hljs-keyword">this</span>.page2);
                    <span class="hljs-keyword">this</span>.page2 = ++<span class="hljs-keyword">this</span>.page1;
                }, <span class="hljs-number">300</span>);
            }
        },

        pulldown2() {
            <span class="hljs-keyword">this</span>.isLoading2 = <span class="hljs-literal">true</span>;
            clearTimeout(<span class="hljs-keyword">this</span>.timers);
            <span class="hljs-keyword">this</span>.timer = setTimeout(() =&gt; {
                <span class="hljs-keyword">this</span>.isLoading2 = <span class="hljs-literal">false</span>;
                <span class="hljs-keyword">this</span>.isUnMore2 = <span class="hljs-literal">false</span>;
                <span class="hljs-keyword">this</span>.listData2 = new Array(<span class="hljs-number">10</span>);
                <span class="hljs-keyword">this</span>.page2 = <span class="hljs-number">2</span>;
            }, <span class="hljs-number">300</span>);
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
<td>type</td>
<td>类型，&#39;horizontal&#39;横向或&#39;vertical&#39;纵向</td>
<td>String</td>
<td>&#39;horizontal&#39;</td>
</tr>
<tr>
<td>stretch</td>
<td>拉伸范围</td>
<td>Number</td>
<td>100</td>
</tr>
<tr>
<td>isUnMore</td>
<td>是否没有更多</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>isLoading</td>
<td>是否正在加载</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>propsTime</td>
<td>type=vertical时，加载成功后pulldownTxt停留时间，单位为 ms</td>
<td>Number</td>
<td>0</td>
</tr>
<tr>
<td>threshold</td>
<td>距离底部多少开始加载</td>
<td>Number</td>
<td>100</td>
</tr>
<tr>
<td>pulldownTxt</td>
<td>下拉展示文案</td>
<td>String</td>
<td>&#39;下拉刷新&#39;</td>
</tr>
<tr>
<td>loadMoreTxt</td>
<td>上拉展示文案</td>
<td>String</td>
<td>&#39;上拉加载&#39;</td>
</tr>
<tr>
<td>unloadMoreTxt</td>
<td>没有更多数据展示文案</td>
<td>String</td>
<td>&#39;没有更多了&#39;</td>
</tr>
<tr>
<td>scrollTo</td>
<td>滚动到指定位置，只能设置复数，需要配合scrollToCbk使用</td>
<td>Number</td>
<td>1</td>
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
<td>pulldown</td>
<td>下拉刷新回调</td>
<td>-</td>
</tr>
<tr>
<td>loadMore</td>
<td>上拉加载回调</td>
<td>-</td>
</tr>
<tr>
<td>jump</td>
<td>查看更多跳转回调</td>
<td>-</td>
</tr>
<tr>
<td>scrollToCbk</td>
<td>滚动到指定位置之后，scrollTo参数设置成默认值</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
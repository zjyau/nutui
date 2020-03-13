<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>LeftSlip 左滑删除<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>列表元素向左滑出现删除等按钮</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-leftslip</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slip-main"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slip-main"</span>&gt;</span>向左滑动我<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slipbtns"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slipbtns"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite"</span>&gt;</span>收藏<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-leftslip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>单个按钮</h3><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-leftslip</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slip-main"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slip-main"</span>&gt;</span>自定义单一按钮<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slipbtns"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slipbtns"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-leftslip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>单个按钮一键删除</h3><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-leftslip</span> <span class="hljs-attr">onlyDelBtn</span> @<span class="hljs-attr">oneDelete</span>=<span class="hljs-string">"oneDel"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slip-main"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slip-main"</span>&gt;</span>单一按钮点击一键删除<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-leftslip</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
    oneDel(par) {
        par.<span class="hljs-builtin-name">remove</span>();
    }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>多个按钮</h3><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-leftslip</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slip-main"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slip-main"</span>&gt;</span>向左滑动，多个按钮有超出限制哦~<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slipbtns"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slipbtns"</span>
            &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite"</span>&gt;</span>收藏<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite org1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"trolley"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#fff"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite org2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"cross"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"15px"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#fff"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite org3"</span>&gt;</span>确认<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite org1"</span>&gt;</span>加购物车<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite"</span>&gt;</span>收藏2<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite"</span>&gt;</span>收藏3<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-leftslip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>列表</h3><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-leftslip</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) in list"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.id"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"leftslip"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slip-main"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slip-main"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"addr"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"name-mobile"</span>&gt;</span>159****8888<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"full-addr"</span>&gt;</span>北京市大兴区亦庄经济开发中心京东大厦B座1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"addr-edit"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"slipbtns"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"slipbtns"</span>
            &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"delItem(index)"</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"favorite"</span>&gt;</span>收藏<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>
        &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-leftslip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> {
    <span class="hljs-attribute">components</span>: {},
    <span class="hljs-selector-tag">data</span>() {
        <span class="hljs-selector-tag">return</span> {
            <span class="hljs-attribute">list</span>: [
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add1'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座1'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>},
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add2'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座2'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>},
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add3'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座3'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>},
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add4'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座4'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>},
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add5'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座5'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>},
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add6'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座6'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>},
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add7'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座7'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>},
                {<span class="hljs-attribute">id</span>: <span class="hljs-string">'add8'</span>, <span class="hljs-attribute">addr</span>: <span class="hljs-string">'北京市大兴区亦庄经济开发中心京东大厦B座8'</span>, <span class="hljs-attribute">tel</span>: <span class="hljs-string">'159****8888'</span>}
            ]
        };
    },
    <span class="hljs-attribute">methods</span>: {
        delItem(index) {
            this.list.splice(index, <span class="hljs-number">1</span>);
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
<td>slot:slip-main</td>
<td>列表主内容自定义区域</td>
<td>html</td>
<td>-</td>
</tr>
<tr>
<td>slot:slipbtns</td>
<td>左滑按钮自定义区域</td>
<td>html</td>
<td>-</td>
</tr>
<tr>
<td>onlyDelBtn</td>
<td>设置单一删除按钮</td>
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
<td>oneDelete</td>
<td>单一删除按钮模式下删除事件</td>
<td>无</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
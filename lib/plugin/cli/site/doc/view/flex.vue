<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Flex 布局<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:12<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:12<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置元素间距</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"10"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>Flex布局</h2><h3>wrap（是否换行）</h3><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">flexWrap</span>=<span class="hljs-string">"nowrap"</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"10"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">flexWrap</span>=<span class="hljs-string">"wrap"</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"10"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">flexWrap</span>=<span class="hljs-string">"reverse"</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"10"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>justify（主轴方向）</h3><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"center"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"end"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"space-between"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>between<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"space-around"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>around<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>align（侧轴方向）</h3><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"flex-start"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>顶部对齐 - flex-start<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"center"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>居中对齐 - center<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"flex-end"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>底部对齐 - flex-end<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>分栏偏移</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>offset:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content flex-content-light"</span>&gt;</span>offset:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>offset:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-content"</span>&gt;</span>offset:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>Prop</h2><h3>row</h3><table>
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
<td>布局方式，可选值为flex</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>gutter</td>
<td>列元素之间的间距（单位为px）</td>
<td>String/Number</td>
<td>-</td>
</tr>
<tr>
<td>tag</td>
<td>自定义元素标签</td>
<td>String</td>
<td>div</td>
</tr>
<tr>
<td>justify</td>
<td>Flex 主轴对齐方式，可选值为 start end center space-around space-between</td>
<td>String</td>
<td>start</td>
</tr>
<tr>
<td>align</td>
<td>Flex 交叉轴对齐方式，可选值为 flex-start center flex-end</td>
<td>String</td>
<td>flex-start</td>
</tr>
<tr>
<td>flexWrap</td>
<td>Flex是否换行，可选值为 nowrap wrap reverse</td>
<td>String</td>
<td>nowrap</td>
</tr>
</tbody></table>
<h3>col</h3><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>span</td>
<td>列元素宽度</td>
<td>String/Number</td>
<td>-</td>
</tr>
<tr>
<td>offset</td>
<td>列元素偏移距离</td>
<td>String/Number</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>NavBar 头部导航<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-navbar 
    @<span class="hljs-keyword">on</span>-click-<span class="hljs-keyword">back</span>=<span class="hljs-string">"back"</span> 
    @<span class="hljs-keyword">on</span>-click-title=<span class="hljs-string">"title"</span> 
    @<span class="hljs-keyword">on</span>-click-more=<span class="hljs-string">"more"</span> 
    :leftShow=<span class="hljs-string">"false"</span> 
    :rightShow=<span class="hljs-string">"false"</span>
&gt;title&lt;/nut-navbar&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> {
    <span class="hljs-attribute">methods</span>: {
        back(){
            alert(<span class="hljs-string">'header头部， 点击返回'</span>)
        },
        <span class="hljs-selector-tag">title</span>(){
            <span class="hljs-selector-tag">alert</span>(<span class="hljs-string">'header头部， 点击title'</span>)
        },
        <span class="hljs-selector-tag">more</span>(){
            <span class="hljs-selector-tag">alert</span>(<span class="hljs-string">'header头部， 点击更多'</span>)
        }
    }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>两侧按钮不显示状态下，on-click-back，on-click-more事件不触发</p>
</blockquote>
<h2>自定义样式</h2><p>内置默认为白色，所有样式可自定义</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span> 
    <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#000; color: #fff; height:60px; line-height: 60px;"</span>
&gt;</span>
    NavBar5
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>事件</h2><p>内置 <strong>on-click-back</strong>，<strong>on-click-title</strong>，<strong>on-click-more</strong> 三种监听事件。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-navbar 
    @<span class="hljs-keyword">on</span>-click-<span class="hljs-keyword">back</span>=<span class="hljs-string">"back"</span> 
    @<span class="hljs-keyword">on</span>-click-title=<span class="hljs-string">"title"</span> 
    @<span class="hljs-keyword">on</span>-click-more=<span class="hljs-string">"more"</span>
&gt;
&lt;/nut-navbar&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> {
    <span class="hljs-attribute">methods</span>: {
        back(){
            alert(<span class="hljs-string">'header头部， 点击返回'</span>)
        },
        <span class="hljs-selector-tag">title</span>(){
            <span class="hljs-selector-tag">alert</span>(<span class="hljs-string">'header头部， 点击title'</span>)
        },
        <span class="hljs-selector-tag">more</span>(){
            <span class="hljs-selector-tag">alert</span>(<span class="hljs-string">'header头部， 点击更多'</span>)
        }
    }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>新增图标</h2><p>通过slot <strong>left</strong>，<strong>right</strong> 增加左右两侧图标</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span>&gt;</span>NavBar1
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"close"</span>&gt;</span>关闭<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"edit"</span>&gt;</span>编辑<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-built_in">default</span> {
    methods: {
        <span class="hljs-built_in">close</span>(){
            alert(<span class="hljs-string">'header头部， 点击关闭'</span>)
        },
        edit(){
            alert(<span class="hljs-string">'header头部， 点击编辑'</span>)
        }
    }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>修改默认图标</h2><p>通过slot <strong>back-icon</strong>，<strong>more-icon</strong> 来修改组件两侧默认图标</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span>&gt;</span>NavBar1
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"back-icon"</span>&gt;</span>返回<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"more-icon"</span>&gt;</span>更多<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义Class</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-navbar</span> 
    <span class="hljs-attr">class</span>=<span class="hljs-string">"my-nav"</span>
&gt;</span>title<span class="hljs-tag">&lt;/<span class="hljs-name">nut-navbar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>leftShow</td>
<td>是否显示左侧按钮</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>title</td>
<td>中间显示文字内容</td>
<td>String</td>
<td>NavBar</td>
</tr>
<tr>
<td>rightShow</td>
<td>是否显示右侧按钮</td>
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
<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Lazyload 图片懒加载<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lazyloadDemo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>基础使用<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">"imageArray[0]"</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>背景图懒加载<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">"imageArray[1]"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>懒加载模块<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">lazy-component</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"imageArray[2]"</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">lazy-component</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>错误、加载中 图片设置<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">"imgObj"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">imgObj</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">"//error.png"</span>,
        <span class="hljs-attr">error</span>: <span class="hljs-string">'//img12.360buyimg.com/imagetools/jfs/t1/75933/12/14706/2086/5dc142e4E62f88e83/2d68d4d25d87faa4.png'</span>,
        <span class="hljs-attr">loading</span>: <span class="hljs-string">'//img12.360buyimg.com/imagetools/jfs/t1/73967/28/14561/916/5dc142e4E0666555b/bf33454553c6035e.png'</span>
      },
      <span class="hljs-attr">imageArray</span>: [
        <span class="hljs-string">"//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg"</span>,
        <span class="hljs-string">"//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png"</span>,
        <span class="hljs-string">"//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg"</span>
      ]
    };
  }
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
  <span class="hljs-selector-tag">img</span><span class="hljs-selector-attr">[lazy="loading"]</span> {
    <span class="hljs-comment">/*your style here*/</span>
  }
  <span class="hljs-selector-tag">img</span><span class="hljs-selector-attr">[lazy="error"]</span> {
    <span class="hljs-comment">/*your style here*/</span>
  }
  <span class="hljs-selector-tag">img</span><span class="hljs-selector-attr">[lazy="loaded"]</span> {
    <span class="hljs-comment">/*your style here*/</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>loading</td>
<td>加载时的图片</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>error</td>
<td>错误时的图片</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>preload</td>
<td>提前加载高度（数字 1 表示 1 屏的高度）</td>
<td>Number</td>
<td>1.3</td>
</tr>
<tr>
<td>attempt</td>
<td>加载错误后最大尝试次数</td>
<td>Number</td>
<td>3</td>
</tr>
<tr>
<td>listenEvents</td>
<td>监听事件</td>
<td>string[]</td>
<td>[&#39;scroll&#39;, &#39;wheel&#39;, &#39;mousewheel&#39;, &#39;resize&#39;, &#39;animationend&#39;, &#39;transitionend&#39;, &#39;touchmove&#39;]</td>
</tr>
<tr>
<td>adapter</td>
<td>动态修改元素属性</td>
<td>Object</td>
<td>{ }</td>
</tr>
<tr>
<td>filter</td>
<td>图片监听过滤</td>
<td>Object</td>
<td>{ }</td>
</tr>
<tr>
<td>lazyComponent</td>
<td>组件懒加载</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>dispatchEvent</td>
<td>触发元素状态监听事件（error, loaded, rendered）</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody></table>
<blockquote>
<p>更多内容请参照：<a href="https://github.com/hilongjw/vue-lazyload">vue-lazyload 官方文档</a></p>
</blockquote>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
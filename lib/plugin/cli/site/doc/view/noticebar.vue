<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>NoticeBar 通告栏<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">text</span>=<span class="hljs-string">"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>禁用滚动</h2><p>文字内容多于一行时，可通过scrollable参数控制是否开启滚动</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">text</span>=<span class="hljs-string">"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"</span>
      <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">"false"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>通告栏模式--关闭模式</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">:closeMode</span>=<span class="hljs-string">"true"</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">"hello"</span>
    &gt;</span>华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>通告栏模式--链接模式</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">left-icon</span>=<span class="hljs-string">"https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://www.jd.com"</span>&gt;</span>京东商城<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>text</td>
<td>提示的信息</td>
<td>String</td>
<td>空</td>
</tr>
<tr>
<td>closeMode</td>
<td>是否启用关闭模式</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>leftIcon</td>
<td>close为没有左边icon,其他为自定义的图片链接，没有为默认图片</td>
<td>String</td>
<td>空</td>
</tr>
<tr>
<td>color</td>
<td>导航栏的文字颜色</td>
<td>String</td>
<td>空</td>
</tr>
<tr>
<td>background</td>
<td>导航栏的背景颜色</td>
<td>String</td>
<td>空</td>
</tr>
<tr>
<td>delay</td>
<td>延时多少秒</td>
<td>String/Number</td>
<td>1</td>
</tr>
<tr>
<td>scrollable</td>
<td>是否可以滚动</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>speed</td>
<td>移动375px需要用的时间</td>
<td>Number</td>
<td>6</td>
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
<td>click</td>
<td>外层点击事件回调</td>
<td>无</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>TabSelect 分类选择<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-tabselect
  <span class="hljs-symbol">:mainTitle=<span class="hljs-string">"mainTitle"</span></span>
  <span class="hljs-symbol">:subTitle=<span class="hljs-string">"subTitle"</span></span>
  <span class="hljs-symbol">:defaultContent=<span class="hljs-string">"defaultContent"</span></span>
  <span class="hljs-symbol">:tabList=<span class="hljs-string">"tabList"</span></span>
  <span class="hljs-symbol">:show=<span class="hljs-string">"show"</span></span>
  <span class="hljs-variable">@close</span>=<span class="hljs-string">"show = false"</span>
  <span class="hljs-variable">@choose</span>=<span class="hljs-string">"choose"</span>
  <span class="hljs-symbol">:multiple=<span class="hljs-string">"false"</span></span>
&gt;&lt;<span class="hljs-regexp">/nut-tabselect&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>基本用法（多选模式）</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-tabselect
  <span class="hljs-symbol">:mainTitle=<span class="hljs-string">"mainTitle"</span></span>
  <span class="hljs-symbol">:subTitle=<span class="hljs-string">"subTitle"</span></span>
  <span class="hljs-symbol">:defaultContent=<span class="hljs-string">"defaultContent"</span></span>
  <span class="hljs-symbol">:tabList=<span class="hljs-string">"tabList"</span></span>
  <span class="hljs-symbol">:show=<span class="hljs-string">"show"</span></span>
  <span class="hljs-variable">@close</span>=<span class="hljs-string">"show = false"</span>
  <span class="hljs-variable">@choose</span>=<span class="hljs-string">"choose"</span>
  <span class="hljs-symbol">:multiple=<span class="hljs-string">"true"</span></span>
  <span class="hljs-symbol">:max=<span class="hljs-string">"3"</span></span>
&gt;&lt;<span class="hljs-regexp">/nut-tabselect&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-class">default </span>{
<span class="hljs-symbol">  components:</span> {},
  data() {
    <span class="hljs-class">return </span>{
<span class="hljs-symbol">      mainTitle:</span> <span class="hljs-string">"配送"</span>,
<span class="hljs-symbol">      subTitle:</span> <span class="hljs-string">"送达时间"</span>,
<span class="hljs-symbol">      defaultContent:</span> [
        <span class="hljs-string">"9:00——10:00"</span>,
        <span class="hljs-string">"10:00——11:00"</span>,
        <span class="hljs-string">"11:00——12:00"</span>,
        <span class="hljs-string">"12:00——13:00"</span>,
        <span class="hljs-string">"13:00——15:00"</span>,
        <span class="hljs-string">"15:00——17:00"</span>,
        <span class="hljs-string">"17:00——19:00"</span>
      ],
<span class="hljs-symbol">      tabList:</span> [
        {
<span class="hljs-symbol">          tabTitle:</span> <span class="hljs-string">"京东快递"</span>, <span class="hljs-comment">// 一级tab标题</span>
<span class="hljs-symbol">          children:</span> [
            <span class="hljs-comment">// 一级tab内容</span>
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"1月13日 (星期一)"</span>, <span class="hljs-comment">// 二级tab标题</span>
<span class="hljs-symbol">              content:</span> [
                <span class="hljs-comment">// 二级tab内容，不传默认使用defaultContent字段</span>
                <span class="hljs-string">"11:00——12:00"</span>,
                <span class="hljs-string">"12:00——13:00"</span>,
                <span class="hljs-string">"13:00——15:00"</span>,
                <span class="hljs-string">"15:00——17:00"</span>,
                <span class="hljs-string">"17:00——19:00"</span>
              ]
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"1月14日 (星期二)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"1月15日 (星期三)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"1月16日 (星期四)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"1月17日 (星期五)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"1月18日 (星期六)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"1月19日 (星期天)"</span>
            }
          ]
        },
        {
<span class="hljs-symbol">          tabTitle:</span> <span class="hljs-string">"上门自提"</span>,
<span class="hljs-symbol">          children:</span> [
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"2月13日 (星期一)"</span>,
<span class="hljs-symbol">              content:</span> [<span class="hljs-string">"13:00——15:00"</span>, <span class="hljs-string">"15:00——17:00"</span>, <span class="hljs-string">"17:00——19:00"</span>]
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"2月14日 (星期二)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"2月15日 (星期三)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"2月16日 (星期四)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"2月17日 (星期五)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"2月18日 (星期六)"</span>
            },
            {
<span class="hljs-symbol">              tabTitle:</span> <span class="hljs-string">"2月19日 (星期天)"</span>
            }
          ]
        }
      ],
<span class="hljs-symbol">      show:</span> false
    };
  },
<span class="hljs-symbol">  methods:</span> {
    choose(title, item) {
      console.log(title, item);
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>Prop</h3><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>mainTitle</td>
<td>一级 tab 标题</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>subTitle</td>
<td>二级 tab 标题</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>defaultContent</td>
<td>二级 tab 下内容完全一致时传</td>
<td>Array</td>
<td>null</td>
</tr>
<tr>
<td>multiple</td>
<td>是否允许多选</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>tabList</td>
<td>整体数据</td>
<td>Array</td>
<td>null</td>
</tr>
<tr>
<td>show</td>
<td>是否显示</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>max</td>
<td>多选时最多可选个数</td>
<td>Number</td>
<td>Infinity</td>
</tr>
</tbody></table>
<h3>Event</h3><table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody><tr>
<td>choose</td>
<td>切换页签或选中某一项</td>
<td>点击的一级 tab ，二级 tab ，选中项内容</td>
</tr>
<tr>
<td>close</td>
<td>组件隐藏时</td>
<td>--</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
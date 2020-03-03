<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Tabbar 标签栏<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-tabbar 
  @tab-<span class="hljs-keyword">switch</span>=<span class="hljs-string">"tabSwitch1"</span> 
  <span class="hljs-built_in">type</span>=<span class="hljs-string">"card"</span>  
  :tabbarList=<span class="hljs-string">"tabList1"</span>
&gt;&lt;/nut-tabbar&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export default {
  data() {
    return {
      tabList1:[
        {
          'tabTitle':'日用品',
          'curr':true,
          'icon':'http://img13.360buyimg.com/uba/jfs/t<span class="hljs-number">3033</span>1/209/<span class="hljs-number">56274634</span>0/<span class="hljs-number">2190/661997</span>3d/5bf763aaN6ff<span class="hljs-number">0209</span>9.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t<span class="hljs-number">2867</span>5/125/<span class="hljs-number">56958912</span>4/<span class="hljs-number">2710</span>/fe1b0e7c/5bf<span class="hljs-number">7921</span>8Nbc49fc24.jpg'
        },
        {
          'tabTitle':'服饰',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t<span class="hljs-number">2728</span>0/289/<span class="hljs-number">2061314663/2392</span>/872e32ff/5bf<span class="hljs-number">7631</span>8Ndc80c1d8.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t<span class="hljs-number">2846</span>8/128/<span class="hljs-number">56549464</span>2/<span class="hljs-number">3313</span>/ce508dd6/5bf<span class="hljs-number">7921</span>4Nab2a<span class="hljs-number">3076</span>.jpg'
        },
        {
          'tabTitle':'娱乐',
          'curr':false,
          'icon':'http://img10.360buyimg.com/uba/jfs/t<span class="hljs-number">2677</span>9/215/<span class="hljs-number">2118525153/2413</span>/470d<span class="hljs-number">1613</span>/5bf767b2N<span class="hljs-number">075957</span>b7.jpg',
          'activeIcon':'http://img11.360buyimg.com/uba/jfs/t<span class="hljs-number">2737</span>0/260/<span class="hljs-number">2117900302/3274</span>/bd097e85/5bf<span class="hljs-number">7921</span>bNafc526e2.jpg'
        }
      ]
    };
  },
  methods: {
      tabSwitch1:function(value,index){
        console.<span class="hljs-built_in">log</span>(index);
      },
  }</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>带有tips的文本标签栏</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-tabbar 
  @tab-<span class="hljs-keyword">switch</span>=<span class="hljs-string">"tabSwitch2"</span> 
  <span class="hljs-built_in">type</span>=<span class="hljs-string">"card"</span> 
  :tabbarList=<span class="hljs-string">"tabList2"</span>
&gt;
&lt;/nut-tabbar&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  data() {
    return {
      tabList2:[
        {
          <span class="hljs-string">'tabTitle'</span>:<span class="hljs-string">'百度'</span>,
          <span class="hljs-string">'curr'</span>:false,
          <span class="hljs-string">'icon'</span>:<span class="hljs-string">''</span>,
          <span class="hljs-string">'num'</span>:5,
        },
        {
          <span class="hljs-string">'tabTitle'</span>:<span class="hljs-string">'京东'</span>,
          <span class="hljs-string">'curr'</span>:true,
          <span class="hljs-string">'icon'</span>:<span class="hljs-string">''</span>
        },
        {
          <span class="hljs-string">'tabTitle'</span>:<span class="hljs-string">'知乎'</span>,
          <span class="hljs-string">'curr'</span>:false,
          <span class="hljs-string">'icon'</span>:<span class="hljs-string">''</span>,
        }
      ]
    };
  },
  methods: {
      tabSwitch2:function(value,index){
        console.log(value);
      }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>固定底部，可跳转页面</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-tabbar 
  <span class="hljs-variable">@tab</span>-switch=<span class="hljs-string">"tabSwitch3"</span> 
  <span class="hljs-symbol">:tabbarList=<span class="hljs-string">"tabList3"</span></span> 
  <span class="hljs-symbol">:bottom=<span class="hljs-string">"true"</span></span>
&gt;
&lt;<span class="hljs-regexp">/nut-tabbar&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export default {
  components: {
    [tabbar.name]: tabbar,
  },
  data() {
    return {
      tabList3:[
        {
          'tabTitle':'主页',
          'curr':true,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/<span class="hljs-number">2931</span>6/38/<span class="hljs-number">1115/3203</span>/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/<span class="hljs-number">9996/36/8646/4833</span>/5c0f3d61E7c1b7e0f/c98ad<span class="hljs-number">61124172</span>e93.jpg',
          'href':'###'
        },
        {
          'tabTitle':'分类',
          'curr':false,
          'icon':'http://img12.360buyimg.com/uba/jfs/t1/<span class="hljs-number">2544</span>3/23/<span class="hljs-number">1062/4600</span>/5c0f3d61E2e9f<span class="hljs-number">1360</span>/c9b<span class="hljs-number">3421</span>fe<span class="hljs-number">1861</span>4e2.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/<span class="hljs-number">1924</span>1/12/<span class="hljs-number">1048/8309</span>/5c0f3d61E17ed5a56/c3af<span class="hljs-number">0964</span>cade47f8.jpg',
          'href':'###'
        },
        {
          'tabTitle':'发现',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/<span class="hljs-number">1036</span>1/35/<span class="hljs-number">4713/4643</span>/5c0f3d62E437a3c94/273fd0fb<span class="hljs-number">9079</span>8f03.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/<span class="hljs-number">2660</span>4/35/<span class="hljs-number">1073/7896</span>/5c0f3d61Eb9f5f184/5f01c938abe<span class="hljs-number">4216</span>d.jpg',
          'href':'###'
        },
        {
          'tabTitle':'购物车',
          'curr':false,
          'num':<span class="hljs-number">2</span>,
          'icon':'http://img11.360buyimg.com/uba/jfs/t1/<span class="hljs-number">1484</span>8/18/<span class="hljs-number">1066/3723</span>/5c0f41bdE9f2a38fe/e6ed<span class="hljs-number">6768717297</span>fb.jpg',
          'activeIcon':'http://img30.360buyimg.com/uba/jfs/t1/<span class="hljs-number">1753</span>8/16/<span class="hljs-number">1070/6214</span>/5c0f41bdE4bc9a1db/74cf978e<span class="hljs-number">501545</span>4b.jpg',
          'href':'###'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'http://img20.360buyimg.com/uba/jfs/t1/<span class="hljs-number">2000</span>4/20/<span class="hljs-number">1045/3620</span>/5c0f3d61Eaaec<span class="hljs-number">1670</span>/9e59db<span class="hljs-number">6398</span>3b7b9f.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/<span class="hljs-number">2396</span>7/14/<span class="hljs-number">1072/6714</span>/5c0f3d61E0ad<span class="hljs-number">8991</span>e/8f<span class="hljs-number">741953</span>f6e38f15.jpg',
          'href':'###'
        }
      ]
    };
  },
  methods: {
      tabSwitch3:function(value,index){
        console.<span class="hljs-built_in">log</span>(index);
      }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>Prop</h3><h3>nut-tabbar</h3><table>
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
<td>页签栏的样式 based/card</td>
<td>String</td>
<td>based</td>
</tr>
<tr>
<td>tabbarList</td>
<td>渲染数据</td>
<td>Array</td>
<td>--</td>
</tr>
<tr>
<td>tabTitle</td>
<td>标签页的标题</td>
<td>String</td>
<td>--</td>
</tr>
<tr>
<td>curr</td>
<td>是否为选中的标签页</td>
<td>Booble</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>标签页显示的图片</td>
<td>String</td>
<td>--</td>
</tr>
<tr>
<td>activeIcon</td>
<td>标签页的活动状态显示的图片</td>
<td>String</td>
<td>--</td>
</tr>
<tr>
<td>href</td>
<td>标签页的跳转链接</td>
<td>String</td>
<td>--</td>
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
<td>tabSwitch</td>
<td>切换页签时触发事件</td>
<td>点击的索引值和对应的数据</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
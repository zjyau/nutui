<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Tab 选项卡<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>常用于平级区域大块内容的的收纳和展现。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-literal">tab</span> @<span class="hljs-literal">tab</span>-<span class="hljs-keyword">switch</span>=<span class="hljs-string">"tabSwitch"</span>&gt;
    &lt;nut-<span class="hljs-literal">tab</span>-panel tabTitle=<span class="hljs-string">"页签1"</span>&gt;页签<span class="hljs-number">1</span>&lt;/nut-<span class="hljs-literal">tab</span>-panel&gt;
    &lt;nut-<span class="hljs-literal">tab</span>-panel tabTitle=<span class="hljs-string">"页签2"</span>&gt;页签<span class="hljs-number">2</span>&lt;/nut-<span class="hljs-literal">tab</span>-panel&gt;
    &lt;nut-<span class="hljs-literal">tab</span>-panel tabTitle=<span class="hljs-string">"页签3"</span>&gt;页签<span class="hljs-number">3</span>&lt;/nut-<span class="hljs-literal">tab</span>-panel&gt;
&lt;/nut-<span class="hljs-literal">tab</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  methods: {
      tabSwitch:function(index,event){
        console.log(index+<span class="hljs-string">'--'</span>+event.target);
      }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>使用数据渲染，支持上/下/左/右四个样式；</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-<span class="hljs-literal">tab</span> @<span class="hljs-literal">tab</span>-<span class="hljs-keyword">switch</span>=<span class="hljs-string">"tabSwitch"</span>  positionNav=<span class="hljs-string">"bottom"</span>&gt;
    &lt;nut-<span class="hljs-literal">tab</span>-panel 
      v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"value in editableTabs"</span> 
      v-bind:key=<span class="hljs-string">"value.tabTitle"</span> 
      :tabTitle=<span class="hljs-string">"value.tabTitle"</span> 
      :iconUrl=<span class="hljs-string">"value.tabUrl"</span> 
      v-html=<span class="hljs-string">"value.content"</span>
    &gt;
    &lt;/nut-<span class="hljs-literal">tab</span>-panel&gt;
&lt;/nut-<span class="hljs-literal">tab</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export default {
  data() {
    return {
      positionNavCurr:'top',
      editableTabs:[
        {
          'tabTitle':'衣物',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t<span class="hljs-number">2728</span>0/289/<span class="hljs-number">2061314663/2392</span>/872e32ff/5bf<span class="hljs-number">7631</span>8Ndc80c1d8.jpg',
          'content':'&lt;p&gt;衣物内容&lt;/p&gt;'
        },
        {
          'tabTitle':'日用品',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t<span class="hljs-number">3033</span>1/209/<span class="hljs-number">56274634</span>0/<span class="hljs-number">2190/661997</span>3d/5bf763aaN6ff<span class="hljs-number">0209</span>9.jpg',
          'content':'&lt;p&gt;日用品内容&lt;/p&gt;'
        },
        {
          'tabTitle':'器材',
          'tabUrl':'http://img20.360buyimg.com/uba/jfs/t<span class="hljs-number">3034</span>6/262/<span class="hljs-number">55368920</span>2/<span class="hljs-number">2257</span>/5dfa<span class="hljs-number">3983</span>/5bf<span class="hljs-number">7640</span>7N72deabf4.jpg',
          'content':'&lt;p&gt;运动器材内容&lt;/p&gt;'
        },
        {
          'tabTitle':'电影票',
          'tabUrl':'http://img10.360buyimg.com/uba/jfs/t<span class="hljs-number">2677</span>9/215/<span class="hljs-number">2118525153/2413</span>/470d<span class="hljs-number">1613</span>/5bf767b2N<span class="hljs-number">075957</span>b7.jpg',
          'content':'&lt;p&gt;电影票内容&lt;/p&gt;'
        }
      ]
    };
  },
  methods: {
      tabSwitch:function(index,event){
        console.<span class="hljs-built_in">log</span>(index+'--'+event.target);
      }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>禁止选中，默认选中某个标签</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-tab 
  :defIndex=<span class="hljs-string">"1"</span>
  <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"customer-css"</span> 
  @tab-<span class="hljs-keyword">switch</span>=<span class="hljs-string">"tabSwitch"</span>
  :contentShow=<span class="hljs-string">"true"</span>
&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> 
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">'value in disableTabs'</span> 
      <span class="hljs-attr">v-bind:key</span>=<span class="hljs-string">"value.tabTitle"</span> 
      <span class="hljs-attr">:tabTitle</span>=<span class="hljs-string">"value.tabTitle"</span> 
      <span class="hljs-attr">:disable</span> = <span class="hljs-string">"value.disable"</span> 
      <span class="hljs-attr">v-html</span>=<span class="hljs-string">"value.content"</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span></span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export default {
  data() {
    return {
      positionNavCurr:'top',
      disableTabs:[
        {
          'tabTitle':'衣物',
          'disable':false,
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t<span class="hljs-number">2728</span>0/289/<span class="hljs-number">2061314663/2392</span>/872e32ff/5bf<span class="hljs-number">7631</span>8Ndc80c1d8.jpg',
          'content':'&lt;p&gt;衣物内容&lt;/p&gt;'
        },
        {
          'tabTitle':'日用品',
          'tabUrl':'http://img13.360buyimg.com/uba/jfs/t<span class="hljs-number">3033</span>1/209/<span class="hljs-number">56274634</span>0/<span class="hljs-number">2190/661997</span>3d/5bf763aaN6ff<span class="hljs-number">0209</span>9.jpg',
          'content':'&lt;p&gt;日用品内容&lt;/p&gt;'
        },
        {
          'tabTitle':'运动器材',
          'tabUrl':'http://img20.360buyimg.com/uba/jfs/t<span class="hljs-number">3034</span>6/262/<span class="hljs-number">55368920</span>2/<span class="hljs-number">2257</span>/5dfa<span class="hljs-number">3983</span>/5bf<span class="hljs-number">7640</span>7N72deabf4.jpg',
          'content':'&lt;p&gt;运动器材内容&lt;/p&gt;'
        },
        {
          'tabTitle':'电影票',
          'tabUrl':'http://img10.360buyimg.com/uba/jfs/t<span class="hljs-number">2677</span>9/215/<span class="hljs-number">2118525153/2413</span>/470d<span class="hljs-number">1613</span>/5bf767b2N<span class="hljs-number">075957</span>b7.jpg',
          'content':'&lt;p&gt;电影票内容&lt;/p&gt;'
        }
      ]
    };
  },
  methods: {
      tabSwitch:function(index,event){
        console.<span class="hljs-built_in">log</span>(index+'--'+event.target);
      }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h3>Prop</h3><h3>nut-tab</h3><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>positionNav</td>
<td>页签栏的分布，可选值 top/bottom/left/right</td>
<td>String</td>
<td>top</td>
</tr>
<tr>
<td>defIndex</td>
<td>默认选中的页签栏</td>
<td>String</td>
<td>1</td>
</tr>
<tr>
<td>contentShow</td>
<td>是否显示tab内容</td>
<td>Boolean</td>
<td>true</td>
</tr>
</tbody></table>
<h3>nut-tab-panel</h3><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>tabTitle</td>
<td>页签的标题</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>iconUrl</td>
<td>页签的图标地址</td>
<td>String</td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>content</td>
<td>页签的自定义内容</td>
<td>String</td>
<td>&#39;&#39;</td>
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
<td>点击的索引值和触发元素</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Elevator 电梯楼层组件<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-elevator 
        <span class="hljs-symbol">:dataArray=<span class="hljs-string">"dataList"</span></span>  
        <span class="hljs-symbol">:showIndicator=<span class="hljs-string">"true"</span></span>
        <span class="hljs-symbol">:navHeight=<span class="hljs-string">"40"</span></span>
        <span class="hljs-symbol">:otherHeight=<span class="hljs-string">"60"</span></span>
        <span class="hljs-symbol">:initIndex=<span class="hljs-string">"0"</span></span> 
        <span class="hljs-symbol">:hiddenTime=<span class="hljs-string">'500'</span></span>
        <span class="hljs-variable">@clickNav</span>=<span class="hljs-string">"clickNav"</span>
        <span class="hljs-variable">@clickList</span>=<span class="hljs-string">"clickList"</span>
        &gt;
&lt;<span class="hljs-regexp">/nut-elevator&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>数据类型</p>
<hide><pre class="prettyprint"><span class="lang">js</span><div class="code-wrapper"><code class="language-js"><span class="hljs-attribute">dataList</span>:[
    {
      <span class="hljs-attribute">title</span>:<span class="hljs-string">"A"</span>,
      <span class="hljs-attribute">list</span>:[<span class="hljs-comment">//可以为空数组</span>
        {
          <span class="hljs-attribute">name</span>:<span class="hljs-string">'安其拉'</span>,
          <span class="hljs-attribute">id</span>:<span class="hljs-string">'a1'</span><span class="hljs-comment">//id字段可以没有</span>
        },
        {
          <span class="hljs-attribute">name</span>:<span class="hljs-string">'安琪'</span>,
          <span class="hljs-attribute">id</span>:<span class="hljs-string">'a2'</span>
        }
      ]
    }    
]</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>Prop</h2><table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
</tr>
</thead>
<tbody><tr>
<td>dataArray</td>
<td>渲染楼层数据，为必填项</td>
<td>Array</td>
<td>[]</td>
<td>--</td>
</tr>
<tr>
<td>showIndicator</td>
<td>是否显示索引值提示符</td>
<td>Boolean</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>hiddenTime</td>
<td>索引值提示符显示的时间，单位ms</td>
<td>Number</td>
<td>500</td>
<td>--</td>
</tr>
<tr>
<td>navHeight</td>
<td>索引栏每个索引区域的高度，单位px</td>
<td>Number</td>
<td>40</td>
<td>--</td>
</tr>
<tr>
<td>initIndex</td>
<td>进入页面后，当前定位到的索引值</td>
<td>Number</td>
<td>0</td>
<td>--</td>
</tr>
<tr>
<td>otherHeight</td>
<td>显示组件区域外部的高度，比如title区域高度，单位px</td>
<td>Number</td>
<td>40</td>
<td>--</td>
</tr>
</tbody></table>
<h2>Events</h2><table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody><tr>
<td>clickNav</td>
<td>点击/离开索引栏时的回调函数</td>
<td>返回点击的索引值和title</td>
</tr>
<tr>
<td>clickList</td>
<td>点击左侧列表时的回调函数</td>
<td>返回点击的对象数据和所在区域的对象数据</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
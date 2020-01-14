<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Calendar 日历<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><p>日期选择（不带默认日期）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-calendar 
    <span class="hljs-symbol">:is-visible</span>.sync=<span class="hljs-string">"isVisible"</span>
    <span class="hljs-symbol">:default-value=<span class="hljs-string">"date"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPickerClose('isVisible')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue"</span>
    <span class="hljs-symbol">:start-date=<span class="hljs-string">"`2018-10-11`"</span></span>
    <span class="hljs-symbol">:end-date=<span class="hljs-string">"`2020-11-11`"</span></span>
&gt;
&lt;<span class="hljs-regexp">/nut-calendar&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>日期选择（有默认日期，选择后自动回填）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-calendar 
    <span class="hljs-symbol">:is-visible</span>.sync=<span class="hljs-string">"isVisible2"</span>
    <span class="hljs-symbol">:default-value=<span class="hljs-string">"date2"</span></span>
    <span class="hljs-symbol">:is-auto-back-fill=<span class="hljs-string">"true"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPickerClose('isVisible2')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue2"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-calendar&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>日期区间选择（有默认日期）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-calendar 
    <span class="hljs-symbol">:is-visible</span>.sync=<span class="hljs-string">"isVisible1"</span>
    <span class="hljs-symbol">:default-value=<span class="hljs-string">"date1"</span></span>
    type=<span class="hljs-string">"range"</span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPickerClose('isVisible1')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue1"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-calendar&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>日期区间选择（不限制开始结束时间）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-calendar 
    <span class="hljs-symbol">:is-visible</span>.sync=<span class="hljs-string">"isVisible3"</span>
    <span class="hljs-symbol">:default-value=<span class="hljs-string">"date3"</span></span>
    type=<span class="hljs-string">"range"</span>
    <span class="hljs-symbol">:start-date=<span class="hljs-string">"null"</span></span>
    <span class="hljs-symbol">:end-date=<span class="hljs-string">"null"</span></span>
    <span class="hljs-symbol">:animation=<span class="hljs-string">"`nutSlideUp`"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPickerClose('isVisible3')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue3"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-calendar&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
    data() {
        <span class="hljs-keyword">return</span> {
            isVisible: <span class="hljs-literal">false</span>,
            isVisible1: <span class="hljs-literal">false</span>,
            isVisible2: <span class="hljs-literal">false</span>,
            isVisible3: <span class="hljs-literal">false</span>,
            date: <span class="hljs-literal">null</span>,
            dateWeek: <span class="hljs-literal">null</span>,
            date1: [<span class="hljs-string">'2018-12-22'</span>, <span class="hljs-string">'2019-01-08'</span>],
            date2: Utils.getDay(<span class="hljs-number">30</span>), <span class="hljs-comment">// 当前日期之后的30天</span>
            date3: <span class="hljs-literal">null</span>

        };
    },
    methods: {
        switchPickerClose(param){
            console.log(<span class="hljs-string">'close:'</span> + param)
        },
        switchPicker(param) {
            <span class="hljs-keyword">this</span>[`${param}`] = <span class="hljs-literal">true</span>;
        },
        setChooseValue(param) {
            <span class="hljs-keyword">this</span>.date = param[<span class="hljs-number">3</span>];
            <span class="hljs-keyword">this</span>.dateWeek = param[<span class="hljs-number">4</span>];
        },
        setChooseValue1(param) {
            <span class="hljs-keyword">this</span>.date1 = [...[param[<span class="hljs-number">0</span>][<span class="hljs-number">3</span>],param[<span class="hljs-number">1</span>][<span class="hljs-number">3</span>]]];
        },
        setChooseValue2(param) {
            <span class="hljs-keyword">this</span>.date2 = param[<span class="hljs-number">3</span>];
        },
        setChooseValue3(param) {
            <span class="hljs-keyword">this</span>.date3 = [...[param[<span class="hljs-number">0</span>][<span class="hljs-number">3</span>],param[<span class="hljs-number">1</span>][<span class="hljs-number">3</span>]]];
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
<td>type</td>
<td>类型，日期选择&#39;one&#39;，区间选择&#39;range&#39;</td>
<td>String</td>
<td>&#39;one&#39;</td>
</tr>
<tr>
<td>isVisible</td>
<td>是否可见（注意：绑定时必须<code>:is-visible.sync</code>,加sync修饰符）</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>animation</td>
<td>日历进入方向，右滑&#39;nutSlideRight&#39;， 上拉&#39;nutSlideUp&#39;</td>
<td>String</td>
<td>&#39;nutSlideRight&#39;</td>
</tr>
<tr>
<td>isAutoBackFill</td>
<td>是否自动回填</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>isOpenRangeSelect</td>
<td>是否开启区间选择</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>显示标题</td>
<td>String</td>
<td>‘选择日期’</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认值，日期选择String格式，区间选择Array格式</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>startDate</td>
<td>开始日期， 如果不限制开始日期传null</td>
<td>String</td>
<td>今天</td>
</tr>
<tr>
<td>default</td>
<td>结束日期，如果不限制结束日期传null</td>
<td>String</td>
<td>距离今天五个月</td>
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
<td>choose</td>
<td>选择之后或是点击确认按钮触发</td>
<td>日期数组（包含年月日和星期）</td>
</tr>
<tr>
<td>close</td>
<td>关闭时触发</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
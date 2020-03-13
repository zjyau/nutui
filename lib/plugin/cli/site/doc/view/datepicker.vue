<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>DatePicker 日期选择<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><p>日期选择（不显示中文）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-datepicker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible"</span></span>
    type=<span class="hljs-string">"date"</span>
    title=<span class="hljs-string">"请选择日期"</span> 
    <span class="hljs-symbol">:is-show-chinese=<span class="hljs-string">"false"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-datepicker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>日期选择（限制开始结束时间）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-datepicker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible1"</span></span>
    title=<span class="hljs-string">"请选择日期"</span> 
    type=<span class="hljs-string">"date"</span>
    startDate=<span class="hljs-string">"1991-11-10"</span>
    endDate=<span class="hljs-string">"2019-10-05"</span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible1')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue1"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-datepicker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>日期时间选择（有默认值，限制开始结束时间，限制到时分）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-datepicker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible2"</span></span>
    title=<span class="hljs-string">"请选择日期时间"</span> 
    type=<span class="hljs-string">"datetime"</span>
    startDate=<span class="hljs-string">"2000-11-10 12:08"</span>
    endDate=<span class="hljs-string">"2030-10-05 10:04"</span>
    defaultValue=<span class="hljs-string">"2018-11-02 11:08"</span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible2')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue2"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-datepicker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>时间选择（12小时制）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-datepicker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible3"</span></span> 
    type=<span class="hljs-string">"time"</span>
    title=<span class="hljs-string">"请选择时间"</span> 
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible3')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue3"</span>
    <span class="hljs-symbol">:is-use12-hours=<span class="hljs-string">"true"</span></span>
    defaultValue=<span class="hljs-string">"01:07"</span>
    <span class="hljs-symbol">:is-am=<span class="hljs-string">"false"</span></span>
&gt;
&lt;<span class="hljs-regexp">/nut-datepicker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>时间选择（限制开始结束小时）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-datepicker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible4"</span></span>
    type=<span class="hljs-string">"time"</span>
    title=<span class="hljs-string">"请选择时间"</span> 
    startHour=<span class="hljs-string">"8"</span>
    endHour=<span class="hljs-string">"18"</span>
    defaultValue=<span class="hljs-string">"09:06"</span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible4')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue4"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-datepicker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>时间选择（分钟数递增步长设置）</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-datepicker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible5"</span></span>
    type=<span class="hljs-string">"time"</span>
    title=<span class="hljs-string">"请选择时间"</span> 
    <span class="hljs-symbol">:minute-step=<span class="hljs-string">"5"</span></span>
    defaultValue=<span class="hljs-string">"10:30"</span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible5')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"setChooseValue5"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-datepicker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
    <span class="hljs-keyword">data</span>() {
        <span class="hljs-keyword">return</span> {
            isVisible: <span class="hljs-literal">false</span>,
            isVisible1: <span class="hljs-literal">false</span>,
            isVisible2: <span class="hljs-literal">false</span>,
            isVisible3: <span class="hljs-literal">false</span>,
            isVisible4: <span class="hljs-literal">false</span>,
            isVisible5: <span class="hljs-literal">false</span>,
            date: <span class="hljs-literal">null</span>,
            date1: <span class="hljs-literal">null</span>,
            datetime: <span class="hljs-string">'2018-11-02 11:08'</span>,
            time: <span class="hljs-string">'01:07'</span>,
            time1: <span class="hljs-string">'09:06'</span>,
            time2: <span class="hljs-string">'10:30'</span>,
            amOrPm: <span class="hljs-string">'PM'</span>
        };
    },
    methods: {
        switchPicker(param) {
            <span class="hljs-keyword">this</span>[`${param}`] = !<span class="hljs-keyword">this</span>[`${param}`];
        },
        setChooseValue(param) {
            <span class="hljs-keyword">this</span>.date = param[<span class="hljs-number">3</span>];
        },
        setChooseValue1(param) {
            <span class="hljs-keyword">this</span>.date1 = param[<span class="hljs-number">3</span>];
        },
        setChooseValue2(param) {
            <span class="hljs-keyword">this</span>.datetime = param[<span class="hljs-number">5</span>];
        },
        setChooseValue3(param) {
            <span class="hljs-keyword">this</span>.amOrPm = param[<span class="hljs-number">2</span>] == <span class="hljs-string">'上午'</span> ? <span class="hljs-string">'AM'</span> : <span class="hljs-string">'PM'</span>;
            <span class="hljs-keyword">this</span>.time = param[<span class="hljs-number">3</span>];
        },
        setChooseValue4(param) {
            <span class="hljs-keyword">this</span>.time1 = param[<span class="hljs-number">2</span>];
        },
        setChooseValue5(param) {
            <span class="hljs-keyword">this</span>.time2 = param[<span class="hljs-number">2</span>];
        }
    }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>类型，日期&#39;date&#39;， 日期时间&#39;datetime&#39;，时间&#39;time&#39;</td>
<td>String</td>
<td>&#39;date&#39;</td>
</tr>
<tr>
<td>isVisible</td>
<td>是否可见</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>isUse12Hours</td>
<td>是否十二小时制度，只限类型为&#39;time&#39;时使用</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>isAm</td>
<td>是否上午</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>minuteStep</td>
<td>分钟步进值</td>
<td>String</td>
<td>1</td>
</tr>
<tr>
<td>isShowChinese</td>
<td>每列是否展示中文</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>title</td>
<td>设置标题</td>
<td>String</td>
<td>null</td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认值</td>
<td>String</td>
<td>null</td>
</tr>
<tr>
<td>startDate</td>
<td>开始日期</td>
<td>String</td>
<td>&#39;2000-01-01&#39;</td>
</tr>
<tr>
<td>endDate</td>
<td>结束日期</td>
<td>String</td>
<td>今天</td>
</tr>
<tr>
<td>startHour</td>
<td>开始小时</td>
<td>Number</td>
<td>1</td>
</tr>
<tr>
<td>endHour</td>
<td>结束小时</td>
<td>Number</td>
<td>23</td>
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
<td>点击确认按钮时候回调</td>
<td>返回日期时间</td>
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
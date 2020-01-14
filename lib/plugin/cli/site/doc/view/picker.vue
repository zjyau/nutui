<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Picker 拾取器<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>提供多个选项集合供用户选择其中一项。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-picker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible1"</span></span> 
    <span class="hljs-symbol">:default-value-data=<span class="hljs-string">"defaultValueData1"</span></span>
    <span class="hljs-symbol">:list-data=<span class="hljs-string">"listData1"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible1')"</span>
    <span class="hljs-variable">@confirm</span>=<span class="hljs-string">"setYearValue"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-picker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>多列用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-picker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible0"</span></span> 
    <span class="hljs-symbol">:list-data=<span class="hljs-string">"listData0"</span></span>
    title=<span class="hljs-string">"请选择年月"</span>
    <span class="hljs-symbol">:default-value-data=<span class="hljs-string">"defaultValueData0"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible0')"</span>
    <span class="hljs-variable">@confirm</span>=<span class="hljs-string">"setChooseValue0"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-picker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>联动（省市区）</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-picker 
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible"</span></span> 
    title=<span class="hljs-string">"请选择城市"</span>
    <span class="hljs-symbol">:list-data=<span class="hljs-string">"listData"</span></span>
    <span class="hljs-symbol">:default-value-data=<span class="hljs-string">"defaultValueData"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible')"</span>
    <span class="hljs-variable">@confirm</span>=<span class="hljs-string">"setChooseValue"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"updateChooseValue"</span>
    <span class="hljs-variable">@close</span>-update=<span class="hljs-string">"closeUpdateChooseValue"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-picker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>联动（省市区）自定义数据</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-picker
    <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible2"</span></span>
    title=<span class="hljs-string">"请选择城市"</span>
    <span class="hljs-symbol">:default-value-data=<span class="hljs-string">"defaultValueData"</span></span>
    <span class="hljs-symbol">:list-data=<span class="hljs-string">"custmerCityData"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchPicker('isVisible2')"</span>
    <span class="hljs-variable">@confirm</span>=<span class="hljs-string">"setChooseValueCustmer"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"updateChooseValueCustmer"</span>
    <span class="hljs-variable">@close</span>-update=<span class="hljs-string">"closeUpdateChooseValueCustmer"</span>
&gt;&lt;<span class="hljs-regexp">/nut-picker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">const</span> APIData = [
  {
    label: <span class="hljs-number">1</span>,
    array: [
      {
        label: <span class="hljs-number">3</span>,
        value: <span class="hljs-string">"朝阳区"</span>
      },
      {
        label: <span class="hljs-number">4</span>,
        value: <span class="hljs-string">"海淀区"</span>
      }
    ]
  },
  {
    label: <span class="hljs-number">2</span>,
    array: [
      {
        label: <span class="hljs-number">5</span>,
        value: <span class="hljs-string">"测试1"</span>
      },
      {
        label: <span class="hljs-number">6</span>,
        value: <span class="hljs-string">"测试2"</span>
      }
    ]
  }
];
export <span class="hljs-keyword">default</span> {
    <span class="hljs-keyword">data</span>() {
        <span class="hljs-keyword">return</span> {
            date: <span class="hljs-literal">null</span>,
            isVisible0: <span class="hljs-literal">false</span>,
            listData0: [
                [<span class="hljs-string">'2010'</span>, <span class="hljs-string">'2011'</span>, <span class="hljs-string">'2012'</span>, <span class="hljs-string">'2013'</span>, <span class="hljs-string">'2014'</span>, <span class="hljs-string">'2015'</span>, <span class="hljs-string">'2016'</span>,<span class="hljs-string">'2017'</span>, <span class="hljs-string">'2018'</span>, <span class="hljs-string">'2019'</span>, <span class="hljs-string">'2020'</span>, <span class="hljs-string">'2021'</span>, <span class="hljs-string">'2022'</span>, <span class="hljs-string">'2023'</span> ],
                [<span class="hljs-string">'1'</span>, <span class="hljs-string">'2'</span>, <span class="hljs-string">'3'</span>, <span class="hljs-string">'4'</span>, <span class="hljs-string">'5'</span>, <span class="hljs-string">'6'</span>, <span class="hljs-string">'7'</span>, <span class="hljs-string">'8'</span>, <span class="hljs-string">'9'</span>, <span class="hljs-string">'10'</span>, <span class="hljs-string">'11'</span>, <span class="hljs-string">'12'</span>]
            ],
            defaultValueData0:[<span class="hljs-string">'2012'</span>, <span class="hljs-string">'2'</span>],
            city: <span class="hljs-literal">null</span>,
            isVisible: <span class="hljs-literal">false</span>,
            <span class="hljs-keyword">data</span>:{
                <span class="hljs-string">'北京'</span>: [<span class="hljs-string">'北京'</span>],
                <span class="hljs-string">'黑龙江'</span>: [<span class="hljs-string">'哈尔滨'</span>,<span class="hljs-string">'绥化'</span>,<span class="hljs-string">'漠河'</span>,<span class="hljs-string">'大兴安岭'</span>,<span class="hljs-string">'牡丹江'</span>,<span class="hljs-string">'佳木斯'</span>,<span class="hljs-string">'齐齐哈尔'</span>,<span class="hljs-string">'大庆'</span>,<span class="hljs-string">'五大连池'</span>],
                <span class="hljs-string">'江西'</span>: [<span class="hljs-string">'九江'</span>, <span class="hljs-string">'南昌'</span>, <span class="hljs-string">'赣州'</span>],
                <span class="hljs-string">'上海'</span>: [<span class="hljs-string">'上海'</span>],
                <span class="hljs-string">'重庆'</span>: [<span class="hljs-string">'重庆'</span>],
                <span class="hljs-string">'内蒙古'</span>: [<span class="hljs-string">'呼和浩特'</span>, <span class="hljs-string">'呼和浩特1'</span>,<span class="hljs-string">'呼和浩特2'</span>, <span class="hljs-string">'呼和浩特3'</span>,<span class="hljs-string">'呼和浩特4'</span>, <span class="hljs-string">'呼和浩特5'</span>,<span class="hljs-string">'呼和浩特6'</span>, <span class="hljs-string">'呼和浩特7'</span>]
            },
            dataSub: {
                <span class="hljs-string">'上海'</span>: [<span class="hljs-string">'测试1'</span>, <span class="hljs-string">'测试2'</span>],
                <span class="hljs-string">'北京'</span>: [<span class="hljs-string">'西城区'</span>, <span class="hljs-string">'东城区'</span>, <span class="hljs-string">'大兴区'</span>, <span class="hljs-string">'朝阳区'</span>, <span class="hljs-string">'海淀区'</span>],
                <span class="hljs-string">'南昌'</span>: [<span class="hljs-string">'青山湖区'</span>, <span class="hljs-string">'西湖区'</span>, <span class="hljs-string">'宏都中路'</span>, <span class="hljs-string">'梦时代'</span>, <span class="hljs-string">'八一广场'</span>],
                <span class="hljs-string">'绥化'</span>: [<span class="hljs-string">'明水'</span>, <span class="hljs-string">'拜泉'</span>],
                <span class="hljs-string">'哈尔滨'</span>: [<span class="hljs-string">'道里区'</span>, <span class="hljs-string">'道外区'</span>]
            },
            listData: [
                [ <span class="hljs-string">'上海'</span>, <span class="hljs-string">'黑龙江'</span>, <span class="hljs-string">'北京'</span>, <span class="hljs-string">'重庆'</span>, <span class="hljs-string">'江西'</span>,<span class="hljs-string">'内蒙古'</span> ]
            ],
            defaultValueData: <span class="hljs-literal">null</span>,
            year: <span class="hljs-literal">null</span>,
            isVisible1: <span class="hljs-literal">false</span>,
            listData1: [[<span class="hljs-string">'2010'</span>, <span class="hljs-string">'2011'</span>, <span class="hljs-string">'2012'</span>, <span class="hljs-string">'2013'</span>, <span class="hljs-string">'2014'</span>, <span class="hljs-string">'2015'</span>, <span class="hljs-string">'2016'</span>,<span class="hljs-string">'2017'</span>, <span class="hljs-string">'2018'</span> ]],
            custmerCityData: [
                [{
                    label: <span class="hljs-number">1</span>,
                    value: <span class="hljs-string">"北京"</span>
                },
                {
                    label: <span class="hljs-number">2</span>,
                    value: <span class="hljs-string">"上海"</span>
                }]
            ],
            cityCustmer: <span class="hljs-literal">null</span>,
            isVisible2: <span class="hljs-literal">false</span>,
            defaultValueData1: <span class="hljs-literal">null</span>
            };
        };
    },
    created() {
        <span class="hljs-keyword">this</span>.listData = [...[<span class="hljs-keyword">this</span>.listData[<span class="hljs-number">0</span>]], <span class="hljs-keyword">this</span>.<span class="hljs-keyword">data</span>[<span class="hljs-keyword">this</span>.listData[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>]], <span class="hljs-keyword">this</span>.dataSub[<span class="hljs-keyword">this</span>.<span class="hljs-keyword">data</span>[<span class="hljs-keyword">this</span>.listData[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>]]] ];
    },
    methods: {
        switchPicker(param) {
            <span class="hljs-keyword">this</span>[`${param}`] = !<span class="hljs-keyword">this</span>[`${param}`];
        },

        setChooseValue0(chooseData) {
            <span class="hljs-keyword">this</span>.date = `${chooseData[<span class="hljs-number">0</span>]}年${chooseData[<span class="hljs-number">1</span>]}月`;
        },

        setChooseValue(chooseData) {
            <span class="hljs-keyword">this</span>.city = `${chooseData[<span class="hljs-number">0</span>]}-${chooseData[<span class="hljs-number">1</span>]}${chooseData[<span class="hljs-number">2</span>] ? <span class="hljs-string">'-'</span> + chooseData[<span class="hljs-number">2</span>] : <span class="hljs-string">''</span>}`;
        },

        setYearValue(chooseData) {
            <span class="hljs-keyword">this</span>.year = `${chooseData[<span class="hljs-number">0</span>]}年`;
        },

        updateLinkage(self, value, index, chooseValue, cacheValueData) {
            <span class="hljs-keyword">if</span> (!value) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
            switch(index) {
                case <span class="hljs-number">1</span>: 
                    let i = <span class="hljs-keyword">this</span>.listData[<span class="hljs-number">0</span>].indexOf(value);
                    <span class="hljs-keyword">this</span>.listData.splice(index, <span class="hljs-number">1</span>, [...<span class="hljs-keyword">this</span>.<span class="hljs-keyword">data</span>[<span class="hljs-keyword">this</span>.listData[<span class="hljs-number">0</span>][i]]]);
                    chooseValue = chooseValue ? chooseValue : <span class="hljs-keyword">this</span>.listData[index][<span class="hljs-number">0</span>];
                    self &amp;&amp; self.updateChooseValue(self, index, chooseValue);
                    <span class="hljs-keyword">this</span>.updateLinkage(self, chooseValue, <span class="hljs-number">2</span>, (cacheValueData &amp;&amp; cacheValueData[<span class="hljs-number">2</span>] ? cacheValueData[<span class="hljs-number">2</span>] : <span class="hljs-literal">null</span>));
                    <span class="hljs-keyword">break</span>;
                case <span class="hljs-number">2</span>: 
                    let areaData = <span class="hljs-keyword">this</span>.dataSub[value] ? <span class="hljs-keyword">this</span>.dataSub[value] : []; 
                    <span class="hljs-keyword">this</span>.listData.splice(index, <span class="hljs-number">1</span>, [...areaData]);
                    chooseValue = chooseValue ? chooseValue : <span class="hljs-keyword">this</span>.listData[index][<span class="hljs-number">0</span>];
                    self &amp;&amp; self.updateChooseValue(self, index, chooseValue);
                    <span class="hljs-keyword">break</span>;
            }
        },

        updateChooseValue(self, index, value, cacheValueData) {
            index &lt; <span class="hljs-number">2</span> &amp;&amp; <span class="hljs-keyword">this</span>.updateLinkage(self, value, (index + <span class="hljs-number">1</span>), <span class="hljs-literal">null</span>);
        },

        closeUpdateChooseValue(self, chooseData) {
            <span class="hljs-keyword">this</span>.updateLinkage(self, chooseData[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>, chooseData[<span class="hljs-number">1</span>], chooseData);
        },
        setChooseValueCustmer(chooseData) {
            <span class="hljs-keyword">var</span> str = chooseData.map(item =&gt; item.value).join(<span class="hljs-string">"-"</span>);
            <span class="hljs-keyword">this</span>.cityCustmer = str;
        },
        closeUpdateChooseValueCustmer(self, chooseData) {
            <span class="hljs-keyword">this</span>.setChooseValueCustmer(chooseData);
        },
        updateChooseValueCustmer(self, index, resValue, cacheValueData) {
            let { label, value } = resValue;
            <span class="hljs-comment">//此处模拟查询API</span>
            setTimeout(() =&gt; {
                <span class="hljs-keyword">var</span> resItems = APIData.find(item =&gt; item.label == label);
                <span class="hljs-keyword">if</span> (resItems &amp;&amp; resItems.array.length) {
                <span class="hljs-keyword">this</span>.$<span class="hljs-keyword">set</span>(<span class="hljs-keyword">this</span>.custmerCityData, index + <span class="hljs-number">1</span>, resItems.array);
                }
            }, <span class="hljs-number">100</span>);
        },
        modifyCity() {
            <span class="hljs-keyword">this</span>.updateLinkage(<span class="hljs-string">''</span>, <span class="hljs-string">'重庆'</span>, <span class="hljs-number">1</span>, <span class="hljs-string">'重庆'</span>);
            <span class="hljs-keyword">this</span>.defaultValueData = [<span class="hljs-string">'重庆'</span>, <span class="hljs-string">'重庆'</span>];
        },

        modifyYear(){
            <span class="hljs-keyword">this</span>.defaultValueData1 = [<span class="hljs-string">'2018'</span>];
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
<td>isVisible</td>
<td>是否可见</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>customClassName</td>
<td>自定义class</td>
<td>String</td>
<td>null</td>
</tr>
<tr>
<td>title</td>
<td>设置标题</td>
<td>String</td>
<td>null</td>
</tr>
<tr>
<td>listData</td>
<td>列表数据</td>
<td>Array</td>
<td>[]</td>
</tr>
<tr>
<td>defaultValueData</td>
<td>默认选中</td>
<td>Array</td>
<td>[]</td>
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
<td>confirm</td>
<td>点击确认按钮时候回调</td>
<td>返回选中值</td>
</tr>
<tr>
<td>choose</td>
<td>每一列值变更时调用</td>
<td>依次返回this、改变的列数，改变值，当前选中值</td>
</tr>
<tr>
<td>chclose-update</td>
<td>联动时，关闭时回调</td>
<td>依次返回this、当前选中值</td>
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
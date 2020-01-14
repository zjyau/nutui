<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>ActionSheet 动作面板<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>从底部弹出的动作菜单面板。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-actionsheet <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible"</span></span> 
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchActionSheet('isVisible')"</span>
    <span class="hljs-symbol">:menu-items=<span class="hljs-string">"menuItems"</span></span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"chooseItem"</span>
&gt;&lt;<span class="hljs-regexp">/nut-actionsheet&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>带取消按钮</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-actionsheet <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible1"</span></span> 
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchActionSheet('isVisible1')"</span>
    cancelTxt=<span class="hljs-string">"取消"</span>
    <span class="hljs-symbol">:menu-items=<span class="hljs-string">"menuItems2"</span></span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"chooseItemAgeSpec"</span>
&gt;&lt;<span class="hljs-regexp">/nut-actionsheet&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>高亮已选项</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-actionsheet <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible2"</span></span> 
    <span class="hljs-symbol">:menu-items=<span class="hljs-string">"menuItems2"</span></span>
    <span class="hljs-symbol">:chooseTagValue=<span class="hljs-string">"age"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchActionSheet('isVisible2')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"chooseItemAge"</span>
&gt;&lt;<span class="hljs-regexp">/nut-actionsheet&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>设置列表项展示使用参数</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-actionsheet <span class="hljs-symbol">:is-visible=<span class="hljs-string">"isVisible3"</span></span> 
    <span class="hljs-symbol">:menu-items=<span class="hljs-string">"menuItems3"</span></span>
    <span class="hljs-symbol">:optionTag=<span class="hljs-string">"`title`"</span></span>
    <span class="hljs-variable">@close</span>=<span class="hljs-string">"switchActionSheet('isVisible3')"</span>
    <span class="hljs-variable">@choose</span>=<span class="hljs-string">"chooseItemConstellation"</span>
&gt;&lt;<span class="hljs-regexp">/nut-actionsheet&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>提示</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span> <span class="hljs-attr">:is-visible</span>=<span class="hljs-string">"isVisible4"</span> 
    <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">"menuItems4"</span> 
    <span class="hljs-attr">chooseTagValue</span>=<span class="hljs-string">"确定"</span>
    <span class="hljs-attr">cancelTxt</span>=<span class="hljs-string">"取消"</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">"switchActionSheet('isVisible4')"</span>
&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>确定删除吗？<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"sub-title"</span>&gt;</span>删除之后不能，描述信息，删除之后不能，描述信息<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义内容</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span> <span class="hljs-attr">:is-visible</span>=<span class="hljs-string">"isVisible5"</span> 
    @<span class="hljs-attr">close</span>=<span class="hljs-string">"switchActionSheet('isVisible5')"</span>
&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"custom"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"custom-wrap"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>自定义<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> nutactionsheet from <span class="hljs-string">"./actionsheet.vue"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"./actionsheet.scss"</span>;
export <span class="hljs-keyword">default</span> {
    components: {
        [nutactionsheet.name]: nutactionsheet
    },
    <span class="hljs-keyword">data</span>() {
        <span class="hljs-keyword">return</span> {
            sex: <span class="hljs-string">'请选择'</span>,
            agespec: <span class="hljs-string">'请选择'</span>,
            isVisible: <span class="hljs-literal">false</span>,
            isVisible1: <span class="hljs-literal">false</span>,
            menuItems: [
                {
                    <span class="hljs-string">'name'</span>: <span class="hljs-string">'男'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">0</span>
                },
                {
                    <span class="hljs-string">'name'</span>: <span class="hljs-string">'女'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">1</span>
                }
            ],
            age: <span class="hljs-string">'请选择'</span>,
            isVisible2: <span class="hljs-literal">false</span>,
            menuItems2: [
                {
                    <span class="hljs-string">'name'</span>: <span class="hljs-string">'20岁以下'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">0</span>
                },
                {
                    <span class="hljs-string">'name'</span>: <span class="hljs-string">'20~40岁'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">1</span>
                },
                {
                    <span class="hljs-string">'name'</span>: <span class="hljs-string">'40~60岁'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">2</span>
                },
                {
                    <span class="hljs-string">'name'</span>: <span class="hljs-string">'60以上'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">3</span>
                }
            ],
            constellation: <span class="hljs-string">'请选择'</span>,
            isVisible3: <span class="hljs-literal">false</span>,
            menuItems3: [
                {
                    <span class="hljs-string">'title'</span>: <span class="hljs-string">'天蝎座'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">0</span>
                },
                {
                    <span class="hljs-string">'title'</span>: <span class="hljs-string">'巨蟹座'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">1</span>
                },
                {
                    <span class="hljs-string">'title'</span>: <span class="hljs-string">'双鱼座'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">2</span>
                },
                {
                    <span class="hljs-string">'title'</span>: <span class="hljs-string">'水瓶座'</span>,
                    <span class="hljs-string">'value'</span>: <span class="hljs-number">3</span>
                }
            ],
            isVisible4: <span class="hljs-literal">false</span>,
            menuItems4: [
                {
                    <span class="hljs-string">'name'</span>: <span class="hljs-string">'确定'</span>
                } 
            ],
            isVisible5: <span class="hljs-literal">false</span>,
        };
    },
    methods: {
        switchActionSheet(param) {
            <span class="hljs-keyword">this</span>[`${param}`] = !<span class="hljs-keyword">this</span>[`${param}`];
        },

        chooseItem(itemParams) {
            <span class="hljs-keyword">this</span>.sex = itemParams.name;
        },

        chooseItemAgeSpec(itemParams) {
            <span class="hljs-keyword">this</span>.agespec = itemParams.name;
        },

        chooseItemAge(itemParams) {
            <span class="hljs-keyword">this</span>.age = itemParams.name;
        },

        chooseItemConstellation(itemParams) {
            <span class="hljs-keyword">this</span>.constellation = itemParams.title;
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
<td>isClickCloseMask</td>
<td>是否点击mask蒙层关闭</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>cancelTxt</td>
<td>取消文案</td>
<td>String</td>
<td>取消</td>
</tr>
<tr>
<td>chooseTagValue</td>
<td>已选值，如果填写，高亮显示</td>
<td>String</td>
<td>空</td>
</tr>
<tr>
<td>menuItems</td>
<td>列表项</td>
<td>Array</td>
<td>[]</td>
</tr>
<tr>
<td>optionTag</td>
<td>设置列表项展示使用参数</td>
<td>String</td>
<td>name</td>
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
<td>选择之后触发</td>
<td>选中列表项</td>
</tr>
<tr>
<td>close</td>
<td>关闭时触发</td>
<td>无</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
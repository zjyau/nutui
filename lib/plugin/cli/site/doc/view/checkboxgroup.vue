<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>CheckboxGroup 复选按钮<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法(2s后动态更新)</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">"checkboxGroup"</span>
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data"</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"group"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span><span class="hljs-template-variable">{{group1}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">small</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"checkAll(true)"</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">small</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"checkAll(false)"</span>&gt;</span>取消全选<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">small</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"checkAll()"</span>&gt;</span>反选<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span></span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">data() {
    <span class="hljs-keyword">return</span> {
<span class="hljs-symbol">        data:</span>[
            {<span class="hljs-string">id:</span><span class="hljs-number">11</span>,<span class="hljs-string">value:</span><span class="hljs-string">'选项A'</span>,<span class="hljs-string">label:</span><span class="hljs-string">'选项A'</span>},
            {<span class="hljs-string">id:</span><span class="hljs-number">12</span>,<span class="hljs-string">value:</span><span class="hljs-string">'选项B'</span>,<span class="hljs-string">label:</span><span class="hljs-string">'选项B'</span>},
            {<span class="hljs-string">id:</span><span class="hljs-number">13</span>,<span class="hljs-string">value:</span><span class="hljs-string">'选项C'</span>,<span class="hljs-string">label:</span><span class="hljs-string">'选项C'</span>},
            {<span class="hljs-string">id:</span><span class="hljs-number">14</span>,<span class="hljs-string">value:</span><span class="hljs-string">'选项D'</span>,<span class="hljs-string">label:</span><span class="hljs-string">'选项D'</span>},
        ],
<span class="hljs-symbol">        group:</span> [<span class="hljs-string">'选项A'</span>],
    };
},
mounted(){
    setTimeout(() =&gt; {
        <span class="hljs-keyword">this</span>.group.push(<span class="hljs-string">'选项B'</span>)
    }, <span class="hljs-number">2000</span>);
},
<span class="hljs-string">methods:</span>{
    checkAll(state){
        <span class="hljs-keyword">this</span>.$refs.checkboxGroup.toggleAll(state);
    }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>v-model绑定的数组选项对应data的value值，控制选项是否选中，如代码所示，‘选项A’被勾选。如果group为空那么所有选项未选中。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-checkboxgroup  
    :checkBoxData=<span class="hljs-string">"['</span>A',<span class="hljs-string">'B'</span>,<span class="hljs-string">'C'</span>,<span class="hljs-string">'D'</span>]<span class="hljs-string">"&gt;
    v-model="</span>group<span class="hljs-string">"
&lt;/nut-checkboxgroup&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"> <span class="hljs-class"><span class="hljs-keyword">data</span>() {
    <span class="hljs-title">return</span> {
        <span class="hljs-title">group</span>: ['<span class="hljs-type">A</span>'],
    };</span>
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>checkBoxData也可直接在标签中传入数据</p>
<h2>禁用状态</h2><p>data控制禁用状态</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data2"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">data() {
    <span class="hljs-keyword">return</span> {
<span class="hljs-symbol">         data2:</span>[
            {<span class="hljs-string">id:</span><span class="hljs-number">21</span>,<span class="hljs-string">value:</span><span class="hljs-string">'选项1'</span>,<span class="hljs-string">label:</span><span class="hljs-string">'选项1'</span>,<span class="hljs-string">disabled:</span><span class="hljs-literal">true</span>},
            {<span class="hljs-string">id:</span><span class="hljs-number">22</span>,<span class="hljs-string">value:</span><span class="hljs-string">'选项2'</span>,<span class="hljs-string">label:</span><span class="hljs-string">'选项2'</span>,<span class="hljs-string">disabled:</span><span class="hljs-literal">true</span>},

        ],
    };
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>标签控制禁用状态(用于全组禁用)</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data2"</span>
    <span class="hljs-attr">disabled</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">data</span>() {
    <span class="hljs-selector-tag">return</span> {
         <span class="hljs-attribute">data2</span>:[
               {<span class="hljs-attribute">id</span>:<span class="hljs-number">21</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'选项1'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'选项1'</span>},
            {<span class="hljs-attribute">id</span>:<span class="hljs-number">22</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'选项2'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'选项2'</span>},
        ],
    };
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义尺寸</h2><p>内置 <strong>small</strong>，<strong>base</strong>，<strong>large</strong> 三种规格供使用。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:size</span>=<span class="hljs-string">"'small'"</span> 
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data1"</span> &gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:size</span>=<span class="hljs-string">"'base'"</span> 
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data2"</span> &gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:size</span>=<span class="hljs-string">"'small'"</span> 
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data3"</span> &gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">data</span>() {
    <span class="hljs-selector-tag">return</span> {
        <span class="hljs-attribute">data1</span>:[
            {<span class="hljs-attribute">id</span>:<span class="hljs-number">41</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'备选项'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'备选项'</span>},
        ],
        <span class="hljs-attribute">data2</span>:[
            {<span class="hljs-attribute">id</span>:<span class="hljs-number">42</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'备选项'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'备选项'</span>},
        ],
        <span class="hljs-attribute">data3</span>:[
            {<span class="hljs-attribute">id</span>:<span class="hljs-number">43</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'备选项'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'备选项'</span>,<span class="hljs-attribute">size</span>:<span class="hljs-string">'large'</span>},
        ],
    };
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>也可用data控制size属性</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">
<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"group"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">data</span>() {
    <span class="hljs-selector-tag">return</span> {
        <span class="hljs-attribute">data</span>:[
            {<span class="hljs-attribute">id</span>:<span class="hljs-number">41</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'1'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'选项1'</span>,<span class="hljs-attribute">size</span>:<span class="hljs-string">'large'</span>},
            {<span class="hljs-attribute">id</span>:<span class="hljs-number">42</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'2'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'选项2'</span>,<span class="hljs-attribute">size</span>:<span class="hljs-string">'base'</span>},
            {<span class="hljs-attribute">id</span>:<span class="hljs-number">43</span>,<span class="hljs-attribute">value</span>:<span class="hljs-string">'3'</span>,<span class="hljs-attribute">label</span>:<span class="hljs-string">'选项3'</span>,<span class="hljs-attribute">size</span>:<span class="hljs-string">'small'</span>},
        ],
        <span class="hljs-attribute">group</span>:[<span class="hljs-string">'1'</span>,<span class="hljs-string">'2'</span>,<span class="hljs-string">'3'</span>],
    };
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p><strong>注意</strong>：如果data中设置了size，显示data中size属性，data中的size属性优先级高于标签size的设置。</p>
<h2>禁用动效</h2><p>animation属性值为false时，禁用自带动效</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data"</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"group"</span>  
    <span class="hljs-attr">:animation</span>=<span class="hljs-string">"false"</span> &gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>横向排列</h2><p>vertical属性值为true时，横向排列</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-checkboxgroup   
    <span class="hljs-symbol">:checkBoxData=<span class="hljs-string">"data"</span></span> 
    v-model=<span class="hljs-string">"group"</span>
    <span class="hljs-symbol">:vertical=<span class="hljs-string">"true"</span>&gt;</span>
&lt;<span class="hljs-regexp">/nut-checkboxgroup&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>事件</h2><p>值发生变化时，将触发change事件</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span> 
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data5"</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"group"</span>  
    @<span class="hljs-attr">change</span>=<span class="hljs-string">"changeEvt"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">methods: {
    changeEvt(val,<span class="hljs-keyword">label</span><span class="bash">,e){</span>
        alert(<span class="hljs-string">'已选值:['</span>+ val+<span class="hljs-string">']，当前选择值：'</span>+ <span class="hljs-keyword">label</span><span class="bash">);</span>
    }  
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>新增自定义class</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span>  
    <span class="hljs-attr">:customClass</span>=<span class="hljs-string">"'my-checkbox'"</span> 
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"group"</span> 
    <span class="hljs-attr">:checkBoxData</span>=<span class="hljs-string">"data6"</span> &gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>checkBoxData</td>
<td>传入选项数组</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>v-model,value</td>
<td>选择项数组，可定义默认选中项</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>vertical</td>
<td>横向排列</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>尺寸，可选值small/base/large</td>
<td>String</td>
<td>base</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>animation</td>
<td>是否需要动效</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>customClass</td>
<td>自定义样式</td>
<td>String</td>
<td>-</td>
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
<td>change</td>
<td>值变化时触发</td>
<td>当前已选中项的状态（values），当前选中项值（label），event</td>
</tr>
</tbody></table>
<h2>CheckboxGroup 方法</h2><h4>通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法</h4><table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody><tr>
<td>toggleAll</td>
<td>切换所有复选框的选中状态</td>
<td>checked?: boolean</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
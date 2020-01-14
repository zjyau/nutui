<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Popup 弹出层<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>介绍<br>弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示</p>
<h2>基本功能</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"展示弹出层"</span> <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">"true"</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"show= true"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{ padding: '30px 50px' }</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"show"</span>&gt;</span>正文<span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span></span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  data() {
    return {
      show: <span class="hljs-literal">false</span>
    };
  },

  methods: {
    showPopup() {
      this.show = <span class="hljs-literal">true</span>;
    }
  }
};</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>弹出位置</h2><p>通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-popup <span class="hljs-attribute">v-model</span>=<span class="hljs-string">"show"</span> <span class="hljs-attribute">position</span>=<span class="hljs-string">"top"</span> :<span class="hljs-attribute">style</span>=<span class="hljs-string">"{ height: '20%' }"</span> /&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>圆角弹窗</h2><p>设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;van-popup v-model=<span class="hljs-string">"show"</span> <span class="hljs-built_in">round</span> <span class="hljs-built_in">position</span>=<span class="hljs-string">"bottom"</span> :<span class="hljs-built_in">style</span>=<span class="hljs-string">"{ height: '20%' }"</span> /&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>API</h2><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>v-model</td>
<td>当前组件是否显示</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>overlay</td>
<td>是否显示遮罩层</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>position</td>
<td>弹出位置，可选值为 top bottom right left</td>
<td>string</td>
<td>center</td>
</tr>
<tr>
<td>duration</td>
<td>动画时长，单位秒</td>
<td>Number</td>
<td>-</td>
</tr>
<tr>
<td>round</td>
<td>是否显示圆角</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>transition</td>
<td>动画类名，等价于 transtion 的 name 属性</td>
<td>string</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
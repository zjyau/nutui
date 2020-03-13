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
<h2>关闭图标</h2><p>设置closeable属性后，会在弹出层的右上角显示关闭图标，并且可以通过close-icon属性自定义图标，使用close-icon-position属性可以自定义图标位置</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-popup <span class="hljs-attribute">position</span>=<span class="hljs-string">"bottom"</span> closeable  <span class="hljs-attribute">close-icon</span>=<span class="hljs-string">"tick"</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-string">"showCloseIcon"</span> :<span class="hljs-attribute">style</span>=<span class="hljs-string">"{ height: '20%' }"</span> <span class="hljs-attribute">close-icon-position</span>=<span class="hljs-string">"top-left"</span>&gt;&lt;/nut-popup&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>圆角弹窗</h2><p>设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-popup v-model=<span class="hljs-string">"show"</span> <span class="hljs-built_in">round</span> <span class="hljs-built_in">position</span>=<span class="hljs-string">"bottom"</span> :<span class="hljs-built_in">style</span>=<span class="hljs-string">"{ height: '20%' }"</span> /&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<tr>
<td>closeable</td>
<td>是否显示关闭图标</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>close-icon</td>
<td>关闭图标名称</td>
<td>string</td>
<td>cross</td>
</tr>
<tr>
<td>close-icon-position</td>
<td>关闭图标位置，可选值为top-left bottom-left bottom-right</td>
<td>string</td>
<td>top-right</td>
</tr>
<tr>
<td>overlay-class</td>
<td>自定义遮罩层类名</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>overlay-style</td>
<td>自定义遮罩层样式</td>
<td>object</td>
<td></td>
</tr>
<tr>
<td>lock-scroll</td>
<td>是否锁定背景滚动</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>close-on-click-overlay</td>
<td>是否在点击遮罩层后关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>get-container</td>
<td>指定挂载节点</td>
<td>string</td>
<td></td>
</tr>
</tbody></table>
<h2>Event</h2><table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>click</td>
<td>点击弹出层时触发</td>
</tr>
<tr>
<td>open</td>
<td>打开弹出层时触发</td>
</tr>
<tr>
<td>close</td>
<td>关闭弹出层时触发</td>
</tr>
<tr>
<td>opened</td>
<td>打开弹出层且动画结束后触发</td>
</tr>
<tr>
<td>closed</td>
<td>关闭弹出层且动画结束后触发</td>
</tr>
<tr>
<td>click-overlay</td>
<td>点击遮罩层时触发</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
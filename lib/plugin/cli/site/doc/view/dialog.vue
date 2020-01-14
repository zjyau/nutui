<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Dialog 对话框<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>模态对话框，在浮层中显示，引导用户进行相关操作，支持图片对话框。</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">this.$dialog({
<span class="hljs-symbol">  title:</span> <span class="hljs-string">"确定删除此订单？"</span>,
<span class="hljs-symbol">  content:</span> <span class="hljs-string">"删除后将从你的记录里消失，无法找回"</span>
});</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>ID</h2><p>同一个页面中，id相同的Dialog的DOM只会同时存在一个，不指定id时，id的默认值为<strong>nut-dialog-default-id</strong>。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">this.$<span class="hljs-keyword">dialog</span>({
  id:<span class="hljs-string">'my-dialog'</span>,
  <span class="hljs-keyword">title</span>: <span class="hljs-string">"确定删除此订单？"</span>,
  content: <span class="hljs-string">"删除后将从你的记录里消失，无法找回"</span>
})<span class="hljs-comment">;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<blockquote>
<p>如果希望同时弹出多个Dialog，请给不同的Dialog设置不同的id。</p>
</blockquote>
<h2>事件</h2><hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">this</span>.$dialog({
        title: <span class="hljs-string">"自定义Dialog标题"</span>,
        content: <span class="hljs-string">"小屏或移动端浏览效果最佳"</span>,
        closeBtn:<span class="hljs-literal">true</span>,  <span class="hljs-comment">//显式右上角关闭按钮</span>
        onOkBtn(<span class="hljs-keyword">event</span>) {  <span class="hljs-comment">//确定按钮点击事件</span>
          alert(<span class="hljs-string">"okBtn"</span>);
          <span class="hljs-keyword">this</span>.close(); <span class="hljs-comment">//关闭对话框</span>
        },
        onCancelBtn(<span class="hljs-keyword">event</span>) {  <span class="hljs-comment">//取消按钮点击事件，默认行为关闭对话框</span>
          alert(<span class="hljs-string">"cancelBtn"</span>);
          <span class="hljs-comment">//return false;  //阻止默认“关闭对话框”的行为</span>
        },
        onCloseBtn(<span class="hljs-keyword">event</span>) { <span class="hljs-comment">//右上角关闭按钮点击事件</span>
          alert(<span class="hljs-string">"closeBtn"</span>);
          <span class="hljs-comment">//return false;  //阻止默认“关闭对话框”的行为</span>
        },
        closeCallback(target) {
          alert(<span class="hljs-string">"will close"</span>);  <span class="hljs-comment">//对话框关闭回调函数，无论通过何种方式关闭都会触发</span>
        }
});
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>页面滚动锁定</h2><p><strong>lockBgScroll</strong> 值设为 <strong>true</strong> 时，可在弹窗出现时锁定页面滚动，且不影响窗体内部滚动。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">this.$dialog({
<span class="hljs-symbol">        title:</span> <span class="hljs-string">"背景滚动锁定"</span>,
<span class="hljs-symbol">        lockBgScroll:</span>true,
<span class="hljs-symbol">        content:</span><span class="hljs-string">"弹窗弹出后，页面滚动锁止。在窗体和遮罩层上滑动时，页面不再跟随滚动。"</span>
});</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>图片弹窗</h2><p><strong>type</strong> 值为 <strong>image</strong> 时为图片弹窗，需要配置一张图片，可带链接（非必须）。默认展示关闭按钮。点击图片触发 <strong>onClickImageLink</strong> 事件，返回<strong>false</strong>可阻止默认的跳转链接行为。</p>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">this</span>.$dialog({
  <span class="hljs-attr">type</span>:<span class="hljs-string">"image"</span>, <span class="hljs-comment">//设置弹窗类型为”图片弹窗“</span>
  link:<span class="hljs-string">"http://m.jd.com"</span>, <span class="hljs-comment">//点击图片跳转的Url</span>
  imgSrc:<span class="hljs-string">"https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg"</span>, <span class="hljs-comment">//图片Url</span>
  onClickImageLink:<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-comment">//图片点击事件，默认行为是跳转Url</span>
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>); <span class="hljs-comment">//this指向该Dialog实例</span>
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;  <span class="hljs-comment">//返回false可阻止默认的链接跳转行为</span>
  }
});</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>标签式写法</h2><p>如果Dialog内容有复杂交互，可使用Dialog的标签式用法。</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-dialog title=<span class="hljs-string">"标签形式调用"</span> :visible=<span class="hljs-string">"dialogShow"</span> @ok-btn-<span class="hljs-built_in">click</span>=<span class="hljs-string">"dialogShow=false"</span> @cancel-btn-<span class="hljs-built_in">click</span>=<span class="hljs-string">"dialogShow=false"</span> @<span class="hljs-built_in">close</span>=<span class="hljs-string">"dialogShow=false"</span>&gt;
    &lt;a href=<span class="hljs-string">"javascript:;"</span> @<span class="hljs-built_in">click</span>=<span class="hljs-string">"dialogShow=false"</span> :noCancelBtn=<span class="hljs-string">"true"</span>&gt;点我可以直接关闭对话框&lt;/a&gt;
&lt;/nut-dialog&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-builtin-name">export</span><span class="hljs-built_in"> default </span>{
  data() {
    return {
      dialogShow: <span class="hljs-literal">false</span>
    };
  }
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>id</td>
<td>标识符，相同者共享一个实例</td>
<td>String/Number</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>content</td>
<td>内容，支持HTML</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>弹窗类型，值为<strong>image</strong>时为图片弹窗</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>点击蒙层是否关闭对话框</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>noFooter</td>
<td>是否隐藏底部按钮栏</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>noOkBtn</td>
<td>是否隐藏确定按钮</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>noCancelBtn</td>
<td>是否隐藏取消按钮</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>cancelBtnTxt</td>
<td>取消按钮文案</td>
<td>String</td>
<td>”取 s消“</td>
</tr>
<tr>
<td>okBtnTxt</td>
<td>确定按钮文案</td>
<td>String</td>
<td>”确 定“</td>
</tr>
<tr>
<td>okBtnDisabled</td>
<td>禁用确定按钮</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>cancelAutoClose</td>
<td>取消按钮是否默认关闭弹窗</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>textAlign</td>
<td>文字对齐方向，可选值同css的text-align</td>
<td>String</td>
<td>&quot;center&quot;</td>
</tr>
<tr>
<td>onOkBtn</td>
<td>确定按钮回调</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>onCancelBtn</td>
<td>取消按钮回调</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>onCloseBtn</td>
<td>关闭按钮回调</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>closeCallback</td>
<td>关闭回调，任何情况关闭弹窗都会触发</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>onClickImageLink</td>
<td>图片链接点击回调，仅对图片类型弹窗有效</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>maskBgStyle</td>
<td>遮罩层样式（颜色、透明度）</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>customClass</td>
<td>增加一个自定义class</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>link</td>
<td>点击图片跳转的Url，仅对图片类型弹窗有效</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>imgSrc</td>
<td>图片Url，仅对图片类型弹窗有效</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>animation</td>
<td>是否开启默认动效</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>lockBgScroll</td>
<td>锁定遮罩层滚动，不影响弹窗内部滚动（实验性质）</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
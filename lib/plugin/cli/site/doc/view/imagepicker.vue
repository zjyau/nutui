<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>ImagePicker 图片选择器<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepicker</span>
  @<span class="hljs-attr">imgMsg</span>=<span class="hljs-string">"imgMsg"</span> 
  <span class="hljs-attr">:imgList.sync</span>=<span class="hljs-string">"imgList1"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-imagepicker</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>指定宽度和高度都是120px,图片间距是10px</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-imagepicker 
  <span class="hljs-variable">@imgMsg</span>=<span class="hljs-string">"imgMsg"</span> 
  <span class="hljs-symbol">:width=<span class="hljs-string">"120"</span></span> 
  <span class="hljs-symbol">:height=<span class="hljs-string">"120"</span></span> 
  <span class="hljs-symbol">:margin=<span class="hljs-string">"10"</span></span> 
  <span class="hljs-symbol">:imgList</span>.sync=<span class="hljs-string">"imgList2"</span>
&gt;
&lt;<span class="hljs-regexp">/nut-imagepicker&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>允许上传的最大数量是4张</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepicker</span> 
  @<span class="hljs-attr">imgMsg</span>=<span class="hljs-string">"imgMsg"</span> 
  <span class="hljs-attr">:max</span>=<span class="hljs-string">"4"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-imagepicker</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>支持多图选择</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepicker</span> 
  @<span class="hljs-attr">imgMsg</span>=<span class="hljs-string">"imgMsg"</span> 
  <span class="hljs-attr">:ismultiple</span>=<span class="hljs-string">"true"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-imagepicker</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>支持长按删除图片</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepicker</span> 
  @<span class="hljs-attr">imgMsg</span>=<span class="hljs-string">"imgMsg"</span> 
  <span class="hljs-attr">delMode</span>=<span class="hljs-string">"longtap"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-imagepicker</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>图片之后自动上传除图片</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepicker</span> 
  @<span class="hljs-attr">imgMsg</span>=<span class="hljs-string">"imgMsg"</span> 
  <span class="hljs-attr">autoUpload</span>=<span class="hljs-string">"true"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-imagepicker</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> {
  <span class="hljs-selector-tag">data</span>() {
    <span class="hljs-selector-tag">return</span> {
      <span class="hljs-attribute">imgList1</span>:[
        {
          <span class="hljs-attribute">id</span>:<span class="hljs-number">1</span>,
          <span class="hljs-attribute">src</span>:<span class="hljs-string">"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"</span>
        }
      ],
      <span class="hljs-attribute">imgList2</span>:[
        {
          <span class="hljs-attribute">id</span>:<span class="hljs-number">1</span>,
          <span class="hljs-attribute">src</span>:<span class="hljs-string">"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"</span>
        }
      ]
    };
  },
  <span class="hljs-attribute">methods</span>: {
    imgMsg(data){
      if(data.code == <span class="hljs-number">1</span>) {
        alert(<span class="hljs-string">'upload'</span>);
      }
      <span class="hljs-selector-tag">console</span><span class="hljs-selector-class">.log</span>(this.imgList2)
      <span class="hljs-selector-tag">console</span><span class="hljs-selector-class">.log</span>(data);<span class="hljs-comment">//code 1 自动上传  2 不上传只展示图片  3 删除图片  4 预览图片</span>
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
<td>animation</td>
<td>是否使用过渡动画</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>width</td>
<td>图片宽度</td>
<td>String/Number</td>
<td>100</td>
</tr>
<tr>
<td>height</td>
<td>图片高度</td>
<td>String/Number</td>
<td>100</td>
</tr>
<tr>
<td>margin</td>
<td>图片间距</td>
<td>String/Number</td>
<td>5</td>
</tr>
<tr>
<td>max</td>
<td>允许上传的最大数量</td>
<td>String/Number</td>
<td>9</td>
</tr>
<tr>
<td>accept</td>
<td>允许上传的图片类型</td>
<td>String</td>
<td>image/*</td>
</tr>
<tr>
<td>ismultiple</td>
<td>是否开启多张图片上传</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>delMode</td>
<td>删除图片的方式（tap、longtap）</td>
<td>String</td>
<td>tap</td>
</tr>
<tr>
<td>autoUpload</td>
<td>选择完成之后是否直接上传</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>imgList</td>
<td>图片列表 （注意：绑定时必须<code>:imgList.sync</code>,加sync修饰符）</td>
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
<td>imgMsg</td>
<td>选择图片之后的回调函数</td>
<td>返回Object（包含code值：1 自动上传 2 不上传，只展示 3 删除图片 4 预览图片）</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
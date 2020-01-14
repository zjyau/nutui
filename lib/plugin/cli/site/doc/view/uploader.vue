<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Uploader 上传<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>文件上传组件</p>
<h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-uploader
    name=<span class="hljs-string">"uploader-demo"</span>
    <span class="hljs-symbol">:url=<span class="hljs-string">"url"</span></span>
    <span class="hljs-symbol">:isPreview=<span class="hljs-string">"true"</span></span>
    <span class="hljs-symbol">:acceptType</span> = <span class="hljs-string">"['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"</span>
    <span class="hljs-variable">@start</span>=<span class="hljs-string">"onStart"</span>
    <span class="hljs-variable">@success</span>=<span class="hljs-string">"onSuccess"</span>
    <span class="hljs-variable">@fail</span>=<span class="hljs-string">"onFail"</span>
    <span class="hljs-variable">@progress</span>=<span class="hljs-string">"onProgress"</span>
    <span class="hljs-variable">@preview</span>=<span class="hljs-string">"onPreview"</span>
    <span class="hljs-variable">@showMsg</span>=<span class="hljs-string">"showMsgFn"</span>
    typeError=<span class="hljs-string">"对不起，不支持上传该类型文件！"</span>
    limitError=<span class="hljs-string">"对不起，文件大小超过限制！"</span>
&gt;
上传
&lt;<span class="hljs-regexp">/nut-uploader&gt;   </span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export default { 
  data<span class="hljs-literal">()</span> {
    return {
      url:'https:<span class="hljs-comment">//my-json-server.typicode.com/linrufeng/demo/posts',    </span>
    };
  },
  methods:{
      on<span class="hljs-constructor">Start()</span>{
        console.log('上传开始');
      },
      on<span class="hljs-constructor">Success(<span class="hljs-params">file</span>,<span class="hljs-params">res</span>)</span>{
        alert('上传成功！');
      },
      on<span class="hljs-constructor">Fail(<span class="hljs-params">file</span>,<span class="hljs-params">res</span>)</span>{
        alert('上传失败！');
      },
      on<span class="hljs-constructor">Progress(<span class="hljs-params">file</span>, <span class="hljs-params">loaded</span>, <span class="hljs-params">total</span>)</span> {
        console.log('上传进度:'+parse<span class="hljs-constructor">Int((100 <span class="hljs-operator">*</span> <span class="hljs-params">loaded</span>)</span><span class="hljs-operator"> / </span>total)+<span class="hljs-character">'%'</span>);
      },
      on<span class="hljs-constructor">Preview(<span class="hljs-params">file</span>)</span> {
        this.previewImg = file;
      },
      show<span class="hljs-constructor">MsgFn(<span class="hljs-params">msg</span>)</span>{
        alert(msg);
      },
  }</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>高级用法</h2><p>与吐司 <strong>Toast</strong> 组件结合使用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-uploader
    name=<span class="hljs-string">"uploader-demo"</span>
    <span class="hljs-symbol">:url=<span class="hljs-string">"url"</span></span>
    <span class="hljs-variable">@success</span>=<span class="hljs-string">"onSuccess"</span>
    <span class="hljs-variable">@fail</span>=<span class="hljs-string">"onFail"</span>
    <span class="hljs-variable">@showMsg</span>=<span class="hljs-string">"showMsgFn"</span>
&gt;
上传
&lt;<span class="hljs-regexp">/nut-uploader&gt;   </span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> { 
  <span class="hljs-keyword">data</span>() {
    <span class="hljs-keyword">return</span> {
      url:<span class="hljs-string">'https://my-json-server.typicode.com/linrufeng/demo/posts'</span>,    
    };
  },
  methods:{
      onSuccess(file,res){
        <span class="hljs-keyword">this</span>.$toast.success(<span class="hljs-string">'上传成功'</span>);
      },
      onFail(file,res){
        <span class="hljs-keyword">this</span>.$toast.fail(<span class="hljs-string">'上传失败！'</span>);
      },
      showMsgFn(msg){
        <span class="hljs-keyword">this</span>.$toast.text(msg);
      },
  }
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>与按钮 <strong>Button</strong> 组件结合使用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span>
  <span class="hljs-attr">:name</span>=<span class="hljs-string">"name"</span>
  <span class="hljs-attr">:url</span>=<span class="hljs-string">"url"</span>    
  &gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">small</span>&gt;</span>上传<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>   </code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>自定义 headers &amp; formData 使用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span>
  <span class="hljs-attr">:name</span>=<span class="hljs-string">"name"</span>
  <span class="hljs-attr">:url</span>=<span class="hljs-string">"url"</span>
  <span class="hljs-attr">:headers</span>=<span class="hljs-string">"headers"</span>
  <span class="hljs-attr">:attach</span>=<span class="hljs-string">"formData"</span>
  &gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">small</span>&gt;</span>上传<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>   </code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> { 
  <span class="hljs-selector-tag">data</span>() {
    <span class="hljs-selector-tag">return</span> {
      <span class="hljs-attribute">url</span>:<span class="hljs-string">'https://my-json-server.typicode.com/linrufeng/demo/posts'</span>, 
      <span class="hljs-attribute">name</span>:<span class="hljs-string">'testname'</span>,
      <span class="hljs-attribute">headers</span>:{
        <span class="hljs-attribute">token</span>:<span class="hljs-string">'test'</span>
      },
      <span class="hljs-attribute">formData</span>:{
        <span class="hljs-attribute">f1</span>:<span class="hljs-string">'test'</span>,
        <span class="hljs-attribute">f2</span>:<span class="hljs-string">'test1'</span>
      },
    };
  },
}</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>与进度条组件 <strong>Progress</strong> 结合使用</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span>
    <span class="hljs-attr">:name</span>=<span class="hljs-string">"name"</span>
    <span class="hljs-attr">:url</span>=<span class="hljs-string">"url"</span>
    @<span class="hljs-attr">progress</span>=<span class="hljs-string">"progress"</span>    
    &gt;</span> 上传
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>  
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"progressNum"</span> <span class="hljs-attr">:showText</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">strokeWidth</span>=<span class="hljs-string">"24"</span>/&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>name</td>
<td>input name的名称</td>
<td>String</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>url</td>
<td>上传服务器的接口地址</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>isPreview</td>
<td>是否需要预览</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>clearInput</td>
<td>是否需要清空input内容，设为true支持重复选择上传同一个文件</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>maxSize</td>
<td>可以设定最大上传文件的大小（字节）</td>
<td>Number</td>
<td>5242880</td>
</tr>
<tr>
<td>acceptType</td>
<td>可以上传文件的类型</td>
<td>Array</td>
<td>[&#39;image/jpeg&#39;, &#39;image/png&#39;, &#39;image/gif&#39;, &#39;image/bmp&#39;]</td>
</tr>
<tr>
<td>attach</td>
<td>附加上传的信息formData</td>
<td>Object</td>
<td>{}</td>
</tr>
<tr>
<td>headers</td>
<td>自定义headers</td>
<td>Object</td>
<td>{}</td>
</tr>
<tr>
<td>xhrState</td>
<td>接口响应的成功状态（status）值</td>
<td>Number</td>
<td>200</td>
</tr>
<tr>
<td>typeError</td>
<td>文件类型错误提示文案</td>
<td>String</td>
<td>&quot;不支持上传该类型文件&quot;</td>
</tr>
<tr>
<td>limitError</td>
<td>文件大小超过限制提示文案</td>
<td>String</td>
<td>&quot;文件大小超过限制&quot;</td>
</tr>
<tr>
<td>xmlError</td>
<td>浏览器不支持本组件时的提示文案</td>
<td>String</td>
<td>&quot;对不起，您的浏览器不支持本组件！&quot;</td>
</tr>
<tr>
<td>withCredentials</td>
<td>支持发送 cookie 凭证信息</td>
<td>Boolean</td>
<td>fasle</td>
</tr>
</tbody></table>
<h2>Event</h2><table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody><tr>
<td>start</td>
<td>文件上传开始</td>
<td>-</td>
</tr>
<tr>
<td>progress</td>
<td>文件上传的进度</td>
<td>上传文件、已上传数据量、总数据量</td>
</tr>
<tr>
<td>preview</td>
<td>isPreview为true时可通过此方法获文件的Base64编码，一般用于预览</td>
<td>文件的Base64编码</td>
</tr>
<tr>
<td>success</td>
<td>上传成功</td>
<td>文件、responseText</td>
</tr>
<tr>
<td>failure</td>
<td>上传失败</td>
<td>文件、responseText</td>
</tr>
<tr>
<td>showMsg</td>
<td>组件抛出信息的处理函数</td>
<td>组件抛出的提示信息</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
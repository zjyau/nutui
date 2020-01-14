<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>Menu 菜单<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>单选</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible1"</span>
    :list=<span class="hljs-string">"list1"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"simple"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"switchMenu('isVisible1',1)"</span>
    <span class="hljs-meta">@choose</span>=<span class="hljs-string">"chooseMenu"</span>&gt;
&lt;/nut-menu&gt;
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>多选style1(一、二、三)列</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible2"</span>
    :list=<span class="hljs-string">"list2"</span>
    col=<span class="hljs-string">"1"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"multiple"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"switchMenu('isVisible2',2)"</span>
    <span class="hljs-meta">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-meta">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-meta">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;
&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible3"</span>
    :list=<span class="hljs-string">"list2"</span>
    col=<span class="hljs-string">"2"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"multiple"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"switchMenu('isVisible3',2)"</span>
    <span class="hljs-meta">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-meta">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-meta">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;
&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible4"</span>
    :list=<span class="hljs-string">"list2"</span>
    col=<span class="hljs-string">"3"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"multiple"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"switchMenu('isVisible4',2)"</span>
    <span class="hljs-meta">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-meta">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-meta">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>多选style2(一、二、三)列</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible5"</span>
    :list=<span class="hljs-string">"list3"</span>
    mulstyle=<span class="hljs-string">"style2"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"multiple"</span>
    col=<span class="hljs-string">"1"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"switchMenu('isVisible5',3)"</span>
    <span class="hljs-meta">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-meta">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-meta">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;
&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible6"</span>
    :list=<span class="hljs-string">"list3"</span>
    mulstyle=<span class="hljs-string">"style2"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"multiple"</span>
    col=<span class="hljs-string">"2"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"switchMenu('isVisible6',3)"</span>
    <span class="hljs-meta">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-meta">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-meta">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;
&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible7"</span>
    :list=<span class="hljs-string">"list3"</span>
    mulstyle=<span class="hljs-string">"style2"</span>
    <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"multiple"</span>
    col=<span class="hljs-string">"3"</span>
    <span class="hljs-meta">@close</span>=<span class="hljs-string">"switchMenu('isVisible7',3)"</span>
    <span class="hljs-meta">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-meta">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-meta">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>多选style3(一、二、三)列,允许选择的最大数量为3个</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible8"</span>
    :list=<span class="hljs-string">"list4"</span>
    <span class="hljs-keyword">type</span>=<span class="hljs-string">"multiple"</span>
    col=<span class="hljs-string">"1"</span>
    mulstyle=<span class="hljs-string">"style3"</span>
    <span class="hljs-keyword">max</span>=<span class="hljs-string">"3"</span>
    <span class="hljs-title">@close</span>=<span class="hljs-string">"switchMenu('isVisible8',4)"</span>
    <span class="hljs-title">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-title">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-title">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;
&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible9"</span>
    :list=<span class="hljs-string">"list4"</span>
    <span class="hljs-keyword">type</span>=<span class="hljs-string">"multiple"</span>
    col=<span class="hljs-string">"2"</span>
    mulstyle=<span class="hljs-string">"style3"</span>
    <span class="hljs-keyword">max</span>=<span class="hljs-string">"3"</span>
    <span class="hljs-title">@close</span>=<span class="hljs-string">"switchMenu('isVisible9',4)"</span>
    <span class="hljs-title">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-title">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-title">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;
&lt;nut-menu
    :isVisible=<span class="hljs-string">"visible.isVisible10"</span>
    :list=<span class="hljs-string">"list4"</span>
    <span class="hljs-keyword">type</span>=<span class="hljs-string">"multiple"</span>
    col=<span class="hljs-string">"3"</span>
    mulstyle=<span class="hljs-string">"style3"</span>
    <span class="hljs-keyword">max</span>=<span class="hljs-string">"3"</span>
    <span class="hljs-title">@close</span>=<span class="hljs-string">"switchMenu('isVisible10',4)"</span>
    <span class="hljs-title">@reset</span>=<span class="hljs-string">"reset"</span>
    <span class="hljs-title">@ok</span>=<span class="hljs-string">"ok"</span>
    <span class="hljs-title">@maxTip</span>=<span class="hljs-string">"maxTip"</span>&gt;
&lt;/nut-menu&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<h2>自定义菜单</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>
    <span class="hljs-attr">:isVisible</span>=<span class="hljs-string">"visible.isVisible11"</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">"switchMenu('isVisible11',5)"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"custom"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"custom-wrap"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>自定义<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-string">import</span> <span class="hljs-string">nutMenu</span> <span class="hljs-string">from</span> <span class="hljs-string">'./menu.vue'</span><span class="hljs-string">;</span>
<span class="hljs-string">export</span> <span class="hljs-string">default</span> <span class="hljs-string">{</span>
<span class="hljs-attr">  components:</span> <span class="hljs-string">{</span>
    <span class="hljs-string">[nutMenu.name]:nutMenu</span>
  <span class="hljs-string">},</span>
  <span class="hljs-string">data()</span> <span class="hljs-string">{</span>
    <span class="hljs-string">return</span> <span class="hljs-string">{</span>
<span class="hljs-attr">      num:</span><span class="hljs-number">1</span><span class="hljs-string">,</span>
<span class="hljs-attr">      titlenum:</span><span class="hljs-number">1</span><span class="hljs-string">,</span>
<span class="hljs-attr">      max:</span><span class="hljs-number">6</span><span class="hljs-string">,</span>
<span class="hljs-attr">      visible:</span><span class="hljs-string">{</span>
<span class="hljs-attr">          isVisible1:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible2:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible3:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible4:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible5:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible6:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible7:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible8:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible9:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible10:</span><span class="hljs-literal">false</span><span class="hljs-string">,</span>
<span class="hljs-attr">          isVisible11:</span><span class="hljs-literal">false</span>
      <span class="hljs-string">},</span>
<span class="hljs-attr">      list1:</span><span class="hljs-string">[</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">            id:</span><span class="hljs-number">1</span><span class="hljs-string">,</span>
<span class="hljs-attr">            text:</span><span class="hljs-string">'综合'</span><span class="hljs-string">,</span>
<span class="hljs-attr">            selected:</span><span class="hljs-literal">true</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">            id:</span><span class="hljs-number">1</span><span class="hljs-string">,</span>
<span class="hljs-attr">            text:</span><span class="hljs-string">'最新上架'</span><span class="hljs-string">,</span>
<span class="hljs-attr">            selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">            id:</span><span class="hljs-number">2</span><span class="hljs-string">,</span>
<span class="hljs-attr">            text:</span><span class="hljs-string">'价格最低'</span><span class="hljs-string">,</span>
<span class="hljs-attr">            selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">            id:</span><span class="hljs-number">3</span><span class="hljs-string">,</span>
<span class="hljs-attr">            text:</span><span class="hljs-string">'价格最高'</span><span class="hljs-string">,</span>
<span class="hljs-attr">            selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">            id:</span><span class="hljs-number">4</span><span class="hljs-string">,</span>
<span class="hljs-attr">            text:</span><span class="hljs-string">'评价最多'</span><span class="hljs-string">,</span>
<span class="hljs-attr">            selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">}</span>
      <span class="hljs-string">],</span>
<span class="hljs-attr">      list2:</span><span class="hljs-string">[{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">1</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'京东物流'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">true</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">2</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'有货优先'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">3</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'海囤全球'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">4</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'货到付款'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">5</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'促销商品'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">6</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'配送全球'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">}</span>
      <span class="hljs-string">],</span>
<span class="hljs-attr">      list4:</span><span class="hljs-string">[{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">1</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'海尔（Haier）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">true</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">2</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'小天鹅（LittleSwan）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">3</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'美的（Midea）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">4</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'西门子（SIEMENS）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">5</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'TCL'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">6</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'松下（Panasonic）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">7</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'海信（Hisense）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">8</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'惠而浦（whirlpool）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">9</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'三洋（SANYO）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">10</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'博世（BOSCH）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">11</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'威力（WEILI）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">12</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'LG'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">13</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'小鸭（LittleDuck）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">14</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'统帅（Leader）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">15</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'三星（SAMSUNG）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">16</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'奥克斯（AUX）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">17</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'志高（CHIGO）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">18</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'创维（Skyworth）'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">}</span>
      <span class="hljs-string">],</span>
<span class="hljs-attr">      list3:</span><span class="hljs-string">[{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">1</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'1级'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">true</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">2</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'2级'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">3</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'3级'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">4</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'4级'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">},</span>
        <span class="hljs-string">{</span>
<span class="hljs-attr">          id:</span><span class="hljs-number">5</span><span class="hljs-string">,</span>
<span class="hljs-attr">          text:</span><span class="hljs-string">'5级'</span><span class="hljs-string">,</span>
<span class="hljs-attr">          selected:</span><span class="hljs-literal">false</span>
        <span class="hljs-string">}</span>
      <span class="hljs-string">],</span>
    <span class="hljs-string">};</span>
  <span class="hljs-string">},</span>
<span class="hljs-attr">  methods:</span> <span class="hljs-string">{</span>
    <span class="hljs-string">switchMenu(param,num)</span> <span class="hljs-string">{</span>
        <span class="hljs-string">this.num</span> <span class="hljs-string">=</span> <span class="hljs-string">num;</span>
        <span class="hljs-string">this.titlenum</span> <span class="hljs-string">=</span> <span class="hljs-string">param.split('isVisible')[1];</span>
        <span class="hljs-string">for(let</span> <span class="hljs-string">key</span> <span class="hljs-string">in</span> <span class="hljs-string">this.visible)</span> <span class="hljs-string">{</span>
          <span class="hljs-string">if(key</span> <span class="hljs-string">!==</span> <span class="hljs-string">param)</span> <span class="hljs-string">{</span>
              <span class="hljs-string">this.visible[key]</span> <span class="hljs-string">=</span> <span class="hljs-literal">false</span><span class="hljs-string">;</span>
          <span class="hljs-string">}</span>
        <span class="hljs-string">}</span>
      <span class="hljs-string">Array.from(document.querySelectorAll('.list')).forEach(item</span> <span class="hljs-string">=&gt;</span> <span class="hljs-string">{</span>
          <span class="hljs-string">item.style.zIndex</span> <span class="hljs-string">=</span> <span class="hljs-number">0</span><span class="hljs-string">;</span>
      <span class="hljs-string">});</span>
      <span class="hljs-string">if(!this.visible[`${param}`])</span> <span class="hljs-string">{</span>
          <span class="hljs-string">document.querySelector('.list'</span> <span class="hljs-string">+</span> <span class="hljs-string">this.num).style.zIndex</span> <span class="hljs-string">=</span> <span class="hljs-number">9999</span><span class="hljs-string">;</span>
      <span class="hljs-string">}</span>
      <span class="hljs-string">this.visible[`${param}`]</span> <span class="hljs-string">=</span> <span class="hljs-type">!this</span><span class="hljs-string">.visible[`${param}`];</span>
    <span class="hljs-string">},</span>
    <span class="hljs-string">chooseMenu(item,index)</span> <span class="hljs-string">{</span>
        <span class="hljs-string">this.switchMenu('isVisible1',1);</span>
        <span class="hljs-string">this.list1.map((value,key)</span> <span class="hljs-string">=&gt;</span> <span class="hljs-string">value.selected</span> <span class="hljs-string">=</span> <span class="hljs-literal">false</span><span class="hljs-string">);</span>
        <span class="hljs-string">this.$set(this.list1[index],'selected',true);</span>
        <span class="hljs-string">this.$refs.title1.innerText</span> <span class="hljs-string">=</span> <span class="hljs-string">item.text;</span>
    <span class="hljs-string">},</span>

    <span class="hljs-string">reset(list)</span> <span class="hljs-string">{</span>
        <span class="hljs-string">this.$refs[`title${this.titlenum}`].innerText</span> <span class="hljs-string">=</span> <span class="hljs-string">'menu'</span><span class="hljs-string">;</span>
    <span class="hljs-string">},</span>
    <span class="hljs-string">ok(list)</span> <span class="hljs-string">{</span>
        <span class="hljs-string">let</span> <span class="hljs-string">arr</span> <span class="hljs-string">=</span> <span class="hljs-string">[];</span>
        <span class="hljs-string">list.forEach((item,index)</span> <span class="hljs-string">=&gt;</span> <span class="hljs-string">{</span>
            <span class="hljs-string">if(item.selected)</span> <span class="hljs-string">{</span>
                <span class="hljs-string">arr.push(item.text);</span>
            <span class="hljs-string">}</span>
        <span class="hljs-string">});</span>

        <span class="hljs-string">if(!!arr.length)</span> <span class="hljs-string">{</span>
            <span class="hljs-string">this.$refs[`title${this.titlenum}`].innerText</span> <span class="hljs-string">=</span> <span class="hljs-string">arr.join();</span>
        <span class="hljs-string">}</span>
    <span class="hljs-string">},</span>
    <span class="hljs-string">maxTip()</span> <span class="hljs-string">{</span>
        <span class="hljs-string">alert('超过了最大选择数');</span>
    <span class="hljs-string">}</span>
  <span class="hljs-string">}</span>
<span class="hljs-string">};</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>isAnimation</td>
<td>是否启用动画</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>isVisible</td>
<td>是否显示</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>单选simple，多选multiple</td>
<td>String</td>
<td>simple</td>
</tr>
<tr>
<td>col</td>
<td>显示的列数</td>
<td>String/Number</td>
<td>1</td>
</tr>
<tr>
<td>mulstyle</td>
<td>多选样式，内置三种style1、style2、style3</td>
<td>String</td>
<td>style1</td>
</tr>
<tr>
<td>max</td>
<td>多选下，允许选择的最大标签数</td>
<td>String/Number</td>
<td>5</td>
</tr>
<tr>
<td>list</td>
<td>选项列表</td>
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
<td>close</td>
<td>遮罩点击</td>
<td>无</td>
</tr>
<tr>
<td>choose</td>
<td>单选下，选择之后触发</td>
<td>1.选择的列表对象。2.列表索引</td>
</tr>
<tr>
<td>maxTip</td>
<td>多选下，选择的数量最大时触发</td>
<td>无</td>
</tr>
<tr>
<td>reset</td>
<td>多选下，重置按钮触发</td>
<td>返回重置之后的列表</td>
</tr>
<tr>
<td>ok</td>
<td>多选下，点击确定之后触发</td>
<td>返回列表</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
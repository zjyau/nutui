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
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript"><span class="hljs-keyword">import</span> nutMenu from <span class="hljs-string">'./menu.vue'</span>;
export <span class="hljs-keyword">default</span> {
  components: {
    [nutMenu.name]:nutMenu
  },
  data() {
    <span class="hljs-keyword">return</span> {
      num:<span class="hljs-number">1</span>,
      titlenum:<span class="hljs-number">1</span>,
      <span class="hljs-built_in">max</span>:<span class="hljs-number">6</span>,
      visible:{
          isVisible1:<span class="hljs-keyword">false</span>,
          isVisible2:<span class="hljs-keyword">false</span>,
          isVisible3:<span class="hljs-keyword">false</span>,
          isVisible4:<span class="hljs-keyword">false</span>,
          isVisible5:<span class="hljs-keyword">false</span>,
          isVisible6:<span class="hljs-keyword">false</span>,
          isVisible7:<span class="hljs-keyword">false</span>,
          isVisible8:<span class="hljs-keyword">false</span>,
          isVisible9:<span class="hljs-keyword">false</span>,
          isVisible10:<span class="hljs-keyword">false</span>,
          isVisible11:<span class="hljs-keyword">false</span>
      },
      list1:[
        {
            id:<span class="hljs-number">1</span>,
            <span class="hljs-built_in">text</span>:<span class="hljs-string">'综合'</span>,
            selected:<span class="hljs-keyword">true</span>
        },
        {
            id:<span class="hljs-number">1</span>,
            <span class="hljs-built_in">text</span>:<span class="hljs-string">'最新上架'</span>,
            selected:<span class="hljs-keyword">false</span>
        },
        {
            id:<span class="hljs-number">2</span>,
            <span class="hljs-built_in">text</span>:<span class="hljs-string">'价格最低'</span>,
            selected:<span class="hljs-keyword">false</span>
        },
        {
            id:<span class="hljs-number">3</span>,
            <span class="hljs-built_in">text</span>:<span class="hljs-string">'价格最高'</span>,
            selected:<span class="hljs-keyword">false</span>
        },
        {
            id:<span class="hljs-number">4</span>,
            <span class="hljs-built_in">text</span>:<span class="hljs-string">'评价最多'</span>,
            selected:<span class="hljs-keyword">false</span>
        }
      ],
      list2:[{
          id:<span class="hljs-number">1</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'京东物流'</span>,
          selected:<span class="hljs-keyword">true</span>
        },
        {
          id:<span class="hljs-number">2</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'有货优先'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">3</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'海囤全球'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">4</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'货到付款'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">5</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'促销商品'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">6</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'配送全球'</span>,
          selected:<span class="hljs-keyword">false</span>
        }
      ],
      list4:[{
          id:<span class="hljs-number">1</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'海尔（Haier）'</span>,
          selected:<span class="hljs-keyword">true</span>
        },
        {
          id:<span class="hljs-number">2</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'小天鹅（LittleSwan）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">3</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'美的（Midea）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">4</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'西门子（SIEMENS）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">5</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'TCL'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">6</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'松下（Panasonic）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">7</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'海信（Hisense）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">8</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'惠而浦（whirlpool）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">9</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'三洋（SANYO）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">10</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'博世（BOSCH）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">11</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'威力（WEILI）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">12</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'LG'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">13</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'小鸭（LittleDuck）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">14</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'统帅（Leader）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">15</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'三星（SAMSUNG）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">16</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'奥克斯（AUX）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">17</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'志高（CHIGO）'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">18</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'创维（Skyworth）'</span>,
          selected:<span class="hljs-keyword">false</span>
        }
      ],
      list3:[{
          id:<span class="hljs-number">1</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'1级'</span>,
          selected:<span class="hljs-keyword">true</span>
        },
        {
          id:<span class="hljs-number">2</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'2级'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">3</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'3级'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">4</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'4级'</span>,
          selected:<span class="hljs-keyword">false</span>
        },
        {
          id:<span class="hljs-number">5</span>,
          <span class="hljs-built_in">text</span>:<span class="hljs-string">'5级'</span>,
          selected:<span class="hljs-keyword">false</span>
        }
      ],
    };
  },
  methods: {
    switchMenu(param,num) {
        <span class="hljs-keyword">this</span>.num = num;
        <span class="hljs-keyword">this</span>.titlenum = param.<span class="hljs-built_in">split</span>(<span class="hljs-string">'isVisible'</span>)[<span class="hljs-number">1</span>];
        <span class="hljs-keyword">for</span>(let <span class="hljs-built_in">key</span> in <span class="hljs-keyword">this</span>.visible) {
          <span class="hljs-keyword">if</span>(<span class="hljs-built_in">key</span> !== param) {
              <span class="hljs-keyword">this</span>.visible[<span class="hljs-built_in">key</span>] = <span class="hljs-keyword">false</span>;
          }
        }
      <span class="hljs-keyword">Array</span>.from(document.querySelectorAll(<span class="hljs-string">'.list'</span>)).forEach(item =&gt; {
          item.style.zIndex = <span class="hljs-number">0</span>;
      });
      <span class="hljs-keyword">if</span>(!<span class="hljs-keyword">this</span>.visible[`${param}`]) {
          document.querySelector(<span class="hljs-string">'.list'</span> + <span class="hljs-keyword">this</span>.num).style.zIndex = <span class="hljs-number">9999</span>;
      }
      <span class="hljs-keyword">this</span>.visible[`${param}`] = !<span class="hljs-keyword">this</span>.visible[`${param}`];
    },
    chooseMenu(item,index) {
        <span class="hljs-keyword">this</span>.switchMenu(<span class="hljs-string">'isVisible1'</span>,<span class="hljs-number">1</span>);
        <span class="hljs-keyword">this</span>.list1.<span class="hljs-built_in">map</span>((value,<span class="hljs-built_in">key</span>) =&gt; value.selected = <span class="hljs-keyword">false</span>);
        <span class="hljs-keyword">this</span>.$<span class="hljs-built_in">set</span>(<span class="hljs-keyword">this</span>.list1[index],<span class="hljs-string">'selected'</span>,<span class="hljs-keyword">true</span>);
        <span class="hljs-keyword">this</span>.$refs.title1.innerText = item.<span class="hljs-built_in">text</span>;
    },

    reset(list) {
        <span class="hljs-keyword">this</span>.$refs[`title${<span class="hljs-keyword">this</span>.titlenum}`].innerText = <span class="hljs-string">'menu'</span>;
    },
    ok(list) {
        let arr = [];
        list.forEach((item,index) =&gt; {
            <span class="hljs-keyword">if</span>(item.selected) {
                arr.push(item.<span class="hljs-built_in">text</span>);
            }
        });

        <span class="hljs-keyword">if</span>(!!arr.length) {
            <span class="hljs-keyword">this</span>.$refs[`title${<span class="hljs-keyword">this</span>.titlenum}`].innerText = arr.<span class="hljs-built_in">join</span>();
        }
    },
    maxTip() {
        alert(<span class="hljs-string">'超过了最大选择数'</span>);
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
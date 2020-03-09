<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>LuckDraw 转盘抽奖<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><h2>基本用法</h2><hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;luck-draw
  <span class="hljs-built_in">class</span>=<span class="hljs-string">"drawTable"</span>
  <span class="hljs-keyword">ref</span>=<span class="hljs-string">"luckDrawPrize"</span>
  :luckWidth=<span class="hljs-string">"luckWidth"</span>
  :luckheight=<span class="hljs-string">"luckheight"</span>
  :prizeList=<span class="hljs-string">"prizeList"</span>
  :turnsNumber=<span class="hljs-string">"turnsNumber"</span>
  :turnsTime=<span class="hljs-string">"turnsTime"</span>
  :prizeIndex=<span class="hljs-string">"prizeIndex"</span>
  :styleOpt=<span class="hljs-string">"styleOpt"</span>
  @endTurns=<span class="hljs-string">"endTurns"</span>
&gt;
  &lt;template slot=<span class="hljs-string">"item"</span> slot-scope=<span class="hljs-string">"scope"</span>&gt;
    &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"drawTable-name"</span>&gt;{{ scope.<span class="hljs-built_in">item</span>.prizeName }}&lt;/<span class="hljs-keyword">div</span>&gt;
    &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"drawTable-img"</span>&gt;
      &lt;img :src=<span class="hljs-string">"scope.item.prizeImg"</span>&gt;
    &lt;/<span class="hljs-keyword">div</span>&gt;
  &lt;/template&gt;
&lt;/luck-draw&gt;
&lt;<span class="hljs-keyword">div</span> @click=<span class="hljs-string">"startTurns"</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"pointer"</span> :style=<span class="hljs-string">"pointerStyle"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">export <span class="hljs-keyword">default</span> {
    <span class="hljs-keyword">data</span>() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-comment">// 转盘大小</span>
        luckWidth: <span class="hljs-string">'300px'</span>,
        luckheight: <span class="hljs-string">'300px'</span>,
        <span class="hljs-comment">// 转盘指针图片样式</span>
        pointerStyle: {
          width: <span class="hljs-string">'80px'</span>,
          height: <span class="hljs-string">'80px'</span>,
          backgroundImage: <span class="hljs-string">'url("https://img11.360buyimg.com/imagetools/jfs/t1/106989/15/11126/137350/5e265414E8ee514bc/3456bd0d3a0454da.png")'</span>,
          backgroundSize: <span class="hljs-string">'contain'</span>,
          backgroundRepeat: <span class="hljs-string">'no-repeat'</span>,
        },
        <span class="hljs-comment">// 奖品列表</span>
        prizeList: [
          {
            id: <span class="hljs-string">'xiaomi'</span>,
            prizeName: <span class="hljs-string">'小米手机'</span>,
            prizeImg: <span class="hljs-string">'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/96788/40/337/73706/5dabd0e2E1f166028/7120ca2b421cb0a0.jpg!q70.dpg.webp'</span>,
          },
          {
            id: <span class="hljs-string">'blue'</span>,
            prizeName: <span class="hljs-string">'蓝牙耳机'</span>,
            prizeImg: <span class="hljs-string">'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/65070/13/4325/183551/5d26e23fE09ab2010/a94eaff8242e6c63.jpg!q70.dpg.webp'</span>,
          },
          {
            id: <span class="hljs-string">'apple'</span>,
            prizeName: <span class="hljs-string">'apple watch'</span>,
            prizeImg: <span class="hljs-string">'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/105083/3/4010/126031/5de4aa51E1c7fefc6/0288f4cf3016e061.jpg!q70.dpg.webp'</span>,
          },
          {
            id: <span class="hljs-string">'fruit'</span>,
            prizeName: <span class="hljs-string">'迪士尼苹果'</span>,
            prizeImg: <span class="hljs-string">'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/47486/35/13399/356858/5da3cde2E9b3ec40f/3b3a56d54d5db565.jpg!q80.dpg.webp'</span>,
          },
          {
            id: <span class="hljs-string">'fish'</span>,
            prizeName: <span class="hljs-string">'海鲜套餐'</span>,
            prizeImg: <span class="hljs-string">'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/109529/24/1330/283533/5dfc836fE33d8ce6b/372adb638802710a.jpg!q70.dpg.webp'</span>,
          },
          {
            id: <span class="hljs-string">'thanks'</span>,
            prizeName: <span class="hljs-string">'谢谢参与'</span>,
            prizeImg: <span class="hljs-string">'https://img11.360buyimg.com/imagetools/jfs/t1/104502/28/10892/5123/5e265414Ec167392c/2831c6155895f33d.png'</span>,
          }
        ],
        turnsNumber: <span class="hljs-number">5</span>, <span class="hljs-comment">// 转动圈数</span>
        turnsTime: <span class="hljs-number">5</span>,<span class="hljs-comment">// 转动时间：S</span>
        styleOpt: {
          prizeBgColors: [<span class="hljs-string">'rgb(255, 231, 149)'</span>,<span class="hljs-string">'rgb(255, 247, 223)'</span>,<span class="hljs-string">'rgb(255, 231, 149)'</span>,<span class="hljs-string">'rgb(255, 247, 223)'</span>,<span class="hljs-string">'rgb(255, 231, 149)'</span>,<span class="hljs-string">'rgb(255, 247, 223)'</span>],
          borderColor: <span class="hljs-string">'#ff9800'</span>,
        },
        prizeIndex: -<span class="hljs-number">1</span>, <span class="hljs-comment">// 中奖奖品的index</span>
        lock: <span class="hljs-literal">false</span>,<span class="hljs-comment">// 防止多次连续点击抽奖</span>
        num: <span class="hljs-number">5</span>,<span class="hljs-comment">// 抽奖次数,根据需求定义</span>
      }
    },
    methods: {
      startTurns() {
        <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">this</span>.canBeRotated()) {
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
        <span class="hljs-keyword">this</span>.lock = <span class="hljs-literal">true</span>;
        <span class="hljs-comment">// 此为模拟随机数字，这里可以接受后台中奖信息</span>
        <span class="hljs-keyword">const</span> index = Math.floor(Math.random() * <span class="hljs-keyword">this</span>.prizeList.length);
        <span class="hljs-comment">// 成功后抽奖次数减1</span>
        <span class="hljs-keyword">this</span>.num--;
        <span class="hljs-comment">// 中奖奖品的index</span>
        <span class="hljs-keyword">this</span>.prizeIndex = index;
        <span class="hljs-comment">// 调用组件的方法，使转盘转动并停留在中奖奖品的那个扇形区域</span>
        <span class="hljs-keyword">this</span>.$refs.luckDrawPrize.rotate(index);
      },
      endTurns() {
        <span class="hljs-keyword">this</span>.$dialog({
          content: `恭喜中奖！！！${<span class="hljs-keyword">this</span>.prizeList[<span class="hljs-keyword">this</span>.prizeIndex].prizeName}`,
          noCloseBtn: <span class="hljs-literal">false</span>,
          noOkBtn: <span class="hljs-literal">true</span>,
          cancelBtnTxt: <span class="hljs-string">"我知道了"</span>
        });
        <span class="hljs-keyword">this</span>.lock = <span class="hljs-literal">false</span>;
      },
      canBeRotated() {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.num &lt;= <span class="hljs-number">0</span>) {
          <span class="hljs-keyword">this</span>.$dialog({
            content: `已经没有次数了,继续加油赚积分吧！`,
            noCloseBtn: <span class="hljs-literal">false</span>,
            noOkBtn: <span class="hljs-literal">true</span>,
            cancelBtnTxt: <span class="hljs-string">"我知道了"</span>
          });
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.lock) {
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
        }
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
      },
    }
  }</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>ref</td>
<td>当前转盘的类名,转动的时候根据类名执行回调函数</td>
<td>String</td>
<td>luckDrawPrize</td>
</tr>
<tr>
<td>luckWidth</td>
<td>转盘的宽度</td>
<td>String</td>
<td>300px</td>
</tr>
<tr>
<td>luckHeight</td>
<td>转盘的高度</td>
<td>String</td>
<td>300px</td>
</tr>
<tr>
<td>prizeList</td>
<td>奖品列表</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>turnsNumber</td>
<td>转动的圈数</td>
<td>Number</td>
<td>5</td>
</tr>
<tr>
<td>turnsTime</td>
<td>从开始转动到结束所用时间</td>
<td>Number</td>
<td>5(单位是秒)</td>
</tr>
<tr>
<td>styleOpt</td>
<td>转盘中的样式，包括每个扇区的背景颜色，扇区的边框颜色</td>
<td>Object</td>
<td>{prizeBgColors: [],borderColor: &#39;&#39;}</td>
</tr>
<tr>
<td>pointerStyle</td>
<td>转盘中指针的样式，包括背景图片、大小等</td>
<td>Object</td>
<td>{width: &#39;80px&#39;,height: &#39;80px&#39;}</td>
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
<td>endTurns</td>
<td>转盘中停止转动后的回调函数</td>
<td>-</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
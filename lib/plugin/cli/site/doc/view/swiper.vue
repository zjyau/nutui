<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>swiper 滑动切换<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i></h1><p>常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p>
<h2>基本用法</h2><p>横向无缝切换</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-swiper
    :paginationVisible=<span class="hljs-string">"true"</span>
    direction=<span class="hljs-string">"horizontal"</span>
    :swiperData=<span class="hljs-string">"dataItem"</span>
    <span class="hljs-keyword">ref</span>=<span class="hljs-string">"demo1"</span>
&gt;
    &lt;<span class="hljs-keyword">div</span>  v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"(item,index) in dataItem"</span> :key=<span class="hljs-string">"index"</span>  <span class="hljs-built_in">class</span>=<span class="hljs-string">"nut-swiper-slide"</span>&gt;
        &lt;span&gt;page{{<span class="hljs-built_in">item</span>.<span class="hljs-built_in">name</span>}}&lt;/span&gt;
    &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/nut-swiper&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>横向切换</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-swiper
    direction=<span class="hljs-string">"horizontal"</span>
    :swiperData=<span class="hljs-string">"dataItem"</span>
    :canDragging=<span class="hljs-string">"false"</span>
    :paginationVisible=<span class="hljs-string">"true"</span>
    <span class="hljs-keyword">ref</span>=<span class="hljs-string">"demo2"</span>
&gt;
    &lt;<span class="hljs-keyword">div</span>  v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"(item,index) in dataItem"</span> :key=<span class="hljs-string">"index"</span>  <span class="hljs-built_in">class</span>=<span class="hljs-string">"nut-swiper-slide"</span>&gt;
        &lt;span&gt;page{{<span class="hljs-built_in">item</span>.<span class="hljs-built_in">name</span>}}&lt;/span&gt;
    &lt;/<span class="hljs-keyword">div</span>&gt;

&lt;/nut-swiper&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>横向循环切换</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper</span>
    <span class="hljs-attr">direction</span>=<span class="hljs-string">"horizontal"</span>
    <span class="hljs-attr">:loop</span>=<span class="hljs-string">"true"</span>
    <span class="hljs-attr">:canDragging</span>=<span class="hljs-string">"false"</span>
    <span class="hljs-attr">:paginationVisible</span>=<span class="hljs-string">"true"</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">"demo3"</span>
&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray_1"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray_1"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>纵向自动播放</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper</span>
    <span class="hljs-attr">direction</span>=<span class="hljs-string">"vertical"</span>
    <span class="hljs-attr">:autoPlay</span>=<span class="hljs-string">"3000"</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">"demo4"</span>
&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray_1"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">class</span>=<span class="hljs-string">"nut-swiper-slide gray_1"</span> &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>page 4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper</span>&gt;</span></code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<p>滑动懒加载图片</p>
<hide><pre class="prettyprint"><span class="lang">html</span><div class="code-wrapper"><code class="language-html">&lt;nut-swiper
    direction=<span class="hljs-string">"horizontal"</span>
    :swiperData=<span class="hljs-string">"dataImgItem"</span>
    :lazyLoad=<span class="hljs-string">"true"</span>
    :paginationVisible=<span class="hljs-string">"true"</span>
    <span class="hljs-keyword">ref</span>=<span class="hljs-string">"demo5"</span>
&gt;
        &lt;<span class="hljs-keyword">div</span>  v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"(item,index) in dataImgItem"</span> :key=<span class="hljs-string">"index"</span>  <span class="hljs-built_in">class</span>=<span class="hljs-string">"nut-swiper-slide "</span>&gt;
        &lt;img :data-src=<span class="hljs-string">"item.imgSrc"</span>   style=<span class="hljs-string">"max-width:100%; max-height:100%"</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"nut-img-lazyload"</span>/&gt; 
    &lt;/<span class="hljs-keyword">div</span>&gt;

&lt;/nut-swiper&gt;</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
<hide><pre class="prettyprint"><span class="lang">javascript</span><div class="code-wrapper"><code class="language-javascript">    export default{
        data(){
            return{
                dataItem:[],
                dataImgItem:[],
            }
        },
        mounted(){
            setTimeout(()=&gt;{
                this.dataItem = [{
                    name:<span class="hljs-number">1</span>
                },{
                    name:<span class="hljs-number">2</span>
                },{
                    name:<span class="hljs-number">3</span>
                },{
                    name:<span class="hljs-number">4</span>
                }]

                this.dataImgItem = [
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t<span class="hljs-number">1944</span>1/80/<span class="hljs-number">1577112624/5688</span>21/1ee9b683/5ad064f1Nf41a94b4.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t<span class="hljs-number">1679</span>8/338/<span class="hljs-number">1617130854/5426</span>23/4c197f4d/5ad064f1Nce5f69e2.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t<span class="hljs-number">2212</span>3/348/<span class="hljs-number">72007980</span>1/<span class="hljs-number">233727/23</span>c4c0a4/5b162d64Nc<span class="hljs-number">588341</span>3.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t1/<span class="hljs-number">2723</span>3/9/354/<span class="hljs-number">8286</span>3/5c090a0eEe2a350d8/aaa<span class="hljs-number">6686</span>ce133e364.jpg'
                    }
                ];
            },<span class="hljs-number">300</span>)
        }
    }
</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>
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
<td>direction</td>
<td>滑动方向</td>
<td>String</td>
<td>vertical</td>
</tr>
<tr>
<td>paginationVisible</td>
<td>是否分页显示</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>paginationClickable</td>
<td>分页是否可以点击</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>loop</td>
<td>是否循环</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>speed</td>
<td>过度动画执行时间</td>
<td>Number</td>
<td>500</td>
</tr>
<tr>
<td>canDragging</td>
<td>是否无缝切换</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>autoPlay</td>
<td>自动轮播，轮播默认是循环模式，直接写轮播间隔时间</td>
<td>Number</td>
<td>0</td>
</tr>
<tr>
<td>initPage</td>
<td>设置初始时候显示的页</td>
<td>Number</td>
<td>1</td>
</tr>
<tr>
<td>lazyLoad</td>
<td>是否懒加载图片</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazyLoadUrl</td>
<td>懒加载的默认展示图片</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>swiperData</td>
<td>异步数据渲染slide时，必须绑定对应数组（v2.1.7以上支持）</td>
<td>Array</td>
<td>-</td>
</tr>
</tbody></table>
<h2>Methods</h2><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody><tr>
<td>next</td>
<td>去下一页</td>
<td>-</td>
</tr>
<tr>
<td>prev</td>
<td>去上一页</td>
<td>-</td>
</tr>
<tr>
<td>setPage</td>
<td>设置当前显示第几页</td>
<td>number</td>
</tr>
</tbody></table>
<h2>Events</h2><table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody><tr>
<td>slideChangeStart</td>
<td>页面开始切换时候</td>
<td>pageSize,el</td>
</tr>
<tr>
<td>slideChangeEnd</td>
<td>页面结束切换时候</td>
<td>pageSize,el</td>
</tr>
<tr>
<td>slideRevertStart</td>
<td>拖动页面没改变回到原先位置开始时候</td>
<td>pageSize,el</td>
</tr>
<tr>
<td>slideRevertEnd</td>
<td>拖动页面没有改变回到原先位置结束时候</td>
<td>pageSize,el</td>
</tr>
<tr>
<td>slideMove</td>
<td>拖动过程中</td>
<td>offset,el</td>
</tr>
</tbody></table>
<nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
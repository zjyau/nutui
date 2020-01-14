<template>
                                <div  @click="dsCode">
                                <div v-if="content" class="layer">
                                <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
                                </div><h1>NutUI</h1><p>NutUI是一套京东风格的移动端Vue组件库，开发和服务于移动Web界面的企业级前中后台产品。</p>
<div style="margin:30px 0;">
    <img src="http://img14.360buyimg.com/uba/jfs/t1/8543/6/11560/22014/5c2c6136E8023ac0a/6abbd9de10999c48.png" width="150" alt="NutUI">
</div>

<iframe src="https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true" frameborder="0" scrolling="0" width="60px" height="20px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="70px" height="20px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=fork&count=true" frameborder="0" scrolling="0" width="60px" height="20px"></iframe>

<h2 class='visibility' id='head1'>特性</h2><ul>
<li>30+ 京东移动端项目正在使用</li>
<li>基于京东APP 7.0 视觉规范</li>
<li>支持按需加载</li>
<li>详尽的文档和示例</li>
<li>支持定制主题</li>
<li>支持多语言（国际化）</li>
<li>支持 TypeScript</li>
<li>支持服务端渲染（Vue SSR）</li>
<li>单元测试加持</li>
<li>配套有基于Webpack的构建工具，可快速创建已内置本组件库的Vue工程</li>
</ul>
<h2 class='visibility' id='head2'>示例</h2><p><img src="https://img14.360buyimg.com/uba/s260x260_jfs/t1/32118/11/559/2782/5c3d81ecEbda0c0f1/5f2b637d11817204.png" alt="NutUI Demo"></p>
<h2 class='visibility' id='head3'>支持环境</h2><ul>
<li>Android 4.0+</li>
<li>iOS 8.0+</li>
<li>支持服务端渲染</li>
</ul>
<h2 class='visibility' id='head4'>构建版本</h2><ul>
<li>UMD版 <strong>nutui.js</strong></li>
<li>UMD压缩版 <strong>nutui.min.js</strong></li>
</ul>
<blockquote>
<p>AMD 环境、Webpack 等构建工具环境、服务端建议使用 UMD 版，非模块化环境（如通过 <code>&lt;script&gt;</code> 标签直接引用）建议使用 UMD 压缩版。</p>
</blockquote>
<p>最新稳定版：<img src="https://img.shields.io/npm/v/@nutui/nutui.svg" alt="npm"></p>
<blockquote>
<p>你还可以订阅： <a href="https://github.com/jdf2e/nutui/releases.atom">https://github.com/jdf2e/nutui/releases.atom</a> 来获得稳定版发布的通知。</p>
</blockquote>
<h2 class='visibility' id='head5'>链接</h2><ul>
<li><a href="http://cn.vuejs.org/">Vue官方文档</a></li>
<li><a href="http://webpack.github.io/">Webpack</a></li>
<li><a href="https://github.com/jdf2e/nutui/issues">意见反馈</a></li>
<li><a href="https://github.com/jdf2e/nutui/releases">更新日志</a></li>
<li><a href="https://github.com/jdf2e/nutui/issues/16">案例征集</a></li>
<li><a href="https://www.npmjs.com/package/gaea-cli">模板工程命令行工具(Gaea CLI)</a></li>
<li>联系我们：<a href="mailto:nutui@jd.com">nutui@jd.com</a></li>
<li><a href="#/joinus">加入我们</a></li>
</ul>
<h2 class='visibility' id='head6'>开源协议</h2><p>本项目基于 <strong>MIT</strong> 协议</p>
<ul class="markList"><li @click="leavelchose(1)" :class="levalcur==1?'cur':''"  class="level1"><a href="#head1">特性</a></li><li @click="leavelchose(2)" :class="levalcur==2?'cur':''"  class="level2"><a href="#head2">示例</a></li><li @click="leavelchose(3)" :class="levalcur==3?'cur':''"  class="level3"><a href="#head3">支持环境</a></li><li @click="leavelchose(4)" :class="levalcur==4?'cur':''"  class="level4"><a href="#head4">构建版本</a></li><li @click="leavelchose(5)" :class="levalcur==5?'cur':''"  class="level5"><a href="#head5">链接</a></li><li @click="leavelchose(6)" :class="levalcur==6?'cur':''"  class="level6"><a href="#head6">开源协议</a></li></ul><nut-backtop :right="50" :bottom="50"></nut-backtop>
                                </div>
                            </template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>
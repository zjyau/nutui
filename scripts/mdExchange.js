const path = require('path');
const fs = require('fs');
const nodeFilelist  = require('node-filelist');
let { hashElement } = require('folder-hash');
let { version } = require("../package.json");
let marked = require('marked');
if (!marked) {
    console.log('you need npm i marked -D!');
}
let rendererMd = new marked.Renderer();
let  mdVue = {
    run :function(options){
        this.options = options;
        let _that = this;    
        this.Articlehead = "";
        this.Articleheadcount = 0;
        this.codeHandle();
        this.headHandle();
        this.markHandle();
        this.ishasOutFile(this.options.output).then(res=>{
            _that.star();
        });       
    } ,
    star:function(){  
        let _that = this;
        nodeFilelist.read([this.options.entry],{"ext":'md'},function(res){            
            res.map(item =>{
                let fileSplits = item.path.split(path.sep);
                let fileName = fileSplits.pop();
                if(_that.isDoc(fileName)){
                        fileName = fileSplits.pop();
                }else{
                    fileName = fileName.replace(/\.md/,'');
                }
                _that.read(item.path).then(res=>{
                    let html = marked(res);       
                    _that.write({
                        outsrc:_that.options.output,
                        name:fileName + '.vue',
                        html:html
                    });
                })
            });
        });
    },
    isDoc:function(name){
        return (name == "doc.md") ? true : false;
    },
    read:function(src){
        return new Promise((resolve,reject)=>{
            fs.readFile(src, 'utf-8', (err, data) => {               
                resolve(data)
            })
        })
    },
    write:function(param){
        let _that = this;
        return new Promise((resolve,reject)=>{  
            let outPath = path.join(param.outsrc,param.name);           
            let contexts = `<template><div  @click="dsCode">
            <div v-if="content" class="layer">
              <pre><span class="close-box" @click="closelayer"></span><div v-html="content"></div></pre>
            </div>`+ param.html + (_that.options.hasMarkList ? '<ul class="markList">' + _that.Articlehead + '</ul>' : '')+
            `<nut-backtop :right="50" :bottom="50"></nut-backtop></div></template><script>import root from '../root.js';
            export default {
                mixins:[root]
            }</script>`;    
            _that.Articlehead = "";
            _that.Articleheadcount = 0; 
            fs.writeFile(outPath ,contexts,'utf8',(err,res)=>{                 
            })
        })
    },
    ishasOutFile:function(outPath){
        return new Promise((resolve,reject)=>{
            fs.stat(outPath,(err,res)=>{       
                if(err){
                    fs.mkdir(outPath,err=>{
                        if(err){
                            reject(err)
                        }else{ 
                            resolve(true)
                        }               
                    })
                }else{                    
                    resolve(true)
                }
            })  
        })      
    },
    headHandle:function(){
        let _that = this;
        rendererMd.heading = function (text,level){  
            let headcode = '<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i>';              
            let codeHead = `<h1>` + text +headcode+`</h1>`;
            let normal = `<h`+level+`>`+text+`</h`+level+`>`;            
            // 如果需要 marklist；     
            let Articleheadcounts = null;     
            if(level==2&&_that.options.hasMarkList){
                Articleheadcounts = _that.Articleheadcount;
                Articleheadcounts++;
                _that.Articleheadcount = Articleheadcounts;
                let headmsg = _that.Articlehead;
                headmsg +=`<li @click="leavelchose(`+Articleheadcounts+`)" :class="levalcur==`+Articleheadcounts+`?'cur':''"  class="level`+Articleheadcounts+'"><a href="#head'+Articleheadcounts+'">'+text.substr(0,10)+'</a></li>';
                _that.Articlehead = headmsg;
            }    
            let maskIdHead = "<h"+level+" class='visibility' id='head"+Articleheadcounts+"'>"+ text +"</h"+level+">"; 
            //判断条件                         
            if(_that.options.hasMarkList && _that.options.needCode){
                if(level == 1){
                    return codeHead;
                }else if(level == 2){
                    return maskIdHead;
                } else{
                    return normal;
                }
            }else if(_that.options.hasMarkList && !_that.options.needCode){
                if(level =!1){
                    return maskIdHead;
                } else{
                    return normal;
                }
            }else if(!_that.options.hasMarkList && _that.options.needCode){
                if(level == 1){
                    return codeHead;
                } else{
                    return normal;
                }
            }else if(!_that.options.hasMarkList && !_that.options.needCode){
                return normal;
            }
        };
    },
    codeHandle:function(){
        rendererMd.code = function (code, infostring, escaped) {
            var lang = (infostring || '').match(/\S*/)[0];
            if (this.options.highlight) {
                var out = this.options.highlight(code, lang);
                if (out != null && out !== code) {
                    escaped = true;
                    code = out;
                }
            }
            if (!lang) {
                return '<pre><code>'
                    + (escaped ? code : escape(code, true))
                    + '</code></pre>';
            }
            if (lang === 'html') {
                code = code.replace(/@latest/g, '@' + version)
            }
            return '<hide><pre class="prettyprint"><span class="lang">' + lang + '</span><div class="code-wrapper"><code class="'
                + this.options.langPrefix
                + escape(lang, true)
                + '">'
                + (escaped ? code : escape(code, true))
                + '</code></div><i class="copy" copy="copy" data-clipboard-action="copy" data-clipboard-target="code" title="复制代码"></i><i toast="toast" title="全屏"></i></pre></hide>\n';
        };
    },
    markHandle:function(){
        marked.setOptions({
            renderer: rendererMd,
            highlight: function (code) {
                return require('highlight.js').highlightAuto(code).value;
            },
            tables: true
        });
    }
};
function MdToHtml(opions){
    mdVue.run(opions)
}
//用于后期的扩展暂时没想到
MdToHtml.prototype.apply = function (compiler) {
    //  console.log(compiler,'lls')
};
module.exports = MdToHtml;


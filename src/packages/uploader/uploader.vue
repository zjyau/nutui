<template>
    <div class="nut-uploader" :class="className">
         <slot></slot>
         <input type="file" :name="name" @change="upload($event)" class="uploader" :multiple="multiple">
    </div>
</template>
<script>
import Uploader from './uploader.js';
export default {
    name:'nut-uploader',
       props: {
        'name':{
            type:String,
            default:''
        },
        'url':{
            type:String,
            default:''
        },
        'multiple':{
             type:Boolean,
            default:false
        },
        'isPreview':{
            type:Boolean,
            default:false
        },
        'maxSize':{
            type:Number,
            default:5242880
        },
        'acceptType':{
            type:Array,
            default(){
                return ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
            }
        },
        'attach':{
            type:Object,
            default(){
                return {};
            }
        },
        'changeEvtCallback':{
            type:Function
        },
        'xhrState':{
            type:Number,
            default:200
        },
        'className':{
            type:String,
            default:null
        },
        'clearInput':{
            type:Boolean,
            default:false
        }    
    },
    data() {
        return {};
    },
    methods: {
        createUploaderOpts(){
            const _this = this;
            return {
                 $el: {},
                 url: this.url, //图片上传地址
                 formData: null,
                 isPreview: this.isPreview, //是否开启本地预览
                 previewData:null,
                 maxSize: this.maxSize, //允许上传的文件最大字节
                 acceptType: this.acceptType, //允许上传的文件类型
                 xhrState:this.xhrState,    
                 clearInput:this.clearInput,          
                 onStart() {
                    _this.$emit('start');
                 },
                 onProgress(file, loaded, total) {
                    _this.$emit('progress',file,loaded,total);
                 },
                 onPreview(previewFile) {
                    _this.$emit('preview',previewFile);
                 },
                 onSuccess(file, responseTxt) {                   
                    _this.$emit('success',file, responseTxt);
                 },
                 onFailure(file, responseTxt) {
                    _this.$emit('failure',file, responseTxt);
                 }
             };
        },
        upload($event){
            const tar = $event.target;
           
            if(!this.url) {
                alert('请先配置上传url！');
                this.$emit('afterChange',tar,$event);
                return;
            }     
            const formData = new FormData;
            const opt = this.createUploaderOpts();
            opt.$el = tar;
            if(this.isPreview) {
                opt.previewData = tar.files[0];
            }   
            if(this.multiple){
                for(let i=0;i<tar.files.length;i++){
                    if(tar.files[i]){                
                        if(this.acceptType.indexOf(tar.files[i].type)==-1){                              
                            this.$emit('showMsg',tar.files[i].type,'您上传的文件类型为:'+tar.files[i].type+',不符合您设置的文档类型:'+this.acceptType.join(',')); 
                            return ;
                        }
                    }
                }
            } else{
                 if(tar.files[0]){                
                    if(this.acceptType.indexOf(tar.files[0].type)==-1){
                        console.log(tar.files[0].type)
                        this.$emit('showMsg',tar.files[0].type,'您上传的文件类型为:'+tar.files[0].type+',不符合您设置的文档类型:'+this.acceptType.join(',')); 
                        return ;
                    }
                }
            }           
            formData.append(tar.name, tar.files[0]);
            for(let key of Object.keys(this.attach)){
                formData.append(key, this.attach[key]);
            }
            opt.formData = formData;
            opt.showMsgFn = (msg)=>{
                this.$emit('showMsg',msg);                 
            }
            new Uploader(opt);

            this.$emit('afterChange',tar,$event);
        }
    }
}
</script>
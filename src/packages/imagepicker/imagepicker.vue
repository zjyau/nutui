<template>
    <div class="nut-imagepicker">
        <div class="img-list">
            <transition-group :name="animation?'nutEase':''" tag="ul" class="img-list-img">
                <li class="img-item"
                        v-for="item in this.list"
                        :key="item.id"
                        :style="{'width':width + 'px','height':height + 'px','marginRight':margin + 'px'}"
                        @click="delMode == 'tap' ? deleteImg(item.id) : preview(item.id)"
                        @touchstart="delMode == 'longtap' ? touchStart(item.id) : ''"
                        @touchmove="delMode == 'longtap' ? touchMove(item.id) : ''"
                        @touchend="delMode == 'longtap' ? touchEnd(item.id) : ''"
                >    
                  <img :src="item.src" alt="">        
                  <div class="progress" v-if="item.progress && item.progress != 100">
                      {{item.progress}}%</div>        
                    <div class="statefall" v-if="item.state ==2">
                        上传失败
                    </div> 
                    <div class="statesucess" v-if="item.state ==1">                        
                        <svg t="1556004175811" 
                        class="icon" style="" 
                        viewBox="0 0 1024 1024" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg" 
                        p-id="1121" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                        <path d="M469.333333 640l0.384 0.384L469.333333 640z m-106.282666 0l-0.384 0.384 0.384-0.384z m48.512 106.666667a87.466667 87.466667 0 0 1-61.653334-24.874667l-179.52-173.632a67.797333 67.797333 0 0 1 0-98.24c28.032-27.157333 73.493333-27.157333 101.589334 0l139.584 134.997333 319.168-308.544c28.032-27.157333 73.493333-27.157333 101.589333 0a67.925333 67.925333 0 0 1 0 98.24L472.981333 722.069333A87.530667 87.530667 0 0 1 411.562667 746.666667z" fill="#78C326" p-id="1122">
                        </path></svg>
                    </div> 
                </li>
            </transition-group>
            <div class="add-icon" :style="{'width':width + 'px','height':height + 'px'}" v-show="this.list.length < this.max">
                <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="evenodd"><rect y="6" width="16" height="4" rx="2"></rect><rect transform="rotate(90 8 8)" y="6" width="16" height="4" rx="2"></rect></g></svg></i>
                <input type="file" name="files" :multiple="ismultiple ? 'multiple' : ''" :accept="accept"  @change="addImg" />
            </div>
        </div>
    </div>
</template>
<script>
import Uploader from '../../utils/uploader.js';
export default {
    name:'nut-imagepicker',
    props: {
        url:{
            type:String,
            default:null
        },
        animation:{
            type:[Boolean],
            default:true
        },
        width:{
            type:[String,Number],
            default:100
        },
        height:{
            type:[String,Number],
            default:100
        },
        margin:{
            type:[String,Number],
            default:5
        },
        max:{//允许上传的最大数量
            type:[Number,String],
            default:9
        },
        'maxSize':{
            type:Number,
            default:5242880
        },
        accept:{
            type:[String],
            default:"image/*"
        },
        ismultiple:{//是否开启多图片上传
            type:[Boolean],
            default:false
        },
        delMode:{//删除图片的方式，支持tap、longtap
            type:[String],
            default:'tap'
        },
        autoUpload:{//选择完图片之后是否自动完成上传
            type:[Boolean,String],
            default:false
        },
        imgList:{
            type:Array,
            default:() => {
                return [];
            }
        },
         'xhrState':{
            type:Number,
            default:200
        },
        batchUpload:{
            type:Boolean,
            default:false
        }
      
    },
    data() {
        return {
            timeOutEvent:0,
            list:[],
            fileList:[],            
            autoProgress:{}
        };
    },
    watch:{
        batchUpload(val){
            
            if(val){
                this.batchUp()
            }
        }
    },
    mounted() {
        this.list = this.imgList;
    },
    methods: {
        addImg(event){
            let self = this;
            //限制图片上传数量
            let file = event.target.files;

            let fileArr = Array.from(file);

            if (file.length > self.max - self.list.length) {

                fileArr = fileArr.filter((item,index) => index < self.max - self.list.length);
            }    
            let idArrays = [];
            let creatId = Number(new Date());
            console.log(file);
            for(let i=0; i<file.length;i++){
                creatId = creatId+1;
                idArrays.push(creatId);
            }
            debugger;
            if (self.autoUpload) {//自动上传
                this.upload(file,idArrays);                     
            }         
            fileArr.forEach((item,index) => {
                let reader = new FileReader();
                reader.onload = function(evt) {                    
                    self.list.push({
                        id:idArrays[index],
                        src:evt.target.result,
                        progress:''
                    });                   
                    self.fileList.push({
                        id:creatId,
                        file:item
                    })                 
                    self.$emit('imgMsg',{
                        code:2,
                        msg:fileArr,
                        fileList:self.fileList
                    });
                     event.target.value = '';   
                    
                }
                reader.readAsDataURL(item);
            });
           

            
        },
        params(){
            const _this = this;        
            return {
                $el: {},
                url: this.url, //图片上传地址
                formData: null,
                isPreview: this.isPreview, //是否开启本地预览
                previewData: null,
                maxSize: this.maxSize, //允许上传的文件最大字节
                acceptType: this.acceptType, //允许上传的文件类型
                xhrState: this.xhrState,
                clearInput: this.clearInput,
                xmlError: this.xmlError,
                typeError: this.typeError,
                limitError: this.limitError,                
                creatId:'',
                onStart() {
                _this.$emit("start");
                },
                onProgress(file, loaded, total) { 
                    let uploadObj = this;                   
                    let progress = parseInt((loaded/total)*100); 
                    let index = null;
                    let temp = null;
                    _this.list.map((item,key)=>{
                        if(item.id == uploadObj.creatId){
                            index = key;
                            temp = item;
                            temp['progress'] = progress;
                        }
                    })
                    if(index){
                        _this.$set(_this.list, index, temp);
                    }
                     _this.$emit("progress",file,progress);
                    
                },
                onPreview(previewFile) {
                _this.$emit("preview", previewFile);
                },
                onSuccess(file, responseTxt) {
                    this.stateDis(1)
                    //成功状态                    
                _this.$emit("success", file, responseTxt);
                },
                onFailure(file, responseTxt) {
                    this.stateDis(2)
                    //失败状态
                _this.$emit("failure", file, responseTxt);
                },
                stateDis(Bool){
                     let uploadObj = this;    
                     let index = null;
                     let temp = null;
                     _this.list.map((item,key)=>{
                        if(item.id == uploadObj.creatId){
                            index = key;
                            temp = item;
                            temp['state'] = Bool;
                        }
                    })
                    if(temp){
                        _this.$set(_this.list, index, temp);
                    }
                }
            };
        },
        upload(files,creatIds){    
            if(files){
                let _this = this;                   
                let fileArr = Array.from(files);               
                // opt.previewData = fileArr;             
                for(let i=0;i<fileArr.length;i++){
                    let opt = this.params();     
                    let formData = new FormData;
                    formData.append(fileArr[i].name,fileArr[i]);
                    opt.formData = formData;  
                    opt.creatId = creatIds[i];
                    new Uploader(opt);
                }                
            }   
        },
        batchUp(){
            let list = this.fileList;
            let formData = new FormData;
            let opt = this.params();     
            for(let item of list){               
                formData.append(item.id,item.file);
            }
            opt.formData = formData;     
            new Uploader(opt);
           
        },
        preview(id) {
            this.$emit('imgMsg',{
                code:4,
                msg:id
            });
        },
        deleteImg(id) {
            this.list = this.list.filter(item => item.id != id);
            this.fileList = this.fileList.filter(item => item.id != id);
            this.$emit('imgMsg',{
                code:3,
                msg:id,
                list:this.list,
                fileList:this.fileList
            });
        },
        touchStart(id) {
            this.timeOutEvent = setTimeout(() => {
                this.deleteImg(id);
            },500);
            return false;
        },
        touchMove(id) {
            clearTimeout(this.timeOutEvent);

            return false;
        },
        touchEnd(id) {
            clearTimeout(this.timeOutEvent);//清除定时器
            this.timeOutEvent = 0;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

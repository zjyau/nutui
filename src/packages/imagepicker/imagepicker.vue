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
                  <!-- <div class="progress" v-if="item.progress">
                      {{item.progress}}%</div>          -->
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
            autoProgress:0         
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
            if (self.autoUpload) {//自动上传
                this.upload(file);                     
            }         
            fileArr.forEach((item,index) => {
                let reader = new FileReader();
                reader.onload = function(evt) {
                    let creatId = Number(new Date());
                    self.list.push({
                        id:creatId,
                        src:evt.target.result
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
                onStart() {
                _this.$emit("start");
                },
                onProgress(file, loaded, total) {   
                    // console.log(file)  
                    // let lng = _this.list.length;    
                    // let temp = _this.list[lng-1];
                    // temp['progress'] = parseInt((100 * loaded) / total)
                    // _this.$set(_this.list,lng-1,temp );
                    // _this.autoProgress = parseInt(loaded/total)*100;
                    _this.$emit("progress", file, loaded, total);
                },
                onPreview(previewFile) {
                _this.$emit("preview", previewFile);
                },
                onSuccess(file, responseTxt) {
                _this.$emit("success", file, responseTxt);
                },
                onFailure(file, responseTxt) {
                _this.$emit("failure", file, responseTxt);
                }
            };
        },
        upload(files){       
            let opt = this.params();      
            if(files){
                let _this = this;   
                let formData = new FormData;
                let fileArr = Array.from(files);
                opt.previewData = fileArr
                for(let key in fileArr){
                    formData.append(fileArr[key].name,fileArr[key])
                }
                opt.formData = formData;            
                new Uploader(opt);
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

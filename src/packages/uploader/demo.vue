<template>
    <div>
        <h4>常规上传按钮，结合nut-button使用</h4>
        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"      
         @success="sucess1"
         @fail="fail1"        
        >
        <nut-button small>上传</nut-button>
        </nut-uploader>   
        <h4>通栏上传按钮自定义样式使用</h4>  
        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"      
         @success="sucess1"        
        :className="'block'"
        > 上传
        </nut-uploader>  
        <h4>带进度的上传按钮结合进度条组件展示zip文件上传</h4>  

        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"      
         @success="sucess"  
        @progress="progress"
         @showMsg="showMsgs"
         :acceptType="demo3Type"
        :clearInput="true"
        > <nut-button >上传</nut-button>   
        </nut-uploader>  

        <nut-progress class="progress-style" :percentage="progressNum" :showText="false" strokeWidth="24"/>

        <h4>上传前预览</h4>  
        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"      
         @success="sucess"        
        :className="'block'"
        :isPreview="true"      
        @preview="preview"        
        > 上传
        </nut-uploader> 
        <transition name="fade" >
          <div class="img-outbox">
          <img class="img-box" v-if="previewImg" :src="previewImg" alt="">
          </div>
        </transition>

        <h4>上传前预览+上传进度+错误类型提示</h4>  

        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"      
         @success="sucess"        
        :className="'block'"
        :isPreview="true"      
        @preview="preview2"
        @progress="progress2"
        @showMsg="showMsgs"
        > 上传
        </nut-uploader> 
        <transition name="fade" >
          <div class="img-outbox">
            <img class="img-box" v-if="previewImg2" :src="previewImg2" alt="">
            <svg v-if="upOver" t="1553591410013" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1985" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
              <path d="M511.950005 512.049995m-447.956254 0a447.956254 447.956254 0 1 0 895.912508 0 447.956254 447.956254 0 1 0-895.912508 0Z" fill="#20B759" p-id="1986"></path>
              <path d="M458.95518 649.636559L289.271751 479.95313c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.395859l169.683429 169.68343c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.598867 11.798848-30.597012 0-42.39586z" fill="#FFFFFF" p-id="1987"></path>
              <path d="M777.62406 332.267552c-11.698858-11.698858-30.697002-11.698858-42.39586 0L424.158578 643.437164c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.39586 0l311.069622-311.069622c11.798848-11.798848 11.798848-30.796992 0-42.49585z" fill="#FFFFFF" p-id="1988"></path>
            </svg>
             <div class="pr" v-if="progressNum2">
              {{progressNum2}}%
            </div>
          </div>
          
        </transition>
        
    </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      url:'https://my-json-server.typicode.com/linrufeng/demo/posts',
      name:'test1',
      stateNum:201,   
      block:'block',
      progressNum:0,
      previewImg:null,
      previewImg2:null,
      progressNum2:null,
      upOver:false,
      demo3Type:['application/zip']
    };
  },
  methods: {
      sucess(file,res){
        console.log(file,res)
      },
      sucess1(file,res){
          console.log(file,res)
        this.$toast.success('上传成功', { duration:2000 });
      },
      fail1(file,res){
          console.log(file,res)
        this.$toast.fail('上传成功', { duration:2000 });
      },
      progress(ile, loaded, total){
        this.progressNum = parseInt(100*loaded/total)
        // console.log(file,parseInt(100*loaded/total) ,"进度")
      },
      preview(file){
        console.log(file)
        this.previewImg = file;
      },
      preview2(file){
         this.previewImg2 = file;
         this.upOver = false;
      },
      progress2(file, loaded, total ){
        let that = this;
         that.progressNum2 = parseInt(100*loaded/total)
         if(that.progressNum2==100){
           setTimeout(()=>{
             console.log(1)
             that.progressNum2 =null;
             that.upOver = true;
           },500)
         }
      },showMsgs(fileType,msg){
        this.$toast.text(msg, { duration:2000 });
      }
  }
};
</script>

<style lang="scss" scoped>
.img-outbox{
   margin-top:20px;
    width: 100px;
    height: 100px;
    border-radius: 6px;
    position: relative;
    border:1px solid #f2f2f2;
    line-height: 100px;
    .img-box{
      margin-top:0;
    }
    .icon{
      width: 20px;
      height: 20px;
       position: absolute;
      z-index: 2;
      top:0;
      right: 0;
    }
    .pr{
      position: absolute;
      z-index: 2;
      top:0;
      left:0;
      width: 100%;
      height:100%;
      color:#fff;
      font-size: 16px;
      text-align: center;
      line-height: 100px;
      background: rgba(0,0,0,.2);
    }
}
   .img-box{
     margin-top:20px;
    width: 100px;    
    border-radius: 6px;
    vertical-align: middle;
  }
  .block{
    display: block;
    width: 100%;    
     display: inline-block;
     width: 122px;
     height: 40px;
     line-height: 40px;
     border-radius: 6px;
     text-align: center;
     color:#fff;
     background: linear-gradient(315deg, #ff4f18 0%, #f20000 100%);
     position: relative;
}
.progress-style{
  margin-top:10px;
}
</style>

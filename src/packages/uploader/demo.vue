<template>
    <div>
        <h4>基本用法</h4> 
        <p>下面的例子可以自已定义一个 className 和文字内容</p> 
        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"      
         @success="demo1success"
         @failure="demo1fail"      
         @start="uploadStart"        
        :className="'block'"
        > {{demo1Name}}
        </nut-uploader>  
        <h4>上传按钮</h4>
        <p>结合nut-button使用</p>
        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"   
         @start="demo2uploadStart"      
         @success="demo2success"
         @failure="demo2fail"       
        >
        <nut-button small>{{demo2Name}}</nut-button>
        </nut-uploader>           
        <h4>上传进度</h4>  
        <p>带进度的上传按钮结合进度条组件展示zip文件上传,建议使用大图方便测试效果</p>
        <nut-uploader
        :name="name"
        :url="url"
        :xhrState ="stateNum"      
         @success="sucess"  
        @progress="progress"
         @showMsg="showMsgs"        
        :clearInput="true"
        > <nut-button >上传</nut-button>   
        </nut-uploader>  
        <nut-progress 
        class="progress-style" 
        :percentage="progressNum" 
        :showText="true"
         strokeWidth="12"/>

        <h4>上传预览</h4>  
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
        <p>点击上传按钮,并显示上传图片</p>
        <transition name="fade" >
          <div class="img-outbox">
          <img class="img-box" v-if="previewImg" :src="previewImg" alt="">
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
      demo1Name:'选择文件',
      demo2Name:"选择文件",
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
      uploadStart(){
        this.demo1Name = "上传中...";
      },
      demo1success(){
        this.demo1Name = "选择文件";
        this.$toast.success('上传成功', { duration:2000 });
      },
      demo1fail(){
        this.demo1Name = "选择文件";
        this.$toast.fail('上传失败', { duration:2000 });
      },
      demo2uploadStart(){
        this.demo2Name = "上传中...";
      },
      demo2success(){
        this.demo2Name = "选择文件";
        this.$toast.success('上传成功', { duration:2000 });
      },
      demo2fail(){
        this.demo2Name = "选择文件";
        this.$toast.fail('上传失败', { duration:2000 });
      },
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
      failureMSG(){
          this.$toast.fail('上传失败', { duration:2000 });
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
    display: flex;       
    justify-content:center;
    align-content:center;
    align-items:center;
    
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
    max-width: 100%;       
    max-height: 100%;
    border-radius: 6px;     
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

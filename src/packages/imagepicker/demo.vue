<template>
    <div>
        <h4>基本用法</h4>
        <nut-imagepicker @imgMsg="imgMsg" :imgList="imgList1"></nut-imagepicker>
        <h4>自定样式</h4>
        <p>允许自定义大小和宽度 还有边距</p>
        <nut-imagepicker @imgMsg="imgMsg" :width="120" :height="120" :margin="10" :imgList="imgList2"></nut-imagepicker>
        <h4>数量限制</h4>
        <p>可以限制选择图片的个数</p>
        <nut-imagepicker @imgMsg="imgMsg" :max="4"></nut-imagepicker>
        <h4>多图选择</h4>
        <p>不限制选择图片的个数</p>
        <nut-imagepicker @imgMsg="imgMsg" :ismultiple=true></nut-imagepicker>
        <h4>长按删除</h4>
        <p>默认是点击就删除，可以配置成长按删除</p>
        <nut-imagepicker @imgMsg="imgMsg" delMode="longtap"></nut-imagepicker>
        <h4>自动上传</h4>
        <p>默认不开启自动上传功能，开启图片上传功能之后所选的图片会自动上传到服务器。<br><b>注意:点击删除仅仅删除本地展示，不支持删除服务器中已上传图片</b></p>
        <nut-imagepicker
          :url="'https://my-json-server.typicode.com/linrufeng/demo/posts'"
         @success ="successMsg"
         @imgMsg="imgMsg" 
         @failure ="errorMsg"
         :xhrState="201"
         :ismultiple=true  
         :max="4"  
         autoUpload="true"></nut-imagepicker>
         <h4>批量上传</h4>
         <p>关闭自动上传,每次添加完图片会返回当前所选择图片的列表信息 uploadfileList 然后自定义上传</p>
         <div class="demo6">
           <nut-imagepicker
            :url="'https://my-json-server.typicode.com/linrufeng/demo/posts'"
            @imgMsg="imgMsg6"             
            @start="start6"
            @success="onSuccess6"
            @failure="onFailure6"            
            :max="2"             
            :batchUpload="batchUploads"></nut-imagepicker>
           <nut-button class="upload-box" v-if="uploadfileList.length == 2" @click="uploadList">{{demo6name}}</nut-button>
         </div>
    </div>
</template>
<script>
import Uploader from "../../utils/uploader.js";
export default {
  data() {
    return {
      demo6name:"上传",
      batchUploads:false,
      imgList1:[
        {
          id:1,
          src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
        }
      ],
      imgList2:[
        {
          id:1,
          src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
        }
      ],
      uploadfileList:[]
    };
  },
  methods: {
    imgMsg:(data) => {
      if(data.code == 1) {
        alert('upload');
      }
      console.log(data);//code 1 自动上传  2 不上传只展示图片  3 删除图片  4 预览图片
    },
    successMsg(file,res){
        console.log(file,res)
        this.$toast.success('上传成功', { duration:2000 });
    },
    errorMsg(file,res){
       console.log(file,res)
        this.$toast.success('失败', { duration:2000 });
    },
    imgMsg6(data){
      console.log(data)
      if(data.fileList){
        this.uploadfileList = data.fileList;
      }
    },
    uploadList(){
        this.batchUploads = true;      
       
    },
    start6(){
        this.batchUploads = false;      
        this.demo6name =" 上传中..."
    },
    onSuccess6(){
       this.demo6name =" 上传";
        this.$toast.fail("上传成功");
    },
    onFailure6(){
      this.demo6name =" 上传";
      this.$toast.fail("上传失败");
    }
  }
};
</script>

<style lang="scss" scoped>
.upload-box{
  margin-top:10px;
}
</style>

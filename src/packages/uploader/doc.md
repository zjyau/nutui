# Uploader 上传按钮

上传按钮

## 基本用法

```html
<nut-uploader
    :name="name"
    :url="url"       
    @success="sucess"        
    >
    上传
</nut-uploader>   
```

```javascript
export default { 
  data() {
    return {
      url:'https://my-json-server.typicode.com/linrufeng/demo/posts',
      name:'test1'      
    };
  },
  methods:{
      sucess(file,res){
        console.log(file,res)
      }
  }

```
## 插入nut-button
```html
<nut-uploader
  :name="name"
  :url="url"
  :xhrState ="stateNum"      
    @success="sucess1"        
  >
  <nut-button small>上传</nut-button>
</nut-uploader>   
```

## 自定义样式

```html
<nut-uploader
    :name="name"
    :url="url"
    :xhrState ="stateNum"      
        @success="sucess"        
    :className="'block'"
    > 上传
</nut-uploader>  
```

```css
.block{
    ...
}
```
## 带进度的上传按钮

```html
<nut-uploader
    :name="name"
    :url="url"
    :xhrState ="stateNum"      
    @success="sucess"  
    @progress="progress"    
    > 上传
</nut-uploader>  
<nut-progress class="progress-style" :percentage="progressNum" :showText="false" strokeWidth="24"/>
```
## 上传前预览+上传进度+错误类型提示
```html
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
```



## 建议
如果要实现右侧的扩展用法建议参考下方的API，这个组件仅仅提供了一个底层的上传功能，并且对上传的整个周期做了监听，在使用过程中可以用 **@success** **@progress** **@showMsg** **@preview** 来获取到上传过程中的一些变化的参数或者是提示信息,右侧的demo是基于本组件，并结合了nutui其他的组件共同完成的.

## API

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| name | input name的名称 | String | ""
| url | 上传服务器的地址 | String | -
| isPreview | 是否需要预览 | Boolean | false
| multiple | 是否上传多张图片 | Boolean | false
| clearInput | 是否需要清空input内容支持重复上传同一个文件 | Boolean | false
| maxSize | 可以设定最大上传文件的大小 | Number | 5242880
| acceptType | 可以上传文件的类型 | Array | ['image/jpeg', 'image/png', 'image/gif', 'image/bmp']
| attach | 附加上传的信息 | Object | {}
| xhrState | 网络返回的状态值默认200可以自己修改 | Number | 200
| className | 自定义样式名称 | String | ""

## Event

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| start | 文件上传开始 | function | -
| progress | 文件上传的进度 | function | -
| preview | isPreview如果为true时候可以获文件的信息 | function | -
| success | 上传成功后的回调函数 | function | -
| failure | 上传失败的回调函数 | function | -
| showMsg | 上传前文件类型等不合法信息的提示函数 | function | -

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


## 建议
如果要实现右侧的扩展用法建议参考下方的API，这个组件仅仅提供了一个底层的上传功能，并且对上传的整个周期做了监听，在使用过程中可以用 **@success** **@progress** **@showMsg** **@preview** 来获取到上传过程中的一些变化的参数或者是提示信息,右侧的demo是基于本组件，并结合了nutui其他的组件共同完成的.

## API

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| name | input name的名称 | String | ""
| url | 上传服务器的地址 | String | -
| isPreview | 是否需要预览 | Boolean | false
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

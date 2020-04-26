## 项目整体迁移Vue3-beta，目前来看需要改动的地方还是挺多的
1.src下的组件入口文件nutui.js，需要改一下vue的api，现在是用vue.component等api挂载组件，vue3中的手动挂载组件方式还需调研。
2.由于vue3-router-alpha版本不支持ts，所以咱们只能先写js版的组件
3.cli中的site项目需要重写入口文件，vue原型链上挂载的第三方组件库的兼容性还未知，初期只能先去掉，保证页面能够正常运行
4.cli中add命令还需调整
5.vueLoader兼容性还需调研
6.单元测试兼容性还需调研
7.babel兼容性还需调研
8.由于beta版已经内置composition-api，所以需要修改下之前封装的composition-api代码，把@vue/composition-api进行替换。

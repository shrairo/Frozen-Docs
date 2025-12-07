import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://imgs-cf.shrairo.top/Frozen/Frozen-title.png\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"配置详解\",\"link\":\"/config.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"多版本支持\",\"details\":\"基于安卓源代码开发，支持Android10-Android16\"},{\"title\":\"C++、Java双栈开发\",\"details\":\"模块主体由C++开发，以极低的功耗带来最低的解冻延迟和最好的体验\"},{\"title\":\"在GPL-V3协议下开放源代码\",\"details\":\"模块所有代码均为开源，在遵守开源协议的情况下可自由审查和更改\"},{\"title\":\"完全免费\",\"details\":\"是的，这是一个开源且完全免费的模块\"},{\"title\":\"自定义功能丰富\",\"details\":\"Frozen提供了丰富的配置项供极客玩家自行调整，也提供了适用于一般用户的开箱即用配置\"},{\"title\":\"简单易上手\",\"details\":\"不管你是极客玩家还是一般用户，都可以方便快捷的使用Frozen\"}],\"footer\":\"GPL-V3 License | Copyright © 2025 Frozen Dev Team\"},\"headers\":[],\"git\":{\"updatedTime\":1765084923000,\"contributors\":[{\"name\":\"Cassiopeia\",\"username\":\"Cassiopeia\",\"email\":\"m5498@outlook.com\",\"commits\":2,\"url\":\"https://github.com/Cassiopeia\"}],\"changelog\":[{\"hash\":\"5a30371e8fe793a30f125ef857aea7b9d52f13b1\",\"time\":1765084923000,\"email\":\"m5498@outlook.com\",\"author\":\"Cassiopeia\",\"message\":\"重命名文档使名称更加合理，添加一些内容\"},{\"hash\":\"22edd14b1bb844d52f74094ebbe63878cdffcbe5\",\"time\":1765015830000,\"email\":\"m5498@outlook.com\",\"author\":\"Cassiopeia\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

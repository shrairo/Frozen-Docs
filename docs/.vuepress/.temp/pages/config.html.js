import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/config.html.vue"
const data = JSON.parse("{\"path\":\"/config.html\",\"title\":\"配置详解\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"应用设置\",\"slug\":\"应用设置\",\"link\":\"#应用设置\",\"children\":[{\"level\":3,\"title\":\"前台等级\",\"slug\":\"前台等级\",\"link\":\"#前台等级\",\"children\":[]}]},{\"level\":2,\"title\":\"全局设置\",\"slug\":\"全局设置\",\"link\":\"#全局设置\",\"children\":[{\"level\":3,\"title\":\"关于冻结方式\",\"slug\":\"关于冻结方式\",\"link\":\"#关于冻结方式\",\"children\":[]},{\"level\":3,\"title\":\"余下配置项\",\"slug\":\"余下配置项\",\"link\":\"#余下配置项\",\"children\":[]}]},{\"level\":2,\"title\":\"推荐配置\",\"slug\":\"推荐配置\",\"link\":\"#推荐配置\",\"children\":[]}],\"git\":{\"updatedTime\":1765084923000,\"contributors\":[{\"name\":\"Cassiopeia\",\"username\":\"Cassiopeia\",\"email\":\"m5498@outlook.com\",\"commits\":1,\"url\":\"https://github.com/Cassiopeia\"}],\"changelog\":[{\"hash\":\"5a30371e8fe793a30f125ef857aea7b9d52f13b1\",\"time\":1765084923000,\"email\":\"m5498@outlook.com\",\"author\":\"Cassiopeia\",\"message\":\"重命名文档使名称更加合理，添加一些内容\"}]},\"filePathRelative\":\"config.md\"}")
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

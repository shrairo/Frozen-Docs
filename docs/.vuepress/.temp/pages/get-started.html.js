import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"快速开始\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前置准备\",\"slug\":\"前置准备\",\"link\":\"#前置准备\",\"children\":[]},{\"level\":2,\"title\":\"使用说明\",\"slug\":\"使用说明\",\"link\":\"#使用说明\",\"children\":[]},{\"level\":2,\"title\":\"版本说明\",\"slug\":\"版本说明\",\"link\":\"#版本说明\",\"children\":[]},{\"level\":2,\"title\":\"开源说明\",\"slug\":\"开源说明\",\"link\":\"#开源说明\",\"children\":[]}],\"git\":{\"updatedTime\":1765020384000,\"contributors\":[{\"name\":\"Cassiopeia\",\"username\":\"Cassiopeia\",\"email\":\"m5498@outlook.com\",\"commits\":2,\"url\":\"https://github.com/Cassiopeia\"}],\"changelog\":[{\"hash\":\"a3264e3e5393c131a48996cd031041c834cccbbb\",\"time\":1765020384000,\"email\":\"m5498@outlook.com\",\"author\":\"Cassiopeia\",\"message\":\"readme添加更多内容，添加网页图标\"},{\"hash\":\"22edd14b1bb844d52f74094ebbe63878cdffcbe5\",\"time\":1765015830000,\"email\":\"m5498@outlook.com\",\"author\":\"Cassiopeia\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"get-started.md\"}")
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

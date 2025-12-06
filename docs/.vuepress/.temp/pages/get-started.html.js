import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"快速开始\",\"lang\":\"cn-ZH\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前置准备\",\"slug\":\"前置准备\",\"link\":\"#前置准备\",\"children\":[]},{\"level\":2,\"title\":\"使用说明\",\"slug\":\"使用说明\",\"link\":\"#使用说明\",\"children\":[]},{\"level\":2,\"title\":\"版本说明\",\"slug\":\"版本说明\",\"link\":\"#版本说明\",\"children\":[]},{\"level\":2,\"title\":\"开源说明\",\"slug\":\"开源说明\",\"link\":\"#开源说明\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
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

import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/config.html.vue"
const data = JSON.parse("{\"path\":\"/config.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"配置详解\",\"slug\":\"配置详解\",\"link\":\"#配置详解\",\"children\":[{\"level\":3,\"title\":\"应用列表\",\"slug\":\"应用列表\",\"link\":\"#应用列表\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"config.md\"}")
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

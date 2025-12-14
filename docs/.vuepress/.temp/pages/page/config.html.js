import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/page/config.html.vue"
const data = JSON.parse("{\"path\":\"/page/config.html\",\"title\":\"配置详解\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":3.54,\"words\":1063},\"git\":{},\"filePathRelative\":\"page/config.md\",\"headers\":[]}")
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

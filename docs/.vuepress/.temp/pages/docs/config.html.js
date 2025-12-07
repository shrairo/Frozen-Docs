import comp from "E:/Tmp/Frozen-Docs/docs/.vuepress/.temp/pages/docs/config.html.vue"
const data = JSON.parse("{\"path\":\"/docs/config.html\",\"title\":\"配置详解\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":3.54,\"words\":1063},\"git\":{},\"filePathRelative\":\"docs/config.md\",\"headers\":[]}")
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

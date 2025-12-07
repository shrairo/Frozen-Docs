import comp from "E:/Tmp/Frozen-Docs/docs/.vuepress/.temp/pages/demo/0xyrth9v/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/0xyrth9v/\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/12/07 17:33:39\",\"permalink\":\"/demo/0xyrth9v/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"demo/foo.md\",\"headers\":[]}")
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

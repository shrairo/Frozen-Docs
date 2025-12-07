import comp from "E:/Tmp/Frozen-Docs/docs/.vuepress/.temp/pages/docs/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/docs/get-started.html\",\"title\":\"快速开始\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"快速开始\"},\"readingTime\":{\"minutes\":1.07,\"words\":322},\"git\":{},\"filePathRelative\":\"docs/get-started.md\",\"headers\":[]}")
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

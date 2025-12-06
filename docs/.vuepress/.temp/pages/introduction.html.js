import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/introduction.html\",\"title\":\"\",\"lang\":\"cn-ZH\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"introduction.md\"}")
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

import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/introduction.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1765015830000,\"contributors\":[{\"name\":\"Cassiopeia\",\"username\":\"Cassiopeia\",\"email\":\"m5498@outlook.com\",\"commits\":1,\"url\":\"https://github.com/Cassiopeia\"}],\"changelog\":[{\"hash\":\"22edd14b1bb844d52f74094ebbe63878cdffcbe5\",\"time\":1765015830000,\"email\":\"m5498@outlook.com\",\"author\":\"Cassiopeia\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"introduction.md\"}")
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

import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/docs/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/docs/get-started.html\",\"title\":\"快速开始\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"快速开始\"},\"readingTime\":{\"minutes\":1.12,\"words\":335},\"git\":{\"createdTime\":1765015830000,\"updatedTime\":1765105001000,\"contributors\":[{\"name\":\"Cassiopeia\",\"username\":\"Cassiopeia\",\"email\":\"m5498@outlook.com\",\"commits\":5,\"avatar\":\"https://avatars.githubusercontent.com/Cassiopeia?v=4\",\"url\":\"https://github.com/Cassiopeia\"}]},\"filePathRelative\":\"docs/get-started.md\",\"headers\":[]}")
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

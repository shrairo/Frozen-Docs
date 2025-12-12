import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/docs/config.html.vue"
const data = JSON.parse("{\"path\":\"/docs/config.html\",\"title\":\"配置详解\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":3.54,\"words\":1063},\"git\":{\"createdTime\":1765084923000,\"updatedTime\":1765238817000,\"contributors\":[{\"name\":\"Cassiopeia\",\"username\":\"Cassiopeia\",\"email\":\"m5498@outlook.com\",\"commits\":5,\"avatar\":\"https://avatars.githubusercontent.com/Cassiopeia?v=4\",\"url\":\"https://github.com/Cassiopeia\"}]},\"filePathRelative\":\"docs/config.md\",\"headers\":[]}")
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

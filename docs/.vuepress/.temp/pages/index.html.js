import comp from "E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"forceDark\":true,\"effect\":\"tint-plate\",\"hero\":{\"name\":\"Frozen\",\"tagline\":\"Tombstone Module\",\"text\":\"第三方安卓墓碑，实现堪比 IOS 的完美墓碑机制\",\"actions\":[{\"theme\":\"brand\",\"text\":\"快速开始\",\"link\":\"/page/get-started.html\"},{\"theme\":\"alt\",\"text\":\"配置详解\",\"link\":\"/page/config.html\"}]}}]},\"readingTime\":{\"minutes\":0.2,\"words\":60},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[]}")
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

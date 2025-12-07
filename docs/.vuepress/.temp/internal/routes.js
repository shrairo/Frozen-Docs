export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Tmp/Frozen-Docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/config.html", { loader: () => import(/* webpackChunkName: "docs_config.html" */"E:/Tmp/Frozen-Docs/docs/.vuepress/.temp/pages/docs/config.html.js"), meta: {"title":"配置详解"} }],
  ["/docs/get-started.html", { loader: () => import(/* webpackChunkName: "docs_get-started.html" */"E:/Tmp/Frozen-Docs/docs/.vuepress/.temp/pages/docs/get-started.html.js"), meta: {"title":"快速开始"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Tmp/Frozen-Docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

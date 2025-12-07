export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Friend.html", { loader: () => import(/* webpackChunkName: "Friend.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/Friend.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/config.html", { loader: () => import(/* webpackChunkName: "docs_config.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/docs/config.html.js"), meta: {"title":"配置详解"} }],
  ["/docs/get-started.html", { loader: () => import(/* webpackChunkName: "docs_get-started.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/docs/get-started.html.js"), meta: {"title":"快速开始"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/Code Web/Frozen-Docs/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
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

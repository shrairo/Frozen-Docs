import { defineClientConfig } from 'vuepress/client'
import Tabs from 'E:/Code Web/Frozen-Docs/node_modules/.pnpm/vuepress-plugin-md-power@1._895c20545910840eb6fcfcdb8bdac519/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'E:/Code Web/Frozen-Docs/node_modules/.pnpm/vuepress-plugin-md-power@1._895c20545910840eb6fcfcdb8bdac519/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'E:/Code Web/Frozen-Docs/node_modules/.pnpm/vuepress-plugin-md-power@1._895c20545910840eb6fcfcdb8bdac519/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'E:/Code Web/Frozen-Docs/node_modules/.pnpm/vuepress-plugin-md-power@1._895c20545910840eb6fcfcdb8bdac519/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from 'E:/Code Web/Frozen-Docs/node_modules/.pnpm/vuepress-plugin-md-power@1._895c20545910840eb6fcfcdb8bdac519/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import 'E:/Code Web/Frozen-Docs/node_modules/.pnpm/vuepress-plugin-md-power@1._895c20545910840eb6fcfcdb8bdac519/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})

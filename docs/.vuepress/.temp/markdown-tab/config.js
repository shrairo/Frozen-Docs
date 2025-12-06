import { CodeTabs } from "E:/Code Web/Frozen-Docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_7bd6a8c52c448eab3b26a1f0d3419b09/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/Code Web/Frozen-Docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_7bd6a8c52c448eab3b26a1f0d3419b09/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/Code Web/Frozen-Docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_7bd6a8c52c448eab3b26a1f0d3419b09/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

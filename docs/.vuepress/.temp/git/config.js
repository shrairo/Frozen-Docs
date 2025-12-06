import { GitContributors } from "E:/Code Web/Frozen-Docs/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_b3a4bf9c0307fc5d8e8919706418d6f0/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "E:/Code Web/Frozen-Docs/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_b3a4bf9c0307fc5d8e8919706418d6f0/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};

/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '主页', link: '/' },
  { text: '开始', link: '/docs/get-started' },
  { text: '配置', link: '/docs/config.html' },
  { text: 'Frozen下载站', link: 'https://d.anmoc.top'}
])

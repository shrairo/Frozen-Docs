/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '主页', link: '/', icon: 'material-symbols:home-outline' },
  { text: '开始', link: '/page/get-started', icon: 'material-symbols:rocket-launch-outline' },
  { text: '配置', link: '/page/config.html', icon: 'material-symbols:settings-outline' },
  { text: 'Frozen下载站', link: 'https://d.anmoc.top', icon: 'material-symbols:cloud-download' }
])

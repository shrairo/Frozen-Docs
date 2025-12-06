import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Frozen',
  description: '一个基于安卓源码开发的高性能墓碑',

  head: [
    ['link', { rel: 'icon', href: 'https://imgs-cf.shrairo.top/Frozen/Frozen-title.png' }]
  ],

  theme: defaultTheme({
    logo: 'https://imgs-cf.shrairo.top/Frozen/Frozen-title.png',

    navbar: [
      { text: '主页', link: '/' },
      { text: '配置', link: '/introduction.html' },
      { text: 'Frozen下载站', link: 'https://d.anmoc.top'}
    ],
  }),

  bundler: viteBundler(),
})
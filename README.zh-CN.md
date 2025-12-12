# Frozen

Frozen 是一个第三方安卓墓碑

本仓库包含其官方文档

[English](https://github.com/shrairo/Frozen-Docs/blob/main/README.md) | 中文

## 开发

这是 Frozen 的官方文档。它使用 [VuePress](https://vuepress.vuejs.org/) 和 [VuePress Theme Plume](https://theme-plume.vuejs.press/) 构建

### 环境要求

+ Node.js 18+
+ pnpm（推荐的包管理器）

### 本地开发

```sh
# 克隆仓库
git clone https://github.com/shrairo/Frozen-Docs
cd ./Frozen-Docs

# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev
```

```sh
# 构建生产版本
pnpm docs:build

# 在本地预览生产构建
pnpm docs:preview

# 更新 vuepress 和主题
pnpm vp-update
```

## 贡献

欢迎为改进文档做出贡献！

## 许可证

本项目采用 GNU General Public License v3.0 许可证
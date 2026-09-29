# 小佳 · 个人作品集

数字媒体艺术学生的杂志式（Magazine Style）个人作品集单页网站。设计语言：纸白底 + 墨黑 + 朱红色块，衬线大标题 + 细分割线。

## 技术栈

- **HTML5 / CSS3 / JavaScript（ES6+）**：原生实现，零框架、零依赖、零构建
- **CSS 自定义属性**：统一管理深浅两套主题色板
- **Google Fonts**：Playfair Display / Noto Serif SC / Noto Sans SC

## 运行方式

纯静态页面，无需安装依赖：

- 直接双击打开 `index.html`；
- 或使用任意静态服务器，例如 VS Code Live Server，或：

```bash
python -m http.server 8000
# 访问 http://localhost:8000
```

## 目录结构

```
├── index.html        # 页面结构（唯一入口）
├── css/
│   ├── style.css     # 全部样式：主题变量 / 版式 / 响应式 / 动效
│   └── 1.webp        # 个人照片
├── js/
│   ├── data.js       # 项目数据（PROJECTS 数组）
│   └── main.js       # 交互逻辑：渲染 / 主题 / 导航 / 动效
└── profile.md        # 个人信息备忘
```

## 主要功能

- **单页四大板块**：个人介绍 / 项目作品 / 技能与经历 / 联系方式
- **数据驱动的作品列表**：在 `js/data.js` 的 `PROJECTS` 数组末尾追加对象即可新增作品，三种杂志版式（通栏大图 / 左图右文 / 左文右图）按顺序自动交替
- **深浅色主题切换**：导航栏右侧按钮切换，`localStorage` 记忆选择，刷新防闪白，背景 / 文字 / 边框颜色全局同步过渡
- **滚动交互**：区块滚动显现动画、当前板块导航高亮、滚动感知吸顶头部
- **响应式布局**：880px / 560px 两级断点，移动端折叠为全屏抽屉菜单
- **无障碍与偏好**：语义化标签、键盘焦点样式、`prefers-reduced-motion` 下关闭动效

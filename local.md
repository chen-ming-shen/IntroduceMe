=== 2026-06-17 日记整理 ===

【网站开发】
- 新增画廊页面，采用瀑布屏（瀑布流）布局

【制作过程】

1. **选布局**
   - 尝试 Grid 和 Flexbox，最终选用 CSS Columns（`column-count`）
   - 固定列数，同列图片紧密贴合

2. **统一图片格式**
   - 编写 ffmpeg 脚本，批量将杂乱的图片格式转成 WebP
   - 宽度限制 1200px

3. **封装代码**
   - 画廊 CSS 放入 `gallery.css`
   - JS 逻辑封装成 `createGallery()` 函数，放入 `gallery.js`
   - HTML 只需一个 div 加一行调用

4. **修正小说章节页**
   - `<nav>` 从 `<head>` 移到 `<body>`
   - `<footer>` 和 `<script>` 移入 `<body>` 内部

5. **拆分 load.js**
   - 原来 `load.js` 混了章节页加载逻辑和主页 Markdown 渲染逻辑
   - 主页 Markdown 渲染移回 `index.html`
   - `load.js` 只保留章节页的 `loadModule()`

6. **最终结构**
   - CSS/JS 分离，各页面职责明确，目录干净

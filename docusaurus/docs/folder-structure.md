---
id: folder-structure
title: 文件夹结构
---

创建完成后，你的项目应该是这样的:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

要构建项目，**这些文件必须以确切的文件名存在**:

- `public/index.html` 是页面模板;
- `src/index.js` JavaScript 的入口点是什么.

您可以删除或重命名其他文件。

你可以在`src`里面创建子目录。
为了更快地重建，webpack 只处理`src`中的文件。
你需要 **把所有 JS 和 CSS 文件放到`src`** 中，否则 webpack 不会看到它们。

只有`public`中的文件才能从`public/index.html`中使用。阅读下面使用 JavaScript 和 HTML 资源的说明。

但是，您可以创建更多的顶级目录。它们不会包含在生产版本中，因此您可以将它们用于文档之类的工作。

如果你已经安装了 Git，而你的项目不是一个更大的存储库的一部分，那么一个新的存储库将被初始化，从而产生一个额外的顶层`.git`目录。

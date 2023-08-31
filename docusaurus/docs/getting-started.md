---
id: getting-started
title: 开始
---

Create React App 是官方支持的一种创建单页 React 应用程序的方式。
它提供了一个无需配置的现代构建设置。

## 开始

```sh
npx create-react-app my-app
cd my-app
npm start
```

> 如果你之前已经通过`npm install -g create-react-app`全局安装了`create-react-app`，我们建议你使用`npm uninstall -g create-react-app`或`yarn global remove create-react-app`卸载该包，以确保`npx`总是使用最新版本。

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)与 npm 5.2+及更高版本一起提供，请参阅[旧版本 npm 的说明](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

然后打开[http://localhost:3000/](http://localhost:3000/)查看您的应用程序。

当你准备好部署到生产环境时，用`npm run build`创建一个压缩包。

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start' />
</p>

### 立即开始

你 **不** 需要安装或配置像 webpack 或 Babel 这样的工具。
它们是预先配置和隐藏的，以便您可以专注于代码。

创建一个项目，你就可以开始了。

## 创建应用程序

**您需要在本地开发机器上安装 Node >= 14** (但在服务器上不是必需的)。
您可以通过[nvm](https://github.com/creationix/nvm#installation) (macOS/Linux)或[nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)在不同项目之间切换 Node 版本。

要创建一个新的应用程序，您可以选择以下方法之一:

### npx

```sh
npx create-react-app@latest my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) 与 NPM 5.2+及更高版本一起使用，请参阅[旧版本 NPM 的说明](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` 在 npm 6+中可用_

### Yarn

```sh
yarn create react-app my-app
```

_`yarn create` 在 Yarn 0.25+_

### 选择模板

你现在可以通过在创建命令后附加`--template [template-name]`来选择从一个模板启动一个新的应用程序。

如果您没有选择模板，我们将使用基本模板创建您的项目。

模板总是以`cra-template-[template-name]`的格式命名，但是你只需要在创建命令中提供`[template-name]`。

```sh
npx create-react-app my-app --template [template-name]
```

> 你可以通过在 npm 上搜索["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) 来找到可用模板的列表。

我们的[自定义模板](custom-templates.md)文档描述了如何构建自己的模板。

#### 创建一个 TypeScript 应用

你可以使用模板启动一个新的 TypeScript 应用。要使用我们提供的 TypeScript 模板，请在创建命令后附加`--template typescript`。

```sh
npx create-react-app my-app --template typescript
```

如果你已经有了一个项目，想要添加 TypeScript，请参阅我们的[添加 TypeScript](adding-typescript.md)文档。

### 选择包管理器

当你创建一个新应用时，CLI 会使用[npm](https://docs.npmjs.com)或[Yarn](https://yarnpkg.com/)来安装依赖项，这取决于你使用哪个工具来运行`create-react-app`。例如:

```sh
# Run this to use npm
npx create-react-app my-app
# Or run this to use yarn
yarn create react-app my-app
```

## 输出

运行这些命令将在当前文件夹中创建一个名为`my-app` 的目录。
在该目录中，它将生成初始项目结构并安装可传递的依赖项:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

没有配置或复杂的文件夹结构，只有你需要构建你的应用程序的文件。一旦安装完成，你可以打开你的项目文件夹:

```sh
cd my-app
```

## 脚本

在新创建的项目中，您可以运行一些内置命令:

### `npm start` 或 `yarn start`

在开发模式下运行应用程序。打开[http://localhost:3000](http://localhost:3000)在浏览器中查看。

如果对代码进行更改，页面将自动重新加载。您将在控制台中看到构建错误和 lint 警告。

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors' />
</p>

### `npm test` 或 `yarn test`

以交互模式运行测试监视程序。默认情况下，运行与上次提交后更改的文件相关的测试。

[阅读更多关于测试的内容](running-tests.md).

### `npm run build` 或 `yarn build`

将用于生产的应用构建到`build`文件夹中。它在生产模式下正确地捆绑 React，并优化构建以获得最佳性能。

构建被缩小，文件名包含哈希值。

您的应用程序已经准备好部署了。

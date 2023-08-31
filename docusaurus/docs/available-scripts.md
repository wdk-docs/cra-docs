---
id: available-scripts
title: 可用的脚本
sidebar_label: 可用的脚本
---

在项目目录下，可以运行:

## `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](running-tests.md) for more information.

## `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. If necessary, classnames and function names can be enabled for profiling purposes. See the [production build](production-build.md) section for more information.

Your app is ready to be deployed! See the section about [deployment](deployment.md) for more information about deploying your application to popular hosting providers.

## `npm run eject`

**Note: 这是一个单向操作。一旦你`eject`，你就回不去了!**

如果您对构建工具和配置选择不满意，您可以随时`eject`。此命令将从项目中删除单个构建依赖项。

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in `package.json`. Technically, the distinction between dependencies and development dependencies is pretty arbitrary for front-end apps that produce static bundles.

In addition, it used to cause problems with some hosting platforms that didn't install development dependencies (and thus weren't able to build the project on the server or test it right before deployment). You are free to rearrange your dependencies in `package.json` as you see fit.

All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

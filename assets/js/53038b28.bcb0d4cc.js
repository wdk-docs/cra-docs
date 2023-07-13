"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[2309],{876:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=g;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(7896),o=n(1461),s=(n(2784),n(876)),i=["components"],a={id:"debugging-tests",title:"\u8c03\u8bd5\u6d4b\u8bd5",sidebar_label:"\u8c03\u8bd5\u6d4b\u8bd5"},u=void 0,c={unversionedId:"debugging-tests",id:"debugging-tests",title:"\u8c03\u8bd5\u6d4b\u8bd5",description:"There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and Visual Studio Code.",source:"@site/../docs/debugging-tests.md",sourceDirName:".",slug:"/debugging-tests",permalink:"/cra-docs/docs/debugging-tests",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/debugging-tests.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"debugging-tests",title:"\u8c03\u8bd5\u6d4b\u8bd5",sidebar_label:"\u8c03\u8bd5\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"\u8fd0\u884c\u6d4b\u8bd5",permalink:"/cra-docs/docs/running-tests"},next:{title:"\u5f00\u53d1\u4e2d\u7684\u4ee3\u7406",permalink:"/cra-docs/docs/proxying-api-requests-in-development"}},l={},p=[{value:"Debugging Tests in Chrome",id:"debugging-tests-in-chrome",level:2},{value:"Debugging Tests in Visual Studio Code",id:"debugging-tests-in-visual-studio-code",level:2}],d={toc:p},g="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and ",(0,s.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,s.kt)("h2",{id:"debugging-tests-in-chrome"},"Debugging Tests in Chrome"),(0,s.kt)("p",null,"Add the following to the ",(0,s.kt)("inlineCode",{parentName:"p"},"scripts")," section in your project's ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"\n  }\n')),(0,s.kt)("p",null,"Place ",(0,s.kt)("inlineCode",{parentName:"p"},"debugger;")," statements in any test and run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm run test:debug\n")),(0,s.kt)("p",null,"This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process."),(0,s.kt)("p",null,"Open the following in Chrome"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"about:inspect\n")),(0,s.kt)("p",null,"After opening that link, the Chrome Developer Tools will be displayed. Select ",(0,s.kt)("inlineCode",{parentName:"p"},"inspect"),' on your process and a breakpoint will be set at the first line of the react script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.'),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: the --runInBand cli option makes sure Jest runs test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.")),(0,s.kt)("h2",{id:"debugging-tests-in-visual-studio-code"},"Debugging Tests in Visual Studio Code"),(0,s.kt)("p",null,"Debugging Jest tests is supported out of the box for ",(0,s.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"."),(0,s.kt)("p",null,"Use the following ",(0,s.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},(0,s.kt)("inlineCode",{parentName:"a"},"launch.json"))," configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": ["test", "--runInBand", "--no-cache", "--watchAll=false"],\n      "cwd": "${workspaceRoot}",\n      "protocol": "inspector",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen",\n      "env": { "CI": "true" },\n      "disableOptimisticBPs": true\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);
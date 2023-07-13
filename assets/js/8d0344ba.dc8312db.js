"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[6218],{876:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=o(n),u=r,k=s["".concat(i,".").concat(u)]||s[u]||d[u]||p;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var o=2;o<p;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s}});var a=n(7896),r=n(1461),p=(n(2784),n(876)),l=["components"],c={id:"getting-started",title:"\u5f00\u59cb"},i=void 0,o={unversionedId:"getting-started",id:"getting-started",title:"\u5f00\u59cb",description:"Create React App \u662f\u5b98\u65b9\u652f\u6301\u7684\u4e00\u79cd\u521b\u5efa\u5355\u9875 React \u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u5f0f\u3002",source:"@site/../docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/cra-docs/docs/getting-started",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/getting-started.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"getting-started",title:"\u5f00\u59cb"},sidebar:"docs",previous:{title:"\u5173\u4e8e\u6587\u6863",permalink:"/cra-docs/docs/documentation-intro"},next:{title:"\u6587\u4ef6\u5939\u7ed3\u6784",permalink:"/cra-docs/docs/folder-structure"}},m={},s=[{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u7acb\u5373\u5f00\u59cb",id:"\u7acb\u5373\u5f00\u59cb",level:3},{value:"\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f",id:"\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"npx",id:"npx",level:3},{value:"npm",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"\u9009\u62e9\u6a21\u677f",id:"\u9009\u62e9\u6a21\u677f",level:3},{value:"\u521b\u5efa\u4e00\u4e2a TypeScript \u5e94\u7528",id:"\u521b\u5efa\u4e00\u4e2a-typescript-\u5e94\u7528",level:4},{value:"\u9009\u62e9\u5305\u7ba1\u7406\u5668",id:"\u9009\u62e9\u5305\u7ba1\u7406\u5668",level:3},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",level:2},{value:"\u811a\u672c",id:"\u811a\u672c",level:2},{value:"<code>npm start</code> \u6216 <code>yarn start</code>",id:"npm-start-\u6216-yarn-start",level:3},{value:"<code>npm test</code> \u6216 <code>yarn test</code>",id:"npm-test-\u6216-yarn-test",level:3},{value:"<code>npm run build</code> \u6216 <code>yarn build</code>",id:"npm-run-build-\u6216-yarn-build",level:3}],d={toc:s},u="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Create React App \u662f\u5b98\u65b9\u652f\u6301\u7684\u4e00\u79cd\u521b\u5efa\u5355\u9875 React \u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u5f0f\u3002\n\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65e0\u9700\u914d\u7f6e\u7684\u73b0\u4ee3\u6784\u5efa\u8bbe\u7f6e\u3002"),(0,p.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app\ncd my-app\nnpm start\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u4e4b\u524d\u5df2\u7ecf\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),"\u5168\u5c40\u5b89\u88c5\u4e86",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app"),"\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app"),"\u6216",(0,p.kt)("inlineCode",{parentName:"p"},"yarn global remove create-react-app"),"\u5378\u8f7d\u8be5\u5305\uff0c\u4ee5\u786e\u4fdd",(0,p.kt)("inlineCode",{parentName:"p"},"npx"),"\u603b\u662f\u4f7f\u7528\u6700\u65b0\u7248\u672c\u3002")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"(",(0,p.kt)("a",{parentName:"em",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx"),"\u4e0e npm 5.2+\u53ca\u66f4\u9ad8\u7248\u672c\u4e00\u8d77\u63d0\u4f9b\uff0c\u8bf7\u53c2\u9605",(0,p.kt)("a",{parentName:"em",href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"},"\u65e7\u7248\u672c npm \u7684\u8bf4\u660e"),")")),(0,p.kt)("p",null,"\u7136\u540e\u6253\u5f00",(0,p.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"\u67e5\u770b\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,p.kt)("p",null,"\u5f53\u4f60\u51c6\u5907\u597d\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u65f6\uff0c\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"npm run build"),"\u521b\u5efa\u4e00\u4e2a\u538b\u7f29\u5305\u3002"),(0,p.kt)("p",{align:"center"},(0,p.kt)("img",{src:"https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg",width:"600",alt:"npm start"})),(0,p.kt)("h3",{id:"\u7acb\u5373\u5f00\u59cb"},"\u7acb\u5373\u5f00\u59cb"),(0,p.kt)("p",null,"\u4f60 ",(0,p.kt)("strong",{parentName:"p"},"\u4e0d")," \u9700\u8981\u5b89\u88c5\u6216\u914d\u7f6e\u50cf webpack \u6216 Babel \u8fd9\u6837\u7684\u5de5\u5177\u3002\n\u5b83\u4eec\u662f\u9884\u5148\u914d\u7f6e\u548c\u9690\u85cf\u7684\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u4ee3\u7801\u3002"),(0,p.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u9879\u76ee\uff0c\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u4e86\u3002"),(0,p.kt)("h2",{id:"\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f"},"\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u60a8\u9700\u8981\u5728\u672c\u5730\u5f00\u53d1\u673a\u5668\u4e0a\u5b89\u88c5 Node >= 14")," (\u4f46\u5728\u670d\u52a1\u5668\u4e0a\u4e0d\u662f\u5fc5\u9700\u7684)\u3002\n\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,p.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm#installation"},"nvm")," (macOS/Linux)\u6216",(0,p.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows"},"nvm-windows"),"\u5728\u4e0d\u540c\u9879\u76ee\u4e4b\u95f4\u5207\u6362 Node \u7248\u672c\u3002"),(0,p.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00:"),(0,p.kt)("h3",{id:"npx"},"npx"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app@latest my-app\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"(",(0,p.kt)("a",{parentName:"em",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx")," \u4e0e NPM 5.2+\u53ca\u66f4\u9ad8\u7248\u672c\u4e00\u8d77\u4f7f\u7528\uff0c\u8bf7\u53c2\u9605",(0,p.kt)("a",{parentName:"em",href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"},"\u65e7\u7248\u672c NPM \u7684\u8bf4\u660e"),")")),(0,p.kt)("h3",{id:"npm"},"npm"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm init react-app my-app\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"em"},"npm init <initializer>")," \u5728 npm 6+\u4e2d\u53ef\u7528")),(0,p.kt)("h3",{id:"yarn"},"Yarn"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create react-app my-app\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"em"},"yarn create")," \u5728 Yarn 0.25+")),(0,p.kt)("h3",{id:"\u9009\u62e9\u6a21\u677f"},"\u9009\u62e9\u6a21\u677f"),(0,p.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u5728\u521b\u5efa\u547d\u4ee4\u540e\u9644\u52a0",(0,p.kt)("inlineCode",{parentName:"p"},"--template [template-name]"),"\u6765\u9009\u62e9\u4ece\u4e00\u4e2a\u6a21\u677f\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u9009\u62e9\u6a21\u677f\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u57fa\u672c\u6a21\u677f\u521b\u5efa\u60a8\u7684\u9879\u76ee\u3002"),(0,p.kt)("p",null,"\u6a21\u677f\u603b\u662f\u4ee5",(0,p.kt)("inlineCode",{parentName:"p"},"cra-template-[template-name]"),"\u7684\u683c\u5f0f\u547d\u540d\uff0c\u4f46\u662f\u4f60\u53ea\u9700\u8981\u5728\u521b\u5efa\u547d\u4ee4\u4e2d\u63d0\u4f9b",(0,p.kt)("inlineCode",{parentName:"p"},"[template-name]"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template [template-name]\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 npm \u4e0a\u641c\u7d22",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=cra-template-*"},'"cra-template-',"*",'"')," \u6765\u627e\u5230\u53ef\u7528\u6a21\u677f\u7684\u5217\u8868\u3002")),(0,p.kt)("p",null,"\u6211\u4eec\u7684",(0,p.kt)("a",{parentName:"p",href:"/cra-docs/docs/custom-templates"},"\u81ea\u5b9a\u4e49\u6a21\u677f"),"\u6587\u6863\u63cf\u8ff0\u4e86\u5982\u4f55\u6784\u5efa\u81ea\u5df1\u7684\u6a21\u677f\u3002"),(0,p.kt)("h4",{id:"\u521b\u5efa\u4e00\u4e2a-typescript-\u5e94\u7528"},"\u521b\u5efa\u4e00\u4e2a TypeScript \u5e94\u7528"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6a21\u677f\u542f\u52a8\u4e00\u4e2a\u65b0\u7684 TypeScript \u5e94\u7528\u3002\u8981\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684 TypeScript \u6a21\u677f\uff0c\u8bf7\u5728\u521b\u5efa\u547d\u4ee4\u540e\u9644\u52a0",(0,p.kt)("inlineCode",{parentName:"p"},"--template typescript"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template typescript\n")),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u9879\u76ee\uff0c\u60f3\u8981\u6dfb\u52a0 TypeScript\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684",(0,p.kt)("a",{parentName:"p",href:"/cra-docs/docs/adding-typescript"},"\u6dfb\u52a0 TypeScript"),"\u6587\u6863\u3002"),(0,p.kt)("h3",{id:"\u9009\u62e9\u5305\u7ba1\u7406\u5668"},"\u9009\u62e9\u5305\u7ba1\u7406\u5668"),(0,p.kt)("p",null,"\u5f53\u4f60\u521b\u5efa\u4e00\u4e2a\u65b0\u5e94\u7528\u65f6\uff0cCLI \u4f1a\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com"},"npm"),"\u6216",(0,p.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),"\u6765\u5b89\u88c5\u4f9d\u8d56\u9879\uff0c\u8fd9\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u54ea\u4e2a\u5de5\u5177\u6765\u8fd0\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app"),"\u3002\u4f8b\u5982:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"# Run this to use npm\nnpx create-react-app my-app\n# Or run this to use yarn\nyarn create react-app my-app\n")),(0,p.kt)("h2",{id:"\u8f93\u51fa"},"\u8f93\u51fa"),(0,p.kt)("p",null,"\u8fd0\u884c\u8fd9\u4e9b\u547d\u4ee4\u5c06\u5728\u5f53\u524d\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"my-app")," \u7684\u76ee\u5f55\u3002\n\u5728\u8be5\u76ee\u5f55\u4e2d\uff0c\u5b83\u5c06\u751f\u6210\u521d\u59cb\u9879\u76ee\u7ed3\u6784\u5e76\u5b89\u88c5\u53ef\u4f20\u9012\u7684\u4f9d\u8d56\u9879:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"my-app\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.js\n    \u251c\u2500\u2500 App.test.js\n    \u251c\u2500\u2500 index.css\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 logo.svg\n    \u251c\u2500\u2500 serviceWorker.js\n    \u2514\u2500\u2500 setupTests.js\n")),(0,p.kt)("p",null,"\u6ca1\u6709\u914d\u7f6e\u6216\u590d\u6742\u7684\u6587\u4ef6\u5939\u7ed3\u6784\uff0c\u53ea\u6709\u4f60\u9700\u8981\u6784\u5efa\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u6587\u4ef6\u3002\u4e00\u65e6\u5b89\u88c5\u5b8c\u6210\uff0c\u4f60\u53ef\u4ee5\u6253\u5f00\u4f60\u7684\u9879\u76ee\u6587\u4ef6\u5939:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"cd my-app\n")),(0,p.kt)("h2",{id:"\u811a\u672c"},"\u811a\u672c"),(0,p.kt)("p",null,"\u5728\u65b0\u521b\u5efa\u7684\u9879\u76ee\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e9b\u5185\u7f6e\u547d\u4ee4:"),(0,p.kt)("h3",{id:"npm-start-\u6216-yarn-start"},(0,p.kt)("inlineCode",{parentName:"h3"},"npm start")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"h3"},"yarn start")),(0,p.kt)("p",null,"\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002\u6253\u5f00",(0,p.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u5bf9\u4ee3\u7801\u8fdb\u884c\u66f4\u6539\uff0c\u9875\u9762\u5c06\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u3002\u60a8\u5c06\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u6784\u5efa\u9519\u8bef\u548c lint \u8b66\u544a\u3002"),(0,p.kt)("p",{align:"center"},(0,p.kt)("img",{src:"https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg",width:"600",alt:"Build errors"})),(0,p.kt)("h3",{id:"npm-test-\u6216-yarn-test"},(0,p.kt)("inlineCode",{parentName:"h3"},"npm test")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"h3"},"yarn test")),(0,p.kt)("p",null,"\u4ee5\u4ea4\u4e92\u6a21\u5f0f\u8fd0\u884c\u6d4b\u8bd5\u76d1\u89c6\u7a0b\u5e8f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd0\u884c\u4e0e\u4e0a\u6b21\u63d0\u4ea4\u540e\u66f4\u6539\u7684\u6587\u4ef6\u76f8\u5173\u7684\u6d4b\u8bd5\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/cra-docs/docs/running-tests"},"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e\u6d4b\u8bd5\u7684\u5185\u5bb9"),"."),(0,p.kt)("h3",{id:"npm-run-build-\u6216-yarn-build"},(0,p.kt)("inlineCode",{parentName:"h3"},"npm run build")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"h3"},"yarn build")),(0,p.kt)("p",null,"\u5c06\u7528\u4e8e\u751f\u4ea7\u7684\u5e94\u7528\u6784\u5efa\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u4e2d\u3002\u5b83\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u6b63\u786e\u5730\u6346\u7ed1 React\uff0c\u5e76\u4f18\u5316\u6784\u5efa\u4ee5\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002"),(0,p.kt)("p",null,"\u6784\u5efa\u88ab\u7f29\u5c0f\uff0c\u6587\u4ef6\u540d\u5305\u542b\u54c8\u5e0c\u503c\u3002"),(0,p.kt)("p",null,"\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5df2\u7ecf\u51c6\u5907\u597d\u90e8\u7f72\u4e86\u3002"))}k.isMDXComponent=!0}}]);
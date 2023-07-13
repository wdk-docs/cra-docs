"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[5749],{876:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7896),o=n(1461),a=(n(2784),n(876)),i=["components"],c={id:"code-splitting",title:"\u4ee3\u7801\u5206\u79bb"},l=void 0,s={unversionedId:"code-splitting",id:"code-splitting",title:"\u4ee3\u7801\u5206\u79bb",description:"Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.",source:"@site/../docs/code-splitting.md",sourceDirName:".",slug:"/code-splitting",permalink:"/cra-docs/docs/code-splitting",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/code-splitting.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"code-splitting",title:"\u4ee3\u7801\u5206\u79bb"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u516c\u7528\u6587\u4ef6\u5939",permalink:"/cra-docs/docs/using-the-public-folder"},next:{title:"\u5b89\u88c5\u4f9d\u8d56\u9879",permalink:"/cra-docs/docs/installing-a-dependency"}},p={},u=[{value:"<code>moduleA.js</code>",id:"moduleajs",level:2},{value:"<code>App.js</code>",id:"appjs",level:2},{value:"With React Router",id:"with-react-router",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand."),(0,a.kt)("p",null,"This project setup supports code splitting via ",(0,a.kt)("a",{parentName:"p",href:"https://2ality.com/2017/01/import-operator.html#loading-code-on-demand"},"dynamic ",(0,a.kt)("inlineCode",{parentName:"a"},"import()")),". Its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"proposal")," is in stage 4. The ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," function-like form takes the module name as an argument and returns a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,a.kt)("inlineCode",{parentName:"a"},"Promise"))," which always resolves to the namespace object of the module."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("h2",{id:"moduleajs"},(0,a.kt)("inlineCode",{parentName:"h2"},"moduleA.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const moduleA = 'Hello';\n\nexport { moduleA };\n")),(0,a.kt)("h2",{id:"appjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\n\nclass App extends Component {\n  handleClick = () => {\n    import('./moduleA')\n      .then(({ moduleA }) => {\n        // Use moduleA\n      })\n      .catch(err => {\n        // Handle failure\n      });\n  };\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Load</button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"This will make ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleA.js")," and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button. For more information on the chunks that are created, see the ",(0,a.kt)("a",{parentName:"p",href:"/cra-docs/docs/production-build"},"production build")," section."),(0,a.kt)("p",null,"You can also use it with ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," syntax if you prefer it."),(0,a.kt)("h2",{id:"with-react-router"},"With React Router"),(0,a.kt)("p",null,"If you are using React Router check out ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"},"this tutorial")),(0,a.kt)("p",null,"Also check out the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html"},"Code Splitting")," section in React documentation."))}f.isMDXComponent=!0}}]);
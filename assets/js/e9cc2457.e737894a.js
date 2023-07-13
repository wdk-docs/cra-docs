"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[9932],{876:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4583:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7896),o=r(1461),i=(r(2784),r(876)),a=["components"],c={id:"folder-structure",title:"\u6587\u4ef6\u5939\u7ed3\u6784"},l=void 0,s={unversionedId:"folder-structure",id:"folder-structure",title:"\u6587\u4ef6\u5939\u7ed3\u6784",description:"After creation, your project should look like this:",source:"@site/../docs/folder-structure.md",sourceDirName:".",slug:"/folder-structure",permalink:"/cra-docs/docs/folder-structure",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/folder-structure.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"folder-structure",title:"\u6587\u4ef6\u5939\u7ed3\u6784"},sidebar:"docs",previous:{title:"\u5f00\u59cb",permalink:"/cra-docs/docs/getting-started"},next:{title:"\u53ef\u7528\u7684\u811a\u672c",permalink:"/cra-docs/docs/available-scripts"}},u={},p=[],d={toc:p},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After creation, your project should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"my-app/\n  README.md\n  node_modules/\n  package.json\n  public/\n    index.html\n    favicon.ico\n  src/\n    App.css\n    App.js\n    App.test.js\n    index.css\n    index.js\n    logo.svg\n")),(0,i.kt)("p",null,"For the project to build, ",(0,i.kt)("strong",{parentName:"p"},"these files must exist with exact filenames"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public/index.html")," is the page template;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/index.js")," is the JavaScript entry point.")),(0,i.kt)("p",null,"You can delete or rename the other files."),(0,i.kt)("p",null,"You may create subdirectories inside ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),". For faster rebuilds, only files inside ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," are processed by webpack. You need to ",(0,i.kt)("strong",{parentName:"p"},"put any JS and CSS files inside ",(0,i.kt)("inlineCode",{parentName:"strong"},"src")),", otherwise webpack won\u2019t see them."),(0,i.kt)("p",null,"Only files inside ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," can be used from ",(0,i.kt)("inlineCode",{parentName:"p"},"public/index.html"),". Read instructions below for using assets from JavaScript and HTML."),(0,i.kt)("p",null,"You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation."),(0,i.kt)("p",null,"If you have Git installed and your project is not part of a larger repository, then a new repository will be initialized resulting in an additional top-level ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory."))}m.isMDXComponent=!0}}]);
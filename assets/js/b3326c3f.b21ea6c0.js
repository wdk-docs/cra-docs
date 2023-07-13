"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[2118],{876:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(7896),a=n(1461),o=(n(2784),n(876)),l=["components"],i={id:"analyzing-the-bundle-size",title:"\u5206\u6790\u5305\u7684\u5927\u5c0f",sidebar_label:"\u5206\u6790\u5305\u5927\u5c0f"},c=void 0,u={unversionedId:"analyzing-the-bundle-size",id:"analyzing-the-bundle-size",title:"\u5206\u6790\u5305\u7684\u5927\u5c0f",description:"Source map explorer analyzes",source:"@site/../docs/analyzing-the-bundle-size.md",sourceDirName:".",slug:"/analyzing-the-bundle-size",permalink:"/docs/analyzing-the-bundle-size",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/analyzing-the-bundle-size.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"analyzing-the-bundle-size",title:"\u5206\u6790\u5305\u7684\u5927\u5c0f",sidebar_label:"\u5206\u6790\u5305\u5927\u5c0f"}},p={},s=[],d={toc:s},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/source-map-explorer"},"Source map explorer")," analyzes\nJavaScript bundles using the source maps. This helps you understand where code\nbloat is coming from."),(0,o.kt)("p",null,"To add Source map explorer to a Create React App project, follow these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save source-map-explorer\n")),(0,o.kt)("p",null,"Alternatively you may use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add source-map-explorer\n")),(0,o.kt)("p",null,"Then in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", add the following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'   "scripts": {\n+    "analyze": "source-map-explorer \'build/static/js/*.js\'",\n     "start": "react-scripts start",\n     "build": "react-scripts build",\n     "test": "react-scripts test",\n')),(0,o.kt)("p",null,"Then to analyze the bundle run the production build then run the analyze\nscript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\nnpm run analyze\n")))}f.isMDXComponent=!0}}]);
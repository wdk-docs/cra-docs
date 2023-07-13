"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[9253],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=s,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:s,a[1]=l;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var r=n(7896),s=n(1461),o=(n(2784),n(876)),a=["components"],l={id:"adding-a-css-modules-stylesheet",title:"\u6dfb\u52a0\u4e00\u4e2aCSS\u6a21\u5757\u6837\u5f0f\u8868",sidebar_label:"\u6dfb\u52a0CSS\u6a21\u5757"},c=void 0,i={unversionedId:"adding-a-css-modules-stylesheet",id:"adding-a-css-modules-stylesheet",title:"\u6dfb\u52a0\u4e00\u4e2aCSS\u6a21\u5757\u6837\u5f0f\u8868",description:"Note: this feature is available with react-scripts@2.0.0 and higher.",source:"@site/../docs/adding-a-css-modules-stylesheet.md",sourceDirName:".",slug:"/adding-a-css-modules-stylesheet",permalink:"/cra-docs/docs/adding-a-css-modules-stylesheet",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/adding-a-css-modules-stylesheet.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"adding-a-css-modules-stylesheet",title:"\u6dfb\u52a0\u4e00\u4e2aCSS\u6a21\u5757\u6837\u5f0f\u8868",sidebar_label:"\u6dfb\u52a0CSS\u6a21\u5757"},sidebar:"docs",previous:{title:"\u6dfb\u52a0\u6837\u5f0f\u8868",permalink:"/cra-docs/docs/adding-a-stylesheet"},next:{title:"\u6dfb\u52a0\u6837\u5f0f\u8868",permalink:"/cra-docs/docs/adding-a-sass-stylesheet"}},u={},d=[{value:"<code>Button.module.css</code>",id:"buttonmodulecss",level:2},{value:"<code>another-stylesheet.css</code>",id:"another-stylesheetcss",level:2},{value:"<code>Button.js</code>",id:"buttonjs",level:2},{value:"Result",id:"result",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,o.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),(0,o.kt)("p",null,"This project supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," alongside regular stylesheets using the ",(0,o.kt)("inlineCode",{parentName:"p"},"[name].module.css")," file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format ",(0,o.kt)("inlineCode",{parentName:"p"},"[filename]\\_[classname]\\_\\_[hash]"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," Should you want to preprocess a stylesheet with Sass then make sure to ",(0,o.kt)("a",{parentName:"p",href:"/cra-docs/docs/adding-a-sass-stylesheet"},"follow the installation instructions")," and then change the stylesheet file extension as follows: ",(0,o.kt)("inlineCode",{parentName:"p"},"[name].module.scss")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"[name].module.sass"),".")),(0,o.kt)("p",null,"CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/css-modules-part-1-need/"},"here"),"."),(0,o.kt)("h2",{id:"buttonmodulecss"},(0,o.kt)("inlineCode",{parentName:"h2"},"Button.module.css")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".error {\n  background-color: red;\n}\n")),(0,o.kt)("h2",{id:"another-stylesheetcss"},(0,o.kt)("inlineCode",{parentName:"h2"},"another-stylesheet.css")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".error {\n  color: red;\n}\n")),(0,o.kt)("h2",{id:"buttonjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"Button.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport styles from './Button.module.css'; // Import css modules stylesheet as styles\nimport './another-stylesheet.css'; // Import regular stylesheet\n\nclass Button extends Component {\n  render() {\n    // reference as a js object\n    return <button className={styles.error}>Error Button</button>;\n  }\n}\n")),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("p",null,"No clashes from other ",(0,o.kt)("inlineCode",{parentName:"p"},".error")," class names"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This button has red background but not red text --\x3e\n<button class="Button_error_ax7yz">Error Button</button>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is an optional feature.")," Regular ",(0,o.kt)("inlineCode",{parentName:"p"},"<link>")," stylesheets and CSS files are fully supported. CSS Modules are turned on for files ending with the ",(0,o.kt)("inlineCode",{parentName:"p"},".module.css")," extension."))}h.isMDXComponent=!0}}]);
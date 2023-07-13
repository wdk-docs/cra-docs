"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[7429],{876:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7896),i=n(1461),r=(n(2784),n(876)),o=["components"],l={id:"using-the-public-folder",title:"\u4f7f\u7528\u516c\u7528\u6587\u4ef6\u5939"},s=void 0,u={unversionedId:"using-the-public-folder",id:"using-the-public-folder",title:"\u4f7f\u7528\u516c\u7528\u6587\u4ef6\u5939",description:"Note: this feature is available with react-scripts@0.5.0 and higher.",source:"@site/../docs/using-the-public-folder.md",sourceDirName:".",slug:"/using-the-public-folder",permalink:"/docs/using-the-public-folder",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/using-the-public-folder.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"using-the-public-folder",title:"\u4f7f\u7528\u516c\u7528\u6587\u4ef6\u5939"},sidebar:"docs",previous:{title:"\u52a0\u8f7d.graphql\u6587\u4ef6",permalink:"/docs/loading-graphql-files"},next:{title:"\u4ee3\u7801\u5206\u79bb",permalink:"/docs/code-splitting"}},d={},p=[{value:"Changing the HTML",id:"changing-the-html",level:2},{value:"Adding Assets Outside of the Module System",id:"adding-assets-outside-of-the-module-system",level:2},{value:"When to Use the <code>public</code> Folder",id:"when-to-use-the-public-folder",level:2}],c={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),(0,r.kt)("h2",{id:"changing-the-html"},"Changing the HTML"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder contains the HTML file so you can tweak it, for example, to ",(0,r.kt)("a",{parentName:"p",href:"/docs/title-and-meta-tags"},"set the page title"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tag with the compiled code will be added to it automatically during the build process."),(0,r.kt)("h2",{id:"adding-assets-outside-of-the-module-system"},"Adding Assets Outside of the Module System"),(0,r.kt)("p",null,"You can also add other assets to the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder."),(0,r.kt)("p",null,"Note that we normally encourage you to ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," assets in JavaScript files instead.\nFor example, see the sections on ",(0,r.kt)("a",{parentName:"p",href:"/docs/adding-a-stylesheet"},"adding a stylesheet")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/adding-images-fonts-and-files"},"adding images and fonts"),".\nThis mechanism provides a number of benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scripts and stylesheets get minified and bundled together to avoid extra network requests."),(0,r.kt)("li",{parentName:"ul"},"Missing files cause compilation errors instead of 404 errors for your users."),(0,r.kt)("li",{parentName:"ul"},"Result filenames include content hashes so you don\u2019t need to worry about browsers caching their old versions.")),(0,r.kt)("p",null,"However there is an ",(0,r.kt)("strong",{parentName:"p"},"escape hatch")," that you can use to add an asset outside of the module system."),(0,r.kt)("p",null,"If you put a file into the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder, it will ",(0,r.kt)("strong",{parentName:"p"},"not")," be processed by webpack. Instead it will be copied into the build folder untouched. To reference assets in the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder, you need to use an environment variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC_URL"),"."),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),", you can use it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n')),(0,r.kt)("p",null,"Only files inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder will be accessible by ",(0,r.kt)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," prefix. If you need to use a file from ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", you\u2019ll have to copy it there to explicitly specify your intention to make this file a part of the build."),(0,r.kt)("p",null,"When you run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),", Create React App will substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL."),(0,r.kt)("p",null,"In JavaScript code, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.PUBLIC_URL")," for similar purposes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  // Note: this is an escape hatch and should be used sparingly!\n  // Normally we recommend using `import` for getting asset URLs\n  // as described in \u201cAdding Images and Fonts\u201d above this section.\n  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;\n}\n")),(0,r.kt)("p",null,"Keep in mind the downsides of this approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None of the files in ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," folder get post-processed or minified."),(0,r.kt)("li",{parentName:"ul"},"Missing files will not be called at compilation time, and will cause 404 errors for your users."),(0,r.kt)("li",{parentName:"ul"},"Result filenames won\u2019t include content hashes so you\u2019ll need to add query arguments or rename them every time they change.")),(0,r.kt)("h2",{id:"when-to-use-the-public-folder"},"When to Use the ",(0,r.kt)("inlineCode",{parentName:"h2"},"public")," Folder"),(0,r.kt)("p",null,"Normally we recommend importing ",(0,r.kt)("a",{parentName:"p",href:"/docs/adding-a-stylesheet"},"stylesheets"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/adding-images-fonts-and-files"},"images, and fonts")," from JavaScript.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder is useful as a workaround for a number of less common cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need a file with a specific name in the build output, such as ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},(0,r.kt)("inlineCode",{parentName:"a"},"manifest.webmanifest")),"."),(0,r.kt)("li",{parentName:"ul"},"You have thousands of images and need to dynamically reference their paths."),(0,r.kt)("li",{parentName:"ul"},"You want to include a small script like ",(0,r.kt)("a",{parentName:"li",href:"https://codebyzach.github.io/pace/docs/"},(0,r.kt)("inlineCode",{parentName:"a"},"pace.js"))," outside of the bundled code."),(0,r.kt)("li",{parentName:"ul"},"Some libraries may be incompatible with webpack and you have no other option but to include it as a ",(0,r.kt)("inlineCode",{parentName:"li"},"<script>")," tag.")),(0,r.kt)("p",null,"Note that if you add a ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," that declares global variables, you should read the topic ",(0,r.kt)("a",{parentName:"p",href:"/docs/using-global-variables"},"Using Global Variables")," in the next section which explains how to reference them."))}h.isMDXComponent=!0}}]);
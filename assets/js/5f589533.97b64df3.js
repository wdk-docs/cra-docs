"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[8394],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(7896),o=n(1461),a=(n(2784),n(876)),i=["components"],p={id:"proxying-api-requests-in-development",title:"\u4ee3\u7406\u5f00\u53d1\u4e2d\u7684API\u8bf7\u6c42",sidebar_label:"\u5f00\u53d1\u4e2d\u7684\u4ee3\u7406"},s=void 0,l={unversionedId:"proxying-api-requests-in-development",id:"proxying-api-requests-in-development",title:"\u4ee3\u7406\u5f00\u53d1\u4e2d\u7684API\u8bf7\u6c42",description:"Note: this feature is available with react-scripts@0.2.3 and higher.",source:"@site/../docs/proxying-api-requests-in-development.md",sourceDirName:".",slug:"/proxying-api-requests-in-development",permalink:"/docs/proxying-api-requests-in-development",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/proxying-api-requests-in-development.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"proxying-api-requests-in-development",title:"\u4ee3\u7406\u5f00\u53d1\u4e2d\u7684API\u8bf7\u6c42",sidebar_label:"\u5f00\u53d1\u4e2d\u7684\u4ee3\u7406"},sidebar:"docs",previous:{title:"\u8c03\u8bd5\u6d4b\u8bd5",permalink:"/docs/debugging-tests"},next:{title:"\u83b7\u53d6\u6570\u636e",permalink:"/docs/fetching-data-with-ajax-requests"}},u={},c=[{value:"&quot;Invalid Host Header&quot; Errors After Configuring Proxy",id:"invalid-host-header-errors-after-configuring-proxy",level:2},{value:"Configuring the Proxy Manually",id:"configuring-the-proxy-manually",level:2}],d={toc:c},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),(0,a.kt)("p",null,"People often serve the front-end React app from the same host and port as their backend implementation."),(0,a.kt)("p",null,"For example, a production setup might look like this after the app is deployed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/             - static server returns index.html with React app\n/todos        - static server returns index.html with React app\n/api/todos    - server handles any /api/* requests using the backend implementation\n")),(0,a.kt)("p",null,"Such setup is ",(0,a.kt)("strong",{parentName:"p"},"not")," required. However, if you ",(0,a.kt)("strong",{parentName:"p"},"do")," have a setup like this, it is convenient to write requests like ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," without worrying about redirecting them to another host or port during development."),(0,a.kt)("p",null,"To tell the development server to proxy any unknown requests to your API server in development, add a ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," field to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "proxy": "http://localhost:4000",\n')),(0,a.kt)("p",null,"This way, when you ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," in development, the development server will recognize that it\u2019s not a static asset, and will proxy your request to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/api/todos")," as a fallback. The development server will ",(0,a.kt)("strong",{parentName:"p"},"only")," attempt to send requests without ",(0,a.kt)("inlineCode",{parentName:"p"},"text/html")," in its ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept")," header to the proxy."),(0,a.kt)("p",null,"Conveniently, this avoids ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations"},"CORS issues")," and error messages like this in development:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.\n")),(0,a.kt)("p",null,"Keep in mind that ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," only has effect in development (with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),"), and it is up to you to ensure that URLs like ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/todos")," point to the right thing in production. You don\u2019t have to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," prefix. Any unrecognized request without a ",(0,a.kt)("inlineCode",{parentName:"p"},"text/html")," accept header will be redirected to the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," option supports HTTP, HTTPS and WebSocket connections."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," option is ",(0,a.kt)("strong",{parentName:"p"},"not")," flexible enough for you, alternatively you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuring-the-proxy-manually"},"Configure the proxy yourself")),(0,a.kt)("li",{parentName:"ul"},"Enable CORS on your server (",(0,a.kt)("a",{parentName:"li",href:"https://enable-cors.org/server_expressjs.html"},"here\u2019s how to do it for Express"),")."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/adding-custom-environment-variables"},"environment variables")," to inject the right server host and port into your app.")),(0,a.kt)("h2",{id:"invalid-host-header-errors-after-configuring-proxy"},'"Invalid Host Header" Errors After Configuring Proxy'),(0,a.kt)("p",null,"When you enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a"},"this article")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack-dev-server/issues/887"},"this issue"),"."),(0,a.kt)("p",null,"This shouldn\u2019t affect you when developing on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", but if you develop remotely like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/2271"},"described here"),", you will see this error in the browser after enabling the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," option:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Invalid Host header")),(0,a.kt)("p",null,"To work around it, you can specify your public development host in a file called ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development")," in the root of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HOST=mypublicdevhost.com\n")),(0,a.kt)("p",null,"If you restart the development server now and load the app from the specified host, it should work."),(0,a.kt)("p",null,"If you are still having issues or if you\u2019re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development.local"),". ",(0,a.kt)("strong",{parentName:"p"},"Note that this is dangerous and exposes your machine to remote code execution from malicious websites:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# NOTE: THIS IS DANGEROUS!\n# It exposes your machine to attacks from the websites you visit.\nDANGEROUSLY_DISABLE_HOST_CHECK=true\n")),(0,a.kt)("p",null,"We don\u2019t recommend this approach."),(0,a.kt)("h2",{id:"configuring-the-proxy-manually"},"Configuring the Proxy Manually"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," option is ",(0,a.kt)("strong",{parentName:"p"},"not")," flexible enough for you, you can get direct access to the Express app instance and hook up your own proxy middleware."),(0,a.kt)("p",null,"You can use this feature in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", but it is recommended you consolidate all of your logic into ",(0,a.kt)("inlineCode",{parentName:"p"},"src/setupProxy.js"),"."),(0,a.kt)("p",null,"First, install ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy-middleware")," using npm or Yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install http-proxy-middleware --save\n$ # or\n$ yarn add http-proxy-middleware\n")),(0,a.kt)("p",null,"Next, create ",(0,a.kt)("inlineCode",{parentName:"p"},"src/setupProxy.js")," and place the following contents in it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function (app) {\n  // ...\n};\n")),(0,a.kt)("p",null,"You can now register proxies as you wish! Here's an example using the above ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy-middleware"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function (app) {\n  app.use(\n    '/api',\n    createProxyMiddleware({\n      target: 'http://localhost:5000',\n      changeOrigin: true,\n    })\n  );\n};\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You do not need to import this file anywhere. It is automatically registered when you start the development server.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This file only supports Node's JavaScript syntax. Be sure to only use supported language features (i.e. no support for Flow, ES Modules, etc).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Passing the path to the proxy function allows you to use globbing and/or pattern matching on the path, which is more flexible than the express route matching.")))}m.isMDXComponent=!0}}]);
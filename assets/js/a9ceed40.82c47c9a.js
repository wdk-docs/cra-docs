"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[2635],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7896),a=n(1461),i=(n(2784),n(876)),o=["components"],s={id:"using-https-in-development",title:"\u5f00\u53d1\u4e2d\u4f7f\u7528HTTPS",sidebar_label:"\u5f00\u53d1\u4e2d\u4f7f\u7528HTTPS"},l=void 0,c={unversionedId:"using-https-in-development",id:"using-https-in-development",title:"\u5f00\u53d1\u4e2d\u4f7f\u7528HTTPS",description:"Note: this feature is available with react-scripts@0.4.0 and higher.",source:"@site/../docs/using-https-in-development.md",sourceDirName:".",slug:"/using-https-in-development",permalink:"/cra-docs/docs/using-https-in-development",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/using-https-in-development.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"using-https-in-development",title:"\u5f00\u53d1\u4e2d\u4f7f\u7528HTTPS",sidebar_label:"\u5f00\u53d1\u4e2d\u4f7f\u7528HTTPS"}},u={},p=[{value:"Windows (cmd.exe)",id:"windows-cmdexe",level:3},{value:"Windows (Powershell)",id:"windows-powershell",level:3},{value:"Linux, macOS (Bash)",id:"linux-macos-bash",level:3},{value:"Custom SSL certificate",id:"custom-ssl-certificate",level:2},{value:"Linux, macOS (Bash)",id:"linux-macos-bash-1",level:3}],d={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-scripts@0.4.0")," and higher.")),(0,i.kt)("p",null,"You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using ",(0,i.kt)("a",{parentName:"p",href:"/cra-docs/docs/proxying-api-requests-in-development"},'the "proxy" feature')," to proxy requests to an API server when that API server is itself serving HTTPS."),(0,i.kt)("p",null,"To do this, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then start the dev server as usual with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),":"),(0,i.kt)("h3",{id:"windows-cmdexe"},"Windows (cmd.exe)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"set HTTPS=true&&npm start\n")),(0,i.kt)("p",null,"(Note: the lack of whitespace is intentional.)"),(0,i.kt)("h3",{id:"windows-powershell"},"Windows (Powershell)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Powershell"},'($env:HTTPS = "true") -and (npm start)\n')),(0,i.kt)("h3",{id:"linux-macos-bash"},"Linux, macOS (Bash)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"HTTPS=true npm start\n")),(0,i.kt)("p",null,"Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page."),(0,i.kt)("h2",{id:"custom-ssl-certificate"},"Custom SSL certificate"),(0,i.kt)("p",null,"To set a custom certificate, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"SSL_CRT_FILE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SSL_KEY_FILE")," environment variables to the path of the certificate and key files in the same way you do for ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS")," above. Note that you will also need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS=true"),"."),(0,i.kt)("h3",{id:"linux-macos-bash-1"},"Linux, macOS (Bash)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start\n")),(0,i.kt)("p",null,"To avoid having to set the environment variable each time, you can either include in the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," script like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "start": "HTTPS=true react-scripts start"\n}\n')),(0,i.kt)("p",null,"Or you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file with ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS=true")," set.\n",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables"},"Learn more about environment variables in CRA"),"."))}h.isMDXComponent=!0}}]);
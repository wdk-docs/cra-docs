"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[9743],{876:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(7896),a=n(1461),r=(n(2784),n(876)),o=["components"],l={id:"production-build",title:"\u521b\u5efa\u751f\u4ea7\u6784\u5efa"},c=void 0,p={unversionedId:"production-build",id:"production-build",title:"\u521b\u5efa\u751f\u4ea7\u6784\u5efa",description:"npm run build creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files. Each filename inside of build/static will contain a unique hash of the file contents. This hash in the file name enables long term caching techniques.",source:"@site/../docs/production-build.md",sourceDirName:".",slug:"/production-build",permalink:"/docs/production-build",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/production-build.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"production-build",title:"\u521b\u5efa\u751f\u4ea7\u6784\u5efa"},sidebar:"docs",previous:{title:"\u6d4b\u91cf\u6027\u80fd",permalink:"/docs/measuring-performance"},next:{title:"\u8fd0\u884c\u6d4b\u8bd5",permalink:"/docs/running-tests"}},s={},d=[{value:"Static File Caching",id:"static-file-caching",level:2},{value:"Profiling",id:"profiling",level:2}],u={toc:d},h="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)(h,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory with a production build of your app. Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static")," directory will be your JavaScript and CSS files. Each filename inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static")," will contain a unique hash of the file contents. This hash in the file name enables ",(0,r.kt)("a",{parentName:"p",href:"#static-file-caching"},"long term caching techniques"),"."),(0,r.kt)("p",null,"When running a production build of freshly created Create React App application, there are a number of ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," files (called ",(0,r.kt)("em",{parentName:"p"},"chunks"),") that are generated and placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static/js")," directory:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.[hash].chunk.js")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is your ",(0,r.kt)("em",{parentName:"li"},"application")," code. ",(0,r.kt)("inlineCode",{parentName:"li"},"App.js"),", etc.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[number].[hash].chunk.js")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These files can either be ",(0,r.kt)("em",{parentName:"li"},"vendor")," code, or ",(0,r.kt)("a",{parentName:"li",href:"/docs/code-splitting"},"code splitting chunks"),". ",(0,r.kt)("em",{parentName:"li"},"Vendor")," code includes modules that you've imported from within ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),". One of the potential advantages with splitting your ",(0,r.kt)("em",{parentName:"li"},"vendor")," and ",(0,r.kt)("em",{parentName:"li"},"application")," code is to enable ",(0,r.kt)("a",{parentName:"li",href:"#static-file-caching"},"long term caching techniques")," to improve application loading performance. Since ",(0,r.kt)("em",{parentName:"li"},"vendor")," code tends to change less often than the actual ",(0,r.kt)("em",{parentName:"li"},"application")," code, the browser will be able to cache them separately, and won't re-download them each time the app code changes.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime-main.[hash].js")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is a small chunk of ",(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/optimization/#optimization-runtimechunk"},"webpack runtime")," logic which is used to load and run your application. The contents of this will be embedded in your ",(0,r.kt)("inlineCode",{parentName:"li"},"build/index.html")," file by default to save an additional network request. You can opt out of this by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"INLINE_RUNTIME_CHUNK=false")," as documented in our ",(0,r.kt)("a",{parentName:"li",href:"/docs/advanced-configuration"},"advanced configuration"),", which will load this chunk instead of embedding it in your ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html"),".")),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("a",{parentName:"p",href:"/docs/code-splitting"},"code splitting")," to split up your application, this will create additional chunks in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static")," folder as well."),(0,r.kt)("h2",{id:"static-file-caching"},"Static File Caching"),(0,r.kt)("p",null,"Each file inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static")," directory will have a unique hash appended to the filename that is generated based on the contents of the file, which allows you to use ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses"},"aggressive caching techniques")," to avoid the browser re-downloading your assets if the file contents haven't changed. If the contents of a file changes in a subsequent build, the filename hash that is generated will be different."),(0,r.kt)("p",null,"To deliver the best performance to your users, it's best practice to specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control")," header for ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),", as well as the files within ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static"),". This header allows you to control the length of time that the browser as well as CDNs will cache your static assets. If you aren't familiar with what ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control")," does, see ",(0,r.kt)("a",{parentName:"p",href:"https://jakearchibald.com/2016/caching-best-practices/"},"this article")," for a great introduction."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control: max-age=31536000")," for your ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static")," assets, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," for everything else is a safe and effective starting point that ensures your user's browser will always check for an updated ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file, and will cache all of the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static")," files for one year. Note that you can use the one year expiration on ",(0,r.kt)("inlineCode",{parentName:"p"},"build/static")," safely because the file contents hash is embedded into the filename."),(0,r.kt)("h2",{id:"profiling"},"Profiling"),(0,r.kt)("p",null,"ReactDOM automatically supports profiling in development mode for v16.5+, but since profiling adds some small\nadditional overhead it is opt-in for production mode. You can opt-in by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile")," flag. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build -- --profile")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build --profile")," to enable profiling in the production build. See the ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler"},"React docs")," for details about profiling\nusing the React DevTools."))}f.isMDXComponent=!0}}]);
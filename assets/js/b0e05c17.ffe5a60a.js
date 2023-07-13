"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[2633],{876:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},717:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(7896),r=a(1461),o=(a(2784),a(876)),i=["components"],s={id:"making-a-progressive-web-app",title:"\u5236\u4f5c\u6e10\u8fdb\u5f0fWeb\u5e94\u7528\u7a0b\u5e8f"},p=void 0,l={unversionedId:"making-a-progressive-web-app",id:"making-a-progressive-web-app",title:"\u5236\u4f5c\u6e10\u8fdb\u5f0fWeb\u5e94\u7528\u7a0b\u5e8f",description:"The production build has all the tools necessary to generate a first-class",source:"@site/../docs/making-a-progressive-web-app.md",sourceDirName:".",slug:"/making-a-progressive-web-app",permalink:"/cra-docs/docs/making-a-progressive-web-app",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/making-a-progressive-web-app.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"making-a-progressive-web-app",title:"\u5236\u4f5c\u6e10\u8fdb\u5f0fWeb\u5e94\u7528\u7a0b\u5e8f"},sidebar:"docs",previous:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/cra-docs/docs/adding-custom-environment-variables"},next:{title:"\u6d4b\u91cf\u6027\u80fd",permalink:"/cra-docs/docs/measuring-performance"}},c={},u=[{value:"Why Opt-in?",id:"why-opt-in",level:2},{value:"Customization",id:"customization",level:2},{value:"Offline-First Considerations",id:"offline-first-considerations",level:2},{value:"Progressive Web App Metadata",id:"progressive-web-app-metadata",level:2}],d={toc:u},m="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The production build has all the tools necessary to generate a first-class\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"},"Progressive Web App"),",\nbut ",(0,o.kt)("strong",{parentName:"p"},"the offline/cache-first behavior is opt-in only"),"."),(0,o.kt)("p",null,"Starting with Create React App 4, you can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file to\nyour project to use the built-in support for\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/"},"Workbox"),"'s\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.InjectManifest"},(0,o.kt)("inlineCode",{parentName:"a"},"InjectManifest")),"\nplugin, which will\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/guides/using-bundlers"},"compile"),"\nyour service worker and inject into it a list of URLs to\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/guides/precache-files"},"precache"),"."),(0,o.kt)("p",null,"If you start a new project using one of the PWA ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/custom-templates/"},"custom\ntemplates"),", you'll get a\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file that serves as a good starting point for an\noffline-first service worker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template cra-template-pwa\n")),(0,o.kt)("p",null,"The TypeScript equivalent is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template cra-template-pwa-typescript\n")),(0,o.kt)("p",null,"If you know that you won't be using service workers, or if you'd prefer to use a\ndifferent approach to creating your service worker, don't create a\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"InjectManifest")," plugin won't be run in that\ncase."),(0,o.kt)("p",null,"In addition to creating your local ",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file, it needs to be\nregistered before it will be used. In order to opt-in to the offline-first\nbehavior, developers should look for the following in their\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/src/index.js"},(0,o.kt)("inlineCode",{parentName:"a"},"src/index.js")),"\nfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://cra.link/PWA\nserviceWorkerRegistration.unregister();\n")),(0,o.kt)("p",null,"As the comment states, switching ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceWorker.unregister()")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"serviceWorker.register()")," will opt you in to using the service worker."),(0,o.kt)("h2",{id:"why-opt-in"},"Why Opt-in?"),(0,o.kt)("p",null,"Offline-first Progressive Web Apps are faster and more reliable than traditional\nweb pages, and provide an engaging mobile experience:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All static site assets that are a part of your ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack")," build are cached so\nthat your page loads fast on subsequent visits, regardless of network\nconnectivity (such as 2G or 3G). Updates are downloaded in the background."),(0,o.kt)("li",{parentName:"ul"},"Your app will work regardless of network state, even if offline. This means\nyour users will be able to use your app at 10,000 feet and on the subway."),(0,o.kt)("li",{parentName:"ul"},"On mobile devices, your app can be added directly to the user's home screen,\napp icon and all. This eliminates the need for the app store.")),(0,o.kt)("p",null,"However, they ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/2398"},"can make debugging deployments more\nchallenging"),"."),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/"},(0,o.kt)("inlineCode",{parentName:"a"},"workbox-webpack-plugin")),"\nis integrated into production configuration, and it will take care of compiling\na service worker file that will automatically precache all of your\n",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"-generated assets and keep them up to date as you deploy updates. The\nservice worker will use a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network"},"cache-first\nstrategy"),"\nfor handling all requests for ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"-generated assets, including ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests"},"navigation\nrequests"),"\nfor your HTML, ensuring that your web app is consistently fast, even on a slow\nor unreliable network."),(0,o.kt)("p",null,"Note: Resources that are not generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),", such as static files that are\ncopied over from your local\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/tree/master/packages/cra-template-pwa/template/public/"},(0,o.kt)("inlineCode",{parentName:"a"},"public/")," directory"),"\nor third-party resources, will not be precached. You can optionally set up Workbox\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/guides/route-requests"},"routes"),"\nto apply the runtime caching strategy of your choice to those resources."),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"Starting with Create React App 4, you have full control over customizing the\nlogic in this service worker, by creating your own ",(0,o.kt)("inlineCode",{parentName:"p"},"src/service-worker.js")," file,\nor customizing the one added by the ",(0,o.kt)("inlineCode",{parentName:"p"},"cra-template-pwa")," (or\n",(0,o.kt)("inlineCode",{parentName:"p"},"cra-template-pwa-typescript"),") template. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/modules"},"additional\nmodules")," from the\nWorkbox project, add in a push notification library, or remove some of the\ndefault caching logic. The one requirement is that you keep ",(0,o.kt)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST"),"\nsomewhere in your file, as the Workbox compilation plugin checks for this value\nwhen generating a manifest of URLs to precache. If you would prefer not to use\nprecaching, you can assign ",(0,o.kt)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST")," to a variable that will be\nignored, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// eslint-disable-next-line no-restricted-globals\nconst ignored = self.__WB_MANIFEST;\n\n// Your custom service worker code goes here.\n")),(0,o.kt)("h2",{id:"offline-first-considerations"},"Offline-First Considerations"),(0,o.kt)("p",null,"If you do decide to opt-in to service worker registration, please take the\nfollowing into account:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the initial caching is done, the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle"},"service worker lifecycle"),"\ncontrols when updated content ends up being shown to users. In order to guard against\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/3613#issuecomment-353467430"},"race conditions with lazy-loaded content"),',\nthe default behavior is to conservatively keep the updated service worker in the "',(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting"},"waiting"),'"\nstate. This means that users will end up seeing older content until they close (reloading is not\nenough) their existing, open tabs. See ',(0,o.kt)("a",{parentName:"p",href:"https://jeffy.info/2018/10/10/sw-in-c-r-a.html"},"this blog post"),"\nfor more details about this behavior.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Users aren't always familiar with offline-first web apps. It can be useful to\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption"},"let the user know"),'\nwhen the service worker has finished populating your caches (showing a "This web\napp works offline!" message) and also let them know when the service worker has\nfetched the latest updates that will be available the next time they load the\npage (showing a "New content is available once existing tabs are closed." message). Showing\nthese messages is currently left as an exercise to the developer, but as a\nstarting point, you can make use of the logic included in ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/src/serviceWorkerRegistration.js"},(0,o.kt)("inlineCode",{parentName:"a"},"src/serviceWorkerRegistration.js")),", which\ndemonstrates which service worker lifecycle events to listen for to detect each\nscenario, and which as a default, only logs appropriate messages to the\nJavaScript console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Service workers ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https"},"require HTTPS"),",\nalthough to facilitate local testing, that policy\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385"},"does not apply to ",(0,o.kt)("inlineCode",{parentName:"a"},"localhost")),".\nIf your production web server does not support HTTPS, then the service worker\nregistration will fail, but the rest of your web app will remain functional.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The service worker is only enabled in the ",(0,o.kt)("a",{parentName:"p",href:"/cra-docs/docs/deployment"},"production environment"),",\ne.g. the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build"),". It's recommended that you do not enable an\noffline-first service worker in a development environment, as it can lead to\nfrustration when previously cached assets are used and do not include the latest\nchanges you've made locally.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you ",(0,o.kt)("em",{parentName:"p"},"need")," to test your offline-first service worker locally, build\nthe application (using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build"),") and run a standard http server from your\nbuild directory. After running the build script, ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," will give\ninstructions for one way to test your production build locally and the ",(0,o.kt)("a",{parentName:"p",href:"/cra-docs/docs/deployment"},"deployment instructions")," have\ninstructions for using other methods. ",(0,o.kt)("em",{parentName:"p"},"Be sure to always use an\nincognito window to avoid complications with your browser cache."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By default, the generated service worker file will not intercept or cache any\ncross-origin traffic, like HTTP ",(0,o.kt)("a",{parentName:"p",href:"/cra-docs/docs/integrating-with-an-api-backend"},"API requests"),",\nimages, or embeds loaded from a different domain. Starting with Create\nReact App 4, this can be customized, as explained above."))),(0,o.kt)("h2",{id:"progressive-web-app-metadata"},"Progressive Web App Metadata"),(0,o.kt)("p",null,"The default configuration includes a web app manifest located at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/public/manifest.json"},(0,o.kt)("inlineCode",{parentName:"a"},"public/manifest.json")),", that you can customize with\ndetails specific to your web application."),(0,o.kt)("p",null,"When a user adds a web app to their homescreen using Chrome or Firefox on\nAndroid, the metadata in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cra-template/pwa/blob/master/packages/cra-template-pwa/template/public/manifest.json"},(0,o.kt)("inlineCode",{parentName:"a"},"manifest.json"))," determines what\nicons, names, and branding colors to use when the web app is displayed.\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/"},"The Web App Manifest guide"),"\nprovides more context about what each field means, and how your customizations\nwill affect your users' experience."),(0,o.kt)("p",null,"Progressive web apps that have been added to the homescreen will load faster and\nwork offline when there's an active service worker. That being said, the\nmetadata from the web app manifest will still be used regardless of whether or\nnot you opt-in to service worker registration."))}h.isMDXComponent=!0}}]);
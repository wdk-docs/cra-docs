"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[6218],{876:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(7896),r=n(1461),p=(n(2784),n(876)),o=["components"],i={id:"getting-started",title:"\u5f00\u59cb"},l=void 0,c={unversionedId:"getting-started",id:"getting-started",title:"\u5f00\u59cb",description:"Create React App is an officially supported way to create single-page React",source:"@site/../docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/getting-started.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"getting-started",title:"\u5f00\u59cb"},sidebar:"docs",previous:{title:"\u5173\u4e8e\u6587\u6863",permalink:"/docs/documentation-intro"},next:{title:"\u6587\u4ef6\u5939\u7ed3\u6784",permalink:"/docs/folder-structure"}},s={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Get Started Immediately",id:"get-started-immediately",level:3},{value:"Creating an App",id:"creating-an-app",level:2},{value:"npx",id:"npx",level:3},{value:"npm",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Selecting a template",id:"selecting-a-template",level:3},{value:"Creating a TypeScript app",id:"creating-a-typescript-app",level:4},{value:"Selecting a package manager",id:"selecting-a-package-manager",level:3},{value:"Output",id:"output",level:2},{value:"Scripts",id:"scripts",level:2},{value:"<code>npm start</code> or <code>yarn start</code>",id:"npm-start-or-yarn-start",level:3},{value:"<code>npm test</code> or <code>yarn test</code>",id:"npm-test-or-yarn-test",level:3},{value:"<code>npm run build</code> or <code>yarn build</code>",id:"npm-run-build-or-yarn-build",level:3}],u={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,p.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Create React App is an officially supported way to create single-page React\napplications. It offers a modern build setup with no configuration."),(0,p.kt)("h2",{id:"quick-start"},"Quick Start"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app\ncd my-app\nnpm start\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"If you've previously installed ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",(0,p.kt)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",(0,p.kt)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," to ensure that ",(0,p.kt)("inlineCode",{parentName:"p"},"npx")," always uses the latest version.")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"(",(0,p.kt)("a",{parentName:"em",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx")," comes with npm 5.2+ and higher, see ",(0,p.kt)("a",{parentName:"em",href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"},"instructions for older npm versions"),")")),(0,p.kt)("p",null,"Then open ",(0,p.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," to see your app."),(0,p.kt)("p",null,"When you\u2019re ready to deploy to production, create a minified bundle with ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run build"),"."),(0,p.kt)("p",{align:"center"},(0,p.kt)("img",{src:"https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg",width:"600",alt:"npm start"})),(0,p.kt)("h3",{id:"get-started-immediately"},"Get Started Immediately"),(0,p.kt)("p",null,"You ",(0,p.kt)("strong",{parentName:"p"},"don\u2019t")," need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code."),(0,p.kt)("p",null,"Create a project, and you\u2019re good to go."),(0,p.kt)("h2",{id:"creating-an-app"},"Creating an App"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"You\u2019ll need to have Node >= 14 on your local development machine")," (but it\u2019s not required on the server). You can use ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm#installation"},"nvm")," (macOS/Linux) or ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows"},"nvm-windows")," to switch Node versions between different projects."),(0,p.kt)("p",null,"To create a new app, you may choose one of the following methods:"),(0,p.kt)("h3",{id:"npx"},"npx"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app@latest my-app\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"(",(0,p.kt)("a",{parentName:"em",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx")," comes with npm 5.2+ and higher, see ",(0,p.kt)("a",{parentName:"em",href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"},"instructions for older npm versions"),")")),(0,p.kt)("h3",{id:"npm"},"npm"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm init react-app my-app\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"em"},"npm init <initializer>")," is available in npm 6+")),(0,p.kt)("h3",{id:"yarn"},"Yarn"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create react-app my-app\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"em"},"yarn create")," is available in Yarn 0.25+")),(0,p.kt)("h3",{id:"selecting-a-template"},"Selecting a template"),(0,p.kt)("p",null,"You can now optionally start a new app from a template by appending ",(0,p.kt)("inlineCode",{parentName:"p"},"--template [template-name]")," to the creation command."),(0,p.kt)("p",null,"If you don't select a template, we'll create your project with our base template."),(0,p.kt)("p",null,"Templates are always named in the format ",(0,p.kt)("inlineCode",{parentName:"p"},"cra-template-[template-name]"),", however you only need to provide the ",(0,p.kt)("inlineCode",{parentName:"p"},"[template-name]")," to the creation command."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template [template-name]\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"You can find a list of available templates by searching for ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=cra-template-*"},'"cra-template-',"*",'"')," on npm.")),(0,p.kt)("p",null,"Our ",(0,p.kt)("a",{parentName:"p",href:"/docs/custom-templates"},"Custom Templates")," documentation describes how you can build your own template."),(0,p.kt)("h4",{id:"creating-a-typescript-app"},"Creating a TypeScript app"),(0,p.kt)("p",null,"You can start a new TypeScript app using templates. To use our provided TypeScript template, append ",(0,p.kt)("inlineCode",{parentName:"p"},"--template typescript")," to the creation command."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template typescript\n")),(0,p.kt)("p",null,"If you already have a project and would like to add TypeScript, see our ",(0,p.kt)("a",{parentName:"p",href:"/docs/adding-typescript"},"Adding TypeScript")," documentation."),(0,p.kt)("h3",{id:"selecting-a-package-manager"},"Selecting a package manager"),(0,p.kt)("p",null,"When you create a new app, the CLI will use ",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com"},"npm")," or ",(0,p.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," to install dependencies, depending on which tool you use to run ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app"),". For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"# Run this to use npm\nnpx create-react-app my-app\n# Or run this to use yarn\nyarn create react-app my-app\n")),(0,p.kt)("h2",{id:"output"},"Output"),(0,p.kt)("p",null,"Running any of these commands will create a directory called ",(0,p.kt)("inlineCode",{parentName:"p"},"my-app")," inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"my-app\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.js\n    \u251c\u2500\u2500 App.test.js\n    \u251c\u2500\u2500 index.css\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 logo.svg\n    \u251c\u2500\u2500 serviceWorker.js\n    \u2514\u2500\u2500 setupTests.js\n")),(0,p.kt)("p",null,"No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"cd my-app\n")),(0,p.kt)("h2",{id:"scripts"},"Scripts"),(0,p.kt)("p",null,"Inside the newly created project, you can run some built-in commands:"),(0,p.kt)("h3",{id:"npm-start-or-yarn-start"},(0,p.kt)("inlineCode",{parentName:"h3"},"npm start")," or ",(0,p.kt)("inlineCode",{parentName:"h3"},"yarn start")),(0,p.kt)("p",null,"Runs the app in development mode. Open ",(0,p.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view it in the browser."),(0,p.kt)("p",null,"The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console."),(0,p.kt)("p",{align:"center"},(0,p.kt)("img",{src:"https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg",width:"600",alt:"Build errors"})),(0,p.kt)("h3",{id:"npm-test-or-yarn-test"},(0,p.kt)("inlineCode",{parentName:"h3"},"npm test")," or ",(0,p.kt)("inlineCode",{parentName:"h3"},"yarn test")),(0,p.kt)("p",null,"Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/running-tests"},"Read more about testing"),"."),(0,p.kt)("h3",{id:"npm-run-build-or-yarn-build"},(0,p.kt)("inlineCode",{parentName:"h3"},"npm run build")," or ",(0,p.kt)("inlineCode",{parentName:"h3"},"yarn build")),(0,p.kt)("p",null,"Builds the app for production to the ",(0,p.kt)("inlineCode",{parentName:"p"},"build")," folder. It correctly bundles React in production mode and optimizes the build for the best performance."),(0,p.kt)("p",null,"The build is minified and the filenames include the hashes."),(0,p.kt)("p",null,"Your app is ready to be deployed."))}h.isMDXComponent=!0}}]);
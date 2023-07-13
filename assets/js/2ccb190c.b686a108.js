"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[8167],{876:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return v}});var a=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,v=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2905:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=t(7896),i=t(1461),r=(t(2784),t(876)),o=["components"],l={id:"adding-custom-environment-variables",title:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",sidebar_label:"\u73af\u5883\u53d8\u91cf"},p=void 0,s={unversionedId:"adding-custom-environment-variables",id:"adding-custom-environment-variables",title:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",description:"Note: this feature is available with react-scripts@0.2.3 and higher.",source:"@site/../docs/adding-custom-environment-variables.md",sourceDirName:".",slug:"/adding-custom-environment-variables",permalink:"/docs/adding-custom-environment-variables",draft:!1,editUrl:"https://github.com/wdk-docs/cra-docs/edit/main/docusaurus/website/../docs/adding-custom-environment-variables.md",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1689235792,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",frontMatter:{id:"adding-custom-environment-variables",title:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",sidebar_label:"\u73af\u5883\u53d8\u91cf"},sidebar:"docs",previous:{title:"\u6dfb\u52a0\u8def\u7531\u5668",permalink:"/docs/adding-a-router"},next:{title:"\u5236\u4f5c\u6e10\u8fdb\u5f0fWeb\u5e94\u7528\u7a0b\u5e8f",permalink:"/docs/making-a-progressive-web-app"}},d={},m=[{value:"Referencing Environment Variables in the HTML",id:"referencing-environment-variables-in-the-html",level:2},{value:"Adding Temporary Environment Variables In Your Shell",id:"adding-temporary-environment-variables-in-your-shell",level:2},{value:"Windows (cmd.exe)",id:"windows-cmdexe",level:3},{value:"Windows (Powershell)",id:"windows-powershell",level:3},{value:"Linux, macOS (Bash)",id:"linux-macos-bash",level:3},{value:"Adding Development Environment Variables In <code>.env</code>",id:"adding-development-environment-variables-in-env",level:2},{value:"What other <code>.env</code> files can be used?",id:"what-other-env-files-can-be-used",level:3},{value:"Expanding Environment Variables In <code>.env</code>",id:"expanding-environment-variables-in-env",level:3}],u={toc:m},c="wrapper";function v(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),(0,r.kt)("p",null,"Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," defined for you, and any other environment variables starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WARNING: Do not store any secrets (such as private API keys) in your React app!"),(0,r.kt)("p",{parentName:"blockquote"},"Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The environment variables are embedded during the build time"),". Since Create React App produces a static HTML/CSS/JS bundle, it can\u2019t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, as ",(0,r.kt)("a",{parentName:"p",href:"/docs/title-and-meta-tags#injecting-data-from-the-server-into-the-page"},"described here"),". Alternatively you can rebuild the app on the server anytime you change them."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You must create custom environment variables beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_"),". Any other variables except ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," will be ignored to avoid accidentally ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527"},"exposing a private key on the machine that could have the same name"),". Changing any environment variables will require you to restart the development server if it is running.")),(0,r.kt)("p",null,"These environment variables will be defined for you on ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env"),". For example, having an environment variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," will be exposed in your JS as ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.REACT_APP_NOT_SECRET_CODE"),"."),(0,r.kt)("p",null,"There is also a built-in environment variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),". You can read it from ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),". When you run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start"),", it is always equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"'development'"),", when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," it is always equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"'test'"),", and when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," to make a production bundle, it is always equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"'production'"),". ",(0,r.kt)("strong",{parentName:"p"},"You cannot override ",(0,r.kt)("inlineCode",{parentName:"strong"},"NODE_ENV")," manually.")," This prevents developers from accidentally deploying a slow development build to production."),(0,r.kt)("p",null,"These environment variables can be useful for displaying information conditionally based on where the project is deployed or consuming sensitive data that lives outside of version control."),(0,r.kt)("p",null,"First, you need to have environment variables defined. For example, let\u2019s say you wanted to consume an environment variable inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'render() {\n  return (\n    <div>\n      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>\n      <form>\n        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />\n      </form>\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"During the build, ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.REACT_APP_NOT_SECRET_CODE")," will be replaced with the current value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," environment variable. Remember that the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," variable will be set for you automatically."),(0,r.kt)("p",null,"When you load the app in the browser and inspect the ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),", you will see its value set to ",(0,r.kt)("inlineCode",{parentName:"p"},"abcdef"),", and the bold text will show the environment provided when using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <small>You are running this application in <b>development</b> mode.</small>\n  <form>\n    <input type="hidden" value="abcdef" />\n  </form>\n</div>\n')),(0,r.kt)("p",null,"The above form is looking for a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," from the environment. In order to consume this value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file. Both of these ways are described in the next few sections."),(0,r.kt)("p",null,"Having access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," is also useful for performing actions conditionally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV !== 'production') {\n  analytics.disable();\n}\n")),(0,r.kt)("p",null,"When you compile the app with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),", the minification step will strip out this condition, and the resulting bundle will be smaller."),(0,r.kt)("h2",{id:"referencing-environment-variables-in-the-html"},"Referencing Environment Variables in the HTML"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts@0.9.0")," and higher.")),(0,r.kt)("p",null,"You can also access the environment variables starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"public/index.html"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<title>%REACT_APP_WEBSITE_NAME%</title>\n")),(0,r.kt)("p",null,"Note that the caveats from the above section apply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apart from a few built-in variables (",(0,r.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PUBLIC_URL"),"), variable names must start with ",(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_")," to work."),(0,r.kt)("li",{parentName:"ul"},"The environment variables are injected at build time. If you need to inject them at runtime, ",(0,r.kt)("a",{parentName:"li",href:"/docs/title-and-meta-tags#generating-dynamic-meta-tags-on-the-server"},"follow this approach instead"),".")),(0,r.kt)("h2",{id:"adding-temporary-environment-variables-in-your-shell"},"Adding Temporary Environment Variables In Your Shell"),(0,r.kt)("p",null,"Defining environment variables can vary between OSes. It\u2019s also important to know that this manner is temporary for the life of the shell session."),(0,r.kt)("h3",{id:"windows-cmdexe"},"Windows (cmd.exe)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start\n')),(0,r.kt)("p",null,"(Note: Quotes around the variable assignment are required to avoid a trailing whitespace.)"),(0,r.kt)("h3",{id:"windows-powershell"},"Windows (Powershell)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Powershell"},'($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)\n')),(0,r.kt)("h3",{id:"linux-macos-bash"},"Linux, macOS (Bash)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"REACT_APP_NOT_SECRET_CODE=abcdef npm start\n")),(0,r.kt)("h2",{id:"adding-development-environment-variables-in-env"},"Adding Development Environment Variables In ",(0,r.kt)("inlineCode",{parentName:"h2"},".env")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),(0,r.kt)("p",null,"To define permanent environment variables, create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in the root of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"REACT_APP_NOT_SECRET_CODE=abcdef\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You must create custom environment variables beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_"),". Any other variables except ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," will be ignored to avoid ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527"},"accidentally exposing a private key on the machine that could have the same name"),". Changing any environment variables will require you to restart the development server if it is running.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You need to restart the development server after changing ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".env")," files ",(0,r.kt)("strong",{parentName:"p"},"should be")," checked into source control (with the exclusion of ",(0,r.kt)("inlineCode",{parentName:"p"},".env*.local"),")."),(0,r.kt)("h3",{id:"what-other-env-files-can-be-used"},"What other ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," files can be used?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this feature is ",(0,r.kt)("strong",{parentName:"p"},"available with ",(0,r.kt)("inlineCode",{parentName:"strong"},"react-scripts@1.0.0")," and higher"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env"),": Default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.local"),": Local overrides. ",(0,r.kt)("strong",{parentName:"li"},"This file is loaded for all environments except test.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.development"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.test"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.production"),": Environment-specific settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.development.local"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.test.local"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.production.local"),": Local overrides of environment-specific settings.")),(0,r.kt)("p",null,"Files on the left have more priority than files on the right:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm start"),": ",(0,r.kt)("inlineCode",{parentName:"li"},".env.development.local"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.local"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.development"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run build"),": ",(0,r.kt)("inlineCode",{parentName:"li"},".env.production.local"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.local"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.production"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm test"),": ",(0,r.kt)("inlineCode",{parentName:"li"},".env.test.local"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.test"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," (note ",(0,r.kt)("inlineCode",{parentName:"li"},".env.local")," is missing)")),(0,r.kt)("p",null,"These variables will act as the defaults if the machine does not explicitly set them."),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},"dotenv documentation")," for more details."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need\nthese defined as well. Consult their documentation how to do this. For example, see the documentation for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.travis-ci.com/user/environment-variables/"},"Travis CI")," or ",(0,r.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/config-vars"},"Heroku"),".")),(0,r.kt)("h3",{id:"expanding-environment-variables-in-env"},"Expanding Environment Variables In ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts@1.1.0")," and higher.")),(0,r.kt)("p",null,"Expand variables already on your machine for use in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file (using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv-expand"},"dotenv-expand"),")."),(0,r.kt)("p",null,"For example, to get the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"npm_package_version"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"REACT_APP_VERSION=$npm_package_version\n# also works:\n# REACT_APP_VERSION=${npm_package_version}\n")),(0,r.kt)("p",null,"Or expand variables local to the current ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DOMAIN=www.example.com\nREACT_APP_FOO=$DOMAIN/foo\nREACT_APP_BAR=$DOMAIN/bar\n")))}v.isMDXComponent=!0}}]);
(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[7711],{7711:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var o=n(7896),r=n(1461),a=n(2784),c=n(9741),s=n(6277),l=n(361),i=n(7683);function u(){var e=(0,i.L)().prism,t=(0,l.I)().colorMode,n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var d=n(211),p=n(252),m=n(4501),f=n.n(m),g=(0,p.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),v=(0,p.Z)(/\{([\d,-]+)\}/,{range:1}),h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){var n=e.map((function(e){var n=h[e],o=n.start,r=n.end;return"(?:"+o+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function b(e,t){var n=e.replace(/\n$/,""),o=t.language,r=t.magicComments,a=t.metastring;if(a&&v.test(a)){var c=a.match(v).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var s=r[0].className,l=f()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[s]]}));return{lineClassNames:Object.fromEntries(l),code:n}}if(void 0===o)return{lineClassNames:{},code:n};for(var i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(h),t)}}(o,r),u=n.split("\n"),d=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),m=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),g=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),b=0;b<u.length;){var k=u[b].match(i);if(k){var E=k.slice(1).find((function(e){return void 0!==e}));p[E]?d[p[E]].range+=b+",":m[E]?d[m[E]].start=b:g[E]&&(d[g[E]].range+=d[g[E]].start+"-"+(b-1)+","),u.splice(b,1)}else b+=1}n=u.join("\n");var B={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;f()(n).forEach((function(e){null!=B[e]||(B[e]=[]),B[e].push(t)}))})),{lineClassNames:B,code:n}}var k={codeBlockContainer:"codeBlockContainer_ZGJx"},E=["as"];function B(e){var t=e.as,n=(0,r.Z)(e,E),c=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var o=e[0],r=e[1],a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(u());return a.createElement(t,(0,o.Z)({},n,{style:c,className:(0,s.Z)(n.className,k.codeBlockContainer,d.k.common.codeBlock)}))}var N={codeBlockContent:"codeBlockContent_qZBB",codeBlockTitle:"codeBlockTitle_zAEH",codeBlock:"codeBlock_TAPP",codeBlockStandalone:"codeBlockStandalone_K9VJ",codeBlockLines:"codeBlockLines_AdAo",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_p5De",buttonGroup:"buttonGroup_TNwR"};function C(e){var t=e.children,n=e.className;return a.createElement(B,{as:"pre",tabIndex:0,className:(0,s.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:N.codeBlockLines},t))}var w=n(3364),L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function j(e,t){var n=(0,a.useState)(),o=n[0],r=n[1],c=(0,a.useCallback)((function(){var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=L);var o=(0,w.zX)(t),r=(0,w.Ql)(n);(0,a.useEffect)((function(){var t=new MutationObserver(o);return e&&t.observe(e,r),function(){return t.disconnect()}}),[e,o,r])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},x={Prism:n(7175).Z,theme:T};function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},I.apply(this,arguments)}var S=/\r\n|\r|\n/,_=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},A=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function O(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var P=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),Z(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=I({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=I({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),Z(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=I({},O(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?I({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),Z(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),Z(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=I({},O(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?I({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),Z(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=o[c]++)<r[c];){var i=void 0,u=t[c],d=n[c][a];if("string"==typeof d?(u=c>0?u:["plain"],i=d):(u=A(u,d.type),d.alias&&(u=A(u,d.alias)),i=d.content),"string"==typeof i){var p=i.split(S),m=p.length;s.push({types:u,content:p[0]});for(var f=1;f<m;f++)_(s),l.push(s=[]),s.push({types:u,content:p[f]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return _(s),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),D=P,W={codeLine:"codeLine_DPDv",codeLineNumber:"codeLineNumber_YxQB",codeLineContent:"codeLineContent_SOIp"};function z(e){var t=e.line,n=e.classNames,r=e.showLineNumbers,c=e.getLineProps,l=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=c({line:t,className:(0,s.Z)(n,r&&W.codeLine)}),u=t.map((function(e,t){return a.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))}));return a.createElement("span",i,r?a.createElement(a.Fragment,null,a.createElement("span",{className:W.codeLineNumber}),a.createElement("span",{className:W.codeLineContent},u)):u,a.createElement("br",null))}var H=n(1077);function M(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function R(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}var V={copyButtonCopied:"copyButtonCopied_Mzdr",copyButtonIcons:"copyButtonIcons_MVhB",copyButtonIcon:"copyButtonIcon_yxgH",copyButtonSuccessIcon:"copyButtonSuccessIcon_QJLJ"};function q(e){var t=e.code,n=e.className,o=(0,a.useState)(!1),r=o[0],c=o[1],l=(0,a.useRef)(void 0),i=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var c=document.getSelection(),s=c.rangeCount>0&&c.getRangeAt(0);o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(i){}r.remove(),s&&(c.removeAllRanges(),c.addRange(s)),a&&a.focus()}(t),c(!0),l.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),a.createElement("button",{type:"button","aria-label":r?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,V.copyButton,r&&V.copyButtonCopied),onClick:i},a.createElement("span",{className:V.copyButtonIcons,"aria-hidden":"true"},a.createElement(M,{className:V.copyButtonIcon}),a.createElement(R,{className:V.copyButtonSuccessIcon})))}function F(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}var G={wordWrapButtonIcon:"wordWrapButtonIcon_SMj9",wordWrapButtonEnabled:"wordWrapButtonEnabled_vR9E"};function J(e){var t=e.className,n=e.onClick,o=e.isEnabled,r=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&G.wordWrapButtonEnabled),"aria-label":r,title:r},a.createElement(F,{className:G.wordWrapButtonIcon,"aria-hidden":"true"}))}function $(e){var t,n,r,c,l,d,p,m,f,v,h,y=e.children,k=e.className,E=void 0===k?"":k,C=e.metastring,w=e.title,L=e.showLineNumbers,T=e.language,Z=(0,i.L)().prism,I=Z.defaultLanguage,S=Z.magicComments,_=null!=(t=null!=T?T:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:I,A=u(),O=(r=(0,a.useState)(!1),c=r[0],l=r[1],d=(0,a.useState)(!1),p=d[0],m=d[1],f=(0,a.useRef)(null),v=(0,a.useCallback)((function(){var e=f.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),l((function(e){return!e}))}),[f,c]),h=(0,a.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),j(f,h),(0,a.useEffect)((function(){h()}),[c,h]),(0,a.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:f,isEnabled:c,isCodeScrollable:p,toggle:v}),P=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(g))?void 0:n.groups.title)?t:""}(C)||w,W=b(y,{metastring:C,language:_,magicComments:S}),H=W.lineClassNames,M=W.code,R=null!=L?L:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(C);return a.createElement(B,{as:"div",className:(0,s.Z)(E,_&&!E.includes("language-"+_)&&"language-"+_)},P&&a.createElement("div",{className:N.codeBlockTitle},P),a.createElement("div",{className:N.codeBlockContent},a.createElement(D,(0,o.Z)({},x,{theme:A,code:M,language:null!=_?_:"text"}),(function(e){var t=e.className,n=e.tokens,o=e.getLineProps,r=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:O.codeBlockRef,className:(0,s.Z)(t,N.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,s.Z)(N.codeBlockLines,R&&N.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(z,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:H[t],showLineNumbers:R})}))))})),a.createElement("div",{className:N.buttonGroup},(O.isEnabled||O.isCodeScrollable)&&a.createElement(J,{className:N.codeButton,onClick:function(){return O.toggle()},isEnabled:O.isEnabled}),a.createElement(q,{className:N.codeButton,code:M}))))}var Q=["children"];function K(e){var t=e.children,n=(0,r.Z)(e,Q),s=(0,c.Z)(),l=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?$:C;return a.createElement(i,(0,o.Z)({key:String(s)},n),l)}},4501:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);
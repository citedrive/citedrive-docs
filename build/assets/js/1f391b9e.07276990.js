(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},109:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(105),r=n(3),s=n(103),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:c};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=d({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=d({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,l=d({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==o&&(l.style=void 0!==l.style?d({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),p(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return l[n[0]];var r=a?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(s))}})),p(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,l=e.token,r=d({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(r.style=void 0!==r.style?d({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),p(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],l=0,r=0,s=[],c=[s];r>-1;){for(;(l=a[r]++)<o[r];){var i=void 0,p=t[r],d=n[r][l];if("string"==typeof d?(p=r>0?p:["plain"],i=d):(p=h(p,d.type),d.alias&&(p=h(p,d.alias)),i=d.content),"string"==typeof i){var y=i.split(u),g=y.length;s.push({types:p,content:y[0]});for(var f=1;f<g;f++)m(s),c.push(s=[]),s.push({types:p,content:y[f]})}else r++,t.push(p),n.push(i),a.push(0),o.push(i.length)}r--,t.pop(),n.pop(),a.pop(),o.pop()}return m(s),c}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var b=n(107),v=n.n(b),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(111),E=n(102);var O=()=>{const{prism:e}=Object(E.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||k,a=e.darkTheme||n;return t?a:n},N=n(104),C=n(56),T=n.n(C);const x=/{([\d,-]+)}/,B=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)};function L({children:e,className:t,metastring:n,title:l}){const{prism:c}=Object(E.useThemeConfig)(),[p,d]=Object(a.useState)(!1),[u,m]=Object(a.useState)(!1);Object(a.useEffect)((()=>{m(!0)}),[]);const h=Object(E.parseCodeBlockTitle)(n)||l,y=Object(a.useRef)(null);let g=[];const b=O(),k=Array.isArray(e)?e.join(""):e;if(n&&x.test(n)){const e=n.match(x)[1];g=v()(e).filter((e=>e>0))}let j=t&&t.replace(/language-/,"");!j&&c.defaultLanguage&&(j=c.defaultLanguage);let C=k.replace(/\n$/,"");if(0===g.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return B(["js","jsBlock"]);case"jsx":case"tsx":return B(["js","jsBlock","jsx"]);case"html":return B(["js","jsBlock","html"]);case"python":case"py":return B(["python"]);default:return B()}})(j),n=k.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const l=o+1,r=n[o].match(t);if(null!==r){switch(r.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":a=l;break;case"highlight-end":e+=`${a}-${l-1},`}n.splice(o,1)}else o+=1}g=v()(e),C=n.join("\n")}const L=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}n.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(C),d(!0),setTimeout((()=>d(!1)),2e3)};return o.a.createElement(f,Object(r.a)({},i,{key:String(u),theme:b,code:C,language:j}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:l})=>o.a.createElement("div",{className:T.a.codeBlockContainer},h&&o.a.createElement("div",{style:t,className:T.a.codeBlockTitle},h),o.a.createElement("div",{className:Object(s.a)(T.a.codeBlockContent,j)},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:h})},o.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return g.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>o.a.createElement("span",Object(r.a)({key:t},l({token:e,key:t}))))))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(T.a.copyButton),onClick:L},p?o.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}n(57);var w=n(58),P=n.n(w);var S=e=>function({id:t,...n}){const{navbar:{hideOnScroll:a}}=Object(E.useThemeConfig)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[P.a.enhancedAnchor]:!a}),id:t}),n.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(N.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,n)};const $={code:e=>{const{children:t}=e;return Object(a.isValidElement)(t)?t:t.includes("\n")?o.a.createElement(L,e):o.a.createElement("code",e)},a:e=>o.a.createElement(l.a,e),pre:e=>{var t;const{children:n}=e;return Object(a.isValidElement)(null==n||null===(t=n.props)||void 0===t?void 0:t.children)?null==n?void 0:n.props.children:o.a.createElement(L,Object(a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:S("h1"),h2:S("h2"),h3:S("h3"),h4:S("h4"),h5:S("h5"),h6:S("h6")};t.a=$},118:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(103);var r=function(e,t,n){const[o,l]=Object(a.useState)(void 0);Object(a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(a){let n=0,r=!1;const s=document.getElementsByClassName(e);for(;n<s.length&&!r;){const e=s[n],{href:c}=e,i=decodeURIComponent(c.substring(c.indexOf("#")+1));a.id===i&&(o&&o.classList.remove(t),e.classList.add(t),l(e),r=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},s=n(60),c=n.n(s);const i="table-of-contents__link";function p({toc:e,isChild:t}){return e.length?o.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),o.a.createElement(p,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return r(i,"table-of-contents__link--active",100),o.a.createElement("div",{className:Object(l.a)(c.a.tableOfContents,"thin-scrollbar")},o.a.createElement(p,{toc:e}))}},79:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(108),r=n(106),s=n(109),c=n(118),i=n(102);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:a}=t,{title:p,description:d,wrapperClassName:u,hide_table_of_contents:m}=n,{permalink:h}=a;return o.a.createElement(l.a,{title:p,description:d,permalink:h,wrapperClassName:null!=u?u:i.ThemeClassNames.wrapper.mdxPages,pageClassName:i.ThemeClassNames.page.mdxPage},o.a.createElement("main",null,o.a.createElement("div",{className:"container container--fluid"},o.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--8 col--offset-2"},o.a.createElement("div",{className:"container"},o.a.createElement(r.a,{components:s.a},o.a.createElement(t,null)))),!m&&t.toc&&o.a.createElement("div",{className:"col col--2"},o.a.createElement(c.a,{toc:t.toc})))))))}}}]);
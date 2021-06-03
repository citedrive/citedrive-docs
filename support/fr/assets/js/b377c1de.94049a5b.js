(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[2868],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6597:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:25},u={unversionedId:"overleaf/bibliography-and-citation-styles/agufull",id:"overleaf/bibliography-and-citation-styles/agufull",isDocsHomePage:!1,title:"How to use agufull (aguplus) at Overleaf?",description:"agufull.bst has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: \\bibliographystyle{agufull} The file extension .bst can be omitted.",source:"@site/docs/overleaf/bibliography-and-citation-styles/agufull.md",sourceDirName:"overleaf/bibliography-and-citation-styles",slug:"/overleaf/bibliography-and-citation-styles/agufull",permalink:"/support/fr/docs/overleaf/bibliography-and-citation-styles/agufull",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/overleaf/bibliography-and-citation-styles/agufull.md",version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"How to use thesnumb (afthesis) at Overleaf?",permalink:"/support/fr/docs/overleaf/bibliography-and-citation-styles/thesnumb"},next:{title:"How to use agufull04 (aguplus) at Overleaf?",permalink:"/support/fr/docs/overleaf/bibliography-and-citation-styles/agufull04"}},s=[{value:"Example document with agufull (aguplus)",id:"example-document-with-agufull-aguplus",children:[]},{value:"Create your bibliography with CiteDrive and synchronize it with Overleaf",id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agufull.bst")," has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: ",(0,a.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{agufull}")," The file extension ",(0,a.kt)("inlineCode",{parentName:"p"},".bst")," can be omitted."),(0,a.kt)("h2",{id:"example-document-with-agufull-aguplus"},"Example document with agufull (aguplus)"),(0,a.kt)("p",null,"The following example includes the style definition and the connection to the literature database ",(0,a.kt)("inlineCode",{parentName:"p"},"samples.bib"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"   \\documentclass[a4paper,10pt]{article}\n   \\begin{document}\n   \\section{First chapter}\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.\n   \\medskip\n   %bibliographystyle 'agufull.bst'\n   \\bibliographystyle{agufull}\n   %bibliography file 'samples.bib'.\n   \\bibliography{sample}\n   \\end{document}\n")),(0,a.kt)("h2",{id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf"},"Create your bibliography with CiteDrive and synchronize it with Overleaf"),(0,a.kt)("p",null,"Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more"))}p.isMDXComponent=!0}}]);
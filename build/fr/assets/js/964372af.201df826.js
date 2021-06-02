(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[5284],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=a.createContext({}),s=function(e){var t=a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(b,".").concat(d)]||u[d]||p[d]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5343:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return b},toc:function(){return s},default:function(){return p}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:48},b={unversionedId:"overleaf/bibliography-and-citation-styles/bababbr3-lf",id:"overleaf/bibliography-and-citation-styles/bababbr3-lf",isDocsHomePage:!1,title:"How to use bababbr3-lf (babelbib) at Overleaf?",description:"bababbr3-lf.bst has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: \\bibliographystyle{bababbr3-lf} The file extension .bst can be omitted.",source:"@site/docs/overleaf/bibliography-and-citation-styles/bababbr3-lf.md",sourceDirName:"overleaf/bibliography-and-citation-styles",slug:"/overleaf/bibliography-and-citation-styles/bababbr3-lf",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/bababbr3-lf",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/overleaf/bibliography-and-citation-styles/bababbr3-lf.md",version:"current",sidebarPosition:48,frontMatter:{sidebar_position:48},sidebar:"tutorialSidebar",previous:{title:"How to use babunsrt-fl (babelbib) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/babunsrt-fl"},next:{title:"How to use babalpha-fl (babelbib) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/babalpha-fl"}},s=[{value:"Example document with bababbr3-lf (babelbib)",id:"example-document-with-bababbr3-lf-babelbib",children:[]},{value:"Create your bibliography with CiteDrive and synchronize it with Overleaf",id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bababbr3-lf.bst")," has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: ",(0,i.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{bababbr3-lf}")," The file extension ",(0,i.kt)("inlineCode",{parentName:"p"},".bst")," can be omitted."),(0,i.kt)("h2",{id:"example-document-with-bababbr3-lf-babelbib"},"Example document with bababbr3-lf (babelbib)"),(0,i.kt)("p",null,"The following example includes the style definition and the connection to the literature database ",(0,i.kt)("inlineCode",{parentName:"p"},"samples.bib"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"   \\documentclass[a4paper,10pt]{article}\n   \\begin{document}\n   \\section{First chapter}\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.\n   \\medskip\n   %bibliographystyle 'bababbr3-lf.bst'\n   \\bibliographystyle{bababbr3-lf}\n   %bibliography file 'samples.bib'.\n   \\bibliography{sample}\n   \\end{document}\n")),(0,i.kt)("h2",{id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf"},"Create your bibliography with CiteDrive and synchronize it with Overleaf"),(0,i.kt)("p",null,"Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more"))}p.isMDXComponent=!0}}]);
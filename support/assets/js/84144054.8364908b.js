(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[7862],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return d}});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var b=r.createContext({}),s=function(e){var t=r.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return r.createElement(b.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(i),d=a,f=u["".concat(b,".").concat(d)]||u[d]||c[d]||n;return i?r.createElement(f,o(o({ref:t},p),{},{components:i})):r.createElement(f,o({ref:t},p))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4200:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},metadata:function(){return b},toc:function(){return s},default:function(){return c}});var r=i(2122),a=i(9756),n=(i(7294),i(3905)),o=["components"],l={sidebar_position:54},b={unversionedId:"overleaf/bibliography-and-citation-styles/babplai3-lf",id:"overleaf/bibliography-and-citation-styles/babplai3-lf",isDocsHomePage:!1,title:"How to use babplai3-lf (babelbib) at Overleaf?",description:"babplai3-lf.bst has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: \\bibliographystyle{babplai3-lf} The file extension .bst can be omitted.",source:"@site/docs/overleaf/bibliography-and-citation-styles/babplai3-lf.md",sourceDirName:"overleaf/bibliography-and-citation-styles",slug:"/overleaf/bibliography-and-citation-styles/babplai3-lf",permalink:"/support/docs/overleaf/bibliography-and-citation-styles/babplai3-lf",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/overleaf/bibliography-and-citation-styles/babplai3-lf.md",version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"tutorialSidebar",previous:{title:"How to use babalpha-lf (babelbib) at Overleaf?",permalink:"/support/docs/overleaf/bibliography-and-citation-styles/babalpha-lf"},next:{title:"How to use babplain (babelbib) at Overleaf?",permalink:"/support/docs/overleaf/bibliography-and-citation-styles/babplain"}},s=[{value:"Example document with babplai3-lf (babelbib)",id:"example-document-with-babplai3-lf-babelbib",children:[]},{value:"Create your bibliography with CiteDrive and synchronize it with Overleaf",id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf",children:[]}],p={toc:s};function c(e){var t=e.components,i=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"babplai3-lf.bst")," has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: ",(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{babplai3-lf}")," The file extension ",(0,n.kt)("inlineCode",{parentName:"p"},".bst")," can be omitted."),(0,n.kt)("h2",{id:"example-document-with-babplai3-lf-babelbib"},"Example document with babplai3-lf (babelbib)"),(0,n.kt)("p",null,"The following example includes the style definition and the connection to the literature database ",(0,n.kt)("inlineCode",{parentName:"p"},"samples.bib"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tex"},"   \\documentclass[a4paper,10pt]{article}\n   \\begin{document}\n   \\section{First chapter}\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.\n   \\medskip\n   %bibliographystyle 'babplai3-lf.bst'\n   \\bibliographystyle{babplai3-lf}\n   %bibliography file 'samples.bib'.\n   \\bibliography{sample}\n   \\end{document}\n")),(0,n.kt)("h2",{id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf"},"Create your bibliography with CiteDrive and synchronize it with Overleaf"),(0,n.kt)("p",null,"Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more"))}c.isMDXComponent=!0}}]);
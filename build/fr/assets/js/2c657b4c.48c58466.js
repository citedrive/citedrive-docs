(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[8068],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return f}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(i),f=r,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return i?n.createElement(b,o(o({ref:t},p),{},{components:i})):n.createElement(b,o({ref:t},p))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2155:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=i(2122),r=i(9756),a=(i(7294),i(3905)),o=["components"],l={sidebar_position:153},c={unversionedId:"overleaf/bibliography-and-citation-styles/itaxpf",id:"overleaf/bibliography-and-citation-styles/itaxpf",isDocsHomePage:!1,title:"How to use itaxpf (economic) at Overleaf?",description:"itaxpf.bst has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: \\bibliographystyle{itaxpf} The file extension .bst can be omitted.",source:"@site/docs/overleaf/bibliography-and-citation-styles/itaxpf.md",sourceDirName:"overleaf/bibliography-and-citation-styles",slug:"/overleaf/bibliography-and-citation-styles/itaxpf",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/itaxpf",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/overleaf/bibliography-and-citation-styles/itaxpf.md",version:"current",sidebarPosition:153,frontMatter:{sidebar_position:153},sidebar:"tutorialSidebar",previous:{title:"How to use jpe (economic) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/jpe"},next:{title:"How to use ajae (economic) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/ajae"}},s=[{value:"Example document with itaxpf (economic)",id:"example-document-with-itaxpf-economic",children:[]},{value:"Create your bibliography with CiteDrive and synchronize it with Overleaf",id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf",children:[]}],p={toc:s};function u(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"itaxpf.bst")," has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: ",(0,a.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{itaxpf}")," The file extension ",(0,a.kt)("inlineCode",{parentName:"p"},".bst")," can be omitted."),(0,a.kt)("h2",{id:"example-document-with-itaxpf-economic"},"Example document with itaxpf (economic)"),(0,a.kt)("p",null,"The following example includes the style definition and the connection to the literature database ",(0,a.kt)("inlineCode",{parentName:"p"},"samples.bib"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"   \\documentclass[a4paper,10pt]{article}\n   \\begin{document}\n   \\section{First chapter}\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.\n   \\medskip\n   %bibliographystyle 'itaxpf.bst'\n   \\bibliographystyle{itaxpf}\n   %bibliography file 'samples.bib'.\n   \\bibliography{sample}\n   \\end{document}\n")),(0,a.kt)("h2",{id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf"},"Create your bibliography with CiteDrive and synchronize it with Overleaf"),(0,a.kt)("p",null,"Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more"))}u.isMDXComponent=!0}}]);
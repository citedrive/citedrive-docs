(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[2488],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return b}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(i),b=n,y=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return i?r.createElement(y,a(a({ref:t},p),{},{components:i})):r.createElement(y,a({ref:t},p))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3206:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=i(2122),n=i(9756),o=(i(7294),i(3905)),a=["components"],l={sidebar_position:253},c={unversionedId:"overleaf/bibliography-and-citation-styles/tieice",id:"overleaf/bibliography-and-citation-styles/tieice",isDocsHomePage:!1,title:"How to use tieice (pbibtex) at Overleaf?",description:"tieice.bst has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: \\bibliographystyle{tieice} The file extension .bst can be omitted.",source:"@site/docs/overleaf/bibliography-and-citation-styles/tieice.md",sourceDirName:"overleaf/bibliography-and-citation-styles",slug:"/overleaf/bibliography-and-citation-styles/tieice",permalink:"/support/fr/docs/overleaf/bibliography-and-citation-styles/tieice",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/overleaf/bibliography-and-citation-styles/tieice.md",version:"current",sidebarPosition:253,frontMatter:{sidebar_position:253},sidebar:"tutorialSidebar",previous:{title:"How to use jorsj (pbibtex) at Overleaf?",permalink:"/support/fr/docs/overleaf/bibliography-and-citation-styles/jorsj"},next:{title:"How to use jipsj (pbibtex) at Overleaf?",permalink:"/support/fr/docs/overleaf/bibliography-and-citation-styles/jipsj"}},s=[{value:"Example document with tieice (pbibtex)",id:"example-document-with-tieice-pbibtex",children:[]},{value:"Create your bibliography with CiteDrive and synchronize it with Overleaf",id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf",children:[]}],p={toc:s};function u(e){var t=e.components,i=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tieice.bst")," has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{tieice}")," The file extension ",(0,o.kt)("inlineCode",{parentName:"p"},".bst")," can be omitted."),(0,o.kt)("h2",{id:"example-document-with-tieice-pbibtex"},"Example document with tieice (pbibtex)"),(0,o.kt)("p",null,"The following example includes the style definition and the connection to the literature database ",(0,o.kt)("inlineCode",{parentName:"p"},"samples.bib"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"   \\documentclass[a4paper,10pt]{article}\n   \\begin{document}\n   \\section{First chapter}\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.\n   \\medskip\n   %bibliographystyle 'tieice.bst'\n   \\bibliographystyle{tieice}\n   %bibliography file 'samples.bib'.\n   \\bibliography{sample}\n   \\end{document}\n")),(0,o.kt)("h2",{id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf"},"Create your bibliography with CiteDrive and synchronize it with Overleaf"),(0,o.kt)("p",null,"Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more"))}u.isMDXComponent=!0}}]);
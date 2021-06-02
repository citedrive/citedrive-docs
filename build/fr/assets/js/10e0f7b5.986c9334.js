(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[9292],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,y=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?i.createElement(y,o(o({ref:t},c),{},{components:r})):i.createElement(y,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5002:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=r(2122),n=r(9756),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:120},s={unversionedId:"overleaf/bibliography-and-citation-styles/address-ldif",id:"overleaf/bibliography-and-citation-styles/address-ldif",isDocsHomePage:!1,title:"How to use address-ldif (directory) at Overleaf?",description:"address-ldif.bst has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: \\bibliographystyle{address-ldif} The file extension .bst can be omitted.",source:"@site/docs/overleaf/bibliography-and-citation-styles/address-ldif.md",sourceDirName:"overleaf/bibliography-and-citation-styles",slug:"/overleaf/bibliography-and-citation-styles/address-ldif",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/address-ldif",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/overleaf/bibliography-and-citation-styles/address-ldif.md",version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120},sidebar:"tutorialSidebar",previous:{title:"How to use dinat (dinat) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/dinat"},next:{title:"How to use address-vcard (directory) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/address-vcard"}},d=[{value:"Example document with address-ldif (directory)",id:"example-document-with-address-ldif-directory",children:[]},{value:"Create your bibliography with CiteDrive and synchronize it with Overleaf",id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf",children:[]}],c={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"address-ldif.bst")," has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: ",(0,a.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{address-ldif}")," The file extension ",(0,a.kt)("inlineCode",{parentName:"p"},".bst")," can be omitted."),(0,a.kt)("h2",{id:"example-document-with-address-ldif-directory"},"Example document with address-ldif (directory)"),(0,a.kt)("p",null,"The following example includes the style definition and the connection to the literature database ",(0,a.kt)("inlineCode",{parentName:"p"},"samples.bib"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"   \\documentclass[a4paper,10pt]{article}\n   \\begin{document}\n   \\section{First chapter}\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.\n   \\medskip\n   %bibliographystyle 'address-ldif.bst'\n   \\bibliographystyle{address-ldif}\n   %bibliography file 'samples.bib'.\n   \\bibliography{sample}\n   \\end{document}\n")),(0,a.kt)("h2",{id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf"},"Create your bibliography with CiteDrive and synchronize it with Overleaf"),(0,a.kt)("p",null,"Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more"))}p.isMDXComponent=!0}}]);
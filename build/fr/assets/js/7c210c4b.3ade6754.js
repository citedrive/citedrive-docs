(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[565],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return b},kt:function(){return d}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},b=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=c(i),d=n,y=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return i?r.createElement(y,o(o({ref:t},b),{},{components:i})):r.createElement(y,o({ref:t},b))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5375:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=i(2122),n=i(9756),a=(i(7294),i(3905)),o=["components"],l={sidebar_position:229},s={unversionedId:"overleaf/bibliography-and-citation-styles/listbib",id:"overleaf/bibliography-and-citation-styles/listbib",isDocsHomePage:!1,title:"How to use listbib (listbib) at Overleaf?",description:"listbib.bst has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: \\bibliographystyle{listbib} The file extension .bst can be omitted.",source:"@site/docs/overleaf/bibliography-and-citation-styles/listbib.md",sourceDirName:"overleaf/bibliography-and-citation-styles",slug:"/overleaf/bibliography-and-citation-styles/listbib",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/listbib",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/overleaf/bibliography-and-citation-styles/listbib.md",version:"current",sidebarPosition:229,frontMatter:{sidebar_position:229},sidebar:"tutorialSidebar",previous:{title:"How to use ksfh_nat (ksfh_nat) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/ksfh_nat"},next:{title:"How to use IEEEtranMN (mciteplus) at Overleaf?",permalink:"/fr/docs/overleaf/bibliography-and-citation-styles/IEEEtranMN"}},c=[{value:"Example document with listbib (listbib)",id:"example-document-with-listbib-listbib",children:[]},{value:"Create your bibliography with CiteDrive and synchronize it with Overleaf",id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf",children:[]}],b={toc:c};function p(e){var t=e.components,i=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"listbib.bst")," has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: ",(0,a.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{listbib}")," The file extension ",(0,a.kt)("inlineCode",{parentName:"p"},".bst")," can be omitted."),(0,a.kt)("h2",{id:"example-document-with-listbib-listbib"},"Example document with listbib (listbib)"),(0,a.kt)("p",null,"The following example includes the style definition and the connection to the literature database ",(0,a.kt)("inlineCode",{parentName:"p"},"samples.bib"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"   \\documentclass[a4paper,10pt]{article}\n   \\begin{document}\n   \\section{First chapter}\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.\n   \\medskip\n   %bibliographystyle 'listbib.bst'\n   \\bibliographystyle{listbib}\n   %bibliography file 'samples.bib'.\n   \\bibliography{sample}\n   \\end{document}\n")),(0,a.kt)("h2",{id:"create-your-bibliography-with-citedrive-and-synchronize-it-with-overleaf"},"Create your bibliography with CiteDrive and synchronize it with Overleaf"),(0,a.kt)("p",null,"Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more"))}p.isMDXComponent=!0}}]);
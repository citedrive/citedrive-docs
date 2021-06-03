(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[8346],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,b=u["".concat(d,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5674:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:1,sidebar_label:"address"},d={unversionedId:"bibtex/field-types/address",id:"bibtex/field-types/address",isDocsHomePage:!1,title:"BibTeX Field types: Address",description:"The address-field contains the publisher's (or any other institution) address.",source:"@site/docs/bibtex/field-types/address.md",sourceDirName:"bibtex/field-types",slug:"/bibtex/field-types/address",permalink:"/support/fr/docs/bibtex/field-types/address",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/bibtex/field-types/address.md",version:"current",sidebar_label:"address",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"address"},sidebar:"tutorialSidebar",previous:{title:"Introduction to BibTeX",permalink:"/support/fr/docs/bibtex/intro"},next:{title:"Annote",permalink:"/support/fr/docs/bibtex/field-types/annote"}},l=[{value:"Examples",id:"examples",children:[{value:"<code>article</code>",id:"article",children:[]},{value:"<code>phdthesis</code>",id:"phdthesis",children:[]},{value:"<code>PROCEEDINGS</code> / <code>INPROCEEDINGS</code>",id:"proceedings--inproceedings",children:[]}]}],c={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The address-field contains the publisher's (or any other institution) address.\nIn many cases, the full address is not entered or is omitted for any significant and known publishers (cf. Van Lauen)."),(0,o.kt)("p",null,"The author can add the American publication's address, the city's name, followed by the state (USPS abbreviation) in brackets."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'For example, "Columbus, Ohio" is indicated as "Columbus, OH."')),(0,o.kt)("p",null,"In Europe, the state is not abbreviated but given in full."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'For example, "Dusseldorf, Germany."')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"article"},(0,o.kt)("inlineCode",{parentName:"h3"},"article")),(0,o.kt)("h3",{id:"phdthesis"},(0,o.kt)("inlineCode",{parentName:"h3"},"phdthesis")),(0,o.kt)("p",null,"The author could add the university's address where the beneficiary PhD-Candidate has written his doctoral thesis, which the author wants to cite."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@phdthesis{Peterson2003very,\n  author  = {Arnold Peterson},\n  title   = {My very own PhD-Thesis by Arnold Peterson},\n  school  = {The university / school name},\n  year    = 2004,\n  address = {The address of the University / school},\n  month   = 1,\n  ...\n}\n")),(0,o.kt)("h3",{id:"proceedings--inproceedings"},(0,o.kt)("inlineCode",{parentName:"h3"},"PROCEEDINGS")," / ",(0,o.kt)("inlineCode",{parentName:"h3"},"INPROCEEDINGS")),(0,o.kt)("p",null,'Although controversially argued the author may add the address where the conference took place. In contrast, the publisher/organizer\'s address, if necessary, will be added to the "publisher" / organizer field in the reference above types.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@PROCEEDINGS{ (...),\n\n  ...\n\n  address = {The address of the proceedings},\n\n  ...\n}\n")))}p.isMDXComponent=!0}}]);
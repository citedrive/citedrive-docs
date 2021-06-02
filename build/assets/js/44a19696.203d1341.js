(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[2789],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return u}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),f=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=f(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=f(t),u=i,b=d["".concat(a,".").concat(u)]||d[u]||p[u]||o;return t?n.createElement(b,s(s({ref:r},l),{},{components:t})):n.createElement(b,s({ref:r},l))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var f=2;f<o;f++)s[f]=t[f];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8667:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return f},default:function(){return p}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),s=["components"],c={sidebar_position:6,sidebar_label:"crossref"},a={unversionedId:"bibtex/field-types/crossref",id:"bibtex/field-types/crossref",isDocsHomePage:!1,title:"BibTeX Field types: crossref",description:'If several items from your database refer to a specific one, its ID can be entered in "crossref" of the respective entries.',source:"@site/docs/bibtex/field-types/crossref.md",sourceDirName:"bibtex/field-types",slug:"/bibtex/field-types/crossref",permalink:"/docs/bibtex/field-types/crossref",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/bibtex/field-types/crossref.md",version:"current",sidebar_label:"crossref",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"crossref"},sidebar:"tutorialSidebar",previous:{title:"chapter",permalink:"/docs/bibtex/field-types/chapter"},next:{title:"doi",permalink:"/docs/bibtex/field-types/doi"}},f=[{value:"crossref in CiteDrive",id:"crossref-in-citedrive",children:[]}],l={toc:f};function p(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'If several items from your database refer to a specific one, its ID can be entered in "crossref" of the respective entries.\nThis means, if you have two entries, A and B: You enter the ID of entry A in B\'s crossref field, missing data from A will be inherited by B.'),(0,o.kt)("p",null,'The idea is that if you cite, for example, several "inproceedings" of "proceedings," the publishing date only has to be entered once.'),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, B and C will inherit 'year' from A. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@inproceedings{C,\n\n    crossref = {A},\n}\n\n@inproceedings{B,\n    \n    crossref = {A},\n}\n\n@proceedings{A,\n    year = {2015},\n\n}\n")),(0,o.kt)("h2",{id:"crossref-in-citedrive"},"crossref in CiteDrive"),(0,o.kt)("p",null,"The crossref-field is supported in CiteDrive, if you create a BibTeX-project."))}p.isMDXComponent=!0}}]);
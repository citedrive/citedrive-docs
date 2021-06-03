(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[9345],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3250:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:8,sidebar_label:"editor"},l={unversionedId:"bibtex/field-types/editor",id:"bibtex/field-types/editor",isDocsHomePage:!1,title:"BibTeX Field types: editor",description:"In the `editor`-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author's name.",source:"@site/docs/bibtex/field-types/editor.md",sourceDirName:"bibtex/field-types",slug:"/bibtex/field-types/editor",permalink:"/support/fr/docs/bibtex/field-types/editor",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/bibtex/field-types/editor.md",version:"current",sidebar_label:"editor",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"editor"},sidebar:"tutorialSidebar",previous:{title:"BibTeX Field types: edition",permalink:"/support/fr/docs/bibtex/field-types/edition"},next:{title:"BibTeX Field types: howpublished",permalink:"/support/fr/docs/bibtex/field-types/howpublished"}},d=[{value:"Notation: <code>{Firstname Lastname}</code>",id:"notation-firstname-lastname",children:[{value:"Example, <code>{Firstname Lastname}</code>",id:"example-firstname-lastname",children:[]}]},{value:"Notation: <code>{Lastname, Firstname}</code>",id:"notation-lastname-firstname",children:[{value:"Example, <code>{Lastname, Firstname}</code>",id:"example-lastname-firstname",children:[]}]},{value:"Notation: <code>{Lastname, Suffix, Firstname}</code>",id:"notation-lastname-suffix-firstname",children:[{value:"Example, <code>{Lastname, Suffix, Firstname}</code>",id:"example-lastname-suffix-firstname",children:[]}]},{value:"How to add multiple Editors in BibTeX?",id:"how-to-add-multiple-editors-in-bibtex",children:[{value:"Example, &quot;How to add multiple Editors?&quot;&quot;",id:"example-how-to-add-multiple-editors",children:[]}]}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"editor"),"-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author's name."),(0,r.kt)("h2",{id:"notation-firstname-lastname"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"h2"},"{Firstname Lastname}")),(0,r.kt)("p",null,"A natural indication such as ",(0,r.kt)("inlineCode",{parentName:"p"},"{Firstname Lastname}"),' is possible, but not vice versa, "Lastname Firstname."'),(0,r.kt)("h3",{id:"example-firstname-lastname"},"Example, ",(0,r.kt)("inlineCode",{parentName:"h3"},"{Firstname Lastname}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Isaac Newton}\n\n  ...\n\n}\n")),(0,r.kt)("h2",{id:"notation-lastname-firstname"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"h2"},"{Lastname, Firstname}")),(0,r.kt)("p",null,"However, we recommend the following way ",(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname}")," i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name."),(0,r.kt)("h3",{id:"example-lastname-firstname"},"Example, ",(0,r.kt)("inlineCode",{parentName:"h3"},"{Lastname, Firstname}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Newton, Isaac}\n\n  ...\n\n}\n")),(0,r.kt)("h2",{id:"notation-lastname-suffix-firstname"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"h2"},"{Lastname, Suffix, Firstname}")),(0,r.kt)("p",null,"If you want to specify any suffix, for example, Junior, Senior, the 5th (Jr. Sr. V), do so in the following way strictly in this order, separating each component with a comma:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Suffix, Firstname}")),(0,r.kt)("h3",{id:"example-lastname-suffix-firstname"},"Example, ",(0,r.kt)("inlineCode",{parentName:"h3"},"{Lastname, Suffix, Firstname}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={King, Jr , Luther}\n\n  ...\n\n}\n")),(0,r.kt)("h2",{id:"how-to-add-multiple-editors-in-bibtex"},"How to add multiple Editors in BibTeX?"),(0,r.kt)("p",null,"You specify the individual editor in the manner described above. The separator, AND, divides multiple authors. So in this way:\n",(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}")),(0,r.kt)("h3",{id:"example-how-to-add-multiple-editors"},'Example, "How to add multiple Editors?""'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Fisher, James AND Clark, John}\n\n  ...\n\n}\n")))}c.isMDXComponent=!0}}]);
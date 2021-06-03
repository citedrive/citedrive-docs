(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[3521],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},680:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3,sidebar_label:"Introduction"},c={unversionedId:"bibtex/intro",id:"bibtex/intro",isDocsHomePage:!1,title:"Introduction to BibTeX",description:"BibTeX, by Oren Patashnik and Leslie Lamport (1985),  is a reference management software for collecting and formatting references and is commonly used in conjunction with LaTeX.",source:"@site/docs/bibtex/intro.md",sourceDirName:"bibtex",slug:"/bibtex/intro",permalink:"/support/docs/bibtex/intro",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/bibtex/intro.md",version:"current",sidebar_label:"Introduction",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"toast Style",permalink:"/support/docs/r-markdown/bibliography-and-citation-styles/toast"},next:{title:"BibTeX Field types: Address",permalink:"/support/docs/bibtex/field-types/address"}},s=[{value:"CiteDrive",id:"citedrive",children:[]},{value:"Format",id:"format",children:[]},{value:"Literature database &#39;bib file",id:"literature-database-bib-file",children:[{value:"Example",id:"example",children:[]}]},{value:"How to cite a source",id:"how-to-cite-a-source",children:[]},{value:"Entry types",id:"entry-types",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"BibTeX, by ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Oren_Patashnik"},"Oren Patashnik")," and ",(0,a.kt)("a",{parentName:"p",href:"http://lamport.org/"},"Leslie Lamport "),"(1985),  is a reference management software for collecting and formatting references and is commonly used in conjunction with LaTeX."),(0,a.kt)("h2",{id:"citedrive"},"CiteDrive"),(0,a.kt)("p",null,"!!! CiteDrive provides native support for BibTeX, with all reference types and fields. Try it out right now - for free! "),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("p",null,"Each literature source (book, paper, etc.) can be stored with the information attributes needed for citation and for inclusion in the bibliography in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@Entry-type{citeID,\n  title={the title of the work}\n  author={lastname_1, firstnam_1 AND lastname_2, firstname_2 AND ... AND lastname_n, firstname_n}\n  field_type_1={ ... }\n  field_type_2={ ... }\n  ...\n  field_type_n={ ... }\n}\n")),(0,a.kt)("p",null,"Where 'entry-type' can act for literature types of the source to be cited, such as 'book', 'article', 'manual'. All valid entry types and related notes can be read in the corresponding chapter 'Entry-types'."),(0,a.kt)("p",null,"An example for book:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@book{article1,\n  ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"citeID")," stands for unique identification of a literature source to which one refers when citing. Within a project and in all .bib files the ID must be unique.\nThe 'citeID' can be any string, such as ",(0,a.kt)("em",{parentName:"p"},"article1"),", as in the example above. In many cases this identification is composed of the surname of the first author, the year of publication and any word from the title - the latter to avoid collisions."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Citedrive sets unique and fully automatic uuid to edit literature sources also afterwards.")),(0,a.kt)("p",null,"Note: Sometimes and especially in older documentation, such as from ... (edit here)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@book(article1,\n  ...\n)\n")),(0,a.kt)("h2",{id:"literature-database-bib-file"},"Literature database 'bib file"),(0,a.kt)("p",null,"The bibliographic database is a simple text file ('bib-file') in which all bibliographic sources are collected one after the other in the manner described above which the user wishes to use to cite any work. A certain order is not necessary."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},'@article{sedelis2000mptp,\n  title={MPTP susceptibility in the mouse: behavioral, neurochemical, and histological analysis of gender and strain differences},\n  author={Sedelis, Marco and Hofele, Katja and Auburger, Georg W and Morgan, Sarah and Huston, Joseph P and Schwarting, Rainer KW},\n  journal={Behavior genetics},\n  volume={30},\n  number={3},\n  pages={171--182},\n  year={2000},\n  publisher={Springer}\n}\n\n@article{steinbeck2003chemistry,\n  title={{The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},\n  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},\n  journal={Journal of chemical information and computer sciences},\n  volume={43},\n  number={2},\n  pages={493--500},\n  year={2003},\n  publisher={ACS Publications}\n}\n\n@article{einstein1935can,\n  title={Can quantum-mechanical description of physical reality be considered complete?},\n  author={Einstein, Albert and Podolsky, Boris and Rosen, Nathan},\n  journal={Physical review},\n  volume={47},\n  number={10},\n  pages={777},\n  year={1935},\n  publisher={APS}\n}\n\n@Book{abramowitz+stegun,\n author = "Milton {Abramowitz} and Irene A. {Stegun}"\n title = "Handbook of Mathematical Functions with\n              Formulas, Graphs, and Mathematical Tables",\n publisher = "Dover",\n year = 1964,\n address = "New York City",\n edition = "ninth Dover printing, tenth GPO printing\n}\n\n')),(0,a.kt)("h2",{id:"how-to-cite-a-source"},"How to cite a source"),(0,a.kt)("h2",{id:"entry-types"},"Entry types"))}d.isMDXComponent=!0}}]);
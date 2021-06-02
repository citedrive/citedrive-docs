(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[2906],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6650:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:5,sidebar_label:"email"},c={unversionedId:"bibtex/field-types/email",id:"bibtex/field-types/email",isDocsHomePage:!1,title:"email",description:"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported.",source:"@site/docs/bibtex/field-types/email.md",sourceDirName:"bibtex/field-types",slug:"/bibtex/field-types/email",permalink:"/docs/bibtex/field-types/email",editUrl:"https://github.com/citedrive/citedrive-docs/tree/main/docs/bibtex/field-types/email.md",version:"current",sidebar_label:"email",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"email"},sidebar:"tutorialSidebar",previous:{title:"booktitle",permalink:"/docs/bibtex/field-types/booktitle"},next:{title:"chapter",permalink:"/docs/bibtex/field-types/chapter"}},s=[{value:"As a note to display at the end of the reference:",id:"as-a-note-to-display-at-the-end-of-the-reference",children:[]},{value:"To display behind the family name:",id:"to-display-behind-the-family-name",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported."),(0,o.kt)("p",null,"To specify email addresses, the following variants are recommended:"),(0,o.kt)("h2",{id:"as-a-note-to-display-at-the-end-of-the-reference"},"As a note to display at the end of the reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},'@book{ ... ,\n author = {Muller, John},\n\n ...\n\n note = "{\\tt john.muller@example.com}"\n}\n')),(0,o.kt)("h2",{id:"to-display-behind-the-family-name"},"To display behind the family name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n author = {Muller {\\tt john.muller@example.com}, John },\n\n ...\n\n}\n")))}p.isMDXComponent=!0}}]);
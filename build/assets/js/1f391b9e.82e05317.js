(self.webpackChunkcitedrive_docs_com=self.webpackChunkcitedrive_docs_com||[]).push([[13085],{79366:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(32611),c=n(3905),l=n(3541),o=n(571),i=n(86700);t.default=function(e){var t=e.content,n=t.frontMatter,s=t.metadata,m=n.title,d=n.description,u=n.wrapperClassName,f=n.hide_table_of_contents,v=s.permalink;return a.createElement(r.Z,{title:m,description:d,permalink:v,wrapperClassName:null!=u?u:i.kM.wrapper.mdxPages,pageClassName:i.kM.page.mdxPage},a.createElement("main",null,a.createElement("div",{className:"container container--fluid"},a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--8 col--offset-2"},a.createElement("div",{className:"container"},a.createElement(c.Zo,{components:l.Z},a.createElement(t,null)))),!f&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:t.toc})))))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010);var c=function(e,t,n){var r=(0,a.useState)(void 0),c=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,i=document.getElementsByClassName(e);r<i.length&&!o;){var s=i[r],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===d&&(c&&c.classList.remove(t),s.classList.add(t),l(s),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",o="table-of-contents__link";function i(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return c(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(i,{toc:t}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t(0),r=t.n(l),n=t(96),s=t(99),m=t(56),c=t.n(m);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(n.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},107:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(96),s=t(100),m=t(98),c=t(99),i=t(108),o=t(106),g=t(58),u=t.n(g),d=t(97);a.a=function(e){const a=function(){const{selectMessage:e}=Object(d.usePluralForm)();return a=>{const t=Math.ceil(a);return e(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:l,metadata:g,truncated:p,isBlogPostPage:h=!1}=e,{date:E,formattedDate:b,permalink:N,tags:v,readingTime:f}=g,{author:k,title:w,image:_,keywords:T}=l,P=l.author_url||l.authorURL,y=l.author_title||l.authorTitle,L=l.author_image_url||l.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keywords:T,image:_}),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return r.a.createElement("header",null,r.a.createElement(e,{className:Object(n.a)("margin-bottom--sm",u.a.blogPostTitle)},h?w:r.a.createElement(c.a,{to:N},w)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:u.a.blogPostDate},b,f&&r.a.createElement(r.a.Fragment,null," \xb7 ",a(f)))),r.a.createElement("div",{className:"avatar margin-vert--md"},L&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:P},r.a.createElement("img",{src:L,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:P},k)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.a.createElement("div",{className:"markdown"},r.a.createElement(s.a,{components:i.a},t)),(v.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),v.map((({label:e,permalink:a})=>r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},e)))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:g.permalink,"aria-label":`Read more about ${w}`},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},81:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(101),s=t(107),m=t(99),c=t(104),i=t(98),o=t(97);function g({tagName:e,count:a}){const t=function(){const{selectMessage:e}=Object(o.usePluralForm)();return a=>e(a,Object(i.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}();return r.a.createElement(i.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:t(a),tagName:e}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){const{metadata:a,items:t,sidebar:l}=e,{allTagsPath:o,name:u,count:d}=a;return r.a.createElement(n.a,{title:`Posts tagged "${u}"`,description:`Blog | Tagged "${u}"`,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(c.a,{sidebar:l})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(g,{count:d,tagName:u})),r.a.createElement(m.a,{href:o},r.a.createElement(i.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);
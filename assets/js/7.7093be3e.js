(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{171:function(t,e){t.exports={appId:"yb3CWSllUIjpVQRQHcgMTQW1-gzGzoHsz",appKey:"h1bu1YYYRY8tvF48KX1YKv2m"}},225:function(t,e,n){"use strict";n.r(e);var a={computed:{comment:function(){var t=this.$frontmatter.comment,e=void 0===t?"true":t;return e},page:function(){var t=this.$page,e=t.path,n=void 0===e?"/":e,a=t.title;return{path:n,title:void 0===a?"首页":a}}},mounted:function(){this.renderValine()},methods:{renderValine:function(){"undefined"!=typeof windou&&(this.windou=windou,window.AV=n(177));var t=n(171);new(n(178))({el:"#vcomments",appId:t.appId,appKey:t.appKey,notify:!1,verify:!1,avatar:"",meta:["nick","mail","link"],visitor:!0,pageSize:20,path:window.location.pathname,placeholder:"欢迎留言..."})}}},i=n(19),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comment?n("div",[n("h3"),t._v(" "),n("span",{staticClass:"leancloud_visitors",attrs:{id:t.page.path,"data-flag-title":t.page.title}},[n("em",{staticClass:"post-meta-item-text"},[t._v("阅读量：")]),t._v(" "),n("i",{staticClass:"leancloud-visitors-count"},[t._v("1000000")])]),t._v(" "),n("h3",[t._v("文章评论：")]),t._v(" "),n("div",{attrs:{id:"vcomments"}})]):t._e()}),[],!1,null,null,null);e.default=o.exports}}]);
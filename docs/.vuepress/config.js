const pluginConf = require('../../config/pluginConf.js');
const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');


module.exports = {
  title: 'ALL FOR ONE',
  description: 'Java学习资料,Java笔记,Spring全家桶,Mysql',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/images/icon01.jpeg' }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?xxxx";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  //base: '/blog/',
  plugins: ['@vuepress/pwa'],
  plugins: pluginConf,
  themeConfig: { 
    lastUpdated: '最近更新时间', // string | boolean
    // repo: 'zhenguser/blog',
    //repoLabel: '查看源码',
    logo: '/images/icon01.jpeg',
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑文档',
    nav: navConf,
    sidebar: sidebarConf,
    // sidebarDepth: 2,    // 可选的, 默认值是
    displayAllHeaders: true,// 默认值：false
    activeHeaderLinks: false, // 默认值：true
    markdown: {
      lineNumbers: true
    }
  } 
} 
 module.exports = [
    { text: "首页", link: "/" },

    { text: "前端", 
      items: [
        { text: 'JavaScript', link: '/structure/' },
        { text: "Vue", link: "/designPattern/" }, 
        { text: "Axious", link: "/framework/" }, 
        { text: '其他', link: '/algorithm/' }
      ]
    }, 
    { text: "Java", 
      ariaLabel: '数据结构与算法 Menu',
      items: [
        { text: "设计模式", link: "/designPattern/" },
        { text: "第三方框架", link: "/framework/" }, 
        { text: '其他', link: '/structure/' }
      ]
    },
    { text: "算法", link: "/algorithm/" },
    { text: "网络", link: "/network/" },
    { text: "数据库", link: "/database/"},
    { text: "更多",
      items: [
        { text: 'Features', link: '/algorithm/' },
        { text: '测试', link: '/more/test/' },
      ]
    }, 
    { text: "关于", link: "/about/" },
 ];
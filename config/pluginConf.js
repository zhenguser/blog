module.exports = {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用。",
          buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics':
      {
        'ga':'UA-00000000-0' // UA-00000000-0
      }
};
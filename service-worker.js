/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "25485fc6b1d188216d442ea7cff59167"
  },
  {
    "url": "about/about1.html",
    "revision": "f7b05f46196db2c2c93323076764b1d8"
  },
  {
    "url": "about/index.html",
    "revision": "29b9f40f64ed89f6fbecf6f42e7d7935"
  },
  {
    "url": "algorithm/algorithm1.html",
    "revision": "d3e3c8b541c6d4514c7508e7500375e8"
  },
  {
    "url": "algorithm/algorithm2.html",
    "revision": "c759f891e2bfbf65ebc00862551d1066"
  },
  {
    "url": "algorithm/algorithm3.html",
    "revision": "db87a050513b8926ced909b91e96f265"
  },
  {
    "url": "algorithm/index.html",
    "revision": "16f21228d9362ae8d8d67f7738c58422"
  },
  {
    "url": "assets/css/0.styles.c19e0299.css",
    "revision": "cfba8716ea9f77f27d45d96c9a894cc9"
  },
  {
    "url": "assets/img/java1-1.d8be2d80.png",
    "revision": "d8be2d803268aaf8c998e38ee93f337e"
  },
  {
    "url": "assets/img/java1-2.98723df2.png",
    "revision": "98723df25b7f9fc539002ac3f45b8bf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.69163e16.js",
    "revision": "f55e4d7a12e87203c4533bdf2fc8d2ae"
  },
  {
    "url": "assets/js/10.991e5a5a.js",
    "revision": "04f729a3298bc5d4068c5918ee0bd9c1"
  },
  {
    "url": "assets/js/11.efa42502.js",
    "revision": "b34d1402ff0baaa7c004bfbb05227e2e"
  },
  {
    "url": "assets/js/12.969d7157.js",
    "revision": "8028943d5e5b75a186720a90b4882fc4"
  },
  {
    "url": "assets/js/13.0029625e.js",
    "revision": "8294bb8e0caaa3ad4303614dbafed7c9"
  },
  {
    "url": "assets/js/14.939b485a.js",
    "revision": "f9af2e758f2f28de3b2e45b600a36da7"
  },
  {
    "url": "assets/js/15.bbeed6fe.js",
    "revision": "7863b0f57d08a98c2a224441f027d00b"
  },
  {
    "url": "assets/js/16.73ee86c5.js",
    "revision": "cc7ab93a1db3911f51ff37ce910a214e"
  },
  {
    "url": "assets/js/17.5c7a2d4f.js",
    "revision": "82bd4088f2639e43ebf6a784a00cce40"
  },
  {
    "url": "assets/js/18.f78397f5.js",
    "revision": "1fca29083c5d9ddea1694261ff9a5087"
  },
  {
    "url": "assets/js/19.dcdce965.js",
    "revision": "c5f260dde700a187ad7e77c7a79ea1f6"
  },
  {
    "url": "assets/js/20.3b190664.js",
    "revision": "f4c346bee0b2a6f5e9046594a7f5457d"
  },
  {
    "url": "assets/js/21.dfbef666.js",
    "revision": "eb7ed9b66de33b6b5cbf2324430a89af"
  },
  {
    "url": "assets/js/22.74892e1f.js",
    "revision": "65fe841c1556eb887637c32c8e3f29be"
  },
  {
    "url": "assets/js/23.1c940112.js",
    "revision": "0f3a9f4659061bc22c587af8dd9bac0c"
  },
  {
    "url": "assets/js/24.43f6e55b.js",
    "revision": "b49dcb57b50ff29dfb752ee9ac636aee"
  },
  {
    "url": "assets/js/25.1fd6fef8.js",
    "revision": "001ead0d5bcd137f9c91e4033d24bd71"
  },
  {
    "url": "assets/js/26.c084db6d.js",
    "revision": "d0556b61ee5d5aa7a8056dc112f61e2c"
  },
  {
    "url": "assets/js/27.c95d3b77.js",
    "revision": "2f03f5ceac4fcf6c4c5d5c0b43448b8d"
  },
  {
    "url": "assets/js/28.037cb8b9.js",
    "revision": "2e867fa3a5a74b4e364fd42f0b30cb14"
  },
  {
    "url": "assets/js/29.d0a475b9.js",
    "revision": "a1568ee1b9543ac663805bc7d7b42c00"
  },
  {
    "url": "assets/js/3.bef2b693.js",
    "revision": "16c1276aeba7bbb76fddc3db9d9a7c8e"
  },
  {
    "url": "assets/js/30.07c5ca37.js",
    "revision": "98048ca64df572d38d97cda79e840349"
  },
  {
    "url": "assets/js/31.69871ea1.js",
    "revision": "d6bf17dea625d8e262f2447ce2433271"
  },
  {
    "url": "assets/js/32.b1a69258.js",
    "revision": "a6379c0e41a6304892b1b1071acfb956"
  },
  {
    "url": "assets/js/33.28c897b5.js",
    "revision": "2d9c4499f7b319c16c17b34fc4683591"
  },
  {
    "url": "assets/js/34.cd1c7c76.js",
    "revision": "9b8b22e89056aff6914240fc483baf54"
  },
  {
    "url": "assets/js/35.d8f86f1f.js",
    "revision": "2f370f8564ce489a0532e0b1a25ebed9"
  },
  {
    "url": "assets/js/36.77ce635a.js",
    "revision": "6d2bccaf81243a5d825f45c0ab6fe83b"
  },
  {
    "url": "assets/js/37.21719f00.js",
    "revision": "26512ea81006153a17534b5ddd995022"
  },
  {
    "url": "assets/js/38.193d0706.js",
    "revision": "2770e2d5f7ab3ca78b5f6f2bab8e32d1"
  },
  {
    "url": "assets/js/39.e698c841.js",
    "revision": "376a627882f6454c757139aa9574f3c3"
  },
  {
    "url": "assets/js/4.b73437c6.js",
    "revision": "eb2af0d9152830152d5f004c9e54313e"
  },
  {
    "url": "assets/js/40.743a57bc.js",
    "revision": "68fae09d68541b4f96bfb89f570976b4"
  },
  {
    "url": "assets/js/41.ade98a02.js",
    "revision": "ca0173bc268c596a0b4dceb96e34a597"
  },
  {
    "url": "assets/js/42.c389813d.js",
    "revision": "5e098acc3a00b8660db1102673fe6437"
  },
  {
    "url": "assets/js/43.96bb6038.js",
    "revision": "dec05b947bca68825ad27b2aec98e4dc"
  },
  {
    "url": "assets/js/44.79c2ea49.js",
    "revision": "96c567ec30c3540058dda6c7f3613184"
  },
  {
    "url": "assets/js/45.4fdc695e.js",
    "revision": "554468f302f9b70ef666f2030d754e6b"
  },
  {
    "url": "assets/js/46.c2dde55d.js",
    "revision": "81f42f68f40d5d933a5b884366283e6b"
  },
  {
    "url": "assets/js/47.953a180e.js",
    "revision": "68595942b57af9110d8d4b70e8e6b404"
  },
  {
    "url": "assets/js/48.ef15988a.js",
    "revision": "48848b0897be9375a635aede5f0e220d"
  },
  {
    "url": "assets/js/49.a02f3ce7.js",
    "revision": "793285d7bfbcf0f7308e0568a586bcfe"
  },
  {
    "url": "assets/js/5.3ce096f1.js",
    "revision": "c6af26d426751cced58711719303e2a7"
  },
  {
    "url": "assets/js/50.a2591607.js",
    "revision": "8058d7efc3805af8954aaae19e01d5f1"
  },
  {
    "url": "assets/js/6.637b5602.js",
    "revision": "41b15267f5d2102f68ed4c60bda01df2"
  },
  {
    "url": "assets/js/7.7093be3e.js",
    "revision": "9d6501eb09e37d9fe218e0737f476cf4"
  },
  {
    "url": "assets/js/8.ab4c53ca.js",
    "revision": "1b7958e773ab5ff4605cb59e3492bbb3"
  },
  {
    "url": "assets/js/9.e7ce857f.js",
    "revision": "f0cf4984ee079cfcaf63a70b9247791d"
  },
  {
    "url": "assets/js/app.1662ca67.js",
    "revision": "33f7747e7d01a68ace1e7bb0181f76b1"
  },
  {
    "url": "designPattern/designPattern1.html",
    "revision": "b9e5a8c910a00c8e39eb60dedf6b16cd"
  },
  {
    "url": "designPattern/designPattern2.html",
    "revision": "620cf386a73b7edaf79a9cacb7c8526c"
  },
  {
    "url": "designPattern/index.html",
    "revision": "fa43ecd71b444782e3eafbd726c18eb6"
  },
  {
    "url": "development/development1.html",
    "revision": "9397c2ecd9cfa9daa859a0652bfd994e"
  },
  {
    "url": "development/development2.html",
    "revision": "9f42513f8da2e583f78fb39541f84d61"
  },
  {
    "url": "development/development3.html",
    "revision": "d2476a0135dc7836c1755a137caac88d"
  },
  {
    "url": "development/development4.html",
    "revision": "e0b90dd851ca306f38defc3745b2225f"
  },
  {
    "url": "development/index.html",
    "revision": "05f64abaaf3d49b1c074a72dd70dd0c8"
  },
  {
    "url": "framework/framework1.html",
    "revision": "562a59591c4824ac85c9967c89379d6c"
  },
  {
    "url": "framework/framework2.html",
    "revision": "5e47e228e38ead607bf3c8f4158bdb9a"
  },
  {
    "url": "framework/index.html",
    "revision": "61a492740c762971778a4511b811ab85"
  },
  {
    "url": "frontend/index.html",
    "revision": "bd7d02850e49e03740d6aa9b47dcf76b"
  },
  {
    "url": "frontend/javascript1.html",
    "revision": "a868eb03c69b0564dec9f741e9832078"
  },
  {
    "url": "frontend/javascript2.html",
    "revision": "8b20801c8c2e21ef5c1c5c1fe8bb1019"
  },
  {
    "url": "images/headimg01.jpeg",
    "revision": "2ea42270b28360d6409def5172acb30d"
  },
  {
    "url": "images/icon01.jpeg",
    "revision": "5701e1f0f68b81893a6a327888f3a2e0"
  },
  {
    "url": "index.html",
    "revision": "8c082c383d55fd5bdd0ad8a0a18246c4"
  },
  {
    "url": "java/index.html",
    "revision": "1e5aed11ccb609c478a4dcb22924d2e9"
  },
  {
    "url": "java/java1.html",
    "revision": "7e25b3efad0cbc93ff3070c9fe7aca7e"
  },
  {
    "url": "java/java2.html",
    "revision": "1dcb47bb805ba84491bdf02f028175f5"
  },
  {
    "url": "java/java3.html",
    "revision": "315947a634b4d6d4ba63a578a2fe8450"
  },
  {
    "url": "java/java4.html",
    "revision": "ee7977f41141f891c474ecdca0a56df2"
  },
  {
    "url": "java/java5.html",
    "revision": "27b44a1d25e33f2e06d0e9fbec7efbc1"
  },
  {
    "url": "java/java6.html",
    "revision": "b2ba443711b2640205d627ba0b5f2036"
  },
  {
    "url": "java/java7.html",
    "revision": "62df879a7091be4f5746ee49f5511bfc"
  },
  {
    "url": "java/java8.html",
    "revision": "4feb034bb5dfabf6418ea229ceed9304"
  },
  {
    "url": "java/java9.html",
    "revision": "5162c5c1174a0933fd76522e7689f783"
  },
  {
    "url": "more/index.html",
    "revision": "80290ee642fb1c0ba7c677a4ae10fbbe"
  },
  {
    "url": "more/more1.html",
    "revision": "8ebc795376ab61058effdae2b689fae0"
  },
  {
    "url": "more/more2.html",
    "revision": "48e565b3e19a59c6047db56299751271"
  },
  {
    "url": "network/index.html",
    "revision": "378b735607c56b07c4d5a8eb48aedc97"
  },
  {
    "url": "network/network1.html",
    "revision": "d21459dc78c802f824d4774e0b4acc5b"
  },
  {
    "url": "network/network2.html",
    "revision": "b348a2c8aef226c3345b557de78eb996"
  },
  {
    "url": "other/index.html",
    "revision": "6f90d601141808008cf329795c65acfd"
  },
  {
    "url": "other/javascript1.html",
    "revision": "b1db2988f1ec0d98382c8abaf5a8d37f"
  },
  {
    "url": "other/javascript2.html",
    "revision": "27a2ab081c5e26ea605e6e49896819c5"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a0a57327452deae542d4c7cbadcb5821"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

// let cacheData = 'Appv1';
// this.addEventListener('install',(event)=> {
//     event.waitUntil(
//         caches.open(cacheData).then((cache)=> {
//             cache.addAll([
//                 "/",
//                 "/index.html",
//                 "/static/js/bundle.js",
//                 "static/media/beyyondfavicon.8545a78666f4b3d506f6.png",
//                 "/manifest.json",
//                 "/beyyondfavicon.png"
             
//             ])
//         })
//     )
// })

// this.addEventListener("fetch",(event)=> {
//     event.respondWith(
//         caches.match(event.request).then((res)=> {
//             if(res){
//                 return res
//             }
//         })
//     )
// })
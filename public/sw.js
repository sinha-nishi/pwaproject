let cacheData = 'Appv1';
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/",
                "/index.html",
                "/static/js/bundle.js",
                "/static/js/main.d1baf8cd.js",
                "static/media/beyyondfavicon.8545a78666f4b3d506f6.png",
                "/beyyondfavicon.png",
                "/about",
                "/users"

            ])
        })
    )
})

this.addEventListener("fetch", (event) => {

    if (event.request.url === "http://localhost:3000/manifest.json") {
        event.waitUntil(
            this.registration.showNotification("hello",{
                body: "hello form beyyond",
            })
        )
    }
    console.warn("url", event.request.url)
    //    event.waitUntil(
    //         this.registration.showNotification("hello",{
    //             body:"hello form beyyond",
    //         })
    //     )


    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((res) => {
                if (res) {
                    return res
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
})
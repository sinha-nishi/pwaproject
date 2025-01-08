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

this.addEventListener('push', event => {
    const options = {
      body: event.data.text(),
      icon: '/path/to/your/icon.png', // Replace with your icon path
    };
    event.waitUntil(
      this.registration.showNotification('Your App Name', options)
    );
  });
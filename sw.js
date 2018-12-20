const staticCache = 'my-cache-1';
self.addEventListener('activate', event =>{
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
            cacheNames.filter(function(cacheName){
                return cacheName.startsWith('my-')&& cacheName !== staticCache
            }).map(function(cacheName){
                return caches.delete(cacheName);
            })
            );
        })
    );
})
self.addEventListener('install',(event) =>{
    event.waitUntil(
        caches.open(staticCache).then(function(cache){
        return cache.addAll(
            ['images/line.jpg',
            'images/logo.jpg',
            'images/main2.jpg',
            'images/rocking.jpg',
            'images/running.jpg',
            'images/surfing.jpg',
             'sw.js',
            'css/styles.css',
              'js/app.js',
            'index.html']
        );
        })
    );
})


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request)
        })
    );
    });

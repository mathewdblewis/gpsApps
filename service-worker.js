<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Worker Example</title>
</head>
<body>
  <h1>Hello, Service Worker!</h1>

  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('data:text/javascript,' + encodeURIComponent(`
        self.addEventListener('install', event => {
          event.waitUntil(
            caches.open('my-cache').then(cache => {
              return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js'
              ]);
mdbl@mdblLXPS:~/dkd/gpsApps/serviceWorker/attempt4$ ls
index.html  service-worker.js
mdbl@mdblLXPS:~/dkd/gpsApps/serviceWorker/attempt4$ cat index.html 
<!-- index.html -->

<!DOCTYPE html>
mdbl@mdblLXPS:~/dkd/gpsApps/serviceWorker/attempt4$ ls
index.html  service-worker.js
mdbl@mdblLXPS:~/dkd/gpsApps/serviceWorker/attempt4$ cat service-worker.js 
// service-worker.js

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


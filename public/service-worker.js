const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/index.js",
    "/style.css",
    "/manifest.webmanifest",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-512x512.png"
]


// install
self.addEventListener("install", function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(staticFilesToPreCache);
      })
    );
  
    self.skipWaiting();
  });
  
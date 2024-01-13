'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "db8dd5552c2ea14e204231183299884a",
"assets/AssetManifest.bin.json": "136bcc770eced56cbb71434d73b45f33",
"assets/AssetManifest.json": "8a9080dbe34a3a6515790043e25eaf5e",
"assets/assets/fonts/Cyberpunk.ttf": "9deb7d5fae2c035eb8b7d35f62169309",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Minecraft.ttf": "d7b98c450349bef0631c7229b804a5c7",
"assets/assets/images/AiGlitch.jpg": "db84449667a77401c57ad01e7238cfd1",
"assets/assets/images/appbar.png": "9e7cd54dcd7e89e698a983a9689792d3",
"assets/assets/images/bg3.png": "c220baf9b09c8e41a3babe645294c43d",
"assets/assets/images/button1.png": "a44c06890f00095e8ecce899a0bdb62a",
"assets/assets/images/button2.png": "c2ae65ed324c1539802dcc5bca8e86c9",
"assets/assets/images/canvasCard.png": "2b00f872789e456b0c1bfddacddc3b6b",
"assets/assets/images/car.png": "4b6ab4eff2e7415e508c313023f78b0a",
"assets/assets/images/crossplatform.png": "7476f0eeca88aafef618c34202563b39",
"assets/assets/images/crypto1.png": "8c4206d5bd5abb547a457aedae5333e7",
"assets/assets/images/crypto2.png": "229dd70bb28be940ffdde76230ddae7e",
"assets/assets/images/crypto3.png": "d36c51f00a12fd5e36c7b3cb6ea2e375",
"assets/assets/images/crypto4.png": "f9d3778516fd60d944ed655412a87dbf",
"assets/assets/images/crypto5.png": "3ca32969f4287ebeaa65065aa5561031",
"assets/assets/images/crypto6.png": "7e465a2c351cb284fd0b98bf411f1a5a",
"assets/assets/images/dragcon1.png": "4fed76d2e5773ecd4278e3c221c1d91c",
"assets/assets/images/dragcon10.png": "5887c97c69fa169b70af20f67e1a7131",
"assets/assets/images/dragcon2.png": "48c076fd52fb4f8fe48c91a94c98f623",
"assets/assets/images/dragcon3.png": "5e820a0408eaa06c245d79ef790de23c",
"assets/assets/images/dragcon4.png": "5451c8a3dd76a9d4eee53cb964ff0eec",
"assets/assets/images/dragcon5.png": "af1197d0beb79c35c4e7a1b6c4546c76",
"assets/assets/images/dragcon6.png": "9ffb9258707aede3c52bf0f291d2da97",
"assets/assets/images/dragcon7.png": "27c58ebdd50b0c41619167e527be7251",
"assets/assets/images/dragcon8.png": "a31a269e20d0d3e56659215ea244cec8",
"assets/assets/images/dragcon9.png": "fbc5c93f0e08d7df652ac58d42a82849",
"assets/assets/images/dry_code.png": "0184b0aadc6ce7c03ce13bbcdd0851f3",
"assets/assets/images/mainGlitch.gif": "0da51fca1147c82858ab13ab94ba3ff3",
"assets/assets/images/performance.png": "14b727954ae9628a547715e8fb7f2c05",
"assets/assets/images/pixel_baji3.riv": "92ea44544549a9af0f29f0f5e7c23b19",
"assets/assets/images/project_structure.png": "7e6af10e0719aaaf7a6fb01e9455813f",
"assets/assets/images/state_management.png": "2b550f5c216b7b2d778fbc735765243a",
"assets/assets/sounds/click.mp3": "ef691e670f0f5b520eea28f6fec54166",
"assets/assets/sounds/error.mp3": "21cbc72b0e1c6f85ae8afcd4788c07b0",
"assets/FontManifest.json": "4150a3fe54d726952e6d5f3af5fe815b",
"assets/fonts/MaterialIcons-Regular.otf": "0297e95b2c34e8aef14536eb67a109d7",
"assets/NOTICES": "e011ec15ec2a3769623afc4980739bb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c1fd6a9b6f0037b75f11c48e56e73cb8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5fdca8bdc91c711efaba530b7ea52237",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "2af1588932f56bc19b597e304d01c067",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "7eaee1f8a9d4ebea87295608f0b90fa9",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "34faed5904bed9dacaefbdf9f8017cdb",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "111ffc1ab514700ceb3f10d325dd11f2",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "acc996ef1aaa932a0be8c514fffcd832",
"icons/Icon-512.png": "4a483dc401d1756c61e252bffa858fcd",
"icons/Icon-maskable-192.png": "acc996ef1aaa932a0be8c514fffcd832",
"icons/Icon-maskable-512.png": "4a483dc401d1756c61e252bffa858fcd",
"index.html": "7fbf1ffa813ff1e24271f783dd5a2e17",
"/": "7fbf1ffa813ff1e24271f783dd5a2e17",
"main.dart.js": "7e697afc3e0ed23bdaed1f2e7e0d341f",
"manifest.json": "b9a9140abf61e1461026df8543d8cc38",
"splash/img/light-background.png": "c220baf9b09c8e41a3babe645294c43d",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "d427ebd72d2bad5b78875c0824c1b0e6",
"version.json": "dff3f86011dd5dbe019f59ab4f94aa69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

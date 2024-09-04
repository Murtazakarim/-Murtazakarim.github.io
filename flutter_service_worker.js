'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7f8d583ab0972b41f1642530cbe1e36e",
".git/config": "3f1531dd09fdf954f4e9d83f5fcba542",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0a1bfac0eca63e615d9a6c2eacab9dcf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63a088de9a8e45efca5600a0aed05f4a",
".git/logs/refs/heads/main": "c29fe185881018a3746d905f75f59546",
".git/logs/refs/remotes/origin/main": "bbcafa817ade653b43e8faa2e6e1d0ca",
".git/objects/03/38209013d6ebf680b5a8c9cc3d388ac5d3fd06": "48c2e1b3d3799f11ecee779c422a22ec",
".git/objects/0a/2812b1c0d5b992b85ec30bfce357166159d849": "19968a4d532dd26799d6d617baaf7856",
".git/objects/0e/89f7d14a2324901c2cefe39d01a1db9c2f85b3": "5ee60e7b3987c6616c4ec3de75de6aa5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/e7d8417bda021bcb94a9d4c7238011bf767e19": "70f69f02f00b474c7f25528c8c34d707",
".git/objects/1a/c7d9194ad9382c63a550dd01af2e49887affb2": "3438889a71229e11eb05e1fb21eaa862",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/7c9c919ed00975cfecb984867b642e64805e60": "9f189d68cc2625f1882398c2a726d50f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/377c6a25f923e65583571d22910f298a4aa305": "66ff31c5be2694aa0e0820d062baadb5",
".git/objects/25/2574a2f7799da8480d1ce2d5d90aa7178f1d54": "cd1d3de94c5f5b3599f24a41838f513a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/42/663b7dbbebe955380ad4c6dc3021029b1d578e": "e33e3499d3608a4c67f958941aba519c",
".git/objects/44/229dcacc3086c789bcebc16e189a3c5d667c9d": "eb0c39becaf96e849bd9e42b6f41c1e8",
".git/objects/45/7a43c18a7977112b4830d76c5b5ef3a746ab6d": "59f6633fca8cf5548c9ad74be0c4740d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c95321211cf6b5410c3cb49145e54779ba380d": "92848ba05a626f561c6421086a5c765f",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/51/030c6658d31a02e4c5f2ae6ac8ddf367c78235": "f9474c5c86e9112f7d3feea9b35f6f88",
".git/objects/51/dbc06cc25021e4baf7060865a669b545c5968a": "ccccb904fd304308359fb1c24da9a988",
".git/objects/54/60a17ece1db6b9cf3b0c0e58f2b5eaa659cbe2": "04e274f435bda7f7b4ad024795378d11",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/0659cc27a7b88f05dd4758a4080b7e2d53a2f1": "84d096727156f08e1e014d052dd0991f",
".git/objects/62/310700d73e1f17221bde3d66eb31beff925133": "b6510f949e9c2b2a5ce5a9a4a63d6893",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/6b8ea67102d3374eaf7165e0c5d56cde98b73e": "69a2961980440f65123ec9e3368abe4e",
".git/objects/72/bea5cadb3c81429439c6b49b39d83d1baa2522": "9848f1509b0c58a062f9a9e017aa6bdc",
".git/objects/78/03c2ae87de83e62d1708641674077d879c1012": "a2eabe96e6e3fe8b8d320113a406a147",
".git/objects/78/3dd3951dc3e14780b9f82668d7586498efd40d": "6129b0f00cef5f5e00aa8ca9062d936c",
".git/objects/7b/c6c111b80b81de07c1290f4f2293594c82a458": "3a85ccb2c64ff65c290e5a4631ad668c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/f464a05311bbb6cb54bf3359ef54011fb552a8": "e8912e8c52ebb17d4d95718822b4f046",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/d4edf7ee20bd12f98bc6bc90e179a78d3e1d0b": "71086517d1b1b56b4327e564f1cff6a0",
".git/objects/9c/e98b8685a6a04db6bf868a3507673cf28ebfff": "cc4fbc48ba264da86d03154ca4e7ebd6",
".git/objects/9e/9bb41dbb38acce54e08df18608d796352734ab": "eafb7fe572493402d1cd0ed7626c5a44",
".git/objects/a4/cb833290d5bc284fd68007f04b2f63ea8ca3ec": "01b6f2863e1f59223d7939937ab23f41",
".git/objects/aa/3e5d075648132220e20a3886a42f9d08fab54b": "786d2d05e66b88b02750798626d71419",
".git/objects/ab/4a3bb48e57fa29ce9f8a443d801252c0d3ad81": "78c7a59c4c4ea7c743ddf6a55e2b2d2c",
".git/objects/b2/594072193aefbcab17f86f818a13e473f1cd9f": "c4673dde1e4544c226b1c6b8e6b4d86f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/70a645e6749dc78c06f70d12d6b954c70b015c": "900832d6ca100887358f70d9746cf7f4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/7f11d80825841922dfc5e42ca6b9d0a0caa385": "c7e4d5de8a0cce1a8c6be7d6137325c7",
".git/objects/c8/9b27b77a4a4fd4d20fe5239f7d98a4697dbb6e": "779dd888b25f2095503f8147af83fcf5",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/cf05882c239d3ebef133e38e055a45ea742977": "cbbbd09fdff2ff9ba5d1e637cbebfdbb",
".git/objects/ce/20e6d271f47a8ea65ccc529f4fcbf303086aa6": "73b97fd33cedda6bec282e16edd38f8a",
".git/objects/cf/4f94eacf13c3dd68135b08f2e4b360d4679c47": "8f004a8104521e0380f4220592317c71",
".git/objects/d0/445f10ed18fe58458417f32e70197fda9bf3a6": "5f8a18d905428a16eb935aab1ae80010",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/e9/2f2b8d4402e54118a80a89aa3b9e726f66d35a": "0933fa45a86b63379bd07ad4f1e8ca91",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/795ab9b20f745cb968c744ce8079b85838255e": "2cb54aa1cbf25c9361acb52c38a7e3ee",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/8a0bafb64541b74d2e25df32e119dccf56f2ef": "fef67d609cf585576c47d9f2c0bc3e61",
".git/refs/heads/main": "994239a63cb370d596b432676999897b",
".git/refs/remotes/origin/main": "994239a63cb370d596b432676999897b",
"assets/AssetManifest.bin": "0d9bbdb7e1f396c8cab6354fb4ad34ca",
"assets/AssetManifest.bin.json": "0bd52ea17fd33d38e9b1f515cfaabc32",
"assets/AssetManifest.json": "0419ac179e3158c03877fc75c200335e",
"assets/assets/img/checked.png": "4b64318452d35434f37f6c8f2e564bbd",
"assets/assets/img/down_arrow.png": "b1c4b59fa8817e7de88ea9e9261fa0f1",
"assets/assets/img/easy_life.png": "ec7697a2bb5c9e025a831aeeb63cd793",
"assets/assets/img/email.png": "49b9a54d1a66305ee959325dc2ebc7c6",
"assets/assets/img/experience_icon.png": "bba53da67dd6e065f58e34eb96eae749",
"assets/assets/img/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/img/image.png": "925f8752d5ba06805f1dcd2622964a8e",
"assets/assets/img/linkedin.png": "9f03b54abd1a557a0ac435e9cec7ea17",
"assets/assets/img/my_profile_image.jpg": "4fd5c142fa3cfd2f4618706f18abc802",
"assets/assets/img/Nafees_app.jpg": "52edbe90e1267e27aa842a00b62981b4",
"assets/assets/img/open_book.png": "d9d529b4578eab5ea2a0e7e33685cecb",
"assets/assets/img/pdf_scanner.jpg": "adb838821bc81c555e0c79047831149c",
"assets/assets/img/relax_sleep_sounds.jpg": "a6262142d11406fafc3e945e28ba7745",
"assets/assets/img/vault_app.jpg": "6c13b1bf76e1929a2da91a7c824700c8",
"assets/assets/img/web3auth_image.png": "c546ce3bcd69f46fc13e1b8fb9c7cfee",
"assets/assets/img/wowfit.png": "171aae2b960b55707b5528cebbb7b21d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "129eef408222bac268e56be9e368e5b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "43e7152c36352a9b0d6d3ab0d23f4ca7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d092ec3592461f03e1b9c7e599f4aed1",
"/": "d092ec3592461f03e1b9c7e599f4aed1",
"main.dart.js": "d47ad0100b0ce6f24ef2eb34eb7b9b46",
"manifest.json": "6166ac4cc7b53031d4a5be6e1f90c6a9",
"version.json": "2f175c2a4e2ab29ff1018890a4605b9e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

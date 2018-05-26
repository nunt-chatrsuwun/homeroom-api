importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.aea6708b0c2adbd161de.js",
    "revision": "05d4713f1d9d07370056cd53aa01bfd8"
  },
  {
    "url": "/_nuxt/layouts_default.4aa651ad849df6cdd996.js",
    "revision": "e0f360833928b9152ec9b2cf06278eb7"
  },
  {
    "url": "/_nuxt/layouts_public.2167aef68372384f3930.js",
    "revision": "50a618ecea4a601fcff13e605fa4deb6"
  },
  {
    "url": "/_nuxt/manifest.7681abc4df4de366cf82.js",
    "revision": "fa36cfaf901b2bed9928462963758c93"
  },
  {
    "url": "/_nuxt/pages_about.c4b97be4d2fb13e3ea8a.js",
    "revision": "4f554894795ba1bb382c76a8d0a010f3"
  },
  {
    "url": "/_nuxt/pages_chat.61639c11a8e5850287b4.js",
    "revision": "bd08e7ecc4da95b669068d95c86f07e8"
  },
  {
    "url": "/_nuxt/pages_index.a299992d38d68226aed2.js",
    "revision": "bc42c308697b40d3ecc549448ed2dbb6"
  },
  {
    "url": "/_nuxt/pages_register.df41243cbf2441408316.js",
    "revision": "bd2af6ad2a71721ef595916157b7b473"
  },
  {
    "url": "/_nuxt/pages_stlist.9d62a9a54bb3f321d83e.js",
    "revision": "f152c6dea0688a35c76c67c56f851e21"
  },
  {
    "url": "/_nuxt/pages_student_edit.8c15e805db5f24ab86d2.js",
    "revision": "1af5c5662c30b599a06ea60b33fcf313"
  },
  {
    "url": "/_nuxt/pages_student_index.8e0f4853f962b4e95717.js",
    "revision": "413fd39a6526864c41291febbeabab04"
  },
  {
    "url": "/_nuxt/pages_student.28a2cc85ee1621392502.js",
    "revision": "e32b02329566d1070f9626ba4458c808"
  },
  {
    "url": "/_nuxt/pages_student2.770c9385047dada73407.js",
    "revision": "5da59cb283e2d3267309ef65046d2158"
  },
  {
    "url": "/_nuxt/pages_studentlist.6dc25c98845dabd34d0d.js",
    "revision": "376c3d602f8b55978c38937d29f3cf4d"
  },
  {
    "url": "/_nuxt/pages_studentlistOld.f389f9981d8424e5d952.js",
    "revision": "3beae913bc7befac8837b696a1901b5f"
  },
  {
    "url": "/_nuxt/pages_studentlistvuetify.2a46baf34d3d75cbcf08.js",
    "revision": "46dbdfa735f2567b1b06d1e8a42252c4"
  },
  {
    "url": "/_nuxt/vendor.fb81a1afb39daee9e77c.js",
    "revision": "aff3e9f3797185627303f137776c3366"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


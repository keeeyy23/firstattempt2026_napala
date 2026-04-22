export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  css: ['~/app.css'],

  buildDir: 'temp/nuxt',

  vite: {
    cacheDir: 'temp/vite',
    optimizeDeps: {
      noDiscovery: true,
      include: []
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/passport', '/jobs', '/application', '/status', '/vault']
    }
  },

  app: {
    head: {
      title: 'Career Passport',
      meta: [
        {
          name: 'description',
          content: 'A mobile-first progressive web application for career identity, job search, and verified academic records.'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icons/icon-192x192.png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/icon-192x192.png'
        }
      ]
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt'],

    manifest: {
      name: 'Career Passport',
      short_name: 'Passport',
      description: 'Offline-ready career passport with profile, jobs, applications, and a secure digital vault.',
      theme_color: '#0f3274',
      background_color: '#f4f7fb',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      orientation: 'portrait',

      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],

      shortcuts: [
        {
          name: 'Open Passport',
          url: '/passport'
        },
        {
          name: 'Browse Jobs',
          url: '/jobs'
        },
        {
          name: 'Digital Vault',
          url: '/vault'
        }
      ]
    },

    workbox: {
      cleanupOutdatedCaches: true,
      navigateFallback: '/',
      navigateFallbackDenylist: [/^\/__/, /^\/api\//],

      globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,ico,json,txt,webmanifest}'],
      globIgnores: ['**/job-posting.html'],

      runtimeCaching: [
        {
          urlPattern: ({ url, sameOrigin }) =>
            sameOrigin && url.pathname.endsWith('_payload.json'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'payload-cache',
            matchOptions: {
              ignoreSearch: true
            }
          }
        },
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 32,
              maxAgeSeconds: 60 * 60 * 24 * 30
            }
          }
        },
        {
          urlPattern: ({ request }) =>
            request.destination === 'script' ||
            request.destination === 'style',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'assets-cache'
          }
        }
      ]
    },

    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})

/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim, skipWaiting } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

declare const self: ServiceWorkerGlobalScope

clientsClaim()

const CACHE = 'pwabuilder-offline-page'
const offlineFallbackPage = '/offline.html'

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        skipWaiting()
    }
})

self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.add(offlineFallbackPage))
    )
})

registerRoute(
    new RegExp('/*'),
    new StaleWhileRevalidate({
        cacheName: CACHE,
    })
)

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            (async () => {
                try {
                    const preloadResp = await event.preloadResponse

                    if (preloadResp) {
                        return preloadResp
                    }

                    const networkResp = await fetch(event.request)
                    return networkResp
                } catch (error) {
                    const cache = await caches.open(CACHE)
                    const cachedResp = await cache.match(offlineFallbackPage)
                    return cachedResp
                }
            })()
        )
    }
})

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$')

registerRoute(({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
        return false
    }

    if (url.pathname.startsWith('/_')) {
        return false
    }

    if (url.pathname.match(fileExtensionRegexp)) {
        return false
    }

    return true
}, createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html'))

registerRoute(
    ({ url }) =>
        url.origin === self.location.origin && url.pathname.endsWith('.png'),
    new StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [new ExpirationPlugin({ maxEntries: 50 })],
    })
)

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting()
    }
})

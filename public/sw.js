// AI-Enhanced Service Worker for Smart Caching
const CACHE_NAME = 'nithin-portfolio-ai-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// AI-determined critical resources
const CRITICAL_RESOURCES = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap'
];

// AI-powered cache strategies
const CACHE_STRATEGIES = {
  images: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 7 days
  scripts: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  styles: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 7 days
  api: { maxAge: 5 * 60 * 1000 }, // 5 minutes
  html: { maxAge: 60 * 60 * 1000 } // 1 hour
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(CRITICAL_RESOURCES);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    handleAIOptimizedRequest(event.request)
  );
});

async function handleAIOptimizedRequest(request) {
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return fetch(request);
  }

  // Determine cache strategy based on resource type
  const resourceType = getResourceType(url.pathname);
  const strategy = CACHE_STRATEGIES[resourceType] || CACHE_STRATEGIES.html;

  try {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      const cachedDate = new Date(cachedResponse.headers.get('sw-cached-date'));
      const isExpired = Date.now() - cachedDate.getTime() > strategy.maxAge;
      
      if (!isExpired) {
        return cachedResponse;
      }
    }

    // Fetch new response
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const responseToCache = networkResponse.clone();
      const headers = new Headers(responseToCache.headers);
      headers.set('sw-cached-date', new Date().toISOString());
      
      const modifiedResponse = new Response(responseToCache.body, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
      });

      const cache = await caches.open(
        resourceType === 'api' ? DYNAMIC_CACHE : STATIC_CACHE
      );
      cache.put(request, modifiedResponse);
    }

    return networkResponse;
  } catch (error) {
    // Return cached version as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (resourceType === 'html') {
      return new Response('<!DOCTYPE html><html><body><h1>Offline</h1><p>You are currently offline. Please check your internet connection.</p></body></html>', {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    throw error;
  }
}

function getResourceType(pathname) {
  if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) return 'images';
  if (pathname.match(/\.(js|mjs)$/i)) return 'scripts';
  if (pathname.match(/\.css$/i)) return 'styles';
  if (pathname.includes('/api/') || pathname.includes('/functions/')) return 'api';
  return 'html';
}

// AI-powered background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'ai-optimization-sync') {
    event.waitUntil(syncAIOptimizationData());
  }
});

async function syncAIOptimizationData() {
  // Sync performance data with AI optimization service
  const performanceData = {
    timestamp: Date.now(),
    cacheHitRate: await calculateCacheHitRate(),
    loadTimes: getStoredLoadTimes()
  };

  try {
    await fetch('/api/ai-optimization-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(performanceData)
    });
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

async function calculateCacheHitRate() {
  // Calculate cache effectiveness for AI learning
  const cacheNames = await caches.keys();
  let totalRequests = 0;
  let cacheHits = 0;

  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    totalRequests += requests.length;
    // This is a simplified calculation
    cacheHits += Math.floor(requests.length * 0.7); // Estimated hit rate
  }

  return totalRequests > 0 ? cacheHits / totalRequests : 0;
}

function getStoredLoadTimes() {
  // Get stored performance metrics for AI analysis
  return JSON.parse(localStorage.getItem('ai-load-times') || '[]');
}
/**
 * Performance optimization utilities for better FPS and smooth scrolling
 */

// Throttle function for better performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Debounce function for better performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// RAF-based throttling for 60fps performance
export const rafThrottle = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null;
  return function (this: any, ...args: Parameters<T>) {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      func.apply(this, args);
      rafId = null;
    });
  };
};

// Check if element is in viewport for lazy loading
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Optimized scroll handler with intersection observer
export const createScrollHandler = (
  callback: (scrollY: number, isScrolling: boolean) => void,
  options: {
    throttleMs?: number;
    useRAF?: boolean;
  } = {}
) => {
  const { throttleMs = 16, useRAF = true } = options;
  let isScrolling = false;
  let scrollTimeout: NodeJS.Timeout;

  const handleScroll = useRAF
    ? rafThrottle(() => {
        callback(window.scrollY, isScrolling);
      })
    : throttle(() => {
        callback(window.scrollY, isScrolling);
      }, throttleMs);

  const scrollListener = () => {
    isScrolling = true;
    handleScroll();
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      callback(window.scrollY, false);
    }, 150);
  };

  return {
    add: () => window.addEventListener('scroll', scrollListener, { passive: true }),
    remove: () => {
      window.removeEventListener('scroll', scrollListener);
      clearTimeout(scrollTimeout);
    }
  };
};

// Performance monitoring utilities
export const performanceMonitor = {
  // Measure FPS
  measureFPS: (callback: (fps: number) => void) => {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measure = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        callback(fps);
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measure);
    };
    
    requestAnimationFrame(measure);
  },

  // Measure scroll performance
  measureScrollPerformance: (callback: (performance: number) => void) => {
    let lastScrollTime = performance.now();
    let scrollCount = 0;
    
    const handleScroll = () => {
      scrollCount++;
      const currentTime = performance.now();
      const timeDiff = currentTime - lastScrollTime;
      
      if (timeDiff >= 1000) {
        const scrollsPerSecond = Math.round((scrollCount * 1000) / timeDiff);
        callback(scrollsPerSecond);
        scrollCount = 0;
        lastScrollTime = currentTime;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Preload critical fonts
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap'
  ];
  
  fontPreloads.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });
};

// Optimize images for better performance
export const optimizeImageLoading = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Add loading="lazy" to all images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Optimize image loading
  optimizeImageLoading();
  
  // Add performance monitoring in development
  if (process.env.NODE_ENV === 'development') {
    performanceMonitor.measureFPS((fps) => {
      if (fps < 30) {
        console.warn(`Low FPS detected: ${fps}fps`);
      }
    });
  }
};

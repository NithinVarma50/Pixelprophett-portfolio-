/**
 * Mobile optimization utilities for smooth scrolling and performance
 */

// Detect if device is mobile
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Detect if device is desktop/PC (high-end devices)
export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return true; // Default to desktop for SSR
  // Desktop is screens wider than 1024px (high-end breakpoint)
  return window.innerWidth >= 1024 && !isMobile();
};

// Detect if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Should reduce animations (mobile or reduced motion preference)
// Desktop gets full high-end animations
export const shouldReduceAnimations = (): boolean => {
  return isMobile() || prefersReducedMotion();
};

// Should enable high-end animations (desktop only, not mobile, and not reduced motion)
export const shouldEnableHighEndAnimations = (): boolean => {
  return isDesktop() && !prefersReducedMotion();
};

// Preload component chunks immediately
export const preloadAllComponents = async (): Promise<void> => {
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback if available, otherwise setTimeout
  const scheduleLoad = (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout: 2000 });
    } else {
      setTimeout(callback, 100);
    }
  };

  scheduleLoad(() => {
    // Preload all lazy-loaded components
    const componentPaths = [
      () => import('@/components/About'),
      () => import('@/components/DeskSetup'),
      () => import('@/components/FitForge'),
      () => import('@/components/Skills'),
      () => import('@/components/Projects'),
      () => import('@/components/QuickFix'),
      () => import('@/components/QuickFixAnalysis'),
      () => import('@/components/FreelanceProject'),
      () => import('@/components/Community'),
      () => import('@/components/GameShowcase'),
      () => import('@/components/Achievements'),
      () => import('@/components/Conclusion'),
    ];

    // Preload all components in parallel
    componentPaths.forEach(importFn => {
      importFn().catch(() => {
        // Silently fail - components will load when needed
      });
    });
  });
};

// Preload images
export const preloadImages = (imagePaths: string[]): void => {
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize scroll performance on mobile - AGGRESSIVE optimizations
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;
  
  if (isMobile()) {
    // Disable smooth scroll on mobile - use native scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Force GPU acceleration
    document.body.style.transform = 'translate3d(0, 0, 0)';
    document.body.style.willChange = 'scroll-position';
    document.body.style.backfaceVisibility = 'hidden';
    document.body.style.perspective = '1000px';
    
    // Reduce repaints during scroll
    document.body.style.contain = 'layout style paint';
    
    // Add aggressive CSS optimizations for mobile scroll
    const style = document.createElement('style');
    style.id = 'mobile-scroll-optimizations';
    style.textContent = `
      @media (max-width: 768px) {
        /* Pause all animations during scroll on mobile */
        body.is-scrolling * {
          animation-play-state: paused !important;
          transition: none !important;
        }
        
        /* Disable will-change during scroll to reduce GPU memory */
        body.is-scrolling [style*="will-change"],
        body.is-scrolling [class*="hw-accelerated"],
        body.is-scrolling [class*="gpu-layer"] {
          will-change: auto !important;
        }
        
        /* Disable backdrop-filter during scroll (expensive) */
        body.is-scrolling * {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
        
        /* Reduce blur effects during scroll */
        body.is-scrolling * {
          filter: none !important;
        }
        
        /* Optimize motion components during scroll */
        body.is-scrolling [data-framer-name],
        body.is-scrolling [class*="motion"] {
          pointer-events: none !important;
        }
        
        /* Force simpler rendering during scroll */
        body.is-scrolling section,
        body.is-scrolling div {
          contain: layout style paint !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Add scroll state class for CSS optimizations
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    let lastScrollTop = window.pageYOffset;
    
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      
      // Only add class if actually scrolling
      if (!isScrolling || Math.abs(currentScrollTop - lastScrollTop) > 5) {
        isScrolling = true;
        document.body.classList.add('is-scrolling');
      }
      
      lastScrollTop = currentScrollTop;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove('is-scrolling');
      }, 100); // Remove class 100ms after scrolling stops
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      clearTimeout(scrollTimeout);
    };
  } else {
    // Desktop optimization - lighter touch
    document.body.style.transform = 'translateZ(0)';
    document.body.style.willChange = 'scroll-position';
  }
};

// Preload Spline 3D library and scene - optimized for mobile
export const preloadSpline = (): void => {
  if (typeof window === 'undefined') return;
  
  // Preload Spline library immediately (not lazy)
  const loadSpline = () => {
    // Start loading the Spline library bundle immediately
    import('@splinetool/react-spline').then(() => {
      // Library loaded - now preload the scene
      const sceneUrl = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';
      
      // Fetch and cache the scene data
      fetch(sceneUrl, { 
        method: 'GET',
        cache: 'force-cache',
        mode: 'cors',
        credentials: 'omit'
      }).catch(() => {
        // Silent fail - will load when component mounts
      });
    }).catch(() => {
      // Silent fail - will load when component mounts
    });
  };
  
  // Start preloading immediately (don't wait for idle)
  // This ensures Spline is cached before user reaches Hero section
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadSpline();
    });
  } else {
    // DOM already loaded, start immediately
    loadSpline();
  }
};

// Initialize mobile optimizations
export const initMobileOptimizations = (): void => {
  if (typeof window === 'undefined') return;
  
  optimizeScrollPerformance();
  
  // Preload Spline 3D for smooth experience
  preloadSpline();
  
  // Note: Images are bundled with components now (no lazy loading), 
  // so they'll load automatically. No need to preload separately.
  
  // Components are now imported directly (no lazy loading),
  // so they're already cached and ready. The preloadAllComponents
  // was for lazy-loaded components, but we removed lazy loading
  // for smooth scrolling performance.
};


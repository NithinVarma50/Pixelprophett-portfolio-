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

// Optimize scroll performance on mobile
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;
  
  // Disable smooth scroll on mobile for better performance (we'll use CSS)
  if (isMobile()) {
    document.documentElement.style.scrollBehavior = 'auto';
  }
  
  // Force GPU acceleration on scroll container
  document.body.style.transform = 'translateZ(0)';
  document.body.style.willChange = 'scroll-position';
};

// Initialize mobile optimizations
export const initMobileOptimizations = (): void => {
  if (typeof window === 'undefined') return;
  
  optimizeScrollPerformance();
  
  // Note: Images are bundled with components now (no lazy loading), 
  // so they'll load automatically. No need to preload separately.
  
  // Components are now imported directly (no lazy loading),
  // so they're already cached and ready. The preloadAllComponents
  // was for lazy-loaded components, but we removed lazy loading
  // for smooth scrolling performance.
};


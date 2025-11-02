
'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { shouldEnableHighEndAnimations } from '@/lib/mobile-optimization'

// Preload Spline immediately on mount for better performance
const Spline = lazy(() => 
  import('@splinetool/react-spline').then(module => {
    // Preload successful
    return module;
  })
);

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const highEndAnimations = typeof window !== 'undefined' ? shouldEnableHighEndAnimations() : false;

  // Preload the Spline scene during component mount
  useEffect(() => {
    // Prefetch the scene data
    if (scene && typeof window !== 'undefined') {
      // Try to warm up the cache
      fetch(scene, { 
        method: 'HEAD',
        cache: 'force-cache'
      }).catch(() => {
        // Silent fail - will load when component mounts
      });
    }
  }, [scene]);

  // Monitor when Spline is actually loaded
  useEffect(() => {
    // Check if on mobile - reduce loading time expectation
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Give Spline time to load, then hide loading state
    // Faster timeout on mobile to reduce perceived lag
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isMobile ? 1500 : 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <p className="text-primary/60 text-sm">Loading 3D Model...</p>
          </div>
        </div>
      }
    >
      <div className="w-full h-full relative">
        <Spline
          scene={scene}
          className={className}
          style={{
            width: '100%',
            height: '100%',
            // HIGH-END DESKTOP: Enhanced quality settings
            imageRendering: highEndAnimations ? 'crisp-edges' : 'auto',
            transform: highEndAnimations ? 'translate3d(0,0,0) scale(1.02)' : 'translate3d(0,0,0)',
          }}
          // Desktop gets better quality
          onLoad={(spline: any) => {
            setIsLoading(false);
            // HIGH-END DESKTOP: Enable enhanced rendering quality
            if (highEndAnimations && typeof window !== 'undefined') {
              try {
                // Try to enhance quality if API is available
                if (spline && typeof spline.setPixelRatio === 'function') {
                  spline.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                } else if (spline?.application?.canvas) {
                  // Alternative: set canvas pixel ratio directly
                  const canvas = spline.application.canvas;
                  if (canvas) {
                    const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl');
                    if (ctx && typeof (ctx as any).setPixelRatio === 'function') {
                      (ctx as any).setPixelRatio(Math.min(window.devicePixelRatio, 2));
                    }
                  }
                }
              } catch (e) {
                // Silently fail - default quality is still good
              }
            }
          }}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 z-10 pointer-events-none">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <p className="text-primary/60 text-sm">Loading 3D Model...</p>
            </div>
          </div>
        )}
        {/* HIGH-END DESKTOP: Minimal glow effect overlay */}
        {highEndAnimations && !isLoading && (
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(57, 255, 20, 0.015) 50%, transparent 100%)',
            mixBlendMode: 'screen',
          }} />
        )}
      </div>
    </Suspense>
  )
}


'use client'

import { Suspense, lazy, useState, useEffect } from 'react'

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
    // Give Spline time to load, then hide loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading state max

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
      </div>
    </Suspense>
  )
}


'use client'

import { Suspense, lazy } from 'react'
import { shouldEnableHighEndAnimations } from '@/lib/mobile-optimization'

// Preload Spline immediately on mount for better performance
const Spline = lazy(() => 
  import('@splinetool/react-spline').then(module => {
    return module;
  })
);

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const highEndAnimations = typeof window !== 'undefined' ? shouldEnableHighEndAnimations() : false;

  return (
    <Suspense fallback={<div className="w-full h-full" />}>
      <div className="w-full h-full relative">
        <Spline
          scene={scene}
          className={className}
          style={{
            width: '100%',
            height: '100%',
            imageRendering: highEndAnimations ? 'crisp-edges' : 'auto',
            transform: highEndAnimations ? 'translate3d(0,0,0) scale(1.02)' : 'translate3d(0,0,0)',
          }}
          onLoad={(spline: any) => {
            if (highEndAnimations && typeof window !== 'undefined') {
              try {
                if (spline && typeof spline.setPixelRatio === 'function') {
                  spline.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                } else if (spline?.application?.canvas) {
                  const canvas = spline.application.canvas;
                  if (canvas) {
                    const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl');
                    if (ctx && typeof (ctx as any).setPixelRatio === 'function') {
                      (ctx as any).setPixelRatio(Math.min(window.devicePixelRatio, 2));
                    }
                  }
                }
              } catch (e) {
                // Silently fail
              }
            }
          }}
        />
        {/* HIGH-END DESKTOP: Minimal glow effect overlay */}
        {highEndAnimations && (
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(57, 255, 20, 0.015) 50%, transparent 100%)',
            mixBlendMode: 'screen',
          }} />
        )}
      </div>
    </Suspense>
  )
}

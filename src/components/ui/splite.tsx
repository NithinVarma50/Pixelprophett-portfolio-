
'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <div className="animate-pulse text-primary/60">Loading 3D Scene...</div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'auto'
        }}
      />
    </Suspense>
  )
}

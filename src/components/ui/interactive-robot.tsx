'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface DeviceOrientation {
  beta: number  // Front to back tilt (-180 to 180)
  gamma: number // Left to right tilt (-90 to 90)
  alpha: number // Rotation around z-axis (0 to 360)
}

interface RobotExpression {
  name: string
  eyes: string
  mouth: string
  color: string
}

const expressions: RobotExpression[] = [
  { name: 'happy', eyes: '◉◉', mouth: '‿', color: 'from-green-400 to-green-600' },
  { name: 'excited', eyes: '★★', mouth: 'O', color: 'from-yellow-400 to-orange-500' },
  { name: 'curious', eyes: '◐◑', mouth: '○', color: 'from-blue-400 to-purple-500' },
  { name: 'sleepy', eyes: '- -', mouth: '~', color: 'from-purple-400 to-pink-500' },
  { name: 'surprised', eyes: '○○', mouth: 'O', color: 'from-red-400 to-pink-500' },
  { name: 'focused', eyes: '▪▪', mouth: '—', color: 'from-indigo-400 to-blue-500' },
  { name: 'playful', eyes: '^_^', mouth: 'ω', color: 'from-pink-400 to-rose-500' }
]

export function InteractiveRobot({ className }: { className?: string }) {
  const [orientation, setOrientation] = useState<DeviceOrientation>({ beta: 0, gamma: 0, alpha: 0 })
  const [expression, setExpression] = useState<RobotExpression>(expressions[0])
  const [isSupported, setIsSupported] = useState(false)
  const [permission, setPermission] = useState<'granted' | 'denied' | 'default'>('default')
  const robotRef = useRef<HTMLDivElement>(null)

  // Smooth springs for robot movement
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 })
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 })
  const rotateZ = useSpring(0, { stiffness: 100, damping: 30 })

  // Transform orientation values to rotation
  const transformedRotateX = useTransform(rotateX, [-90, 90], [-30, 30])
  const transformedRotateY = useTransform(rotateY, [-90, 90], [-30, 30])
  const transformedRotateZ = useTransform(rotateZ, [0, 360], [0, 360])

  useEffect(() => {
    const checkSupport = () => {
      setIsSupported('DeviceOrientationEvent' in window)
    }

    const requestPermission = async () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        try {
          const response = await (DeviceOrientationEvent as any).requestPermission()
          setPermission(response)
          return response === 'granted'
        } catch (error) {
          console.error('Error requesting device orientation permission:', error)
          setPermission('denied')
          return false
        }
      }
      return true
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const beta = event.beta || 0
      const gamma = event.gamma || 0
      const alpha = event.alpha || 0

      setOrientation({ beta, gamma, alpha })

      // Update robot rotation
      rotateX.set(beta)
      rotateY.set(gamma)
      rotateZ.set(alpha / 10) // Subtle z-rotation

      // Change expression based on device angle
      const tiltIntensity = Math.abs(beta) + Math.abs(gamma)
      
      let newExpression: RobotExpression
      if (tiltIntensity > 60) {
        newExpression = expressions[4] // surprised
      } else if (tiltIntensity > 40) {
        newExpression = expressions[1] // excited
      } else if (tiltIntensity > 20) {
        newExpression = expressions[2] // curious
      } else if (Math.abs(beta) < 5 && Math.abs(gamma) < 5) {
        newExpression = expressions[3] // sleepy
      } else if (beta > 30) {
        newExpression = expressions[6] // playful
      } else if (beta < -30) {
        newExpression = expressions[5] // focused
      } else {
        newExpression = expressions[0] // happy
      }

      setExpression(newExpression)
    }

    checkSupport()

    const startListening = async () => {
      const hasPermission = await requestPermission()
      if (hasPermission && isSupported) {
        window.addEventListener('deviceorientation', handleOrientation, true)
      }
    }

    startListening()

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true)
    }
  }, [isSupported, rotateX, rotateY, rotateZ])

  const handleTouchStart = async () => {
    if (permission === 'default' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const response = await (DeviceOrientationEvent as any).requestPermission()
        setPermission(response)
        if (response === 'granted') {
          window.addEventListener('deviceorientation', (event) => {
            const beta = event.beta || 0
            const gamma = event.gamma || 0
            const alpha = event.alpha || 0
            setOrientation({ beta, gamma, alpha })
            rotateX.set(beta)
            rotateY.set(gamma)
            rotateZ.set(alpha / 10)
          }, true)
        }
      } catch (error) {
        console.error('Permission request failed:', error)
      }
    }
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className || ''}`}>
      {/* Permission prompt for iOS */}
      {permission === 'default' && isSupported && (
        <motion.button
          onClick={handleTouchStart}
          className="absolute top-4 left-4 z-10 bg-primary/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          Enable Gyroscope ↻
        </motion.button>
      )}

      {/* Robot Container */}
      <motion.div
        ref={robotRef}
        className="relative perspective-1000"
        style={{
          rotateX: transformedRotateX,
          rotateY: transformedRotateY,
          rotateZ: transformedRotateZ,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Robot Body */}
        <motion.div
          className={`relative w-64 h-80 mx-auto bg-gradient-to-br ${expression.color} rounded-3xl shadow-2xl`}
          animate={{
            boxShadow: [
              `0 0 30px rgba(59, 255, 20, 0.3)`,
              `0 0 50px rgba(59, 255, 20, 0.5)`,
              `0 0 30px rgba(59, 255, 20, 0.3)`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Robot Head */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800 rounded-full shadow-inner">
            {/* Screen/Face */}
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center overflow-hidden">
              <div className="text-center text-primary">
                {/* Eyes */}
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {expression.eyes}
                </motion.div>
                
                {/* Mouth */}
                <motion.div
                  className="text-2xl"
                  animate={{ 
                    scale: expression.name === 'excited' ? [1, 1.2, 1] : [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {expression.mouth}
                </motion.div>
              </div>
            </div>

            {/* Antenna */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gray-600 rounded-full"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
            </motion.div>
          </div>

          {/* Body Panel */}
          <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-gray-800 rounded-lg">
            <div className="absolute inset-2 bg-gray-900 rounded flex flex-col items-center justify-center">
              {/* Status indicators */}
              <div className="flex space-x-1 mb-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: i * 0.3 
                    }}
                  />
                ))}
              </div>
              
              {/* Expression name */}
              <div className="text-xs text-primary font-mono">
                {expression.name.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Arms */}
          <motion.div
            className="absolute top-36 -left-8 w-16 h-6 bg-gray-700 rounded-full"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-36 -right-8 w-16 h-6 bg-gray-700 rounded-full"
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Gyroscope visualization */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-xs text-white/70 font-mono">
              β: {orientation.beta.toFixed(0)}° γ: {orientation.gamma.toFixed(0)}°
            </div>
          </div>
        </motion.div>

        {/* Base/Stand */}
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-gray-800 rounded-full"
          animate={{ scaleX: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Instructions */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-white/80">
          {isSupported ? (
            permission === 'granted' ? 
            '📱 Tilt your device to interact!' : 
            '👆 Tap to enable gyroscope'
          ) : (
            '🖱️ Gyroscope not available'
          )}
        </div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  )
}
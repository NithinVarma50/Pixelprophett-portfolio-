import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, Text3D, Center, Float } from '@react-three/drei';
import { Suspense, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Room component with walls, floor, and furniture
const Room = () => {
  const roomRef = useRef<THREE.Group>(null);

  return (
    <group ref={roomRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Desk */}
      <group position={[-2, -1.2, -3]}>
        <mesh>
          <boxGeometry args={[3, 0.1, 1.5]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
        {/* Desk legs */}
        <mesh position={[-1.3, -0.5, -0.6]}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>
        <mesh position={[1.3, -0.5, -0.6]}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>
        <mesh position={[-1.3, -0.5, 0.6]}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>
        <mesh position={[1.3, -0.5, 0.6]}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>
      </group>

      {/* Monitor */}
      <group position={[-2, -0.5, -3.5]}>
        <mesh>
          <boxGeometry args={[1.5, 0.8, 0.1]} />
          <meshStandardMaterial color="#000" />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.3, 0.7]} />
          <meshStandardMaterial color="#0066cc" emissive="#0033aa" />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.4]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>

      {/* Chair */}
      <group position={[-2, -1.5, -1.5]}>
        {/* Seat */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* Backrest */}
        <mesh position={[0, 0.8, -0.3]}>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* Chair legs */}
        <mesh position={[-0.3, -0.2, -0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        <mesh position={[0.3, -0.2, -0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        <mesh position={[-0.3, -0.2, 0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        <mesh position={[0.3, -0.2, 0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>

      {/* Bookshelf */}
      <group position={[3, -0.5, -4]}>
        {/* Main structure */}
        <mesh>
          <boxGeometry args={[1.5, 3, 0.3]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        {/* Shelves */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.4, 0.05, 0.25]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[1.4, 0.05, 0.25]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        {/* Books */}
        <mesh position={[-0.4, 0.8, 0.1]}>
          <boxGeometry args={[0.3, 0.5, 0.05]} />
          <meshStandardMaterial color="#ff6b6b" />
        </mesh>
        <mesh position={[0, 0.8, 0.1]}>
          <boxGeometry args={[0.3, 0.5, 0.05]} />
          <meshStandardMaterial color="#4ecdc4" />
        </mesh>
        <mesh position={[0.4, 0.8, 0.1]}>
          <boxGeometry args={[0.3, 0.5, 0.05]} />
          <meshStandardMaterial color="#45b7d1" />
        </mesh>
      </group>

      {/* Floating 3D Text */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center position={[0, 1, 0]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            curveSegments={12}
          >
            My 3D Room
            <meshStandardMaterial color="#ff6b6b" />
          </Text3D>
        </Center>
      </Float>

      {/* Ambient lighting setup */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 2, 0]} intensity={0.8} />
      <spotLight
        position={[-2, 2, -2]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
    </group>
  );
};

// Loading component
const Loader = () => (
  <Html center>
    <div className="flex items-center space-x-2">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <span className="text-primary">Loading 3D Room...</span>
    </div>
  </Html>
);

// Main Room3D component
const Room3D = () => {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            PixelProphett Digital Studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to my interactive 3D workspace. This showcases my expertise in modern web 3D technologies,
            built with Three.js and React Three Fiber. Click and drag to explore the studio environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[600px] w-full bg-gradient-to-b from-background to-secondary/20 rounded-xl overflow-hidden shadow-2xl"
        >
          <Canvas
            camera={{ position: [5, 2, 5], fov: 60 }}
            shadows
            className={`w-full h-full transition-all duration-300 ${
              isInteracting ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            <Suspense fallback={<Loader />}>
              <Room />
              <Environment preset="apartment" />
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
                autoRotate={!isInteracting}
                autoRotateSpeed={0.5}
                minDistance={3}
                maxDistance={15}
                onStart={() => setIsInteracting(true)}
                onEnd={() => setIsInteracting(false)}
                target={[0, 0, -2]}
              />
            </Suspense>
          </Canvas>

          {/* Controls overlay */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
            <div className="flex flex-col space-y-1">
              <span>🖱️ Click & drag to rotate</span>
              <span>🔍 Scroll to zoom</span>
              <span>▶️ Auto-rotation when idle</span>
            </div>
          </div>

          {/* Technology badges */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              Three.js
            </div>
            <div className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
              React Three Fiber
            </div>
            <div className="bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              WebGL
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">Interactive 3D Development</h3>
          <p className="text-muted-foreground leading-relaxed">
            This 3D room showcases my expertise in modern web 3D technologies. Built with React Three Fiber,
            it demonstrates real-time rendering, interactive controls, and optimized performance for web browsers.
            The scene includes custom geometries, materials, lighting, and camera controls for an immersive experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Room3D;
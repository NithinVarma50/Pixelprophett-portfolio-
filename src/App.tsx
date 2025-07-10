
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

// Lazy load pages for optimal code-splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create a QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Reduces unnecessary refetches
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

// Enhanced loading component with Loki-inspired effects
const LoadingFallback = () => {
  // Mark document as ready once loaded for better UX
  useEffect(() => {
    document.documentElement.dataset.loaded = "true";
  }, []);

  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background glow effect */}
      <motion.div 
        className="absolute w-[50vw] h-[50vh] rounded-full bg-primary/5 filter blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "25%",
          left: "25%",
        }}
      />
      
      {/* Timeline effect */}
      <motion.div
        className="absolute w-full h-[1px] bg-primary/30"
        style={{ top: "50%" }}
        animate={{
          scaleX: [0, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          scaleX: {
            duration: 2,
            ease: "easeInOut",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      />
      
      {/* TVA-like circular rune */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full border border-primary/20"
        style={{
          top: "calc(50% - 150px)",
          left: "calc(50% - 150px)",
        }}
        animate={{
          rotate: [0, 360],
          borderColor: ["rgba(57, 255, 20, 0.2)", "rgba(57, 255, 20, 0.4)", "rgba(57, 255, 20, 0.2)"]
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          borderColor: {
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      />
      
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border border-primary/30"
        style={{
          top: "calc(50% - 100px)",
          left: "calc(50% - 100px)",
        }}
        animate={{
          rotate: [360, 0],
          borderColor: ["rgba(57, 255, 20, 0.3)", "rgba(57, 255, 20, 0.5)", "rgba(57, 255, 20, 0.3)"]
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
          borderColor: {
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      />
      
      {/* Magic particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{ 
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: 0 
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="z-10 flex flex-col items-center">
        <VaporizeTextCycle
          texts={["PixelProphett:", "Unveiling", "Digital", "Visions..."]}
          font={{
            fontFamily: "Playfair Display, serif",
            fontSize: "48px",
            fontWeight: 600
          }}
          color="hsl(120, 50%, 50%)"
          spread={3}
          density={6}
          animation={{
            vaporizeDuration: 1.5,
            fadeInDuration: 0.8,
            waitDuration: 0.3
          }}
          direction="left-to-right"
          alignment="center"
          tag={Tag.H1}
        />
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden mb-2 mt-8">
          <motion.div 
            className="h-full bg-primary origin-left transform-gpu"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: loadingProgress / 100 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-muted-foreground text-sm"
        >
          {loadingProgress === 100 ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Ready
            </motion.span>
          ) : (
            `Loading portfolio... ${Math.round(loadingProgress)}%`
          )}
        </motion.p>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

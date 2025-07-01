import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Simplified loading component for better performance
const LoadingFallback = () => {
  useEffect(() => {
    document.documentElement.dataset.loaded = "true";
  }, []);

  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Simplified background effect */}
      <motion.div 
        className="absolute w-[30vw] h-[30vh] rounded-full bg-primary/10 filter blur-[80px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "35%",
          left: "35%",
        }}
      />
      
      {/* Simplified rune circle */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border border-primary/20"
        style={{
          top: "calc(50% - 100px)",
          left: "calc(50% - 100px)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }
        }}
      />
      
      {/* Reduced particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{ 
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            opacity: 0 
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-3xl md:text-4xl font-bold playfair mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
        >
          Nithin Varma
        </motion.div>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden mb-2">
          <motion.div 
            className="h-full bg-primary origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: loadingProgress / 100 }}
            transition={{ 
              duration: 0.2,
              ease: "easeOut"
            }}
            style={{ willChange: "transform" }}
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

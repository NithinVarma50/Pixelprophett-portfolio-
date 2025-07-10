import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface UserBehavior {
  scrollPattern: number[];
  timeOnPage: number;
  deviceInfo: {
    isMobile: boolean;
    connection: string;
    memory?: number;
  };
}

interface OptimizationResult {
  shouldPrerender: boolean;
  priority: string[];
  cacheStrategy: string;
  recommendations: string[];
  aiInsights: string;
}

export const useAIOptimization = () => {
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    scrollPattern: [],
    timeOnPage: 0,
    deviceInfo: {
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      connection: (navigator as any).connection?.effectiveType || 'unknown',
      memory: (navigator as any).deviceMemory
    }
  });

  const [optimization, setOptimization] = useState<OptimizationResult | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Track user behavior
  useEffect(() => {
    const startTime = Date.now();
    const scrollPositions: number[] = [];

    const handleScroll = () => {
      scrollPositions.push(window.scrollY);
      if (scrollPositions.length > 10) {
        scrollPositions.shift(); // Keep only last 10 positions
      }
    };

    const handleBeforeUnload = () => {
      setUserBehavior(prev => ({
        ...prev,
        timeOnPage: Date.now() - startTime,
        scrollPattern: scrollPositions
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const optimizeWithAI = useCallback(async (action: string) => {
    setIsOptimizing(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-optimization', {
        body: {
          action,
          userBehavior: {
            ...userBehavior,
            timeOnPage: Date.now() - performance.timeOrigin
          }
        }
      });

      if (error) throw error;
      
      setOptimization(data.optimization);
      return data;
    } catch (error) {
      console.error('AI optimization failed:', error);
      return null;
    } finally {
      setIsOptimizing(false);
    }
  }, [userBehavior]);

  // Auto-optimize on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      optimizeWithAI('performance-analysis');
    }, 3000); // Analyze after 3 seconds

    return () => clearTimeout(timer);
  }, [optimizeWithAI]);

  return {
    userBehavior,
    optimization,
    isOptimizing,
    optimizeWithAI
  };
};
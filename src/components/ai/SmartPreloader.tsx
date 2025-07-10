import { useEffect, useState } from 'react';
import { useAIOptimization } from '@/hooks/useAIOptimization';

interface PreloadedComponent {
  name: string;
  component: React.ComponentType;
  priority: number;
}

export const SmartPreloader = () => {
  const { optimization, optimizeWithAI } = useAIOptimization();
  const [preloadedComponents, setPreloadedComponents] = useState<PreloadedComponent[]>([]);

  useEffect(() => {
    if (optimization?.shouldPrerender) {
      // Predictive preloading based on AI recommendations
      const loadComponents = async () => {
        const components = await Promise.all([
          import('@/components/About').then(module => ({
            name: 'About',
            component: module.default,
            priority: optimization.priority.indexOf('about') + 1
          })),
          import('@/components/Skills').then(module => ({
            name: 'Skills', 
            component: module.default,
            priority: optimization.priority.indexOf('skills') + 1
          })),
          import('@/components/Projects').then(module => ({
            name: 'Projects',
            component: module.default, 
            priority: optimization.priority.indexOf('projects') + 1
          }))
        ]);

        setPreloadedComponents(components.sort((a, b) => a.priority - b.priority));
      };

      loadComponents();
    }
  }, [optimization]);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const heroImage = new Image();
      heroImage.src = '/public/lovable-uploads/69539b53-de64-4e8f-bd06-984c03478595.png';
    };

    preloadCriticalResources();
  }, []);

  // Intersection Observer for predictive loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            optimizeWithAI('prerender');
          }
        });
      },
      { rootMargin: '100px' }
    );

    const heroSection = document.querySelector('[data-section="hero"]');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, [optimizeWithAI]);

  return null; // This component only handles preloading logic
};
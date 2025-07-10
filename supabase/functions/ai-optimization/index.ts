import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface OptimizationRequest {
  action: 'prerender' | 'cache-strategy' | 'route-optimization' | 'performance-analysis';
  data?: any;
  userBehavior?: {
    scrollPattern: number[];
    timeOnPage: number;
    deviceInfo: {
      isMobile: boolean;
      connection: string;
      memory?: number;
    };
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('Gemini API key not configured');
    }

    const { action, data, userBehavior }: OptimizationRequest = await req.json();

    const optimizationPrompt = `
You are an AI optimization expert for a portfolio website. Based on the user behavior data:
- Device: ${userBehavior?.deviceInfo.isMobile ? 'Mobile' : 'Desktop'}
- Connection: ${userBehavior?.deviceInfo.connection || 'unknown'}
- Time on page: ${userBehavior?.timeOnPage || 0}ms
- Scroll pattern: ${userBehavior?.scrollPattern?.join(',') || 'none'}

Action requested: ${action}

Provide optimization recommendations in JSON format with specific, actionable suggestions.
`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: optimizationPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.3,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const result = await response.json();
    const aiResponse = result.candidates[0].content.parts[0].text;

    // Process AI response based on action type
    let optimizationResult;
    
    switch (action) {
      case 'prerender':
        optimizationResult = {
          shouldPrerender: true,
          priority: ['about', 'skills', 'projects'],
          cacheStrategy: 'aggressive',
          lazyLoadThreshold: userBehavior?.deviceInfo.isMobile ? 0.5 : 0.3
        };
        break;
        
      case 'cache-strategy':
        optimizationResult = {
          staticAssets: '7d',
          dynamicContent: '1h',
          criticalCSS: 'inline',
          fontsStrategy: 'preload'
        };
        break;
        
      case 'route-optimization':
        optimizationResult = {
          prefetchRoutes: ['/about', '/projects'],
          bundleSplitting: 'route-based',
          compressionLevel: 'high'
        };
        break;
        
      case 'performance-analysis':
        optimizationResult = {
          recommendations: [
            'Enable service worker for offline caching',
            'Implement image lazy loading with intersection observer',
            'Use CSS containment for layout optimization',
            'Enable compression for text assets'
          ],
          aiInsights: aiResponse
        };
        break;
    }

    return new Response(JSON.stringify({
      success: true,
      optimization: optimizationResult,
      aiInsights: aiResponse,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('AI Optimization error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'An error occurred during AI optimization'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
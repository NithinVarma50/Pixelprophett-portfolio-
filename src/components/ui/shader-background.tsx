import React, { useEffect, useRef } from 'react';

const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Vertex shader source code
  const vsSource = `
    attribute vec4 aVertexPosition;
    void main() {
      gl_Position = aVertexPosition;
    }
  `;

  // Fragment shader source code - Horizontal flowing animation
  const fsSource = `
    precision highp float;
    uniform vec2 iResolution;
    uniform float iTime;

    // Animation parameters for horizontal flow
    const float flowSpeed = 0.5;
    const float waveAmplitude = 0.3;
    const float waveFrequency = 2.0;
    const float particleSpeed = 1.2;
    const float glowIntensity = 0.8;
    const float blendOpacity = 0.6;
    
    // Color scheme for horizontal flow
    const vec3 primaryColor = vec3(0.22, 1.0, 0.08); // Loki green
    const vec3 secondaryColor = vec3(0.0, 0.5, 0.2); // Dark green
    const vec3 accentColor = vec3(0.8, 1.0, 0.2); // Bright accent
    
    // Noise function for organic movement
    float noise(vec2 p) {
      return sin(p.x) * cos(p.y) + sin(p.x * 1.3) * cos(p.y * 1.7) * 0.5;
    }
    
    // Smooth noise for flowing effect
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    // Horizontal wave function
    float horizontalWave(float x, float time) {
      return sin(x * waveFrequency + time * flowSpeed) * waveAmplitude;
    }
    
    // Particle system for horizontal flow
    float particle(vec2 uv, float time, float offset) {
      float x = mod(uv.x + time * particleSpeed + offset, 1.0);
      float y = uv.y + horizontalWave(uv.x * 10.0 + time, time) * 0.1;
      
      float dist = distance(vec2(x, y), vec2(0.5, 0.5));
      float size = 0.1 + sin(time * 2.0 + offset) * 0.05;
      
      return smoothstep(size, size * 0.5, dist);
    }
    
    // Main horizontal flow effect
    float horizontalFlow(vec2 uv, float time) {
      float flow = 0.0;
      
      // Multiple layers of horizontal movement
      for(int i = 0; i < 5; i++) {
        float layerOffset = float(i) * 0.2;
        float layerSpeed = flowSpeed + float(i) * 0.1;
        
        vec2 flowUV = uv + vec2(time * layerSpeed + layerOffset, 0.0);
        flow += smoothNoise(flowUV * 3.0) * (1.0 - float(i) * 0.2);
      }
      
      return flow;
    }
    
    void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      float time = iTime;
      
      // Create horizontal flowing effect
      float flow = horizontalFlow(uv, time);
      
      // Add wave distortion
      float wave = horizontalWave(uv.x * 5.0, time);
      uv.y += wave * 0.1;
      
      // Generate particles flowing horizontally
      float particles = 0.0;
      for(int i = 0; i < 8; i++) {
        float offset = float(i) * 0.125;
        particles += particle(uv, time, offset) * (1.0 - float(i) * 0.1);
      }
      
      // Create horizontal gradient
      float horizontalGradient = smoothstep(0.0, 0.3, uv.x) * smoothstep(1.0, 0.7, uv.x);
      
      // Combine effects
      float intensity = flow * 0.6 + particles * 0.4;
      intensity *= horizontalGradient;
      
      // Color mixing
      vec3 color1 = mix(primaryColor, secondaryColor, flow);
      vec3 color2 = mix(color1, accentColor, particles);
      
      // Add glow effect
      float glow = intensity * glowIntensity;
      vec3 finalColor = color2 + glow * primaryColor;
      
      // Blend with background (transparent)
      float alpha = intensity * blendOpacity;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  // Helper function to compile shader
  const loadShader = (gl: WebGLRenderingContext, type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error: ', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  };

  // Initialize shader program
  const initShaderProgram = (gl: WebGLRenderingContext, vsSource: string, fsSource: string) => {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    if (!vertexShader || !fragmentShader) return null;

    const shaderProgram = gl.createProgram();
    if (!shaderProgram) return null;

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('Shader program link error: ', gl.getProgramInfoLog(shaderProgram));
      return null;
    }

    return shaderProgram;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported.');
      return;
    }

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) return;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      },
      uniformLocations: {
        resolution: gl.getUniformLocation(shaderProgram, 'iResolution'),
        time: gl.getUniformLocation(shaderProgram, 'iTime'),
      },
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Get the full viewport width to ensure no gaps
        const width = window.innerWidth;
        const height = parent.clientHeight;
        
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        
        // Set canvas display size
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let startTime = Date.now();
    let animationFrameId: number;
    
    const render = () => {
      const currentTime = (Date.now() - startTime) / 1000;

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(programInfo.program);

      gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
      gl.uniform1f(programInfo.uniformLocations.time, currentTime);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0
      );
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full absolute inset-0" 
      style={{ 
        width: '100%', 
        height: '100%',
        display: 'block'
      }} 
    />
  );
};

export default ShaderBackground;

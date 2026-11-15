import { useEffect, useRef } from "react";
import * as THREE from "three";

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.OrthographicCamera | null;
    renderer: THREE.WebGLRenderer | null;
    mesh: THREE.Mesh | null;
    uniforms: {
      resolution: { value: [number, number] };
      time: { value: number };
      xScale: { value: number };
      yScale: { value: number };
      distortion: { value: number };
    } | null;
    animationId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { current: refs } = sceneRef;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    const initScene = () => {
      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      refs.renderer.setClearColor(new THREE.Color(0x000000), 0);
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      refs.uniforms = {
        resolution: { value: [canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      };

      const positions = new Float32Array([
        -1.0, -1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
      ]);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
        transparent: true,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let isInViewport = true;

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.012;
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
      refs.animationId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (
        reducedMotion ||
        document.hidden ||
        !isInViewport ||
        refs.animationId !== null
      ) {
        return;
      }

      animate();
    };

    const stopAnimation = () => {
      if (refs.animationId !== null) {
        window.cancelAnimationFrame(refs.animationId);
        refs.animationId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;

      const width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      const height = canvas.parentElement?.clientHeight ?? 76;

      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value = [width, height];
    };

    initScene();
    if (reducedMotion) {
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
    } else {
      startAnimation();
    }
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            isInViewport = entry.isIntersecting;
            if (isInViewport) {
              startAnimation();
            } else {
              stopAnimation();
            }
          })
        : null;
    observer?.observe(canvas);

    return () => {
      stopAnimation();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer?.disconnect();
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose();
        }
      }
      refs.renderer?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />;
}

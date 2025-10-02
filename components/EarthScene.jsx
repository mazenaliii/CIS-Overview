"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function Earth({ progress = 0 }) {
  const group = useRef();
  const earthRef = useRef();
  const materialRef = useRef();
  const shaderRef = useRef();
  const { camera } = useThree();
  const startYRef = useRef(0);
  const spinRef = useRef(0);

  const [dayTex, nightTex] = useTexture(["/earth_daymap.jpg", "/earth.jpg"]);

  useEffect(() => {
    if (dayTex) {
      dayTex.colorSpace = THREE.SRGBColorSpace;
      dayTex.anisotropy = 8;
      dayTex.needsUpdate = true;
    }
    if (nightTex) {
      nightTex.colorSpace = THREE.SRGBColorSpace;
      nightTex.anisotropy = 8;
      nightTex.needsUpdate = true;
    }
  }, [dayTex, nightTex]);

  const targetRotation = useMemo(() => new THREE.Euler(0, 0, 0, "XYZ"), []);

  useFrame((_, delta) => {
    if (earthRef.current) {

      const rotAmount = Math.PI * 1.2; // ~216 degrees across hero
      const clamped = THREE.MathUtils.clamp(progress, 0, 1);

      const idleSpeed = 0.15; // rad/sec
      spinRef.current += idleSpeed * delta * (1 - clamped * 0.3);
      earthRef.current.rotation.y = startYRef.current + rotAmount * clamped + spinRef.current;

      earthRef.current.rotation.x = THREE.MathUtils.lerp(earthRef.current.rotation.x, 0.45, 0.12);
    }

    if (group.current && camera) {
      const targetRadius = camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      group.current.scale.setScalar(targetRadius * 1.25);

      group.current.position.set(0, -targetRadius * 0.85, 0);
    }

    const alpha = 1 - THREE.MathUtils.clamp(progress, 0, 1);
    if (materialRef.current) {
      materialRef.current.opacity = alpha;
      materialRef.current.transparent = true;
      materialRef.current.needsUpdate = true;
    }
    if (shaderRef.current && shaderRef.current.uniforms) {
      shaderRef.current.uniforms.uOpacity.value = alpha;
    }
  });

  return (
    <group ref={group}>
      
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        
        <shaderMaterial
          ref={shaderRef}
          transparent
          uniforms={{
            dayMap: { value: dayTex || null },
            nightMap: { value: nightTex || null },
            uLightDir: { value: new THREE.Vector3(1, 0.25, 1).normalize() },
            uOpacity: { value: 1.0 },
          }}
          vertexShader={`
            varying vec2 vUv;
            varying vec3 vNormalV;
            void main(){
              vUv = uv;
              vNormalV = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform sampler2D dayMap;
            uniform sampler2D nightMap;
            uniform vec3 uLightDir; // in view space
            uniform float uOpacity;
            varying vec2 vUv;
            varying vec3 vNormalV;
            void main(){
              vec3 L = normalize(uLightDir);
              float ndl = max(0.0, dot(normalize(vNormalV), L));

              float nightFactor = smoothstep(0.4, 0.65, 1.0 - ndl);
              vec3 day = texture2D(dayMap, vUv).rgb;
              vec3 night = texture2D(nightMap, vUv).rgb;
              vec3 color = mix(day, night, nightFactor);
              gl_FragColor = vec4(color, uOpacity);
            }
          `}
        />
      </mesh>

    </group>
  );
}

export default function EarthScene({ progress = 0 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.2], fov: 50 }}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.18} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.9}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, -2, -3]} intensity={0.25} />
      <directionalLight position={[0, -2, -4]} intensity={0.15} />

      <Suspense fallback={null}>
        <Earth progress={progress} />
      </Suspense>

      <Stars radius={80} depth={40} count={1500} factor={2} saturation={0} fade speed={0.4} />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

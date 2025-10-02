"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";

function LoadedModel({ src, scale = 1, position = [0, -0.5, 0] }) {
  const { scene } = useGLTF(src, true);
  return <primitive object={scene} scale={scale} position={position} />;
}

function Fallback() {
  return (
    <Html center>
      <div className="rounded-xl bg-white/5 text-white/80 px-3 py-2 text-sm ring-1 ring-white/10">
        Loading 3D model...
      </div>
    </Html>
  );
}

export default function ModelViewer({
  src = "/model.glb",
  cameraPosition = [2.5, 1.5, 2.5],
  autoRotate = true,
  background = "transparent",
}) {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: cameraPosition, fov: 45 }} style={{ background }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <Suspense fallback={<Fallback />}>
          <LoadedModel src={src} scale={1} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} autoRotate={autoRotate} autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/model.glb");

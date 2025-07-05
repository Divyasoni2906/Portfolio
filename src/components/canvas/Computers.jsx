// src/components/canvas/ComputersCanvas.jsx

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/galaxy-of-coder/source/codewithstar.glb");

  useEffect(() => {
    scene.traverse((child) => {
      // Optional: hide specific nodes if needed
      if (child.name?.startsWith("Icosphere_")) {
        child.visible = false;
      }

      // Safety check for bad geometry
      if (child.isMesh) {
        const pos = child.geometry?.attributes?.position;
        if (!pos || pos.count === 0 || !pos.array || pos.array.length === 0) {
          console.warn("⚠️ Bad geometry in:", child.name);
          child.visible = false;
        } else {
          for (let i = 0; i < pos.array.length; i++) {
            if (isNaN(pos.array[i])) {
              console.error("❌ NaN found in:", child.name);
              child.visible = false;
              break;
            }
          }
        }
      }
    });
  }, [scene]);

  return (
    <>
      <spotLight
        position={[2, 5, -20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        dispose={null}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [5, 5.5, -30] : [2, 6, -20]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [-3, 3, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

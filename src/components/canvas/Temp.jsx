
// import React, { Suspense, useEffect, useState, useMemo } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import * as THREE from 'three';

// import CanvasLoader from "../Loader";

// const ProceduralComputer = ({ isMobile }) => {
//   const computerGroup = useMemo(() => {
//     const group = new THREE.Group();
    
//     // Monitor
//     const monitorGeometry = new THREE.BoxGeometry(3, 2, 0.1);
//     const monitorMaterial = new THREE.MeshStandardMaterial({ color: '#1a1a1a' });
//     const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
//     monitor.position.set(0, 1.5, 0);
    
//     // Screen
//     const screenGeometry = new THREE.BoxGeometry(2.8, 1.8, 0.05);
//     const screenMaterial = new THREE.MeshStandardMaterial({ 
//       color: '#000033',
//       emissive: '#000033',
//       emissiveIntensity: 0.2
//     });
//     const screen = new THREE.Mesh(screenGeometry, screenMaterial);
//     screen.position.set(0, 1.5, 0.051);
    
//     // Base/Stand
//     const baseGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
//     const baseMaterial = new THREE.MeshStandardMaterial({ color: '#333333' });
//     const base = new THREE.Mesh(baseGeometry, baseMaterial);
//     base.position.set(0, 0.5, 0);
    
//     // Keyboard
//     const keyboardGeometry = new THREE.BoxGeometry(2.5, 0.1, 1);
//     const keyboardMaterial = new THREE.MeshStandardMaterial({ color: '#2a2a2a' });
//     const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
//     keyboard.position.set(0, 0, 1.2);
    
//     // Mouse
//     const mouseGeometry = new THREE.BoxGeometry(0.3, 0.05, 0.5);
//     const mouseMaterial = new THREE.MeshStandardMaterial({ color: '#404040' });
//     const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
//     mouse.position.set(1.5, 0.025, 1.2);
    
//     group.add(monitor, screen, base, keyboard, mouse);
//     return group;
//   }, []);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computerGroup}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <ProceduralComputer isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;



// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// // Only preload on desktop
// const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;
// if (isDesktop) {
//   useGLTF.preload("./galaxy-of-coder/source/codewithstar.glb");
// }

// const Computers = ({ isMobile, showModel }) => {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     if (!showModel) return;
    
//     // Only load the model if we should show it
//     const loadModel = async () => {
//       try {
//         const { scene } = await useGLTF("./galaxy-of-coder/source/codewithstar.glb");
        
//         scene.traverse((child) => {
//           if (!child.isMesh) return;

//           const pos = child.geometry?.attributes?.position;

//           if (!pos || !pos.array || pos.array.length === 0) {
//             console.warn("⛔️ Skipping mesh with empty geometry:", child.name);
//             child.visible = false;
//             return;
//           }

//           const hasNaN = pos.array.some((val) => isNaN(val));
//           if (hasNaN) {
//             console.error("❌ NaN in mesh:", child.name);
//             child.visible = false;
//             return;
//           }
//         });
        
//         setModel(scene);
//       } catch (error) {
//         console.error("Failed to load 3D model:", error);
//       }
//     };

//     loadModel();
//   }, [showModel]);

//   if (!showModel || !model) {
//     // Return a simple fallback for mobile
//     return (
//       <>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         {/* Optional: Add a simple geometric shape as fallback */}
//         <mesh position={[0, 0, 0]}>
//           <boxGeometry args={[1, 1, 1]} />
//           <meshStandardMaterial color="#915eff" />
//         </mesh>
//       </>
//     );
//   }

//   return (
//     <>
//       <spotLight
//         position={[2, 5, -20]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow={false}
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={model}
//         dispose={null}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [5, 5.5, -30] : [2, 6, -20]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showModel, setShowModel] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");
//     const isMobileDevice = mediaQuery.matches;
//     setIsMobile(isMobileDevice);
    
//     // Only show 3D model on desktop or powerful devices
//     setShowModel(!isMobileDevice);
    
//     const handler = (e) => {
//       setIsMobile(e.matches);
//       setShowModel(!e.matches);
//     };
    
//     mediaQuery.addEventListener("change", handler);
//     return () => mediaQuery.removeEventListener("change", handler);
//   }, []);

//   // For mobile, return a simpler version or just the background
//   if (isMobile) {
//     return (
//       <div className="w-full h-full bg-gradient-to-b from-transparent to-primary/20">
//         {/* Optional: Add CSS animations or simple graphics */}
//       </div>
//     );
//   }

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [-3, 3, 20], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} showModel={showModel} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;


// import React, { Suspense, useEffect, useState , useRef} from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile, spotlightRef }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//   const computerRef = useRef();

//   useEffect(() => {
//     if (computerRef.current && spotlightRef.current) {
//       const computerPosition = computerRef.current.position;
//       spotlightRef.current.position.set(
//         computerPosition.x-40 , // Adjust x position based on computer
//         computerPosition.y+10 , // Adjust y position based on computer
//         computerPosition.z+10  // Adjust z position based on computer
//       );
//     }
//   }, [computerRef.current, spotlightRef.current]);

//   return (
//     <mesh ref={computerRef}>
//       <hemisphereLight intensity={0.6} groundColor='black' />
//       <spotLight
//         ref={spotlightRef}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.65 : 0.75}
//         position={isMobile ? [0, -4.5, -1.0] : [0, -6.50, -1.2]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const spotlightRef= useRef();
//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 20, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} spotlightRef={spotlightRef} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;
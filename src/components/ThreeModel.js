import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, OrbitControls, Environment } from "@react-three/drei";

const SportsCar = (props) => {
  const group = useRef();
  
  // Wheel component for reuse
  const Wheel = ({ position }) => (
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.35, 0.35, 0.25, 32]} />
      <meshStandardMaterial color="#111" roughness={0.5} />
      {/* Rim */}
      <mesh position={[0, 0.13, 0]}>
         <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
         <meshStandardMaterial color="#silver" metalness={0.8} roughness={0.2} />
      </mesh>
    </mesh>
  );

  return (
    <group ref={group} {...props} rotation={[0, -0.5, 0]}>
      {/* --- CAR BODY --- */}
      <group position={[0, 0.2, 0]}>
        
        {/* Main Chassis (Lower) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4, 0.5, 1.8]} />
          <meshStandardMaterial 
            color="#ffffff" // White Body
            roughness={0.2} 
            metalness={0.6} // Metallic Paint
            envMapIntensity={1}
          />
        </mesh>

        {/* Cabin (Upper) */}
        <mesh position={[-0.2, 0.5, 0]}>
           <boxGeometry args={[2, 0.6, 1.5]} />
           <meshStandardMaterial color="#111" roughness={0.1} metalness={0.9} /> {/* Windshield/Windows */}
        </mesh>

        {/* Hood Scoop / Engine Detail */}
        <mesh position={[1.2, 0.26, 0]}>
             <boxGeometry args={[0.8, 0.1, 1]} />
             <meshStandardMaterial color="#333" roughness={0.3} />
        </mesh>

        {/* Spoiler (Rear) */}
        <mesh position={[-1.8, 0.5, 0]}>
             <boxGeometry args={[0.5, 0.1, 1.8]} />
             <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.6} />
        </mesh>
        <mesh position={[-1.7, 0.3, 0.7]}>
             <boxGeometry args={[0.1, 0.4, 0.1]} />
             <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-1.7, 0.3, -0.7]}>
             <boxGeometry args={[0.1, 0.4, 0.1]} />
             <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Headlights */}
        <mesh position={[1.96, 0.1, 0.6]}>
            <boxGeometry args={[0.1, 0.15, 0.3]} />
            <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={2} />
        </mesh>
        <mesh position={[1.96, 0.1, -0.6]}>
            <boxGeometry args={[0.1, 0.15, 0.3]} />
            <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={2} />
        </mesh>
        
        {/* Taillights */}
        <mesh position={[-1.96, 0.1, 0.6]}>
            <boxGeometry args={[0.1, 0.15, 0.3]} />
            <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={2} />
        </mesh>
        <mesh position={[-1.96, 0.1, -0.6]}>
            <boxGeometry args={[0.1, 0.15, 0.3]} />
            <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={2} />
        </mesh>

        {/* --- WHEELS --- */}
        <Wheel position={[1.2, -0.25, 0.8]} />  {/* Front Left */}
        <Wheel position={[1.2, -0.25, -0.8]} /> {/* Front Right */}
        <Wheel position={[-1.2, -0.25, 0.8]} /> {/* Rear Left */}
        <Wheel position={[-1.2, -0.25, -0.8]} /> {/* Rear Right */}

      </group>
    </group>
  );
};

const ThreeModel = () => {
  return (
    <div style={{ height: "400px", width: "100%", position: "relative" }}>
      <Canvas camera={{ position: [5, 4, 7], fov: 40 }}>
        {/* Lighting & Environment */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        {/* Neon Underglow */}
        <spotLight position={[0, -2, 0]} color="#6a0dad" intensity={5} distance={10} angle={1} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
           <SportsCar />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.6} scale={10} blur={2} far={4} color="#000" />
      </Canvas>
    </div>
  );
};

export default ThreeModel;

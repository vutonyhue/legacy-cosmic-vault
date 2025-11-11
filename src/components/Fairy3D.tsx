import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Cone } from "@react-three/drei";
import * as THREE from "three";

interface Fairy3DProps {
  position: [number, number, number];
  delay: number;
}

export const Fairy3D = ({ position, delay }: Fairy3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Mesh>(null);
  const rightWingRef = useRef<THREE.Mesh>(null);
  
  // Orbit animation
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    const t = clock.getElapsedTime() + delay;
    
    // Circular flying motion
    groupRef.current.position.x = position[0] + Math.cos(t * 0.5) * 2;
    groupRef.current.position.y = position[1] + Math.sin(t * 0.3) * 1.5;
    groupRef.current.position.z = position[2] + Math.sin(t * 0.4) * 0.5;
    
    // Gentle rotation
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    groupRef.current.rotation.z = Math.cos(t * 0.3) * 0.1;
    
    // Wing flapping animation
    if (leftWingRef.current && rightWingRef.current) {
      const wingFlap = Math.sin(t * 8) * 0.6;
      leftWingRef.current.rotation.y = -Math.PI / 4 + wingFlap;
      rightWingRef.current.rotation.y = Math.PI / 4 - wingFlap;
    }
  });

  // Wing geometry
  const wingGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.5, 0.8, 1, 1, 1.5, 0.9);
    shape.bezierCurveTo(1.2, 0.4, 0.8, 0, 0, 0);
    
    const extrudeSettings = {
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
    };
    
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <group ref={groupRef} position={position}>
      {/* Body - green sphere */}
      <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#22c55e" 
          emissive="#15803d"
          emissiveIntensity={0.3}
          metalness={0.2}
          roughness={0.3}
        />
      </Sphere>
      
      {/* Head */}
      <Sphere args={[0.25, 32, 32]} position={[0, 0.45, 0]}>
        <meshStandardMaterial 
          color="#dcfce7" 
          emissive="#86efac"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Hair bun */}
      <Sphere args={[0.15, 16, 16]} position={[0, 0.7, -0.1]}>
        <meshStandardMaterial color="#16a34a" />
      </Sphere>
      
      {/* Dress - cone */}
      <Cone args={[0.4, 0.6, 16]} position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#4ade80" 
          emissive="#22c55e"
          emissiveIntensity={0.2}
        />
      </Cone>
      
      {/* Left Wing */}
      <mesh 
        ref={leftWingRef}
        geometry={wingGeometry}
        position={[-0.2, 0.2, -0.2]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <meshStandardMaterial 
          color="#ffffff" 
          transparent
          opacity={0.7}
          emissive="#a7f3d0"
          emissiveIntensity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Right Wing */}
      <mesh 
        ref={rightWingRef}
        geometry={wingGeometry}
        position={[0.2, 0.2, -0.2]}
        rotation={[0, Math.PI / 4, Math.PI]}
        scale={[-1, 1, 1]}
      >
        <meshStandardMaterial 
          color="#ffffff" 
          transparent
          opacity={0.7}
          emissive="#a7f3d0"
          emissiveIntensity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Magic sparkles */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 0.8;
        return (
          <Sphere 
            key={i}
            args={[0.05, 8, 8]} 
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius * 0.5,
              0
            ]}
          >
            <meshStandardMaterial 
              color="#fbbf24" 
              emissive="#fbbf24"
              emissiveIntensity={1}
            />
          </Sphere>
        );
      })}
      
      {/* Point light for glow effect */}
      <pointLight 
        color="#22c55e" 
        intensity={0.8} 
        distance={3}
        decay={2}
      />
    </group>
  );
};

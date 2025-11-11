import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Fairy3D } from "./Fairy3D";

export const FairyScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.6} />
        
        {/* Directional lights */}
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} />
        
        {/* Fairies flying around */}
        <Fairy3D position={[-3, 1, 0]} delay={0} />
        <Fairy3D position={[3, -1, 0]} delay={2} />
        <Fairy3D position={[0, 2, 1]} delay={4} />
      </Canvas>
    </div>
  );
};

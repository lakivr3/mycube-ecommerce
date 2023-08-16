import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./Loader";

const Cube = () => {
  const cube = useGLTF("./LogoCube/scene.gltf");
  return (
    <primitive object={cube.scene} scale={1} position-y={0} rotation-y={0} />
  );
};
const CubeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 55,
        near: 0.1,
        far: 200,
        position: [-4, 30, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableRotate={false}
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cube />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;

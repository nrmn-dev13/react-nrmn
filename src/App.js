import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import "./App.css";
import WaveShaderMaterial from './WaveShader'

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));   

  return (
    <mesh>
      <planeBufferGeometry args={[5, 5, 512, 512]} />
      <waveShaderMaterial wireframe ref={ref} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

const App = () => {
  return (
    <>
      <h1>POMADA MODELADORA</h1>
      <Scene />
    </>
  );
};

export default App;

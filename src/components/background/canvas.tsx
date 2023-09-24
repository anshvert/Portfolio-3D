import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Loader, PerspectiveCamera, PointerLockControlsProps } from "@react-three/drei";
import { Model } from "@/components/background/models/Scene";
import { OrbitControls, PointerLockControls } from "@react-three/drei";

interface CanvasElementProps {}

const CanvasElement: React.FC<CanvasElementProps> = ({}) => {
    const controls: any = useRef(null);

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
        case "w":
        case "ArrowUp":
            controls.current?.moveForward(1);
            break;
        case "s":
        case "ArrowDown":
            controls.current?.moveForward(-1);
            break;
        case "a":
        case "ArrowLeft":
            controls.current?.moveRight(-1);
            break;
        case "d":
        case "ArrowRight":
            controls.current?.moveRight(1);
            break;
        default:
            break;
        }
    };

  return (
    <>
      <Canvas
        className="canvas"
        onCreated={({ gl }) => {
          window.addEventListener("keydown", handleKeyDown);
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 5, 15]}
          fov={75}
          near={0.1}
          far={1000}
        />
        <PointerLockControls ref={controls}/>
        <ambientLight intensity={0} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Environment files="/sky.hdr" background={true} blur={0} />
        <Model />
      </Canvas>
      <Loader />
    </>
  );
};

export default CanvasElement;

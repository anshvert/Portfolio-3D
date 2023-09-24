import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Loader, PerspectiveCamera, PointerLockControlsProps } from "@react-three/drei";
import { BeachHouse } from "@/components/background/models/beachHouse";
import { House } from "@/components/background/models/house"
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

    // useFrame(() => {
    //   console.log("OKK")
    // })

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
          position={[0, 5, 10]}
          fov={50}
          near={0.1}
          far={1000}
        />
        {/* <PointerLockControls ref={controls}/> */}
        <OrbitControls
          enableZoom={false}
          target={[0,-15,-100]}
          autoRotate={false}
          enableDamping/>
        {/* <ambientLight intensity={0} /> */}
        {/* <directionalLight position={[-2, 5, 2]} intensity={1} /> */}
        <Environment files="/sky.hdr" background={true} blur={0} />
        {/* <BeachHouse /> */}
        <House/>
      </Canvas>
      <Loader />
    </>
  );
};

export default CanvasElement;

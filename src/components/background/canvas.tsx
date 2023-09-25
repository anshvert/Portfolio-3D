import React, { useRef } from "react";
import { Canvas, Vector3, useFrame, useThree } from "@react-three/fiber";
import { Environment, Loader, PerspectiveCamera, PointerLockControlsProps, OrbitControls } from "@react-three/drei";
import { House } from "@/components/background/models/house"
import CanvasBackgroundElements from "./canvasElements";
import * as THREE from "three";

interface CanvasElementProps {
  cameraPosition: THREE.Vector3
}

const CanvasElement: React.FC<CanvasElementProps> = ({cameraPosition}) => {
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
        }}>
        <CanvasBackgroundElements cameraPosition={cameraPosition}/>
      </Canvas>
      <Loader />
    </>
  );
};

export default CanvasElement;

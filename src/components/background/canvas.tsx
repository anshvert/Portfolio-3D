import React, { Suspense, useRef, useState } from "react";
import { Canvas, Vector3, useFrame, useThree } from "@react-three/fiber";
import { Environment, Loader, PerspectiveCamera, PointerLockControlsProps, OrbitControls } from "@react-three/drei";
import { House } from "@/components/background/models/house"
import CanvasBackgroundElements from "./canvasElements";
import * as THREE from "three";
import {LoadingScreen} from "../loading/LoadingScreen";
import useStore from '@/slices/store';

interface CanvasElementProps {}

const CanvasElement: React.FC<CanvasElementProps> = ({}) => {
    const controls: any = useRef(null);
    const { loaded , setLoaded } = useStore()

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
        className="canvas">
         <Suspense fallback={null}>{<CanvasBackgroundElements />}</Suspense>
      </Canvas>
      <LoadingScreen loaded={loaded} setLoaded={setLoaded}/>
    </>
  );
};

export default CanvasElement;

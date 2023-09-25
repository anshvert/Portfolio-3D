import { Environment, OrbitControls, PerspectiveCamera, PointerLockControlsProps } from "@react-three/drei";
import { House } from "@/components/background/models/house"
import { Vector3, useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface CanvasBackgroundElementsProps {
    cameraPosition: Vector3
}

const CanvasBackgroundElements: React.FC<CanvasBackgroundElementsProps> = ({cameraPosition}) => {

    // useFrame(() => {
    //     console.log(camera.position)
    //     console.log(cameraPosition)
    //     const distance = camera.position.distanceTo(cameraPosition);
    //     console.log(distance)
    // })

    const animateCamera = (camera: any, targetPosition: any) => {
        const animationDuration = 1; // Duration in seconds
      
        gsap.to(camera.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z,
          duration: animationDuration,
          ease: "power2.inOut", // You can use different easing functions
        });
      
        camera.lookAt(targetPosition); // Make sure the camera is looking at the target
      };
    useEffect(() => {
        // const targetpositionVector3 = new THREE.Vector3(cameraPosition[0],cameraPosition[1],cameraPosition[2])
        // console.log(targetpositionVector3)
        animateCamera(camera,cameraPosition)
    },[cameraPosition])
    const { camera } = useThree()
    return (
        <mesh>
            <PerspectiveCamera
                position={[0,0,0]}
                fov={50}
                near={0.1}
                far={1000}
        />
        {/* <PointerLockControls ref={controls}/> */}
            <OrbitControls
                enableZoom={true}
                target={[0,-15,-100]}
                autoRotate={false}
                enableDamping/>
          
        <Environment files="/sky.hdr" background={true} blur={0} />
        <House/>
        </mesh>
    )
}
export default CanvasBackgroundElements
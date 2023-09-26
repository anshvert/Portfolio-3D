import { Environment, OrbitControls, PerspectiveCamera, PointerLockControlsProps } from "@react-three/drei";
import { House } from "@/components/background/models/house"
import { Camera, Vector3, useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import useStore from '@/slices/store';

interface CanvasBackgroundElementsProps {}

const CanvasBackgroundElements: React.FC<CanvasBackgroundElementsProps> = ({}) => {

    const {perspectiveCamera,setPerspectiveCamera} = useStore()

    // useFrame(() => {
    //     console.log(camera.position)
    //     console.log(cameraPosition)
    //     const distance = camera.position.distanceTo(cameraPosition);
    //     console.log(distance)
    // })

    const animateCamera = (camera: Camera, targetPosition: THREE.Vector3) => {
        const animationDuration = 1.5;
        gsap.to(camera.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z,
          duration: animationDuration,
          ease: "power1.inOut",
        });
        camera.lookAt(targetPosition);
      };
    useEffect(() => {
        animateCamera(camera,perspectiveCamera)
    },[perspectiveCamera])
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
                enableZoom={false}
                target={[0,-15,-100]}
                autoRotate={false}
                enableDamping/>
          
        <Environment files="/sky.hdr" background={true} blur={0} />
        <House/>
        </mesh>
    )
}
export default CanvasBackgroundElements
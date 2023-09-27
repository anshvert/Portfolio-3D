import { Environment, OrbitControls, PerspectiveCamera, PointerLockControlsProps } from "@react-three/drei";
import { House } from "@/components/background/models/house"
import { LamboCountach } from "@/components/background/models/lamboCountach"
import { BusinessMan } from "@/components/background/models/BusinessMan"
import { MChair } from "@/components/background/models/MChair"
import { Camera, Vector3, useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import useStore from '@/slices/store';

interface CanvasBackgroundElementsProps {}

const CanvasBackgroundElements: React.FC<CanvasBackgroundElementsProps> = ({}) => {

    const {perspectiveCamera,setPerspectiveCamera,showStuff,setShowStuff,sideBarSection} = useStore()

    // useFrame(() => {
    //     console.log(camera.position)
    //     // console.log(cameraPosition)
    //     // const distance = camera.position.distanceTo(cameraPosition);
    //     // console.log(distance)
    // })

    const animationCompleted = (val: boolean) => {
        setShowStuff(val)
    }
    const params: any[] = sideBarSection ? [true] : [false]
    const animateCamera = (camera: Camera, targetPosition: THREE.Vector3) => {
        const animationDuration = 1.5;
        gsap.to(camera.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z,
          duration: animationDuration,
          ease: "power1.inOut",
          onComplete: animationCompleted,
          onCompleteParams: params
        });
        camera.lookAt(targetPosition);
      };
    useEffect(() => {
        animateCamera(camera,perspectiveCamera)
    },[perspectiveCamera])
    const { camera } = useThree()
    //-12,-10,-80s
    return (
        <mesh>
            <PerspectiveCamera
                position={[0,0,0]}
                fov={50}
                near={0.5}
                far={1000}
        />
        {/* <PointerLockControls ref={controls}/> */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                target={[10,-4,-50]}
                autoRotate={false}
                enableDamping/>
          
        <Environment files="/sky.hdr" background={true} blur={0} />
        <House/>
        {/* <LamboCountach/> */}
        <BusinessMan/>
        <MChair/>
        </mesh>
    )
}
export default CanvasBackgroundElements
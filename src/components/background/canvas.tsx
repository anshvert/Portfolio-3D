import React , {Suspense, useRef} from "react"
import {Canvas, useThree} from "@react-three/fiber"
import Boxx from '@/components/background/elements/box';
import AnimatedSphere from "@/components/background/elements/animatedSphere";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import {Model} from "@/components/background/models/Scene"

interface CanvasElementProps {}

const CanvasElement: React.FC<CanvasElementProps> = ({}) => {

    return (
        <>
            <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Environment files="/sky.hdr" background={true} blur={0}/>
                    {/* <Boxx /> */}
                    <Model />
                </Suspense>
            </Canvas>
            <Loader/>
        </>
    )

}
export default CanvasElement
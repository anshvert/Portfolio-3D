import React , {Suspense, useRef} from "react"
import {Canvas, useThree} from "@react-three/fiber"
import Boxx from '@/components/background/elements/box';
import AnimatedSphere from "@/components/background/elements/animatedSphere";
import { Environment, OrbitControls } from "@react-three/drei";
import {Model} from "@/components/background/models/Scene"

const hdriElement = () => {
    const groupRef = useRef();
    const { gl, scene } = useThree();
    console.log(gl,scene)
}

interface CanvasElementProps {}

const CanvasElement: React.FC<CanvasElementProps> = ({}) => {

    return (
        <Canvas className="canvas">
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <Environment files="/sky.hdr" background={true} />
                <Boxx />
                <Model />
            </Suspense>
        </Canvas>
    )

}
export default CanvasElement
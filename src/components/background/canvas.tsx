import React , {Suspense} from "react"
import {Canvas} from "@react-three/fiber"
import Boxx from '@/components/background/elements/box';
import AnimatedSphere from "@/components/background/elements/animatedSphere";
import { OrbitControls } from "@react-three/drei";

interface CanvasElementProps {}

const CanvasElement: React.FC<CanvasElementProps> = ({}) => {
    return (
        <Canvas className="canvas">
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1} />
            <directionalLight position={[-2,5,2]} intensity={1}/>
            <Suspense fallback={null}>
                <Boxx/>
                <AnimatedSphere/>
            </Suspense>
        </Canvas> 
    )

}
export default CanvasElement
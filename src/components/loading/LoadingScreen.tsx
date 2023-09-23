import { Canvas } from "@react-three/fiber";
import React from "react"
import Boxx from '@/components/background/elements/box';

const LoadingSpinner: React.FC<{}> = ({}) => {
    return (
        <Canvas className="canvas">
            <mesh>
                <Boxx/>
            </mesh>
        </Canvas>
    );
};
export default LoadingSpinner
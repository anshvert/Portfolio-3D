import React from "react"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"

const AnimatedSphere = () => {

    return (
        <mesh>
            <Sphere visible args={[1,100,200]}>
                <MeshDistortMaterial/>
            </Sphere>
        </mesh>
    )

}
export default AnimatedSphere
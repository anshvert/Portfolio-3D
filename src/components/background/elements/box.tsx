import React from "react";
import { Box } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "../../../../public/media/background/textures/texture1.jpg"

const Boxx = () => {
  const colorMap = useLoader(TextureLoader,texture.src)

  return (
    <mesh rotation={[90,0,20]} scale={0.3}>
        <Box position={[-3, -5, 0]} scale={[1, 1, 1]} args={[2, 2, 2]}>
            {/* <meshStandardMaterial map={colorMap} /> */}
            <meshNormalMaterial attach="material"/>
        </Box>
    </mesh>
  );
}

export default Boxx;
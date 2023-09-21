import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

function Boxx() {
  return (
    <mesh rotation={[90,0,20]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} scale={[1, 1, 1]} args={[2, 2, 2]}>
            <meshStandardMaterial color="white" />
        </Box>
      </mesh>
  );
}

export default Boxx;
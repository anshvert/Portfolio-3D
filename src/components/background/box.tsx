import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

function Boxx() {
  return (
    <mesh>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} scale={[1, 1, 1]} args={[1, 1, 1]}>
            <meshStandardMaterial color="blue" />
        </Box>
      </mesh>
  );
}

export default Boxx;
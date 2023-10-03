/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: ROY (https://sketchfab.com/roy.gearloft.in)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-futuristic-chair-22af0922da29411b95ea1e1be99ecd46
Title: Chair / Futuristic Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MChair(props) {
  const { nodes, materials } = useGLTF('/modernChair/scene.gltf')
  return (
    <group {...props} dispose={null} position={[9,-7.7,-53.5]} scale={3.5}>
      <group rotation={[-1.562, 0, -1.577]}>
        <group rotation={[Math.PI / 2, -Math.PI/2, 0]}>
          <group position={[-0.325, 0.597, -0.623]} rotation={[Math.PI / 2, 0, 1.724]} scale={0.029}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Color_E10} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Color_004} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/modernChair/scene.gltf')
"use client"
import './globals.css';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import React, { Suspense, useEffect, useState } from "react";
import Background from '@/components/background/background';
import BackgroundText from '@/components/background/backgroundText';
import styled from 'styled-components';
import CanvasElement from '@/components/background/canvas';
import Portfolio from '@/components/portfolio/Portfolio';
import { Vector3 } from '@react-three/fiber';
import * as THREE from "three"
import useStore from '@/slices/store';

// export const metadata: Metadata = {
//     title: 'Ansh',
//     description: 'Portfolio',
// };

const Wrapper = styled.div`
  position: relative;
  canvas {
    height: 1000px;
    width: 500px;
  }
`;


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cameraPosition,setCameraPosition] = useState<THREE.Vector3>(new THREE.Vector3(0,0,0))
   
    return (
        <html lang="en">
            <body>
                <Wrapper>
                    <Suspense fallback={null}> 
                        <>
                            <BackgroundText cameraPosition={cameraPosition} setCameraPosition={setCameraPosition}/>
                            <CanvasElement cameraPosition={cameraPosition}/>
                            <Portfolio children = {children}/>
                        </>
                    </Suspense>
                </Wrapper>
            </body>
        </html>
    );
}

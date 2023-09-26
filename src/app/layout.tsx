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
    return (
        <html lang="en">
            <body>
                <Wrapper>
                    <Suspense fallback={null}> 
                        <>
                            <BackgroundText/>
                            <CanvasElement/>
                            <Portfolio children = {children}/>
                        </>
                    </Suspense>
                </Wrapper>
            </body>
        </html>
    );
}

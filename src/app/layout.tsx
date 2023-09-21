"use client"
import './globals.css';
import type { Metadata } from 'next';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import React from "react";
import Background from '@/components/background/background';
import {Canvas} from "@react-three/fiber"
import Boxx from '@/components/background/box';
import BackgroundText from '@/components/background/backgroundText';
import styled from 'styled-components';

export const metadata: Metadata = {
    title: 'Ansh',
    description: 'Portfolio',
};

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  canvas {
    height: 500px;
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
                <Wrapper style={{"textAlign": "center"}}>
                    <Background/>
                    <BackgroundText/>
                    <Canvas className="canvas">
                        <Boxx/>
                    </Canvas>
                    {/* <div style={{ margin: "35px", width: "95%"}}>
                        <SideBar />
                        <main className="pl-0 lg:pl-[300px] z-1">
                            <Navbar />
                            {children}
                        </main>
                    </div> */}
                </Wrapper>
            </body>
        </html>
    );
}

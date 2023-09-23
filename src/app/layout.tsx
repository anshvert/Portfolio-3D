"use client"
import './globals.css';
import type { Metadata } from 'next';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import React, { Suspense, useEffect, useState } from "react";
import Background from '@/components/background/background';
import BackgroundText from '@/components/background/backgroundText';
import styled from 'styled-components';
import CanvasElement from '@/components/background/canvas';
import LoadingSpinner from '@/components/loading/LoadingScreen';
import { Loader } from '@react-three/drei';

export const metadata: Metadata = {
    title: 'Ansh',
    description: 'Portfolio',
};

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
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },3500)
    },[])
    return (
        <html lang="en">
            <body>
                <Wrapper>
                    <Suspense fallback={<LoadingSpinner/>}>
                        {!loading ? (<>
                            <BackgroundText/>
                        <CanvasElement/>
                        <div style= {{display: "Flex", position: "relative", background: "linear-gradient(to bottom, #787578, #000000)"}}>
                            <div style={{ marginTop: "50px", marginLeft: "35px",display: "flex", width: "90%", marginRight: "auto"}}>
                                <SideBar />
                                <main style={{zIndex: 1, overflowX: "hidden", marginLeft: "40px"}}>
                                    {/* <Navbar /> */}
                                    {children}
                                </main>
                            </div>
                        </div>
                        </>) : (<LoadingSpinner/>)}
                    </Suspense>
                </Wrapper>
            </body>
        </html>
    );
}

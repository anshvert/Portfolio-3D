"use client"
import './globals.css';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import React, { Suspense, useEffect, useState } from "react";
import Background from '@/components/background/background';
import BackgroundText from '@/components/background/backgroundText';
import styled from 'styled-components';
import CanvasElement from '@/components/background/canvas';
import LoadingSpinner from '@/components/loading/LoadingScreen';
import { Loader } from '@react-three/drei';
import Portfolio from '@/components/portfolio/Portfolio';

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
    const [loading,setLoading] = useState<boolean>(false)
    const [skills,setSkills] = useState<boolean>(false)
   
    return (
        <html lang="en">
            <body>
                <Wrapper>
                    <Suspense fallback={null}> 
                        <>
                            <BackgroundText setSkills={setSkills}/>
                            <CanvasElement/>
                            {skills && 
                                <Portfolio children = {children}/>
                            }
                        </>
                    </Suspense>
                </Wrapper>
            </body>
        </html>
    );
}

"use client"
import './globals.css';
import React, { Suspense, useEffect, useState } from "react";
import BackgroundText from '@/components/background/backgroundText';
import styled from 'styled-components';
import CanvasElement from '@/components/background/canvas';
import Portfolio from '@/components/portfolio/Portfolio';
import useStore from '@/slices/store';

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
    const { loaded } = useStore()
    return (
        <html lang="en">
            <body>
                <Wrapper>
                    <Suspense fallback={null}> 
                        <>  {loaded && <BackgroundText/>}
                            <CanvasElement/>
                            <Portfolio children = {children}/>
                        </>
                    </Suspense>
                </Wrapper>
            </body>
        </html>
    );
}

import { Dispatch, SetStateAction, useState } from "react"
import SideBar from "../Sidebar"
import styled from "styled-components";
import useStore from '@/slices/store';

interface PortfolioProps {
    children: React.ReactNode
}

const Portfolio: React.FC<PortfolioProps> = ({ children }) => {
    const { sideBarSection } = useStore()
    if (!sideBarSection) return <></>
    return (
        <>
            {/* <div style= {{display: "Flex", position: "relative", background: "linear-gradient(to bottom, #4E5259, #000000)"}}> */}
                <Wrapper>
                    <div style={{ marginTop: "50px", marginLeft: "35px",display: "flex", width: "90%", marginRight: "auto", position: "absolute"}}>
                        <SideBar/>
                        <main style={{zIndex: 1, overflowX: "hidden", marginLeft: "40px"}}>
                            {children}
                        </main>
                    </div>
                </Wrapper>
            {/* </div> */}
        </>
    )
}
export default Portfolio

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  z-index: 1; /* Adjust the z-index to ensure text is above the canvas */
  color: white;
  font-size: 20px;
`;
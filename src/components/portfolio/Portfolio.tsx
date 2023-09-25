import { Dispatch, SetStateAction, useState } from "react"
import SideBar from "../Sidebar"

interface PortfolioProps {
    children: React.ReactNode
    sideBarSection: string
    setSideBarSection: Dispatch<SetStateAction<any>>;
}

const Portfolio: React.FC<PortfolioProps> = ({ children, sideBarSection, setSideBarSection }) => {

    return (
        <>
            <div style= {{display: "Flex", position: "relative", background: "linear-gradient(to bottom, #4E5259, #000000)"}}>
                <div style={{ marginTop: "50px", marginLeft: "35px",display: "flex", width: "90%", marginRight: "auto"}} id="skills">
                    <SideBar sideBarSection = {sideBarSection} setSideBarSection={setSideBarSection}/>
                    <main style={{zIndex: 1, overflowX: "hidden", marginLeft: "40px"}}>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
export default Portfolio
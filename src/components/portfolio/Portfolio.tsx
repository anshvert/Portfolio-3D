import SideBar from "../Sidebar"

interface PortfolioProps {
    children: React.ReactNode
}

const Portfolio: React.FC<PortfolioProps> = ({ children }) => {
    return (
        <>
            <div style= {{display: "Flex", position: "relative", background: "linear-gradient(to bottom, #4E5259, #000000)"}}>
                <div style={{ marginTop: "50px", marginLeft: "35px",display: "flex", width: "90%", marginRight: "auto"}}>
                    <SideBar />
                    <main style={{zIndex: 1, overflowX: "hidden", marginLeft: "40px"}} id='skills'>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
export default Portfolio
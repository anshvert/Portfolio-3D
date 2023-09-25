'use client';
import { Dispatch, FC, SetStateAction } from 'react';
import Logo from './sidebar/Logo';
import Menu from './sidebar/Menu';
import { useMenu } from './Provider';

interface SideBarProps {
    sideBarSection: string
    setSideBarSection: Dispatch<SetStateAction<any>>;
}

const SideBar: FC<SideBarProps> = ({sideBarSection, setSideBarSection}) => {
    return (
        <aside
            className={`lg:flex h-screen fixed w-screen sm:w-[300px] bg-black relative z-1`} style={{ borderRadius: '50px', height: "850px" }}>
            <div className="toggle flex flex-col lg:m-5 w-full">
                <Logo />
                <Menu sideBarSection = {sideBarSection} setSideBarSection={setSideBarSection} />
            </div>
        </aside>
    );
};

export default SideBar;

'use client';
import { Dispatch, FC, SetStateAction } from 'react';
import Logo from './sidebar/Logo';
import Menu from './sidebar/Menu';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
    return (
        <aside
            className={`lg:flex h-screen fixed w-screen sm:w-[300px] bg-green relative z-1`} style={{ borderRadius: '50px', height: "850px" }}>
            <div className="toggle flex flex-col lg:m-5 w-full">
                <Logo />
                <Menu />
            </div>
        </aside>
    );
};

export default SideBar;

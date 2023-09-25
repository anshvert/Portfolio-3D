import { StateCreator } from "zustand";

const sideBarSectionSlice: StateCreator<any> = (set) => ({
    sideBarSection: "",
    setSideBarSection: (section: string) => {
        set({sideBarSection: section})
    }
})
export default sideBarSectionSlice
import { StateCreator } from "zustand";

interface infoSlice {
    showStuff: boolean
    setShowStuff: Function
}

export const infoSlice: StateCreator<infoSlice> = (set) => ({
    showStuff: false,
    setShowStuff: (show: boolean) => {
        set({ showStuff: true})
    }
})

export const sideBarSectionSlice: StateCreator<any> = (set) => ({
    sideBarSection: "",
    setSideBarSection: (section: string) => {
        set({sideBarSection: section})
    }
})

export const skillSectionSlice: StateCreator<any> = (set) => ({
    skills: "",
    setSkills: (skill: string) => {
        set({skills: skill})
    }
})
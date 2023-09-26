import { StateCreator } from "zustand";
import * as THREE from "three"

interface infoSlice {
    showStuff: boolean
    setShowStuff: Function
}

export const infoSlice: StateCreator<infoSlice> = (set) => ({
    showStuff: false,
    setShowStuff: (show: boolean) => {
        set({ showStuff: show})
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

export const perspectiveCameraSlice: StateCreator<any> = (set) => ({
    perspectiveCamera: new THREE.Vector3(52.78,27.47,-31.9),
    setPerspectiveCamera: (vector: THREE.Vector3) => {
        set({perspectiveCamera: vector})
    }
})
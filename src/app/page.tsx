"use client"
import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
    ISectionCardData,
    backendCard,
    databaseCard,
    devopsCards,
    frontendCard,
    otherCards,
    projectCard,
    threeDCard,
    web3Cards,
} from '@/components/utils/Data';
import "../utils/css/styles.css"
import React, { useEffect, useState } from 'react';
import useStore from '@/slices/store';

interface skillSection {
    id: number
    title: string
    data: ISectionCardData[]
}

export default function Home() {

    const { skills,showStuff } = useStore()
    console.log(skills,showStuff)
    const [section,setSection] = useState<any>({})

    let sections: skillSection[] = [
        { id: 0, title: "FrontEnd", data: frontendCard },
        { id: 1, title: "BackEnd", data: backendCard },
        { id: 2, title: "Database", data: databaseCard },
        { id: 3, title: "Devops", data: devopsCards },
        { id: 4, title: "Web3", data: web3Cards },
        { id: 5, title: "3D", data: threeDCard },
        { id: 6, title: "Others", data: otherCards }
    ];
    useEffect(() => {
        sections = sections.filter((skill: skillSection) => skill.title === skills)
        sections.length ? setSection(sections[0]) : {}
    },[skills,showStuff])
    console.log(section)
    return (
        <>  
            {showStuff && section.id != null && <div style={{position: "absolute", zIndex: 1}}>
                {/* <Cover /> */}
                <div className="bg-grey" style={{borderRadius: '50px', marginTop: "10px", marginRight: "60px"}}>
                    {/* <ProjectCardSection title="Projects" data={projectCard} /> */}
                    <CardSection key={section.id}
                        id={section.id}
                        title={section.title}
                        data={section.data}
                    />
                </div>
            </div> }
        </>
    );
}

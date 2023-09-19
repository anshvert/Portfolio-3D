"use client"
import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import Hero from '@/components/sections/Hero';
import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
    ISectionCardData,
    backendCard,
    databaseCard,
    devopsCards,
    frontendCard,
    otherCards,
    projectCard,
    web3Cards,
} from '@/components/utils/Data';
import "../utils/css/styles.css"
import { useEffect, useState } from 'react';

interface skillSection {
    title: string
    data: ISectionCardData[]
}

export default function Home() {
    const sections: skillSection[] = [
        { title: "Frontend", data: frontendCard },
        { title: "Backend", data: backendCard },
        { title: "Database", data: databaseCard },
        { title: "DevOps", data: devopsCards },
        { title: "Web3", data: web3Cards },
    ];
    return (
        <>
            <div>
                <Cover />
                <div className="flex flex-col gap-10 lg:px-10">
                    {/* <Hero /> */}
                    <ProjectCardSection title="Projects" data={projectCard} />
                    {sections.map((section: skillSection, index: number) => (
                        <CardSection
                            id={index}
                            title={section.title}
                            data={section.data}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
